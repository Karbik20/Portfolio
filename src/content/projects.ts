/** Добавьте объект в массив — карточка, маршрут и следующий кейс появятся автоматически. */
export type Project = {
  slug: string;
  title: string;
  category: string;
  status: "commercial" | "demo";
  visual: "creators" | "auto" | "crm";
  summary: string;
  url: string;
  task: string;
  contribution: string;
  features: string[];
  verificationNote: string;
  technologies: string[];
  duration: string | null;
  budget: string | null;
  images: { src: string; alt: string; width: number; height: number }[];
};
export const projects: Project[] = [
  {
    slug: "tvortsy",
    title: "Творцы",
    category: "Веб-сайт",
    status: "commercial",
    visual: "creators",
    summary: "Коммерческий проект с участием нашего разработчика.",
    url: "https://tvortsy.online",
    task: "Разработка сайта «Творцы». Вовик был нанят для участия в этом коммерческом проекте. Детальное назначение платформы и исходное техническое задание пока не предоставлены.",
    contribution:
      "Вовик участвовал в разработке как привлечённый специалист. Перечень лично реализованных модулей необходимо согласовать перед публикацией подробного разбора.",
    features: [],
    verificationNote:
      "В этой среде публичные страницы недоступны из-за сетевых ограничений. Назначение платформы и её функции пока не подтверждены; добавим их после проверки сайта и согласования с участником проекта.",
    technologies: [],
    duration: null,
    budget: null,
    images: [],
  },
  {
    slug: "auto-catalog",
    title: "Автомобильный каталог",
    category: "Сайт для автобизнеса",
    status: "demo",
    visual: "auto",
    summary:
      "Независимый концепт цифрового присутствия автомобильного бизнеса.",
    url: "https://avtopremier-vld.vercel.app/",
    task: "Подготовить демонстрационную разработку для обсуждения с потенциальным заказчиком из автомобильной сферы.",
    contribution:
      "Команда подготовила собственный демонстрационный проект. Компания не подтверждена в качестве заказчика: проект не представлен как принятая коммерческая работа.",
    features: [],
    verificationNote:
      "Публичный сайт недоступен из этой среды. Состав страниц и доступные сценарии нужно проверить отдельно. В оформлении используются нейтральное название и собственная иллюстрация без чужого логотипа.",
    technologies: [],
    duration: null,
    budget: null,
    images: [],
  },
  {
    slug: "sales-crm",
    title: "CRM для автопродаж",
    category: "Веб-приложение",
    status: "demo",
    visual: "crm",
    summary:
      "Демонстрационная CRM как отправная точка для обсуждения бизнес-процессов.",
    url: "https://avtopremier-vld-crm.vercel.app/crm/deals",
    task: "Создать демонстрационную CRM-систему для автомобильного направления. Проект предназначен для показа и обсуждения, а не описывает подтверждённое внедрение.",
    contribution:
      "Собственная демонстрационная разработка команды. Количество пользователей, результаты внедрения и интеграции не заявляются.",
    features: [],
    verificationNote:
      "Ссылка ведёт на маршрут сделок, но интерфейс недоступен для проверки из этой среды. Реальные возможности будут перечислены после просмотра демо. Иллюстрация ниже не воспроизводит интерфейс системы.",
    technologies: [],
    duration: null,
    budget: null,
    images: [],
  },
];
export function projectStatus(project: Project) {
  return project.status === "commercial"
    ? "Коммерческий проект"
    : "Демонстрационный проект";
}
