// Education data
export interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  grade: string;
  description: string;
  coursework: string[];
  icon: string;
}

export const education: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science & Engineering (Data Science)",
    institution: "K.R. Mangalam University",
    duration: "2025 – 2029 (Expected)",
    grade: "CGPA: 8.2/10",
    description: "Currently pursuing Bachelor of Technology with a focus on software engineering, data science, and entrepreneurship. Active member of the coding club and tech innovation cell.",
    coursework: [
      "Data Structures & Algorithms",
      "Database Management Systems",
      "Web Development",
      "Machine Learning",
      "Operating Systems",
      "Software Engineering",
      "Computer Networks",
      "Artificial Intelligence",
    ],
    icon: "GraduationCap",
  },
  {
    id: 2,
    degree: "Senior Secondary (XII) – Non-Medical",
    institution: "Modern School, Faridabad",
    duration: "2017 – 2024",
    grade: "87.2%",
    description: "Completed senior secondary education with distinction in Mathematics, Physics, Chemistry and Information Technology.",
    coursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Information Technology",
      "English",
    ],
    icon: "School",
  },
];
