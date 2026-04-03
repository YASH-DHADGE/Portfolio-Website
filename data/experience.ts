// data/experience.ts
export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  type?: "work" | "research" | "education" | "leadership";
}

export const experiences: Experience[] = [
  // ── Work Experience ───────────────────────────────────────
  {
    id: "full-stack-intern",
    title: "Full Stack Developer Intern",
    company: "Scriptlet Solutions",
    location: "Wakad, Pune",
    startDate: "January 2026",
    endDate: "May 2026",
    description: "Worked on live production projects utilizing the MERN stack and developed full-stack web applications for client projects.",
    achievements: [
      "Built and maintained RESTful APIs and integrated third-party services to support product features",
      "Collaborated with cross-functional teams in an agile environment to deliver features across sprint cycles",
      "Contributed to UI/UX improvements, performance optimization, and code reviews on production codebases",
      "Delivered scalable solutions for clients using MongoDB, Express.js, React.js, and Node.js"
    ],
    type: "work",
  },

  // ── Leadership ─────────────────────────────────────────────────────
  {
    id: "acm-chairperson",
    title: "Chairperson",
    company: "ACMxPCCOER Student Chapter",
    location: "Pune, India",
    startDate: "July 2025",
    endDate: "Present",
    description: "Leading strategic planning and technical workshop organization for the student chapter.",
    achievements: [
      "Leading strategic planning and technical workshop organization for 200+ members",
      "Coordinating 15+ events across technical and professional domains",
      "Building a strong coding community on campus"
    ],
    type: "leadership",
  },
  {
    id: "robo-co-head",
    title: "Professional Relations Co-Head",
    company: "RoboRashtra (RoboHawk), PCCOER",
    location: "Pune, India",
    startDate: "August 2024",
    endDate: "July 2025",
    description: "Managed professional relations and strategic partnerships for the robotics club.",
    achievements: [
      "Built strategic partnerships with 10+ industry professionals",
      "Facilitated networking and mentorship opportunities for 100+ student members"
    ],
    type: "leadership",
  },
  {
    id: "codecraft-member",
    title: "Executive Team Member",
    company: "CodeCraft × PCCOER",
    location: "Pune, India",
    startDate: "August 2024",
    endDate: "September 2025",
    description: "Part of the executive committee for the coding club.",
    achievements: [
      "Executed club events and coding competitions",
      "Fostered a competitive programming culture among peers"
    ],
    type: "leadership",
  },
  {
    id: "acm-tech-member",
    title: "Technical Team Member",
    company: "ACM × PCCOER",
    location: "Pune, India",
    startDate: "August 2024",
    endDate: "August 2025",
    description: "Served on the technical team for ACM PCCOER.",
    achievements: [
      "Assisted in technical execution of ACM events",
      "Conducted technical peer-to-peer sessions"
    ],
    type: "leadership",
  },
  {
    id: "navdhara-exec",
    title: "Executive Team Member",
    company: "Navdhara 2024, PCCOER",
    location: "Pune, India",
    startDate: "June 2024",
    endDate: "August 2024",
    description: "Event organization for Navdhara 2024.",
    achievements: [
      "Helped coordinate the Navdhara event",
      "Managed logistical and technical support during the event duration"
    ],
    type: "leadership",
  }
];
