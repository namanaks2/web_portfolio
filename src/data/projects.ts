// Project data for portfolio showcase
export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  category: string;
  github: string;
  live: string;
  featured: boolean;
  image: string;
  stats: {
    stars?: number;
    forks?: number;
    views?: number;
  };
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Campus Merch App",
    description: "A full-stack e-commerce platform for college merchandise with real-time inventory tracking and secure payments.",
    longDescription: "Built a comprehensive campus merchandise platform that enables students to browse, customize, and purchase college-branded products. Features include user authentication, shopping cart, wishlist, and order tracking.",
    technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Stripe"],
    category: "Frontend",
    github: "https://github.com/namangupta",
    live: "#",
    featured: true,
    image: "/projects/campus-merch.webp",
    stats: { stars: 48, forks: 12, views: 1200 },
  },
  {
    id: 2,
    title: "Startup Dashboard",
    description: "An analytics dashboard for startup founders to track KPIs, revenue metrics, and growth trends in real-time.",
    longDescription: "Comprehensive analytics platform built for startup founders. Features real-time data visualization, CSV upload processing, AI-driven insights, and interactive charts for tracking key performance indicators.",
    technologies: ["Next.js", "Python", "FastAPI", "Chart.js", "Tailwind CSS"],
    category: "Data Science",
    github: "https://github.com/namangupta",
    live: "#",
    featured: true,
    image: "/projects/startup-dashboard.webp",
    stats: { stars: 72, forks: 18, views: 2400 },
  },
  {
    id: 3,
    title: "Developer Productivity Platform",
    description: "A productivity suite for developers with task management, code snippets, and AI-powered suggestions.",
    longDescription: "All-in-one productivity platform designed for developers. Includes smart task management, code snippet library, weather widget, and AI-powered productivity suggestions with a premium glassmorphism UI.",
    technologies: ["React", "TypeScript", "Node.js", "OpenAI API", "CSS"],
    category: "Frontend",
    github: "https://github.com/namangupta",
    live: "#",
    featured: true,
    image: "/projects/dev-productivity.webp",
    stats: { stars: 56, forks: 14, views: 1800 },
  },
  {
    id: 4,
    title: "Kitchen & Wardrobe Customizer",
    description: "An interactive 3D customization app for modular kitchens and wardrobes with real-time preview.",
    longDescription: "Interactive product customization application enabling users to design modular kitchens and wardrobes. Features drag-and-drop interface, material selection, color customization, and 3D preview capabilities.",
    technologies: ["React", "Three.js", "Node.js", "MongoDB", "Figma"],
    category: "UI/UX",
    github: "https://github.com/namangupta",
    live: "#",
    featured: false,
    image: "/projects/kitchen-customizer.webp",
    stats: { stars: 34, forks: 8, views: 950 },
  },
];

export const projectCategories = ["All", "Frontend", "Backend", "Data Science", "UI/UX", "Tools"];
