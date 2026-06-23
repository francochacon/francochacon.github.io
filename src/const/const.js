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
//
// `images` is the shared source of truth for both the Home/AllProjects card
// preview (hover carousel) and the project detail page gallery — both read
// from this exact same array, so there's only one place to add/remove photos.
// It's not translated since screenshots look the same in any language.
//
// project4 and project5 are scaffolding: real working pages with placeholder
// copy/images borrowed from project3 wherever real content isn't ready yet.
// They are intentionally left OUT of the `projects` listing below so they
// don't show up on Home or /projects until their real content is in.
export const projectReports = {
  en: {
    project1: {
      title: "Mining Projects Map",
      leadParagraph:
        "A geospatial Power BI report mapping Argentina's metallic and lithium mining projects across every province, tracking each project's mineral type and development stage from exploration to production.",
      description:
        "This project showcases an interactive Power BI dashboard focused on the geographic distribution of mining activity in Argentina. The goal is to highlight regional production clusters, mineral concentration, and project maturity across the country.",
      pills: ["Power BI", "DAX", "Geospatial Analysis", "Mining Analytics"],
      skills: [
        { title: "Power BI", icon: IconKeys.powerbi },
      ],
      images: ["/img/mining-projects-map.webp"],
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
      skills: [
        { title: "Power BI", icon: IconKeys.powerbi },
        { title: "Python", icon: IconKeys.python },
      ],
      images: ["/img/argentina-mining-exports.webp"],
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
      skills: [
        { title: "Power BI", icon: IconKeys.powerbi },
        { title: "MySQL", icon: IconKeys.mysql },
      ],
      images: ["/img/superstore-dashboard.webp"],
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
      iframeTitle: "Superstore sales dashboard",
      closingParagraph:
        "Data is based on the publicly available Superstore sample dataset. This dashboard is part of my personal portfolio and will be updated with additional pages covering customer segmentation, discount analysis, and shipping performance.",
    },
    project4: {
      title: "Waste Valorization KPI Dashboard — TotalEnergies",
      leadParagraph:
        "Built around an observation from my internship at Total Austral (TotalEnergies) in Tierra del Fuego: poor waste segregation at the source was quietly reducing how much could be diverted to the circular economy program, and there was no indicator to tell whether fixing that actually worked.",
      description:
        "The concept centers on a single KPI — the valorization rate, the share of waste (cardboard, plastic, organic matter) diverted to circular economy or composting versus incinerated — tracked by category and over time, so management can see whether segregation initiatives move the number.",
      pills: ["Concept", "Power BI", "Sustainability KPIs", "Process Engineering"],
      skills: [
        { title: "Power BI", icon: IconKeys.powerbi },
      ],
      images: ["/img/waste-valorization-kpi.webp"],
      githubUrl: "",
      powerBiUrl: "",
      metricsTitle: "What this dashboard will track",
      metrics: [
        "Global valorization rate (%) and its monthly trend",
        "Waste managed vs. valorized vs. incinerated, in kg/month",
        "Breakdown by category: cardboard, plastic, organic matter, glass, metal, municipal-like waste",
        "Category-level valorization rate to flag which segregation initiatives are working",
      ],
      dashboardTitle: "Dashboard status",
      iframeTitle: "Waste valorization KPI dashboard",
      closingParagraph:
        "This is still an early-stage concept: the KPI definition and category breakdown shown here are illustrative. Real data collection (starting with weighing plastic and cardboard before they leave the site) and the Power BI build are next.",
    },
    project5: {
      title: "Chemical Storage Intelligence Platform",
      leadParagraph:
        "A Power BI concept born from a real safety audit: while classifying 250+ reagents from a chemistry lab into storage groups, I found oxidizers shelved next to reducing agents, cyanide salts sitting in a general cabinet, and toxic metals with no dedicated storage. This project turns that audit into a data-driven inventory and compatibility platform.",
      description:
        "The platform combines inventory data quality (stock status, quantities, units) with a chemical compatibility model built shelf by shelf, so any two substances can be checked for incompatibility before they're stored together. It's currently in the data-modeling stage: the substance audit, the corrected 13-shelf classification, and the compatibility matrix are complete; the interactive Power BI build is next.",
      pills: ["Concept", "Power BI", "Inventory Analytics", "Data Quality Audit"],
      skills: [
        { title: "Power BI", icon: IconKeys.powerbi },
        { title: "Python", icon: IconKeys.python },
        { title: "Github", icon: IconKeys.github },
      ],
      images: [
        "/img/chemical-storage-dashboard.webp",
        "/img/chemical-storage-compatibility.webp",
        "/img/chemical-storage-lab-layout.webp",
      ],
      githubUrl: "https://github.com/francochacon/chemical-storage-intelligence-platform",
      powerBiUrl: "",
      metricsTitle: "What this dashboard will track",
      metrics: [
        "Stock status (confirmed in stock / confirmed out / unverified) across 279 reagents",
        "13 storage groups with a shelf-by-shelf compatibility matrix (compatible / caution / incompatible)",
        "A live compatibility check between any two substances before they're shelved together",
        "A physical lab layout view flagging which storage zones must stay physically separated",
      ],
      dashboardTitle: "Dashboard status",
      iframeTitle: "Chemical storage intelligence dashboard",
      closingParagraph:
        "The data audit (279 reagents, 13 corrected storage groups, 8 duplicates resolved, one new shelf added for controlled toxics) is complete and editable in a live spreadsheet. The Power BI build is next — this page will be updated with the interactive report once it's published.",
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
      skills: [
        { title: "Power BI", icon: IconKeys.powerbi },
      ],
      images: ["/img/mining-projects-map.webp"],
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
      skills: [
        { title: "Power BI", icon: IconKeys.powerbi },
        { title: "Python", icon: IconKeys.python },
      ],
      images: ["/img/argentina-mining-exports.webp"],
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
      skills: [
        { title: "Power BI", icon: IconKeys.powerbi },
        { title: "MySQL", icon: IconKeys.mysql },
      ],
      images: ["/img/superstore-dashboard.webp"],
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
      iframeTitle: "Dashboard de ventas Superstore",
      closingParagraph:
        "Los datos se basan en el dataset público de muestra de Superstore. Este dashboard es parte de mi portfolio personal y se irá actualizando con páginas adicionales sobre segmentación de clientes, análisis de descuentos y performance de envíos.",
    },
    project4: {
      title: "Dashboard de KPI de Valorización de Residuos — TotalEnergies",
      leadParagraph:
        "Armado a partir de una observación de mi pasantía en Total Austral (TotalEnergies) en Tierra del Fuego: la mala segregación de residuos en origen reducía silenciosamente cuánto se podía destinar al programa de economía circular, y no había ningún indicador para saber si corregir eso realmente funcionaba.",
      description:
        "El concepto se centra en un solo KPI — la tasa de valorización, el porcentaje de residuos (cartón, plástico, materia orgánica) destinado a economía circular o compostaje versus incinerado — medido por categoría y en el tiempo, para que la gerencia pueda ver si las iniciativas de segregación mueven el número.",
      pills: ["Concepto", "Power BI", "KPIs de Sustentabilidad", "Ingeniería de Procesos"],
      skills: [
        { title: "Power BI", icon: IconKeys.powerbi },
      ],
      images: ["/img/waste-valorization-kpi.webp"],
      githubUrl: "",
      powerBiUrl: "",
      metricsTitle: "Qué va a medir este dashboard",
      metrics: [
        "Tasa de valorización global (%) y su tendencia mensual",
        "Residuos gestionados vs. valorizados vs. incinerados, en kg/mes",
        "Desglose por categoría: cartón, plástico, materia orgánica, vidrio, metal, residuos asimilables a urbanos",
        "Tasa de valorización por categoría para identificar qué iniciativas de segregación están funcionando",
      ],
      dashboardTitle: "Estado del proyecto",
      iframeTitle: "Dashboard de KPI de valorización de residuos",
      closingParagraph:
        "Esto todavía es un concepto en etapa temprana: la definición del KPI y el desglose por categoría que se muestran acá son ilustrativos. Lo que sigue es la recolección de datos reales (empezando por pesar el plástico y el cartón antes de salir de planta) y el armado en Power BI.",
    },
    project5: {
      title: "Plataforma de Inteligencia para Almacenamiento Químico",
      leadParagraph:
        "Un concepto de Power BI que nació de una auditoría de seguridad real: al clasificar más de 250 reactivos de un laboratorio de química en grupos de almacenamiento, encontré oxidantes guardados junto a reductores, sales de cianuro en un armario general y metales tóxicos sin almacenamiento dedicado. Este proyecto convierte esa auditoría en una plataforma de inventario y compatibilidad basada en datos.",
      description:
        "La plataforma combina calidad de datos de inventario (estado de stock, cantidades, unidades) con un modelo de compatibilidad química armado estante por estante, para poder chequear si dos sustancias son incompatibles antes de guardarlas juntas. Hoy está en etapa de modelado de datos: la auditoría de sustancias, la clasificación corregida en 13 estantes y la matriz de compatibilidad ya están completas; el armado interactivo en Power BI es el siguiente paso.",
      pills: ["Concepto", "Power BI", "Análisis de Inventario", "Auditoría de Calidad de Datos"],
      skills: [
        { title: "Power BI", icon: IconKeys.powerbi },
        { title: "Python", icon: IconKeys.python },
        { title: "Github", icon: IconKeys.github },
      ],
      images: [
        "/img/chemical-storage-dashboard.webp",
        "/img/chemical-storage-compatibility.webp",
        "/img/chemical-storage-lab-layout.webp",
      ],
      githubUrl: "https://github.com/francochacon/chemical-storage-intelligence-platform",
      powerBiUrl: "",
      metricsTitle: "Qué va a medir este dashboard",
      metrics: [
        "Estado de stock (confirmado en stock / confirmado sin stock / sin verificar) en 279 reactivos",
        "13 grupos de almacenamiento con una matriz de compatibilidad estante por estante (compatible / precaución / incompatible)",
        "Verificación en vivo de compatibilidad entre cualquier par de sustancias antes de guardarlas juntas",
        "Vista del layout físico del laboratorio marcando qué zonas deben mantenerse separadas",
      ],
      dashboardTitle: "Estado del proyecto",
      iframeTitle: "Dashboard de inteligencia de almacenamiento químico",
      closingParagraph:
        "La auditoría de datos (279 reactivos, 13 grupos de almacenamiento corregidos, 8 duplicados resueltos, un estante nuevo para tóxicos controlados) está completa y es editable en una planilla viva. El armado en Power BI es el siguiente paso — esta página se va a actualizar con el reporte interactivo en cuanto esté publicado.",
    },
  },
};

