export const studies = [
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
];

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

export const skills = [
  {
    title: "Power BI",
    icon: IconKeys.powerbi,
  },
  {
    title: "MySQL",
    icon: IconKeys.mysql,
  },
  {
    title: "Python",
    icon: IconKeys.python,
  },
  {
    title: "AutoCAD",
    icon: IconKeys.autocad,
  },
  {
    title: "Git",
    icon: IconKeys.git,
  },
  {
    title: "Github",
    icon: IconKeys.github,
  },
];

// Full content for each project's report page. Centralizing this here (instead of
// duplicating HTML across three near-identical files) makes it the single place to
// edit project copy, and the single place we'll translate when /es is added.
export const projectReports = {
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
};

export const projects = [
    {
    img: "../../../img/superstore-dashboard.webp",
    title: "Superstore Sales Dashboard",
    link: "project3",
    description: "Power BI dashboard built on the classic Superstore dataset. Tracks $2.3M in total sales, $286K profit and 5,009 orders with monthly trend analysis, regional performance breakdown and top 10 sub-categories by revenue.",
    tags: projectReports.project3.pills,
    technologies: [
      {
        icon: IconKeys.powerbi,
      },
    ],
  }, 
  {
    img: "../../../img/argentina-mining-exports.webp",
    title: "Argentina Mining Exports",
    link: "project2",
    description: "Interactive Power BI dashboard analyzing Argentina's mining export records from 1998 to 2024. Covers 327 metallic and lithium projects across provinces, tracking copper, lithium, gold and silver production with KPIs and regional breakdowns.",
    tags: projectReports.project2.pills,
    technologies: [
      {
        icon: IconKeys.powerbi,
      },
    ],
  },
  {
    img: "../../../img/mining-projects-map.webp",
    title: "Mining Projects Map",
    link: "project1",
    description: "Power BI report mapping Argentina's metallic and lithium mining projects by province, mineral type and development stage. Identifies key production clusters in Salta, San Juan and Santa Cruz with visual KPIs and drill-down filters.",
    tags: projectReports.project1.pills,
    technologies: [
      {
        icon: IconKeys.powerbi,
      },
    ],
  },
];
