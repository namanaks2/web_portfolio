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
    degree: "B.Tech in Computer Science & Engineering",
    institution: "University Institute of Technology",
    duration: "2023 – 2027 (Expected)",
    grade: "CGPA: 8.5/10",
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
    degree: "Senior Secondary (XII) – Science",
    institution: "Modern Academy School",
    duration: "2021 – 2023",
    grade: "92.4%",
    description: "Completed senior secondary education with distinction in Mathematics, Physics, and Computer Science. Participated in inter-school coding competitions.",
    coursework: [
      "Mathematics",
      "Physics",
      "Chemistry",
      "Computer Science",
      "English",
    ],
    icon: "School",
  },
];