// Cards shown on Home (latest 3) and on /projects (all of them, with filters).
// `images` is the exact same array used on the project's own detail-page
// gallery — see the note above projectReports. project4 and project5 are
// listed last on purpose: Home's "latest 3" keeps showing the real projects
// (3, 2, 1) unchanged, while /projects and "More projects" show all 5.
export const projects = {
  en: [
    {
      images: projectReports.en.project3.images,
      title: "Superstore Sales Dashboard",
      link: "superstore-sales-dashboard",
      description:
        "Power BI dashboard built on the classic Superstore dataset. Tracks $2.3M in total sales, $286K profit and 5,009 orders with monthly trend analysis, regional performance breakdown and top 10 sub-categories by revenue.",
      tags: projectReports.en.project3.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      images: projectReports.en.project2.images,
      title: "Argentina Mining Exports",
      link: "mining-exports-dashboard",
      description:
        "Interactive Power BI dashboard analyzing Argentina's mining export records from 1998 to 2024. Covers 327 metallic and lithium projects across provinces, tracking copper, lithium, gold and silver production with KPIs and regional breakdowns.",
      tags: projectReports.en.project2.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      images: projectReports.en.project1.images,
      title: "Mining Projects Map",
      link: "argentina-mining-map",
      description:
        "Power BI report mapping Argentina's metallic and lithium mining projects by province, mineral type and development stage. Identifies key production clusters in Salta, San Juan and Santa Cruz with visual KPIs and drill-down filters.",
      tags: projectReports.en.project1.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      images: projectReports.en.project4.images,
      title: projectReports.en.project4.title,
      link: "waste-valorization-kpi",
      description: projectReports.en.project4.description,
      tags: projectReports.en.project4.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      images: projectReports.en.project5.images,
      title: projectReports.en.project5.title,
      link: "chemical-storage-platform",
      description: projectReports.en.project5.description,
      tags: projectReports.en.project5.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
  ],
  es: [
    {
      images: projectReports.es.project3.images,
      title: "Dashboard de Ventas Superstore",
      link: "superstore-sales-dashboard",
      description:
        "Dashboard en Power BI construido sobre el clásico dataset de Superstore. Sigue $2.3M en ventas totales, $286K de ganancia y 5.009 órdenes, con análisis de tendencia mensual, desglose de performance regional y el top 10 de subcategorías por ingresos.",
      tags: projectReports.es.project3.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      images: projectReports.es.project2.images,
      title: "Exportaciones Mineras de Argentina",
      link: "mining-exports-dashboard",
      description:
        "Dashboard interactivo en Power BI que analiza los registros de exportaciones mineras de Argentina entre 1998 y 2024. Cubre 327 proyectos metalíferos y de litio en distintas provincias, siguiendo la producción de cobre, litio, oro y plata con KPIs y desgloses regionales.",
      tags: projectReports.es.project2.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      images: projectReports.es.project1.images,
      title: "Mapa de Proyectos Mineros",
      link: "argentina-mining-map",
      description:
        "Reporte en Power BI que mapea los proyectos mineros metalíferos y de litio de Argentina por provincia, tipo de mineral y etapa de desarrollo. Identifica los principales clústeres de producción en Salta, San Juan y Santa Cruz con KPIs visuales y filtros drill-down.",
      tags: projectReports.es.project1.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      images: projectReports.es.project4.images,
      title: projectReports.es.project4.title,
      link: "waste-valorization-kpi",
      description: projectReports.es.project4.description,
      tags: projectReports.es.project4.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
    {
      images: projectReports.es.project5.images,
      title: projectReports.es.project5.title,
      link: "chemical-storage-platform",
      description: projectReports.es.project5.description,
      tags: projectReports.es.project5.pills,
      technologies: [{ icon: IconKeys.powerbi }],
    },
  ],
};
