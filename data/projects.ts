export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  achievements: string[];
  github?: string;
  liveUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  // ── Featured Projects ──────────────────────────────────────────────
  {
    id: "documind",
    title: "DocuMind — NotebookLM Clone",
    description:
      "A full-stack AI document intelligence platform with RAG-based chat using Vectorless DB and podcast generation.",
    longDescription:
      "Engineered a full-stack AI document intelligence platform with RAG-based chat using Vectorless DB (PageIndex). Features include podcast generation, quizzes, flashcards, and interactive mind maps powered by Gemini API and LangChain. Built automated video overview pipeline using Puppeteer headless Chromium (1920×1080) and Fluent-FFmpeg with Ken Burns zoom-pan effects; streamed live job progress via SSE. Rendered interactive mind maps using D3.js and optimized document processing pipeline with caching, reducing processing time by 75%.",
    technologies: [
      "React 18",
      "Vite",
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini API",
      "LangChain",
      "D3.js",
      "Puppeteer",
      "Fluent-FFmpeg"
    ],
    achievements: [
      "Engineered a full-stack AI document intelligence platform with RAG-based chat",
      "Built automated video overview pipeline using Puppeteer and Fluent-FFmpeg",
      "Optimized document processing pipeline with caching, reducing processing time by 75%"
    ],
    // Placeholder as no image is given
    github: "https://github.com/YASH-DHADGE/NoteBookLM",
    featured: true,
  },
  {
    id: "digital-dockers",
    title: "Digital Dockers Suite",
    description:
      "AI-Powered Corporate Productivity Platform integrating meeting management, document generation, and email processing.",
    longDescription:
      "An AI-driven workflow automation suite integrating meeting management, document generation, email processing, and multilingual communication tools. Reduced corporate administrative overhead by 50%. Implemented intelligent meeting summarization and action item extraction using OpenAI API with 90% accuracy. Built a real-time multilingual translation system supporting 10 languages for seamless cross-border collaboration.",
    technologies: [
      "React.js",
      "Node.js",
      "OpenAI API",
      "Python",
      "NLP",
      "MongoDB"
    ],
    achievements: [
      "Reduced corporate administrative overhead by 50%",
      "Implemented intelligent meeting summarization with 90% accuracy",
      "Built a real-time multilingual translation system supporting 10 languages",
      "OpenAI × NxtWave AI Buildathon Finalist"
    ],

    github: "https://github.com/YASH-DHADGE/Digital-Dockers-Suite",
    featured: true,
  },
  {
    id: "edugames",
    title: "EDUGames",
    description:
      "A cross-platform mobile gamified EdTech learning platform with AI-powered adaptive learning paths.",
    longDescription:
      "Architected a cross-platform mobile app with AI-powered adaptive learning paths, increasing engagement by 65%. Integrated gamification features (points, badges, leaderboards) and push notifications, achieving 80% user retention. Added various simulations and 3D models for better understanding. Developed offline-first architecture for rural students with limited internet connectivity. This project was the Runner-Up at SIH 2025.",
    technologies: [
      "React Native",
      "Expo",
      "Node.js",
      "MongoDB Atlas",
      "MistralAI",
      "Gemini",
      "OneSignal"
    ],
    achievements: [
      "SIH 2025 Runner-Up Project (Problem Code: SIH25048)",
      "Increased user engagement by 65% with AI-powered adaptive learning paths",
      "Achieved 80% user retention by integrating gamification features",
      "Developed offline-first architecture for rural students"
    ],

    github: "https://github.com/YASH-DHADGE/EDUGAMES",
    featured: true,
  },

  // ── Other Projects ─────────────────────────────────────────────────
  {
    id: "hostelpal",
    title: "HostelPal",
    description:
      "A full-featured hostel & mess management system with attendance tracking and fee payments.",
    longDescription:
      "A comprehensive hostel and mess management system featuring attendance tracking, group chat, notifications, fee payment, complaint ticket raising, and food waste reduction tracking.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Django",
      "MySQL",
      "Python"
    ],
    achievements: [
      "Built a full-featured management system for hostels",
      "Implemented food waste reduction tracking"
    ],

    github: "https://github.com/YASH-DHADGE/HostelPal",
    featured: false,
  },
  {
    id: "healops",
    title: "HealOps",
    description:
      "Autonomous CI/CD Healing Agent that intelligently detects, analyzes, and fixes pipeline failures in real time.",
    longDescription:
      "An Autonomous CI/CD Healing Agent that intuitively integrates into DevOps workflows to detect, analyze, and repair pipeline failures in real-time, built for the RIFT 2026 Hackathon where it reached the Semi-Finals.",
    technologies: [
      "Python"
    ],
    achievements: [
      "Semi-Finalist at RIFT 2026 Hackathon (AI/ML & DevOps Automation Track)",
      "Built autonomous self-healing CI/CD pipeline capabilities"
    ],

    github: "https://github.com/YASH-DHADGE/HEALOPS2",
    featured: false,
  },
  {
    id: "airesumebuilder",
    title: "AIResumeBuilder",
    description:
      "AI-powered resume generation tool which also helps to apply for jobs using chrome extension.",
    longDescription:
      "An AI-powered resume generation tool designed and built during my time at Scriptlet Solutions.",
    technologies: [
      "JavaScript",
      "AI Integration"
    ],
    achievements: [
      "Delivered a functional AI resume generation platform"
    ],

    github: "https://github.com/YASH-DHADGE/AIResumeBuilder",
    featured: false,
  },
];
