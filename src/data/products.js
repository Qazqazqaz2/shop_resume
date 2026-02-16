export const products = [
  // Программное обеспечение
  {
    id: 1,
    name: "Adobe Creative Suite 2024",
    category: "software",
    price: 5999,
    originalPrice: 7999,
    iconId: 1,
    description: "Полный набор профессиональных инструментов для дизайна, фотографии и видеомонтажа. Включает Photoshop, Illustrator, Premiere Pro и более 20 приложений.",
    features: ["Photoshop", "Illustrator", "Premiere Pro", "After Effects", "InDesign"],
    rating: 4.8,
    reviews: 1247
  },
  {
    id: 2,
    name: "Microsoft Office 365 Pro",
    category: "software",
    price: 2499,
    originalPrice: 2999,
    iconId: 2,
    description: "Офисный пакет премиум класса с облачным хранилищем и всеми необходимыми приложениями для работы.",
    features: ["Word", "Excel", "PowerPoint", "Outlook", "OneDrive 1TB"],
    rating: 4.7,
    reviews: 3421
  },
  {
    id: 3,
    name: "JetBrains IntelliJ IDEA Ultimate",
    category: "software",
    price: 4499,
    originalPrice: 5499,
    iconId: 3,
    description: "Мощная IDE для разработки на Java, Kotlin, Python и других языках. Включает продвинутые инструменты отладки и рефакторинга.",
    features: ["Поддержка 15+ языков", "Умный рефакторинг", "Интеграция с Git", "Плагины"],
    rating: 4.9,
    reviews: 892
  },
  {
    id: 4,
    name: "Figma Professional",
    category: "software",
    price: 1999,
    originalPrice: 2499,
    iconId: 4,
    description: "Современный инструмент для дизайна интерфейсов с возможностью совместной работы в реальном времени.",
    features: ["Совместная работа", "Прототипирование", "Автоматизация", "Компоненты"],
    rating: 4.8,
    reviews: 2156
  },
  {
    id: 5,
    name: "AutoCAD 2024 Professional",
    category: "software",
    price: 8999,
    originalPrice: 11999,
    iconId: 5,
    description: "Профессиональное ПО для 2D и 3D проектирования. Стандарт индустрии для архитекторов и инженеров.",
    features: ["2D/3D черчение", "Параметрическое моделирование", "Визуализация", "Совместимость"],
    rating: 4.6,
    reviews: 567
  },
  {
    id: 6,
    name: "Visual Studio Code Pro",
    category: "software",
    price: 999,
    originalPrice: 1499,
    iconId: 6,
    description: "Расширенная версия популярного редактора кода с премиум расширениями и поддержкой.",
    features: ["Расширенные расширения", "AI-ассистент", "Приоритетная поддержка", "Облачная синхронизация"],
    rating: 4.7,
    reviews: 1890
  },
  
  // Базы данных
  {
    id: 7,
    name: "Oracle Database Enterprise",
    category: "database",
    price: 14999,
    originalPrice: 19999,
    iconId: 7,
    description: "Корпоративная СУБД с высокой производительностью и надежностью. Поддержка больших объемов данных и транзакций.",
    features: ["Высокая производительность", "Масштабируемость", "Безопасность", "Резервное копирование"],
    rating: 4.9,
    reviews: 234
  },
  {
    id: 8,
    name: "Microsoft SQL Server 2024",
    category: "database",
    price: 7999,
    originalPrice: 9999,
    iconId: 8,
    description: "Мощная реляционная СУБД с интеллектуальными возможностями и облачной интеграцией.",
    features: ["Интеграция с Azure", "AI и ML", "Высокая доступность", "Безопасность"],
    rating: 4.7,
    reviews: 456
  },
  {
    id: 9,
    name: "PostgreSQL Enterprise",
    category: "database",
    price: 4999,
    originalPrice: 6999,
    iconId: 9,
    description: "Продвинутая open-source СУБД с расширенными возможностями для корпоративного использования.",
    features: ["Open-source", "Расширяемость", "JSON поддержка", "Полнотекстовый поиск"],
    rating: 4.8,
    reviews: 678
  },
  {
    id: 10,
    name: "MongoDB Atlas Enterprise",
    category: "database",
    price: 5999,
    originalPrice: 7999,
    iconId: 10,
    description: "NoSQL база данных для современных приложений. Горизонтальное масштабирование и облачная инфраструктура.",
    features: ["NoSQL", "Горизонтальное масштабирование", "Облачная инфраструктура", "Автоматическое резервирование"],
    rating: 4.6,
    reviews: 345
  },
  {
    id: 11,
    name: "Redis Enterprise",
    category: "database",
    price: 3999,
    originalPrice: 5499,
    iconId: 11,
    description: "Высокопроизводительная in-memory база данных для кэширования и работы с реальным временем.",
    features: ["In-memory", "Высокая скорость", "Кэширование", "Pub/Sub"],
    rating: 4.7,
    reviews: 289
  },
  {
    id: 12,
    name: "MySQL Enterprise Edition",
    category: "database",
    price: 4499,
    originalPrice: 5999,
    iconId: 12,
    description: "Надежная реляционная СУБД с корпоративной поддержкой и расширенными функциями безопасности.",
    features: ["Высокая производительность", "Репликация", "Безопасность", "Мониторинг"],
    rating: 4.5,
    reviews: 512
  }
];

export const categories = [
  { id: 'all', name: 'Все товары' },
  { id: 'software', name: 'Программное обеспечение' },
  { id: 'database', name: 'Базы данных' }
];

