import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Info } from "lucide-react";
import { projects, projectStatus } from "@/content/projects";
import { getSiteUrl } from "@/content/seo";
import { ProjectCover } from "@/components/project-cover";
import { Contact } from "@/components/shared";
export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((p) => p.slug === slug);
  if (!p) return {};
  const base = getSiteUrl();
  return {
    title: p.title,
    description: p.summary,
    ...(base
      ? { alternates: { canonical: new URL(`/projects/${p.slug}`, base).href } }
      : {}),
    openGraph: {
      title: p.title,
      description: p.summary,
      type: "article",
      locale: "ru_RU",
    },
  };
}
export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index < 0) notFound();
  const project = projects[index];
  const next = projects[(index + 1) % projects.length];
  return (
    <main id="main">
      <section className="case-hero container">
        <Link href="/#projects" className="back-link">
          <ArrowLeft size={17} /> Все проекты
        </Link>
        <div className="case-eyebrow">
          <span className={`status-dot status-${project.status}`} />
          {projectStatus(project)}
          <span>/</span>
          {project.category}
        </div>
        <div className="case-heading">
          <h1>
            {project.title}
            <span className="blue">.</span>
          </h1>
          <a
            className="button button-primary"
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            Открыть проект <ArrowUpRight size={19} />
          </a>
        </div>
        <p className="case-summary">{project.summary}</p>
        <ProjectCover project={project} large />
        <p className="image-caption">
          {project.images.length
            ? project.images[0].alt
            : "Авторская иллюстрация для портфолио. Не является скриншотом или подтверждением функциональности проекта."}
        </p>
      </section>
      <section className="container case-story">
        <aside>
          <span className="section-kicker">О проекте</span>
          <dl>
            <dt>Формат</dt>
            <dd>{project.category}</dd>
            <dt>Статус</dt>
            <dd>{projectStatus(project)}</dd>
            {project.technologies.length > 0 && (
              <>
                <dt>Технологии</dt>
                <dd>{project.technologies.join(", ")}</dd>
              </>
            )}
            {project.duration && (
              <>
                <dt>Сроки</dt>
                <dd>{project.duration}</dd>
              </>
            )}
            {project.budget && (
              <>
                <dt>Бюджет</dt>
                <dd>{project.budget}</dd>
              </>
            )}
          </dl>
        </aside>
        <div className="case-copy">
          <article data-reveal>
            <span className="small-label">01 / КОНТЕКСТ</span>
            <h2>С чего всё началось</h2>
            <p>{project.task}</p>
          </article>
          <article data-reveal>
            <span className="small-label">02 / УЧАСТИЕ</span>
            <h2>Наш вклад в проект</h2>
            <p>{project.contribution}</p>
          </article>
          {project.features.length > 0 && (
            <article>
              <span className="small-label">03 / ВОЗМОЖНОСТИ</span>
              <h2>Что умеет продукт</h2>
              <ul className="feature-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </article>
          )}
          <div className="verification-note">
            <Info size={20} />
            <div>
              <h3>О достоверности кейса</h3>
              <p>{project.verificationNote}</p>
              {!project.technologies.length && (
                <p>Технологии, сроки и бюджет не публикуем до подтверждения.</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="container case-gallery">
        <div className="section-kicker">Материалы проекта</div>
        <h2>Интерфейс в деталях</h2>
        {project.images.length ? (
          <div className="gallery-grid">
            {project.images.map((img) => (
              <figure key={img.src}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 760px) 100vw, 80vw"
                />
                <figcaption>{img.alt}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="gallery-pending">
            <div className="gallery-symbol" aria-hidden="true">
              <ArrowUpRight size={65} strokeWidth={1} />
            </div>
            <div>
              <h3>Реальные экраны — следующий шаг</h3>
              <p>
                Галерея появится после добавления скриншотов и подтверждения
                разрешения на публикацию. Пока проект можно открыть по внешней
                ссылке.
              </p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-link"
              >
                Перейти к проекту <ArrowUpRight size={17} />
              </a>
            </div>
          </div>
        )}
      </section>
      {projects.length > 1 && (
        <div className="container">
          <Link href={`/projects/${next.slug}`} className="next-project">
            <span className="section-kicker">Следующий проект</span>
            <div>
              <h2>{next.title}</h2>
              <ArrowUpRight />
            </div>
          </Link>
        </div>
      )}
      <Contact />
    </main>
  );
}
