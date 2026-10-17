import type { Metadata, Viewport } from "next";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/shared";
import { Reveal } from "@/components/reveal";
import { site } from "@/content/site";
import { getSiteUrl } from "@/content/seo";
const siteUrl = getSiteUrl();
export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: siteUrl } : {}),
  title: {
    default: `${site.name} — независимая команда разработчиков`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  openGraph: {
    title: `${site.name} — от задачи до продукта`,
    description: site.description,
    locale: "ru_RU",
    type: "website",
    ...(siteUrl ? { url: siteUrl } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0c0e11",
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body>
        <a className="skip-link" href="#main">
          Перейти к содержимому
        </a>
        <Header />
        {children}
        <Footer />
        <Reveal />
      </body>
    </html>
  );
}
