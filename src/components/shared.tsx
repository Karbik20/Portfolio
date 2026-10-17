import Link from "next/link";
import { ArrowUpRight, Mail, Send } from "lucide-react";
import { site, navigation } from "@/content/site";
export function SectionHeading({
  number,
  label,
  title,
  description,
}: {
  number: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading" data-reveal>
      <div className="section-kicker">
        <span>{number}</span>
        {label}
      </div>
      <div className="section-heading-row">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
export function Contact() {
  const { telegram, email, managerName } = site.contacts;
  const validTelegram =
    telegram && /^https:\/\/t\.me\/[a-zA-Z0-9_]{5,}\/?$/.test(telegram)
      ? telegram
      : null;
  const validEmail =
    email &&
    /^[^\s@<>]+@[^\s@<>]+\.[^\s@<>]+$/.test(email) &&
    !/[\r\n]/.test(email)
      ? email
      : null;
  return (
    <section id="contact" className="contact-section">
      <div className="container contact-inner" data-reveal>
        <div className="section-kicker">
          <span>06</span>Начнём с разговора
        </div>
        <div className="contact-heading">
          <h2>
            Есть задача?
            <br />
            <span>Давайте обсудим.</span>
          </h2>
          <span className="contact-large-arrow" aria-hidden="true">
            <ArrowUpRight strokeWidth={0.9} />
          </span>
        </div>
        <div className="contact-bottom">
          <p>
            Расскажите, что вы хотите создать.
            <br />
            Обсудим задачу и наметим следующий шаг.
          </p>
          <div className="contact-methods">
            {validTelegram && (
              <a
                href={validTelegram}
                className="button button-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Send size={18} /> Написать в Telegram{" "}
                <ArrowUpRight size={18} />
              </a>
            )}
            {validEmail && (
              <a href={`mailto:${validEmail}`} className="email-link">
                <Mail size={18} />
                {validEmail}
                <ArrowUpRight size={16} />
              </a>
            )}
            {!validTelegram && !validEmail && (
              <div className="contact-pending">
                <span className="small-label">КОНТАКТЫ СКОРО ПОЯВЯТСЯ</span>
                <p>Прямые контакты руководителя пока не добавлены.</p>
                <span>{managerName}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <Link href="/#home" className="footer-brand">
          точка сборки<span>.</span>
        </Link>
        <p>{site.footer}</p>
        <Link href="/#home" className="back-top">
          Наверх <ArrowUpRight size={16} />
        </Link>
      </div>
      <div className="container footer-bottom">
        <span>
          © {new Date().getFullYear()} {site.name}
        </span>
        <nav aria-label="Навигация в подвале">
          {navigation.slice(1).map((n) => (
            <Link key={n.href} href={n.href}>
              {n.label}
            </Link>
          ))}
        </nav>
        <span>Сделано с вниманием.</span>
      </div>
    </footer>
  );
}
