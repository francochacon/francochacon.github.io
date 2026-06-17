export const studies = {
  en: [
    {
      title: "Chemical Engineering",
      corporation: "Universidad Tecnologica Nacional (UTN)",
      date: "Jan 2016 - Oct 2023",
    },
    {
      title: "Postgraduate - Mining Operations & Metallurgical Industry",
      corporation: "Facultad de Ingenieria, UNSa",
      date: "Nov 2025 - Present",
    },
  ],
  es: [
    {
      title: "Ingeniería Química",
      corporation: "Universidad Tecnológica Nacional (UTN)",
      date: "Ene 2016 - Oct 2023",
    },
    {
      title: "Posgrado en Operaciones Mineras e Industria Metalúrgica",
      corporation: "Facultad de Ingeniería, UNSa",
      date: "Nov 2025 - Presente",
    },
  ],
};

export const IconKeys = {
  powerbi: "powerbi",
  mysql: "mysql",
  python: "python",
  autocad: "autocad",
  react: "react",
  materialUi: "materialUi",
  nextjs: "nextjs",
  redux: "redux",
  styled: "styled",
  tailwind: "tailwind",
  radix: "radix",
  reactQuery: "reactQuery",
  typeScript: "typeScript",
  zustand: "zustand",
  git: "git",
  github: "github",
  stripe: "stripe",
  shadcn: "shadcn",
  nodejs: "nodejs",
  mongodb: "mongodb",
  vite: "vite",
};

// Skills include a short caption to give each tool context instead of a bare icon grid.
export const skills = {
  en: [
    {
      title: "Power BI",
      icon: IconKeys.powerbi,
      caption: "Where I build the dashboards clients actually open every Monday.",
    },
    {
      title: "MySQL",
      icon: IconKeys.mysql,
      caption: "Structuring and querying the data before it ever reaches a chart.",
    },
    {
      title: "Python",
      icon: IconKeys.python,
      caption: "Cleaning, automating and modeling when a spreadsheet isn't enough.",
    },
    {
      title: "AutoCAD",
      icon: IconKeys.autocad,
      caption: "Carried over from process engineering — reading and adapting technical drawings.",
    },
    {
      title: "Git",
      icon: IconKeys.git,
      caption: "Version control on every project, including this site.",
    },
    {
      title: "Github",
      icon: IconKeys.github,
      caption: "Where the code and the portfolio itself live, out in the open.",
    },
  ],
  es: [
    {
      title: "Power BI",
      icon: IconKeys.powerbi,
      caption: "Donde armo los dashboards que los clientes abren todos los lunes.",
    },
    {
      title: "MySQL",
      icon: IconKeys.mysql,
      caption: "Estructurando y consultando los datos antes de que lleguen a un gráfico.",
    },
    {
      title: "Python",
      icon: IconKeys.python,
      caption: "Limpieza, automatización y modelado cuando una planilla no alcanza.",
    },
    {
      title: "AutoCAD",
      icon: IconKeys.autocad,
      caption: "Heredado de la ingeniería de procesos: leer y adaptar planos técnicos.",
    },
    {
      title: "Git",
      icon: IconKeys.git,
      caption: "Control de versiones en cada proyecto, incluido este sitio.",
    },
    {
      title: "Github",
      icon: IconKeys.github,
      caption: "Donde el código y el portfolio mismo viven, a la vista de todos.",
    },
  ],
};

