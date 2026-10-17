export default function Loading() {
  return (
    <main id="main" className="container state-page" role="status">
      <span className="section-kicker">Загрузка</span>
      <div className="loading-line" />
      <div className="loading-block" />
      <span className="sr-only">Загружаем страницу проекта</span>
    </main>
  );
}
