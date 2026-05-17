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

  // ── Other Projects ─────────────────────────────────────────────────

  {
    id: "roleready",
    title: "RoleReady",
    description:
      "A full-stack AI-powered resume builder that parses resumes, matches skills against job descriptions, and exports optimized resumes — with a Chrome extension for LinkedIn integration.",
    longDescription:
      "Architected a microservices-based resume intelligence platform with a React frontend, Express backend, and a dedicated FastAPI AI service. Leveraged Mistral Large for smart resume parsing and Groq LLaMA 3 70B for deep skill extraction from job descriptions. Implemented semantic skill matching using sentence-transformers (all-MiniLM-L6-v2) to generate ATS compatibility scores. Built a Chrome Extension (Manifest V3) that scrapes LinkedIn job postings and triggers one-click analysis. Enabled multi-format export (DOCX via docxtemplater, PDF via Puppeteer) and email delivery of optimized resumes via Nodemailer.",
    technologies: [
      "React 18",
      "Vite",
      "TailwindCSS",
      "Node.js",
      "Express 5",
      "MongoDB Atlas",
      "FastAPI",
      "Python",
      "Mistral Large",
      "Groq LLaMA 3 70B",
      "sentence-transformers",
      "Puppeteer",
      "Chrome Extension (MV3)"
    ],
    achievements: [
      "Built AI resume parser using Mistral Large to extract structured sections from PDF/DOCX",
      "Developed ATS score engine with semantic skill matching via sentence-transformers",
      "Created Chrome Extension (Manifest V3) for one-click LinkedIn job post analysis",
      "Implemented multi-format export — DOCX (docxtemplater) and PDF (Puppeteer)",
      "Designed microservices architecture with React, Express, and FastAPI across 3 independent services"
    ],
    github: "https://github.com/YASH-DHADGE/RoleReady",
    featured: false,
  },
  {
  id: "trackr-goal-tracking-portal",
  title: "Trackr – Goal Tracking Portal",
  description:
    "An enterprise-grade in-house goal setting & tracking portal with role-based workflows for employees, managers, and HR/admin.",
  longDescription:
    "A full-stack goal management platform. Features a role-based dashboard system where employees set and submit goals, managers review and approve/rework them, and admins oversee organizational alignment. Implements a tiered escalation ladder (L1 → L2 → L3), audit trail for goal history, and Microsoft Azure SSO via Microsoft Entra ID for enterprise authentication. Integrated email and Microsoft Teams notifications for real-time workflow updates.",
  technologies: [
    "React.js",
    "Vite",
    "Node.js",
    "Express.js",
    "Supabase",
    "PostgreSQL",
    "Microsoft Azure (Entra ID)",
    "Vercel",
  ],
  achievements: [
    "Built end-to-end role-based goal tracking system for Employee, Manager, and Admin/HR roles",
    "Implemented Azure SSO via Microsoft Entra ID for enterprise-grade authentication",
    "Integrated email & Microsoft Teams notifications for goal submission and approval events",
    "AtomQuest Hackathon 2026 by Atomberg Technologies – Participant",
  ],
  github: "https://github.com/YASH-DHADGE/Trackr---Goal-Tracking-Portal",
  featured: false,
},

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
    id: "ecosphere",
    title: "EcoSphere",
    description:
      "A comprehensive full-stack climate change awareness platform with personal carbon tracking, AI-powered chatbot, gamification, and real-time community engagement.",
    longDescription:
      "Built a full-stack web application combining climate awareness, personal carbon footprint tracking, and community challenges. Integrated a Gemini-powered AI chatbot for personalized climate guidance and curated AI-summarized climate news. Implemented a full gamification system with points, badges, leaderboards, and NGO-managed community challenges. Designed a real-time notification layer using WebSockets and Redis, and added PDF export capabilities for personal carbon reports. Deployed via Docker with multi-container orchestration using Nginx, Gunicorn, and Daphne.",
    technologies: [
      "React 18",
      "TypeScript",
      "TailwindCSS",
      "Django REST Framework",
      "Django Channels",
      "PostgreSQL",
      "Supabase",
      "Redis",
      "Celery",
      "Google Gemini",
      "Docker",
      "WebSockets"
    ],
    achievements: [
      "Built AI-powered climate chatbot using Google Gemini for personalized sustainability guidance",
      "Implemented real-time WebSocket notifications with Redis and Django Channels",
      "Designed multi-role platform supporting Individual Users, NGOs, and Admins",
      "Added gamification system with points, badges, challenges, and leaderboards",
      "Enabled PDF carbon report exports with EcoSphere branding"
    ],
    github: "https://github.com/YASH-DHADGE/EcoSphere",
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

];
