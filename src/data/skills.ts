// Skills data organized by category
export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  skills: Skill[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: "Monitor",
    color: "from-blue-500 to-cyan-400",
    skills: [
      { name: "HTML5", level: 95, icon: "🌐" },
      { name: "CSS3", level: 90, icon: "🎨" },
      { name: "JavaScript", level: 88, icon: "⚡" },
      { name: "React", level: 85, icon: "⚛️" },
      { name: "Next.js", level: 80, icon: "▲" },
      { name: "Tailwind CSS", level: 90, icon: "💨" },
    ],
  },
  {
    title: "Backend",
    icon: "Server",
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Node.js", level: 78, icon: "🟢" },
      { name: "Python", level: 82, icon: "🐍" },
      { name: "SQL", level: 75, icon: "🗃️" },
      { name: "MongoDB", level: 72, icon: "🍃" },
      { name: "FastAPI", level: 70, icon: "⚡" },
      { name: "REST APIs", level: 80, icon: "🔗" },
    ],
  },
  {
    title: "UI/UX Design",
    icon: "Palette",
    color: "from-orange-500 to-yellow-400",
    skills: [
      { name: "Figma", level: 85, icon: "🎯" },
      { name: "UI Design", level: 80, icon: "🖼️" },
      { name: "Wireframing", level: 82, icon: "📐" },
      { name: "Prototyping", level: 78, icon: "🔄" },
      { name: "User Research", level: 70, icon: "🔍" },
      { name: "Design Systems", level: 75, icon: "📦" },
    ],
  },
  {
    title: "Data Science",
    icon: "BarChart3",
    color: "from-green-500 to-emerald-400",
    skills: [
      { name: "Python", level: 82, icon: "🐍" },
      { name: "Pandas", level: 75, icon: "📊" },
      { name: "NumPy", level: 72, icon: "🔢" },
      { name: "Matplotlib", level: 70, icon: "📈" },
      { name: "Scikit-learn", level: 65, icon: "🤖" },
      { name: "SQL Analytics", level: 75, icon: "📋" },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: "Wrench",
    color: "from-red-500 to-orange-400",
    skills: [
      { name: "Git & GitHub", level: 88, icon: "🔀" },
      { name: "VS Code", level: 92, icon: "💻" },
      { name: "Vercel", level: 80, icon: "▲" },
      { name: "Firebase", level: 72, icon: "🔥" },
      { name: "Docker", level: 60, icon: "🐳" },
      { name: "Linux", level: 65, icon: "🐧" },
    ],
  },
];
