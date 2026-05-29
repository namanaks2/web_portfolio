// Experience data for timeline
export interface Experience {
  id: number;
  title: string;
  company: string;
  type: string;
  duration: string;
  description: string[];
  technologies: string[];
  icon: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Tech Startup Studio",
    type: "Internship",
    duration: "Jun 2025 – Aug 2025",
    description: [
      "Developed responsive web interfaces using React and Tailwind CSS",
      "Collaborated with the design team to implement pixel-perfect UI components",
      "Optimized application performance, improving load times by 40%",
      "Participated in daily standups and agile sprint planning",
    ],
    technologies: ["React", "Tailwind CSS", "TypeScript", "Git"],
    icon: "Briefcase",
  },
  {
    id: 2,
    title: "Technical Team Lead",
    company: "College Tech Club",
    type: "Leadership",
    duration: "Sep 2024 – Present",
    description: [
      "Leading a team of 15+ developers on campus tech projects",
      "Organized workshops on web development and data science",
      "Mentored junior developers on modern development practices",
      "Coordinated hackathon participation and project showcases",
    ],
    technologies: ["Team Management", "Web Dev", "Python", "Event Planning"],
    icon: "Users",
  },
  {
    id: 3,
    title: "Freelance Web Developer",
    company: "Independent Projects",
    type: "Freelance",
    duration: "Jan 2024 – Present",
    description: [
      "Designed and developed custom websites for local businesses",
      "Built full-stack applications with modern frameworks",
      "Delivered 5+ projects with excellent client satisfaction",
      "Managed complete project lifecycle from design to deployment",
    ],
    technologies: ["Next.js", "Node.js", "MongoDB", "Figma"],
    icon: "Code2",
  },
  {
    id: 4,
    title: "Open Source Contributor",
    company: "GitHub Community",
    type: "Community",
    duration: "Mar 2024 – Present",
    description: [
      "Contributed to popular open-source repositories",
      "Fixed bugs and implemented new features in React libraries",
      "Engaged in code reviews and community discussions",
      "Maintained personal open-source projects with 100+ stars",
    ],
    technologies: ["React", "TypeScript", "Python", "Open Source"],
    icon: "GitBranch",
  },
];