// Full content for each project's report page, per language. Centralizing this
// here (instead of duplicating HTML across files) makes it the single place to
// edit and translate project copy.
export const projectReports = {
  en: {
    project1: {
      title: "Mining Projects Map",
      leadParagraph:
        "A geospatial Power BI report mapping Argentina's metallic and lithium mining projects across every province, tracking each project's mineral type and development stage from exploration to production.",
      description:
        "This project showcases an interactive Power BI dashboard focused on the geographic distribution of mining activity in Argentina. The goal is to highlight regional production clusters, mineral concentration, and project maturity across the country.",
      pills: ["Power BI", "DAX", "Geospatial Analysis", "Mining Analytics"],
      skills: [{ title: "Power BI", icon: IconKeys.powerbi }],
      githubUrl: "https://github.com/francochacon/mining-projects-map",
      powerBiUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiYWU3MDc1YjEtMTkzOS00ZTk2LWEwOGEtMDA2OWQwOGY4Yzc5IiwidCI6IjNkMWM3ODQ2LWUxZjctNGU0ZC04YmM1LTY3M2E3MmI0YTJmNSIsImMiOjR9",
      metricsTitle: "Key metrics included",
      metrics: [
        "Province-level breakdown of metallic and lithium mining projects",
        "Mineral type and development-stage filters (exploration to production)",
        "Key production clusters in Salta, San Juan and Santa Cruz",
        "Visual KPIs with drill-down filters by region and mineral",
      ],
      dashboardTitle: "Mining Projects Dashboard (Power BI)",
      dashboardIntro:
        "The dashboard maps mining activity across Argentina and helps answer questions such as:",
      insights: [
        "Which provinces concentrate the most active mining projects?",
        "What development stage is each project at (exploration, feasibility, production)?",
        "Which minerals dominate each region?",
        "How are production clusters distributed across Salta, San Juan and Santa Cruz?",
      ],
      iframeTitle: "Argentina mining projects map",
      closingParagraph:
        "Data is based on public sources and this dashboard is part of my personal portfolio project. The report will be continuously updated with new pages and additional regional breakdowns.",
    },
    project2: {
      title: "Mining in Argentina",
      leadParagraph:
        "Argentina has a diverse mineral endowment that positions the country as a relevant player in the global mining industry. Key resources include copper, lithium, gold, silver, zinc, and other strategic minerals—mainly across the Puna region, the Andes range, and Patagonia.",
      description:
        "This project showcases an interactive Power BI dashboard focused on mining exports and industry structure. The goal is to highlight trends, concentration, and the main drivers behind historical export peaks.",
      pills: ["Power BI", "DAX", "Data Modeling", "Mining Analytics"],
      skills: [{ title: "Power BI", icon: IconKeys.powerbi }],
      githubUrl: "https://github.com/francochacon/argentina-mining-dashboard",
      powerBiUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiMThhOTA0NzQtNTQ2Ny00N2U4LWEwNjUtNmZlYTczNjMzZjBlIiwidCI6IjNkMWM3ODQ2LWUxZjctNGU0ZC04YmM1LTY3M2E3MmI0YTJmNSIsImMiOjR9",
      metricsTitle: "Key metrics included",
      metrics: [
        "Highest-export year (FOB) and YoY growth",
        "Dominant sector and sector share (%)",
        "Dominant mineral and concentration (%)",
        "Gold trend over the last years",
      ],
      dashboardTitle: "Mining Data Dashboard (Power BI)",
      dashboardIntro:
        "The dashboard summarizes mining exports in Argentina and helps answer questions such as:",
      insights: [
        "Which year reached the highest export value (FOB)?",
        "What is the dominant sector and its share?",
        "Which mineral leads exports and how concentrated is the structure?",
        "How has gold evolved over the last years?",
      ],
      iframeTitle: "Argentina mining dashboard",
      closingParagraph:
        "Data is based on public sources and this dashboard is part of my personal portfolio project. The report will be continuously updated with new pages, improved storytelling, and additional breakdowns (e.g., provinces, minerals, and YoY comparisons).",
    },
    project3: {
      title: "Superstore Sales Dashboard",
      leadParagraph:
        "A retail analytics dashboard built on the classic Superstore dataset, tracking over $2.3M in total sales across four US regions. Designed to surface profitability drivers, seasonal trends, and category-level performance in a single interactive view.",
      description:
        "This project showcases an interactive Power BI dashboard focused on retail sales performance. The goal is to highlight monthly trends, regional concentration, and the top sub-categories driving revenue and profit margin.",
      pills: ["Power BI", "DAX", "Data Modeling", "Retail Analytics"],
      skills: [{ title: "Power BI", icon: IconKeys.powerbi }],
      githubUrl: "https://github.com/francochacon/superstore-sales-dashboard",
      powerBiUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiYjFkNGZlMzItZjMwZi00Zjc0LWI1MDUtYzMwODQ5ODUzYTI1IiwidCI6IjNkMWM3ODQ2LWUxZjctNGU0ZC04YmM1LTY3M2E3MmI0YTJmNSIsImMiOjR9",
      metricsTitle: "Key metrics included",
      metrics: [
        "Total sales ($2.3M), profit ($286K) and 5,009 orders",
        "Profit margin percentage (12.47%)",
        "Monthly sales and profit trend by year",
        "Regional performance breakdown (West, East, Central, South)",
        "Top 10 sub-categories by revenue (Phones, Chairs, Storage...)",
      ],
      dashboardTitle: "Retail Sales Dashboard (Power BI)",
      dashboardIntro:
        "The dashboard summarizes Superstore retail data and helps answer questions such as:",
      insights: [
        "Which months drive the highest sales and profit peaks?",
        "Which region generates the most revenue?",
        "What are the top 10 sub-categories by total sales?",
        "How does profit margin vary across the product mix?",
      ],
      iframeTitle: "Superstore sales dashboard",
      closingParagraph:
        "Data is based on the publicly available Superstore sample dataset. This dashboard is part of my personal portfolio and will be updated with additional pages covering customer segmentation, discount analysis, and shipping performance.",
    },
  },
  es: {
    project1: {
      title: "Mapa de Proyectos Mineros",
      leadParagraph:
        "Un reporte geoespacial en Power BI que mapea los proyectos mineros metalíferos y de litio de Argentina en todas las provincias, siguiendo el tipo de mineral y la etapa de desarrollo de cada proyecto, desde la exploración hasta la producción.",
      description:
        "Este proyecto presenta un dashboard interactivo en Power BI enfocado en la distribución geográfica de la actividad minera en Argentina. El objetivo es destacar los clústeres de producción regional, la concentración de minerales y la madurez de los proyectos en todo el país.",
      pills: ["Power BI", "DAX", "Análisis Geoespacial", "Análisis Minero"],
      skills: [{ title: "Power BI", icon: IconKeys.powerbi }],
      githubUrl: "https://github.com/francochacon/mining-projects-map",
      powerBiUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiYWU3MDc1YjEtMTkzOS00ZTk2LWEwOGEtMDA2OWQwOGY4Yzc5IiwidCI6IjNkMWM3ODQ2LWUxZjctNGU0ZC04YmM1LTY3M2E3MmI0YTJmNSIsImMiOjR9",
      metricsTitle: "Métricas clave incluidas",
      metrics: [
        "Desglose por provincia de proyectos mineros metalíferos y de litio",
        "Filtros por tipo de mineral y etapa de desarrollo (exploración a producción)",
        "Principales clústeres de producción en Salta, San Juan y Santa Cruz",
        "KPIs visuales con filtros drill-down por región y mineral",
      ],
      dashboardTitle: "Dashboard de Proyectos Mineros (Power BI)",
      dashboardIntro:
        "El dashboard mapea la actividad minera en Argentina y ayuda a responder preguntas como:",
      insights: [
        "¿Qué provincias concentran la mayor cantidad de proyectos mineros activos?",
        "¿En qué etapa de desarrollo está cada proyecto (exploración, factibilidad, producción)?",
        "¿Qué minerales predominan en cada región?",
        "¿Cómo se distribuyen los clústeres de producción entre Salta, San Juan y Santa Cruz?",
      ],
      iframeTitle: "Mapa de proyectos mineros de Argentina",
      closingParagraph:
        "Los datos se basan en fuentes públicas y este dashboard es parte de mi portfolio personal. El reporte se irá actualizando con nuevas páginas y desgloses regionales adicionales.",
    },
    project2: {
      title: "Minería en Argentina",
      leadParagraph:
        "Argentina cuenta con una dotación mineral diversa que la posiciona como un actor relevante en la industria minera global. Los principales recursos incluyen cobre, litio, oro, plata, zinc y otros minerales estratégicos, concentrados principalmente en la Puna, la cordillera de los Andes y la Patagonia.",
      description:
        "Este proyecto presenta un dashboard interactivo en Power BI enfocado en las exportaciones mineras y la estructura de la industria. El objetivo es destacar tendencias, concentración y los principales motores detrás de los picos históricos de exportación.",
      pills: ["Power BI", "DAX", "Modelado de Datos", "Análisis Minero"],
      skills: [{ title: "Power BI", icon: IconKeys.powerbi }],
      githubUrl: "https://github.com/francochacon/argentina-mining-dashboard",
      powerBiUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiMThhOTA0NzQtNTQ2Ny00N2U4LWEwNjUtNmZlYTczNjMzZjBlIiwidCI6IjNkMWM3ODQ2LWUxZjctNGU0ZC04YmM1LTY3M2E3MmI0YTJmNSIsImMiOjR9",
      metricsTitle: "Métricas clave incluidas",
      metrics: [
        "Año de mayor exportación (FOB) y crecimiento interanual",
        "Sector dominante y su participación (%)",
        "Mineral dominante y concentración (%)",
        "Evolución del oro en los últimos años",
      ],
      dashboardTitle: "Dashboard de Datos Mineros (Power BI)",
      dashboardIntro:
        "El dashboard resume las exportaciones mineras de Argentina y ayuda a responder preguntas como:",
      insights: [
        "¿Qué año alcanzó el mayor valor de exportación (FOB)?",
        "¿Cuál es el sector dominante y su participación?",
        "¿Qué mineral lidera las exportaciones y qué tan concentrada está la estructura?",
        "¿Cómo evolucionó el oro en los últimos años?",
      ],
      iframeTitle: "Dashboard minero de Argentina",
      closingParagraph:
        "Los datos se basan en fuentes públicas y este dashboard es parte de mi portfolio personal. El reporte se irá actualizando con nuevas páginas, mejor storytelling y desgloses adicionales (por ejemplo, provincias, minerales y comparaciones interanuales).",
    },
    project3: {
      title: "Dashboard de Ventas Superstore",
      leadParagraph:
        "Un dashboard de analítica retail construido sobre el clásico dataset de Superstore, que sigue más de $2.3M en ventas totales en cuatro regiones de EE.UU. Diseñado para mostrar los motores de rentabilidad, las tendencias estacionales y la performance por categoría en una sola vista interactiva.",
      description:
        "Este proyecto presenta un dashboard interactivo en Power BI enfocado en la performance de ventas retail. El objetivo es destacar las tendencias mensuales, la concentración regional y las principales subcategorías que impulsan los ingresos y el margen de ganancia.",
      pills: ["Power BI", "DAX", "Modelado de Datos", "Análisis Retail"],
      skills: [{ title: "Power BI", icon: IconKeys.powerbi }],
      githubUrl: "https://github.com/francochacon/superstore-sales-dashboard",
      powerBiUrl:
        "https://app.powerbi.com/view?r=eyJrIjoiYjFkNGZlMzItZjMwZi00Zjc0LWI1MDUtYzMwODQ5ODUzYTI1IiwidCI6IjNkMWM3ODQ2LWUxZjctNGU0ZC04YmM1LTY3M2E3MmI0YTJmNSIsImMiOjR9",
      metricsTitle: "Métricas clave incluidas",
      metrics: [
        "Ventas totales ($2.3M), ganancia ($286K) y 5.009 órdenes",
        "Porcentaje de margen de ganancia (12,47%)",
        "Tendencia mensual de ventas y ganancia por año",
        "Desglose de performance por región (Oeste, Este, Centro, Sur)",
        "Top 10 subcategorías por ingresos (Teléfonos, Sillas, Almacenamiento...)",
      ],
      dashboardTitle: "Dashboard de Ventas Retail (Power BI)",
      dashboardIntro:
        "El dashboard resume los datos retail de Superstore y ayuda a responder preguntas como:",
      insights: [
        "¿Qué meses tienen los picos más altos de ventas y ganancia?",
        "¿Qué región genera más ingresos?",
        "¿Cuáles son las 10 subcategorías principales por ventas totales?",
        "¿Cómo varía el margen de ganancia según el mix de productos?",
      ],
      iframeTitle: "Dashboard de ventas Superstore",
      closingParagraph:
        "Los datos se basan en el dataset público de muestra de Superstore. Este dashboard es parte de mi portfolio personal y se irá actualizando con páginas adicionales sobre segmentación de clientes, análisis de descuentos y performance de envíos.",
    },
  },
};

