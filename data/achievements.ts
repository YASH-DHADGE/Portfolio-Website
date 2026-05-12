export type AchievementCategory = "hackathon" | "certification" | "academic" | "other";

export interface Achievement {
  id: string;
  title: string;
  description: string;
  year: string;
  category: AchievementCategory;
  icon: string;
  featured?: boolean;
  url?: string;
}

export const achievements: Achievement[] = [
  {
    id: "sih-25",
    title: "SIH'25 Runner-Up — Smart India Hackathon 2025",
    description: "Top 5 finalist out of 500+ teams nationwide",
    year: "November 2025",
    category: "hackathon",
    icon: "trophy",
    featured: true,
  },
  {
    id: "hackathons",
    title: "Finalists in 5+ National level Hackathons and Project Competitions",
    description: "Worked with team collaboration and developed various skills like Leadership, Accountability and Effective Communication.",
    year: "2025 - Present",
    category: "hackathon",
    icon: "medal",
  },
  {
    id: "besa-agenticai",
    title: "Agentic AI on AWS",
    description: "BeSA (Be A Solutions Architect) Certification on Agentic AI on AWS",
    year: "2026",
    category: "certification",
    icon: "cloud",
  },
  {
    id: "oracle-foundations",
    title: "OCI 2025 Certified Foundations Associate",
    description: "Oracle Cloud Infrastructure core foundations certification",
    year: "2025",
    category: "certification",
    icon: "cloud",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4F721BE6C113320BD4B439E1F8D575C7C60FC0BEECA24BC9E432AA102B88C81A",
  },
  {
    id: "oracle-data-ai",
    title: "OCI 2025 Certified Data & AI Foundations Associate",
    description: "Oracle Cloud data & AI fundamentals certification",
    year: "2025",
    category: "certification",
    icon: "cpu",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=693433824DD8CCAE4A2EDB98DEDA1FCAD916C41CD58724FB35479F55CF7567AF",
  },
  {
    id: "oracle-genai-pro",
    title: "OCI 2025 Certified Generative AI Professional",
    description: "Professional-level Oracle GenAI certification",
    year: "2025",
    category: "certification",
    icon: "sparkles",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=775166DF641F6B7F05DF38434F064B28BE7567AD450283908C3163D1AF9685AB",
  },
  {
    id: "oracle-genai-assoc",
    title: "OCI 2025 Certified Generative AI Associate",
    description: "Associate-level Oracle Generative AI certification",
    year: "2025",
    category: "certification",
    icon: "sparkles",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5B44B06DF285BFFAE319AB3C3E349165CEA951A65941B53132C80F4A2472A7B5",
  },
  {
    id: "aws-academy",
    title: "AWS Academy Graduate — Cloud Foundations",
    description: "Amazon Web Services Cloud Foundations program graduate",
    year: "2024",
    category: "certification",
    icon: "cloud",
    url: "https://www.credly.com/badges/b11c8649-ee19-4229-9087-20604303fa31/public_url",
  },
  {
    id: "udemy-fullstack",
    title: "The Complete 2025 Web Development Bootcamp with AI",
    description: "Udemy full-stack web development certification",
    year: "2025",
    category: "certification",
    icon: "code",
    url: "https://www.udemy.com/certificate/UC-62b5fba2-4655-40c5-a66c-283617a852b7/",
  },
  {
    id: "github-achievements",
    title: "GitHub Achievements",
    description: "YOLO · Quickdraw · Pull Shark — earned through open source contributions",
    year: "2024–25",
    category: "other",
    icon: "github",
  },
];

export const achievementTags = ["Hackathon Finalist", "Cloud Certified", "AI/ML Enthusiast", "Student Leadership"];
