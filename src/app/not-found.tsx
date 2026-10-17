import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
export default function NotFound() {
  return (
    <main className="container state-page" id="main">
      <span className="section-kicker">404 / Страница не найдена</span>
      <h1>
        Здесь пока
        <br />
        ничего не собрано.
      </h1>
      <p>
        Возможно, ссылка устарела. На главной есть наши проекты и информация о
        команде.
      </p>
      <Link href="/" className="button button-primary">
        На главную <ArrowUpRight size={18} />
      </Link>
    </main>
  );
}
