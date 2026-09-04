// ---------------------------------------------------------------------------
// Tüm site içeriği burada. Gerçek bilgilerle bu dosyayı güncellemen yeterli;
// bileşenlere dokunmana gerek yok.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Hilal Korkmaz",
  role: "Software Engineer",
  roleAccent: "in progress.",
  tagline:
    "I build backend systems and full-stack applications with clean code and good architecture.",
  email: "hilal.krkmz025@gmail.com",
  location: "İnönü Üniversitesi, Türkiye",
  // CV dosyalarını public/ içine ekle. Buton, birden fazla varsa açılır menü gösterir.
  // Henüz hazır değilse boş dizi bırak — buton gizlenir.
  resumes: [
    // { label: "CV (TR)", href: "/cv-tr.pdf" },
    // { label: "CV (EN)", href: "/cv-en.pdf" },
  ] as { label: string; href: string }[],
  social: {
    github: "https://github.com/Hilalkrkmz",
    linkedin: "https://www.linkedin.com/in/hilal-korkmaz-87a214285",
  },
};

export const heroSkills = [
  "Java",
  "Spring Boot",
  "PostgreSQL",
  "React",
  "React Native",
];

// Hero'daki kod penceresi — GERÇEK, derlenebilir bir kod parçası olmalı.
export const heroCode = {
  fileName: "TaskController.java",
  label: "Spring Boot",
  lines: [
    "@RestController",
    '@RequestMapping("/api/v1/tasks")',
    "@RequiredArgsConstructor",
    "public class TaskController {",
    "",
    "    private final TaskService taskService;",
    "",
    "    @GetMapping",
    "    public ResponseEntity<List<TaskDto>> getAll() {",
    "        return ResponseEntity.ok(taskService.findAll());",
    "    }",
    "",
    "    @PostMapping",
    "    public ResponseEntity<TaskDto> create(",
    "            @RequestBody @Valid TaskRequest req) {",
    "        return ResponseEntity",
    "                .status(HttpStatus.CREATED)",
    "                .body(taskService.create(req));",
    "    }",
    "}",
  ],
};

export type Project = {
  title: string;
  category: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "TaskFlow",
    category: "Web + Mobile",
    description:
      "Task and focus management app with Pomodoro timer, stopwatch, notes, focus history and notifications.",
    tech: ["Java", "Spring Boot", "React", "React Native"],
    liveUrl: "#",
    githubUrl: "https://github.com/Hilalkrkmz/TaskFlow",
    featured: true,
  },
  {
    title: "File Management System",
    category: "Full-Stack",
    description:
      "File and folder management system with sharing, search, notifications, starred files and an admin panel.",
    tech: ["Java", "Spring Boot", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/Hilalkrkmz/file-management-system",
    featured: true,
  },
  {
    title: "GradeFlow",
    category: "Backend",
    description:
      "Course, semester and grade management system with GPA calculation and student management.",
    tech: ["Java", "Spring Boot", "PostgreSQL"],
    githubUrl: "https://github.com/Hilalkrkmz/GradeFlow",
    featured: true,
  },
  {
    title: "Leave Management System",
    category: "Full-Stack",
    description:
      "Leave management and approval system for employees with role-based access and notifications.",
    tech: ["Java", "Spring Boot", "React"],
    liveUrl: "#",
    githubUrl: "https://github.com/Hilalkrkmz/izinTakipSistemi",
    featured: true,
  },
];

export const about = {
  paragraphs: [
    "I'm a Software Engineering student focused on backend development. I enjoy building applications with Java and Spring Boot, designing RESTful APIs and working with relational databases.",
    "I like turning ideas into real products and continuously learning new technologies.",
  ],
  badges: ["Always Learning", "Clean Code Focused", "Problem Solver"],
};

export type SkillGroup = { title: string; items: string[] };

export const skills: SkillGroup[] = [
  {
    title: "Backend",
    items: ["Java", "Spring Boot", "REST API", "Spring Security", "JPA / Hibernate"],
  },
  { title: "Database", items: ["PostgreSQL", "SQL"] },
  { title: "Frontend", items: ["React", "HTML", "CSS", "JavaScript"] },
  { title: "Mobile", items: ["React Native"] },
  { title: "Testing", items: ["JUnit", "Mockito", "Spring Boot Test"] },
  { title: "Deployment", items: ["Railway", "Docker (basic)"] },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  note?: string;
  bullets: string[];
};

export const experience: Experience[] = [
  {
    role: "Software Development Intern",
    company: "İnönü Üniversitesi Dijital Dönüşüm Ofisi",
    period: "Jun 2026 – Jul 2026",
    note: "40 days",
    bullets: [
      "Developed full-stack and backend applications",
      "Worked with Spring Boot and REST APIs",
      "Designed and integrated PostgreSQL databases",
      "Implemented testing and cloud deployment workflows",
    ],
  },
];

// GitHub istatistikleri — gerçek sayıları koy ya da bu bloğu kaldır.
export const githubStats = [
  { value: "20+", label: "Repositories" },
  { value: "400+", label: "Commits" },
  { value: "6", label: "Projects" },
  { value: "1", label: "Year coding" },
];
