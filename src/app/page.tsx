import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  MessagesSquare,
} from "lucide-react";
import { site, team, services, process, benefits } from "@/content/site";
import { HeroVisual } from "@/components/visuals";
import { ProjectGrid } from "@/components/project-grid";
import { Contact, SectionHeading } from "@/components/shared";
export default function Home() {
  return (
    <main id="main">
      <section className="hero" id="home">
        <div className="container hero-main">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="pulse-dot" />
              {site.hero.eyebrow}
            </div>
            <h1>
              <span>{site.hero.line1}</span>
              <span className="hero-title-second">{site.hero.line2}</span>
            </h1>
            <p className="hero-description">{site.hero.description}</p>
            <div className="hero-actions">
              <Link href="#projects" className="button button-primary">
                Смотреть проекты <ArrowUpRight size={20} />
              </Link>
              <Link href="#contact" className="button button-text">
                Обсудить задачу <ArrowUpRight size={18} />
              </Link>
            </div>
            <div className="hero-team">
              <div className="mini-avatars" aria-hidden="true">
                <span>РП</span>
                <span>В</span>
                <span>Е</span>
              </div>
              <p>
                Три человека.
                <br />
                <strong>Один фокус — ваш продукт.</strong>
              </p>
            </div>
          </div>
          <HeroVisual />
        </div>
        <div className="container hero-bottom">
          <span>ОТ ПЕРВОГО РАЗГОВОРА ДО ЗАПУСКА</span>
          <div>
            <span>Дизайн</span>
            <i />
            <span>Разработка</span>
            <i />
            <span>Сопровождение</span>
          </div>
          <Link href="#projects" aria-label="Перейти к проектам">
            <ArrowDown size={18} />
          </Link>
        </div>
      </section>
      <section id="projects" className="section projects-section">
        <div className="container">
          <SectionHeading
            number="01"
            label="Избранные проекты"
            title="Опыт, который можно увидеть."
            description="Коммерческая работа и собственные концепты. У каждого проекта — своя задача и честная история."
          />
          <ProjectGrid />
          <p className="projects-footnote">
            <span className="tiny-star">✳</span> Чётко разделяем коммерческий
            опыт и демонстрационные разработки.
          </p>
        </div>
      </section>
      <section id="services" className="section services-section">
        <div className="container">
          <SectionHeading
            number="02"
            label="Что мы разрабатываем"
            title="Ваша задача. Наши инструменты."
            description="Подбираем решение под бизнес-процесс. Объём, технологии и подход определяем после знакомства с задачей."
          />
          <div className="services-list">
            {services.map((service, i) => (
              <details
                className="service-item"
                key={service.title}
                name="services"
                open={i === 0}
              >
                <summary>
                  <span className="service-number">0{i + 1}</span>
                  <h3>{service.title}</h3>
                  <span className="service-toggle" aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className="service-detail">
                  <p>{service.description}</p>
                  <div className="tags">
                    {service.tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section id="team" className="section team-section">
        <div className="container">
          <SectionHeading
            number="03"
            label="Люди за продуктом"
            title={site.about.title}
            description={site.about.description}
          />
          <div className="team-grid">
            {team.map((member) => (
              <article
                key={member.name}
                className={`team-card ${member.lead ? "team-lead" : ""}`}
                data-reveal
              >
                <div className="team-card-top">
                  <span className="small-label">
                    {member.lead ? "КОММУНИКАЦИЯ И ПРОЦЕСС" : "РАЗРАБОТКА"}
                  </span>
                  {member.lead ? (
                    <MessagesSquare size={20} />
                  ) : (
                    <Code2 size={20} />
                  )}
                </div>
                <div className="team-avatar" aria-hidden="true">
                  {member.initials}
                  <span>
                    <ArrowUpRight size={15} />
                  </span>
                </div>
                <h3>{member.name}</h3>
                <span className="team-role">{member.role}</span>
                <p>{member.description}</p>
                {member.lead && (
                  <Link href="#contact" className="team-contact">
                    Обсудить проект <ArrowUpRight size={18} />
                  </Link>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      <section id="process" className="section process-section">
        <div className="container">
          <SectionHeading
            number="04"
            label="Как мы работаем"
            title="От диалога — к результату."
            description="Вам понятно, на каком этапе проект, что уже сделано и что будет дальше."
          />
          <div className="process-grid">
            {process.map((step, i) => (
              <article className="process-step" key={step.title} data-reveal>
                <div className="step-top">
                  <span>0{i + 1}</span>
                  <ArrowDownRight size={23} />
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="section benefits-section">
        <div className="container benefits-layout">
          <div data-reveal>
            <div className="section-kicker">
              <span>05</span>Почему с нами удобно
            </div>
            <h2>
              Меньше дистанции.
              <br />
              <span className="muted">Больше ясности.</span>
            </h2>
            <div className="benefits-emblem" aria-hidden="true">
              <Layers3 size={80} strokeWidth={0.8} />
              <span>НА ОДНОЙ ВОЛНЕ</span>
            </div>
          </div>
          <div className="benefits-list">
            {benefits.map((b) => (
              <article key={b.title} data-reveal>
                <span className="check-icon">
                  <Check size={17} />
                </span>
                <div>
                  <h3>{b.title}</h3>
                  <p>{b.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <Contact />
    </main>
  );
}
