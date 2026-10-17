import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/content/projects";
export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="visual-grid" />
      <div className="visual-coordinate top-coordinate">
        ИДЕЯ / СИСТЕМА / ПРОДУКТ
      </div>
      <div className="orbit orbit-one" />
      <div className="orbit orbit-two" />
      <div className="assembly">
        <div className="assembly-layer layer-bottom">
          <span>РАЗРАБОТКА</span>
          <i />
          <i />
          <i />
        </div>
        <div className="assembly-layer layer-middle">
          <span>АРХИТЕКТУРА</span>
          <div className="architecture-lines" />
        </div>
        <div className="assembly-layer layer-top">
          <span className="core-symbol">
            <ArrowUpRight strokeWidth={0.7} />
          </span>
          <span>ВАША ИДЕЯ</span>
          <b>01</b>
        </div>
        <div className="assembly-axis" />
      </div>
      <span className="visual-dot dot-one" />
      <span className="visual-dot dot-two" />
      <div className="visual-note">
        <span className="pulse-dot" />
        Всё складывается в продукт
      </div>
      <div className="visual-cross">+</div>
      <div className="visual-coordinate bottom-coordinate">
        СОБИРАЕМ СМЫСЛЫ. СОЗДАЁМ СИСТЕМЫ.
      </div>
    </div>
  );
}
function CarIllustration() {
  return (
    <svg className="car-illustration" viewBox="0 0 800 340" fill="none">
      <defs>
        <linearGradient
          id="car-body"
          x1="400"
          y1="100"
          x2="400"
          y2="280"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#a6bdce" />
          <stop offset=".35" stopColor="#3c5369" />
          <stop offset="1" stopColor="#131d2c" />
        </linearGradient>
        <linearGradient
          id="car-glass"
          x1="350"
          y1="70"
          x2="390"
          y2="175"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#101a28" />
          <stop offset="1" stopColor="#344858" />
        </linearGradient>
      </defs>
      <ellipse cx="400" cy="289" rx="285" ry="17" fill="#090e17" opacity=".6" />
      <path
        d="M104 229L116 192Q129 173 213 164L285 104Q302 90 357 88L474 91Q520 95 583 154L660 172Q690 179 702 212L706 242L676 258L128 258Z"
        fill="url(#car-body)"
        stroke="#7893ab"
        strokeWidth="1.5"
      />
      <path
        d="M232 162L297 110Q318 101 358 101L465 104Q501 107 554 156Z"
        fill="url(#car-glass)"
        stroke="#9fb5c3"
      />
      <path
        d="M369 102L363 159M476 107L493 157M136 191L650 182M208 171L624 168M378 172L376 239M570 171L582 220"
        stroke="#9bb4c3"
        strokeOpacity=".35"
      />
      <path
        d="M117 201L185 195L174 211L113 215M652 191L687 202L693 214L657 209"
        fill="#c9ecff"
      />
      <path d="M283 190H309M494 189H517" stroke="#bccbd3" strokeWidth="3" />
      <circle cx="223" cy="246" r="48" fill="#0a1019" />
      <circle
        cx="223"
        cy="246"
        r="31"
        fill="#384b60"
        stroke="#7e97ac"
        strokeWidth="4"
      />
      <circle cx="223" cy="246" r="12" fill="#0c1421" />
      <circle cx="599" cy="246" r="48" fill="#0a1019" />
      <circle
        cx="599"
        cy="246"
        r="31"
        fill="#384b60"
        stroke="#7e97ac"
        strokeWidth="4"
      />
      <circle cx="599" cy="246" r="12" fill="#0c1421" />
      <path
        d="M223 215V277M192 246H254M201 224L245 268M201 268L245 224M599 215V277M568 246H630M577 224L621 268M577 268L621 224"
        stroke="#92a6b7"
        strokeWidth="3"
      />
    </svg>
  );
}
export function ProjectVisual({
  kind,
  large = false,
}: {
  kind: Project["visual"];
  large?: boolean;
}) {
  return (
    <div
      className={`project-visual visual-${kind}${large ? " visual-large" : ""}`}
      aria-hidden="true"
    >
      {kind === "creators" && (
        <>
          <div className="creator-orbit" />
          <div className="creator-label">
            пространство
            <br />
            для больших идей
          </div>
          <div className="creator-type">
            Творцы
            <span>
              <ArrowUpRight />
            </span>
          </div>
          <div className="creator-sculpture">
            <i />
            <i />
            <i />
            <i />
            <i />
          </div>
          <div className="creator-caption">ЛЮДИ. ИДЕИ. ВОЗМОЖНОСТИ.</div>
        </>
      )}
      {kind === "auto" && (
        <>
          <span className="mockup-label">КОНЦЕПТ / АВТОМОБИЛЬНЫЙ КАТАЛОГ</span>
          <div className="auto-title">
            Новый взгляд.
            <br />
            <span>Новый маршрут.</span>
          </div>
          <CarIllustration />
          <span className="auto-caption">ФОРМА СЛЕДУЕТ ЗА ДВИЖЕНИЕМ</span>
        </>
      )}
      {kind === "crm" && (
        <>
          <span className="mockup-label">КОНЦЕПТ / РАБОЧЕЕ ПРОСТРАНСТВО</span>
          <div className="crm-window">
            <div className="crm-sidebar">
              <span className="crm-brand">
                с
                <span>
                  <ArrowUpRight />
                </span>
              </span>
              {[1, 2, 3, 4, 5].map((n) => (
                <i key={n} />
              ))}
            </div>
            <div className="crm-content">
              <div className="crm-toolbar">
                <b>Сделки</b>
                <span>Обзор процессов</span>
              </div>
              <div className="crm-columns">
                {["Входящие", "В работе", "Согласование"].map((name, i) => (
                  <div className="crm-column" key={name}>
                    <span>
                      <i />
                      {name}
                    </span>
                    {Array.from({ length: i === 1 ? 3 : 2 }, (_, j) => (
                      <div className="crm-card" key={j}>
                        <div />
                        <i />
                        <footer>
                          <em />
                          <span />
                        </footer>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
      <span className="illustration-label">Иллюстрация · не скриншот</span>
    </div>
  );
}
