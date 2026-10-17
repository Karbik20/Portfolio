"use client";
import Link from "next/link";
export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <main className="container state-page" id="main">
      <span className="section-kicker">Ошибка загрузки</span>
      <h1>
        Не удалось
        <br />
        открыть страницу.
      </h1>
      <p>Попробуйте ещё раз или вернитесь на главную.</p>
      <div className="hero-actions">
        <button className="button button-primary" onClick={reset}>
          Попробовать снова
        </button>
        <Link className="button button-text" href="/">
          На главную
        </Link>
      </div>
    </main>
  );
}
