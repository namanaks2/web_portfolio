// Experience data for timeline
export interface Experience {
  id: number;
  title: string;
  company?: string;
  type: string;
  duration: string;
  description: string[];
  technologies: string[];
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Researchd and UI/UX Intern",
    company: "10XGrowth",
    type: "Internship",
    duration: "October 2024 – May 2025",
    description: [
      "Developed responsive web interfaces using Figma",
      "Collaborated with the design team to implement pixel-perfect UI components",
      "Optimized application performance, improving load times by 40%",
      "Participated in daily standups and agile sprint planning",
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Git"],
    icon: "Briefcase",
  },
  {
    id: 2,
    title: "Industrial Projects - Team Lead",
    // company: "College Tech Club",
    type: "Leadership",
    duration: "January 2026 – May 2026",
    description: [
      "Leading a team of 4+ developers on campus tech projects",
      "Built a Startup Dashboard",
      "Mentored junior developers on modern development practices",
      "Coordinated teammates and project showcase",
    ],
    technologies: ["Team Management", "Web Dev", "Python", "Event Planning"],
    icon: "Users",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    company: "Independent Projects",
    type: "Freelance",
    duration: "January 2024 – Present",
    description: [
      "Designed and developed custom websites for local businesses",
      "Built full-stack applications with modern frameworks",
      "Delivered 6+ projects with excellent client satisfaction",
      "Managed complete project lifecycle from design to deployment",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Figma"],
    icon: "Code2",
  },
];
