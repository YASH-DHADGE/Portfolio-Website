export interface Achievement {
  id: string;
  title: string;
  icon: string;
  colorClass: string;
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
  },
  {
    id: "oracle-genai",
    title: "OCI 2025 Certified Generative AI Professional",
    icon: "cpu",
    colorClass: "text-indigo-600 dark:text-indigo-400",
  },
  {
    id: "aws-academy",
    title: "AWS Academy Graduate — Cloud Foundations",
    icon: "cloud",
    colorClass: "text-amber-600 dark:text-amber-400",
  },
  {
    id: "github-achievements",
    title: "🐙 GitHub Achievements (YOLO · Quickdraw · Pull Shark)",
    icon: "github",
    colorClass: "text-gray-600 dark:text-gray-400",
  }
];

export const achievementTags = ["Hackathon Finalist", "Cloud Certified", "AI/ML Enthusiast", "Student Leadership"];
