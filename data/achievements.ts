export interface Achievement {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
  url?: string;
}

export const achievements: Achievement[] = [
  {
    id: "sih-25",
    title: "🥇 SIH'25 Runner-Up — Smart India Hackathon 2025",
    icon: "trophy",
    colorClass: "text-yellow-600 dark:text-yellow-400",
  },
  {
    id: "mit-kurukshetra",
    title: "🎯 MIT Kurukshetra 2025 Finalist",
    icon: "medal",
    colorClass: "text-blue-600 dark:text-blue-400",
  },
  {
    id: "nxtwave-buildathon",
    title: "🤖 OpenAI × NxtWave AI Buildathon Finalist",
    icon: "award",
    colorClass: "text-purple-600 dark:text-purple-400",
  },
  {
    id: "rift-hackathon",
    title: "⚡ RIFT 2026 Hackathon Semi-Finalist",
    icon: "zap",
    colorClass: "text-orange-600 dark:text-orange-400",
  },
  {
    id: "mht-cet",
    title: "🏅 96 Percentile — MHT-CET",
    icon: "book-open",
    colorClass: "text-green-600 dark:text-green-400",
  },
  {
    id: "oracle-foundations",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    icon: "code",
    colorClass: "text-red-600 dark:text-red-400",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=4F721BE6C113320BD4B439E1F8D575C7C60FC0BEECA24BC9E432AA102B88C81A",
  },
  {
    id: "oracle-data-ai",
    title: "OCI 2025 Certified Data & AI Foundations Associate",
    icon: "cpu",
    colorClass: "text-indigo-600 dark:text-indigo-400",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=693433824DD8CCAE4A2EDB98DEDA1FCAD916C41CD58724FB35479F55CF7567AF",
  },
  {
    id: "oracle-genai",
    title: "OCI 2025 Certified Generative AI Professional",
    icon: "zap",
    colorClass: "text-purple-600 dark:text-purple-400",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=775166DF641F6B7F05DF38434F064B28BE7567AD450283908C3163D1AF9685AB",
  },
  {
    id: "oracle-genai-assoc",
    title: "OCI 2025 Certified Generative AI Associate",
    icon: "award",
    colorClass: "text-blue-600 dark:text-blue-400",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5B44B06DF285BFFAE319AB3C3E349165CEA951A65941B53132C80F4A2472A7B5",
  },
  {
    id: "aws-academy",
    title: "AWS Academy Graduate — Cloud Foundations",
    icon: "cloud",
    colorClass: "text-amber-600 dark:text-amber-400",
    url: "https://www.credly.com/badges/b11c8649-ee19-4229-9087-20604303fa31/public_url",
  },
  {
    id: "udemy-fullstack",
    title: "The Complete 2025 Web Development BootCamp — Udemy",
    icon: "code",
    colorClass: "text-green-600 dark:text-green-400",
    url: "https://www.udemy.com/certificate/UC-62b5fba2-4655-40c5-a66c-283617a852b7/",
  },
  {
    id: "github-achievements",
    title: "🐙 GitHub Achievements (YOLO · Quickdraw · Pull Shark)",
    icon: "github",
    colorClass: "text-gray-600 dark:text-gray-400",
  }
];

export const achievementTags = ["Hackathon Finalist", "Cloud Certified", "AI/ML Enthusiast", "Student Leadership"];
