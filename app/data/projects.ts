export type Project = {
  title: string;
  tag: string;
  role: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  liveLabel?: string;
  githubUrl?: string;
};

export const FEATURED_PROJECTS: Project[] = [
  {
    title: "Edushe",
    tag: "Client Project",
    role: "Project Manager & Frontend",
    description:
      "An evidence-based platform providing science-backed information and recommendations on sports health and training, with a focus on injury prevention and recovery. I led the project as project manager and frontend developer, and hired and coordinated a backend developer to deliver it.",
    stack: [
      "Laravel 12",
      "Vue.js 3",
      "Inertia.js",
      "TypeScript",
      "Tailwind CSS",
      "PrimeVue",
    ],
    image: "/projects/edushe.png",
    liveUrl: "https://edushe.id",
    liveLabel: "Live Site",
  },
  {
    title: "Strenvo",
    tag: "University Project",
    role: "Project Manager & Frontend",
    description:
      "A data management platform for physical trainers — covering athlete data, scheduling, training programs, program recommendations, physical testing, and athlete ranking, all in one place. Built with a university teammate; I led as project manager and frontend developer.",
    stack: ["Laravel", "React 19", "Inertia.js", "Tailwind CSS", "Vite"],
    image: "/projects/strenvo.png",
  },
  {
    title: "GoArchery",
    tag: "Client Project",
    role: "Full-stack Developer",
    description:
      "A company-profile and recruitment website for GoArchery, an archery club — built to attract new members, showcase athlete achievements, and handle class registration. Includes training programs, coach profiles, a gallery, athlete rankings, training schedules, and an online trial-class booking system. Built end to end as the full-stack developer.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/goarchery.png",
    liveUrl:
      "https://goarchery-r7zfgpa6t-alghazismkn26-6538s-projects.vercel.app/",
    liveLabel: "Live Site",
  },
];

export const OTHER_PROJECTS: Project[] = [
  {
    title: "Latissa",
    tag: "Client",
    role: "Web Developer",
    description:
      "A beauty-brand website with a product-recommendation quiz, articles, and company profile — backed by a Filament CMS so the client can manage content themselves.",
    stack: ["Laravel 12", "Filament 4", "Blade", "Tailwind CSS 4", "Vite"],
    image: "/projects/latissa.png",
    liveUrl: "https://latissa.co.id",
    liveLabel: "Live Site",
  },
  {
    title: "BersihMax",
    tag: "Client",
    role: "Web Developer",
    description:
      "A service website for a professional cleaning company (mattress, sofa, carpet, curtain, and home cleaning) with clear pricing, testimonials, an FAQ, and booking call-to-actions.",
    stack: ["HTML", "CSS", "JavaScript"],
    image: "/projects/bersihmax.png",
    liveUrl: "https://www.bersihmax.com/",
    liveLabel: "Live Site",
  },
  {
    title: "Perpani DKI",
    tag: "Prototype",
    role: "Frontend",
    description:
      "A prototype for the DKI Jakarta provincial archery board — news, events, and athlete rankings.",
    stack: ["Laravel"],
    image: "/projects/perpani.png",
    liveUrl: "https://prototype-perpani-dki.vercel.app/",
    liveLabel: "View Prototype",
  },
  {
    title: "ChillMovieApp",
    tag: "Personal",
    role: "Frontend",
    description: "A Netflix-style movie app built to practice React.",
    stack: ["React"],
    image: "/projects/chillmovie.png",
    liveUrl: "https://chill-movie-app-tau.vercel.app/",
    liveLabel: "Live Site",
  },
];