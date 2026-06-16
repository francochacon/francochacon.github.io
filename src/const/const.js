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

// Skills/tools actually used on each individual project, shown on its project page.
// Keep this scoped to what's true for that specific project, not the whole skillset above.
export const projectSkills = {
  project1: [{ title: "Power BI", icon: IconKeys.powerbi }],
  project2: [{ title: "Power BI", icon: IconKeys.powerbi }],
  project3: [{ title: "Power BI", icon: IconKeys.powerbi }],
};

export const projects = [
    {
    img: "../../../img/superstore-dashboard.webp",
    title: "Superstore Sales Dashboard",
    link: "project3",
    description: "Power BI dashboard built on the classic Superstore dataset. Tracks $2.3M in total sales, $286K profit and 5,009 orders with monthly trend analysis, regional performance breakdown and top 10 sub-categories by revenue.",
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
    technologies: [
      {
        icon: IconKeys.powerbi,
      },
    ],
  },
];
