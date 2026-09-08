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
  image?: string; // public/ altındaki ekran görüntüsü — yoksa degrade placeholder
  liveUrl?: string; // deploy edilince ekle
  githubUrl?: string;
  wip?: boolean; // "In progress" rozeti
  featured: boolean;
};

export const projects: Project[] = [
  {
    title: "TaskFlow",
    category: "Web · Desktop · Mobile",
    description:
      "Task, note & focus manager — one Spring Boot backend serving three clients: web, Windows desktop (Electron) and Android (React Native). Email-verified accounts, a Pomodoro timer with logged session history, an activity calendar and 9 themes.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React", "Electron", "React Native"],
    image: "/projects/taskflow.png",
    githubUrl: "https://github.com/Hilalkrkmz/TaskFlow",
    featured: true,
  },
  {
    title: "FileFlow",
    category: "Full-Stack",
    description:
      "Web file manager built with Spring Boot 3 and React. Folder upload with preserved structure, user-to-user and 24-hour link sharing, search across shared files, soft-delete trash, storage quotas, and an admin panel for users and files.",
    tech: ["Java 17", "Spring Boot 3", "Spring Security", "JWT", "PostgreSQL", "React"],
    image: "/projects/fileflow.png",
    githubUrl: "https://github.com/Hilalkrkmz/file-management-system",
    featured: true,
  },
  {
    title: "GradeFlow",
    category: "Full-Stack",
    description:
      "Course, semester and grade management with weighted grade items, automatic GPA calculation and a dashboard. Spring Boot backend with JWT auth (email verification, refresh tokens) and a React frontend.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
    githubUrl: "https://github.com/Hilalkrkmz/GradeFlow",
    wip: true,
    featured: true,
  },
  {
    title: "Leave Management System",
    category: "Full-Stack",
    description:
      "Employee leave management on a Spring Boot + React (Vite) stack. JWT auth with role-based access, annual leave-balance tracking with auto-deduction on approval, an approval/rejection workflow, and soft-delete to preserve historical records.",
    tech: ["Java 17", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "React"],
    githubUrl: "https://github.com/Hilalkrkmz/leave-management-system",
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

export type Education = {
  school: string;
  program: string;
  degree: string;
  period: string;
  note?: string;
  courses?: string[]; // opsiyonel — ilgili dersler
};

export const education: Education[] = [
  {
    school: "İnönü Üniversitesi",
    program: "Software Engineering",
    degree: "BSc",
    period: "2023 – 2027", // TODO: başlangıç/mezuniyet yılını doğrula
    note: "4th year",
    courses: [],
  },
];
