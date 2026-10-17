import { test, expect } from "@playwright/test";

test("главная: фильтры, аккордеон и все внутренние ссылки", async ({
  page,
}) => {
  const errors: string[] = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Сложные задачи.Точные решения.",
  );
  await expect(page.locator(".project-card")).toHaveCount(3);
  await page.getByRole("button", { name: "Коммерческие" }).click();
  await expect(page.locator(".project-card")).toHaveCount(1);
  await expect(page.locator(".project-card")).toContainText("Творцы");
  await page.getByRole("button", { name: "Демонстрационные" }).click();
  await expect(page.locator(".project-card")).toHaveCount(2);
  await page.getByRole("button", { name: "Все проекты" }).click();
  const details = page.locator("details").nth(2);
  await details.locator("summary").click();
  await expect(details).toHaveAttribute("open", "");
  await expect(details.locator(".service-detail")).toBeVisible();
  const brokenAnchors = await page
    .locator('a[href^="#"],a[href^="/#"]')
    .evaluateAll((links) =>
      links
        .filter(
          (link) =>
            !document.getElementById(
              (link.getAttribute("href") || "").split("#")[1],
            ),
        )
        .map((link) => link.getAttribute("href")),
    );
  expect(brokenAnchors).toEqual([]);
  await expect(page.locator(".contact-pending")).toBeVisible();
  await expect(page.locator("form")).toHaveCount(0);
  expect(errors).toEqual([]);
});

for (const width of [360, 390, 768, 1440]) {
  test(`адаптивность ${width}px: главная и кейс без горизонтального скролла`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 });
    for (const path of [
      "/",
      "/projects/tvortsy",
      "/projects/auto-catalog",
      "/projects/sales-crm",
    ]) {
      await page.goto(path);
      await page.evaluate(() => document.fonts.ready);
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        path,
      ).toBe(true);
      await expect(page.locator("h1")).toBeVisible();
    }
  });
}

test("мобильное меню: клавиатура, Escape, переход и возврат фокуса", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const toggle = page.getByRole("button", { name: "Открыть меню" });
  await toggle.click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(toggle).toBeFocused();
  await toggle.click();
  await page
    .getByRole("navigation", { name: "Мобильная навигация" })
    .getByRole("link", { name: "Проекты" })
    .click();
  await expect(page).toHaveURL(/#projects$/);
  await expect(page.getByRole("dialog")).not.toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "false");
});

test("кейсы: статусы, внешние ссылки, следующий проект и 404", async ({
  page,
  request,
}) => {
  for (const [slug, name, status] of [
    ["tvortsy", "Творцы", "Коммерческий проект"],
    ["auto-catalog", "Автомобильный каталог", "Демонстрационный проект"],
    ["sales-crm", "CRM для автопродаж", "Демонстрационный проект"],
  ]) {
    const response = await page.goto(`/projects/${slug}`);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole("heading", { level: 1 })).toContainText(name);
    await expect(page.locator(".case-eyebrow")).toContainText(status);
    await expect(
      page.getByRole("link", { name: "Открыть проект" }),
    ).toHaveAttribute("target", "_blank");
    await page.locator(".next-project").click();
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
  }
  expect((await request.get("/projects/missing")).status()).toBe(404);
  for (const path of [
    "/robots.txt",
    "/sitemap.xml",
    "/opengraph-image",
    "/icon.svg",
  ]) {
    const response = await request.get(path);
    expect(response.status(), path).toBe(200);
    if (path === "/opengraph-image")
      expect(response.headers()["content-type"]).toContain("image/png");
  }
});

test("уважение системной настройки уменьшения анимации", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  expect(
    await page
      .locator(".assembly")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  expect(
    await page
      .locator("html")
      .evaluate((el) => getComputedStyle(el).scrollBehavior),
  ).toBe("auto");
});

test("доступность: главная, кейсы и открытое мобильное меню", async ({
  browser,
}) => {
  const { default: AxeBuilder } = await import("@axe-core/playwright");
  for (const width of [390, 1440]) {
    const context = await browser.newContext({
      viewport: { width, height: 900 },
      reducedMotion: "reduce",
    });
    const page = await context.newPage();
    for (const path of [
      "/",
      "/projects/tvortsy",
      "/projects/auto-catalog",
      "/projects/sales-crm",
    ]) {
      await page.goto(`http://127.0.0.1:3000${path}`);
      const result = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(result.violations, `${width}px ${path}`).toEqual([]);
    }
    if (width === 390) {
      await page.goto("http://127.0.0.1:3000/");
      await page.getByRole("button", { name: "Открыть меню" }).click();
      const menuResult = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      expect(menuResult.violations, "Открытое меню").toEqual([]);
    }
    await context.close();
  }
});
