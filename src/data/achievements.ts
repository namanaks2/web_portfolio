// Achievements and certifications data
export interface Achievement {
  id: number;
  title: string;
  organization: string;
  date: string;
  type: "certification" | "hackathon" | "workshop" | "leadership" | "award";
  description: string;
  icon: string;
  link?: string;
}

export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Smart India Hackathon Finalist",
    organization: "Government of India",
    date: "2025",
    type: "hackathon",
    description: "Developed an innovative solution for urban waste management using IoT and AI, reaching the national finals.",
    icon: "Trophy",
  },
  {
    id: 2,
    title: "Web Development Bootcamp",
    organization: "Udemy",
    date: "2024",
    type: "certification",
    description: "Completed comprehensive full-stack web development course covering React, Node.js, and databases.",
    icon: "Award",
    link: "#",
  },
  {
    id: 3,
    title: "Python for Data Science",
    organization: "Coursera – IBM",
    date: "2024",
    type: "certification",
    description: "Mastered Python programming for data analysis, visualization, and machine learning fundamentals.",
    icon: "Award",
    link: "#",
  },
  {
    id: 4,
    title: "College Tech Fest Winner",
    organization: "University Tech Fest",
    date: "2024",
    type: "award",
    description: "Won first place in the web development competition, building a real-time collaboration tool in 24 hours.",
    icon: "Trophy",
  },
  {
    id: 5,
    title: "Google Cloud Facilitator",
    organization: "Google Cloud",
    date: "2024",
    type: "leadership",
    description: "Led cloud computing workshops as a Google Cloud Student Facilitator, training 50+ students.",
    icon: "Cloud",
  },
  {
    id: 6,
    title: "UI/UX Design Fundamentals",
    organization: "Google – Coursera",
    date: "2025",
    type: "certification",
    description: "Completed Google's UX Design Professional Certificate covering research, wireframing, and prototyping.",
    icon: "Award",
    link: "#",
  },
  {
    id: 7,
    title: "Startup Weekend Participant",
    organization: "Techstars",
    date: "2025",
    type: "hackathon",
    description: "Built and pitched a startup idea over 54 hours, focusing on EdTech innovation for rural students.",
    icon: "Rocket",
  },
  {
    id: 8,
    title: "Open Source Contributions",
    organization: "GitHub / Hacktoberfest",
    date: "2024",
    type: "award",
    description: "Successfully completed Hacktoberfest with 10+ merged pull requests across multiple repositories.",
    icon: "GitBranch",
  },
];