export const projects = {
  en: [
    {
      img: "../../../img/superstore-dashboard.webp",
      title: "Superstore Sales Dashboard",
      link: "project3",
      description:
        "Power BI dashboard built on the classic Superstore dataset. Tracks $2.3M in total sales, $286K profit and 5,009 orders with monthly trend analysis, regional performance breakdown and top 10 sub-categories by revenue.",
      tags: projectReports.en.project3.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      img: "../../../img/argentina-mining-exports.webp",
      title: "Argentina Mining Exports",
      link: "project2",
      description:
        "Interactive Power BI dashboard analyzing Argentina's mining export records from 1998 to 2024. Covers 327 metallic and lithium projects across provinces, tracking copper, lithium, gold and silver production with KPIs and regional breakdowns.",
      tags: projectReports.en.project2.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      img: "../../../img/mining-projects-map.webp",
      title: "Mining Projects Map",
      link: "project1",
      description:
        "Power BI report mapping Argentina's metallic and lithium mining projects by province, mineral type and development stage. Identifies key production clusters in Salta, San Juan and Santa Cruz with visual KPIs and drill-down filters.",
      tags: projectReports.en.project1.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
  ],
  es: [
    {
      img: "../../../img/superstore-dashboard.webp",
      title: "Dashboard de Ventas Superstore",
      link: "project3",
      description:
        "Dashboard en Power BI construido sobre el clásico dataset de Superstore. Sigue $2.3M en ventas totales, $286K de ganancia y 5.009 órdenes, con análisis de tendencia mensual, desglose de performance regional y el top 10 de subcategorías por ingresos.",
      tags: projectReports.es.project3.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      img: "../../../img/argentina-mining-exports.webp",
      title: "Exportaciones Mineras de Argentina",
      link: "project2",
      description:
        "Dashboard interactivo en Power BI que analiza los registros de exportaciones mineras de Argentina entre 1998 y 2024. Cubre 327 proyectos metalíferos y de litio en distintas provincias, siguiendo la producción de cobre, litio, oro y plata con KPIs y desgloses regionales.",
      tags: projectReports.es.project2.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      img: "../../../img/mining-projects-map.webp",
      title: "Mapa de Proyectos Mineros",
      link: "project1",
      description:
        "Reporte en Power BI que mapea los proyectos mineros metalíferos y de litio de Argentina por provincia, tipo de mineral y etapa de desarrollo. Identifica los principales clústeres de producción en Salta, San Juan y Santa Cruz con KPIs visuales y filtros drill-down.",
      tags: projectReports.es.project1.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
  ],
};
