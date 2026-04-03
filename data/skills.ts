// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend & APIs"
  | "AI/ML"
  | "Databases"
  | "Cloud & DevOps"
  | "Tools & Concepts";

export interface Skill {
  name: string;
  category: SkillCategory;
  logoKey: string; // Used to generate the CDN URL or default icon
}

export const skills: Record<SkillCategory, Skill[]> = {
  Languages: [
    { name: "JavaScript", category: "Languages", logoKey: "javascript" },
    { name: "Python", category: "Languages", logoKey: "python" },
    { name: "Java", category: "Languages", logoKey: "java" },
    { name: "C++", category: "Languages", logoKey: "cplusplus" },
    { name: "C", category: "Languages", logoKey: "cplusplus" }, // fallback to cpp logo if needed
  ],
  Frontend: [
    { name: "React.js", category: "Frontend", logoKey: "react" },
    { name: "React Native (Expo)", category: "Frontend", logoKey: "react" },
    { name: "Vite", category: "Frontend", logoKey: "vitejs" },
    { name: "HTML5", category: "Frontend", logoKey: "html5" },
    { name: "CSS3", category: "Frontend", logoKey: "css3" },
    { name: "Bootstrap", category: "Frontend", logoKey: "bootstrap" },
  ],
  "Backend & APIs": [
    { name: "Node.js", category: "Backend & APIs", logoKey: "nodejs" },
    { name: "Express.js", category: "Backend & APIs", logoKey: "express" },
    { name: "FastAPI", category: "Backend & APIs", logoKey: "fastapi" },
    { name: "Django", category: "Backend & APIs", logoKey: "django" },
    { name: "RESTful APIs", category: "Backend & APIs", logoKey: "swagger" },
  ],
  "AI/ML": [
    { name: "LangChain", category: "AI/ML", logoKey: "python" },
    { name: "LangGraph", category: "AI/ML", logoKey: "python" },
    { name: "OpenAI API", category: "AI/ML", logoKey: "openai" },
    { name: "Gemini API", category: "AI/ML", logoKey: "google" },
    { name: "MistralAI", category: "AI/ML", logoKey: "python" },
    { name: "RAG", category: "AI/ML", logoKey: "jupyter" },
  ],
  Databases: [
    { name: "MongoDB", category: "Databases", logoKey: "mongodb" },
    { name: "PostgreSQL", category: "Databases", logoKey: "postgresql" },
    { name: "MySQL", category: "Databases", logoKey: "mysql" },
  ],
  "Cloud & DevOps": [
    { name: "AWS", category: "Cloud & DevOps", logoKey: "amazonwebservices" },
    { name: "Google Cloud", category: "Cloud & DevOps", logoKey: "googlecloud" },
    { name: "Oracle Cloud", category: "Cloud & DevOps", logoKey: "oracle" },
    { name: "Vercel", category: "Cloud & DevOps", logoKey: "vercel" },
    { name: "Docker", category: "Cloud & DevOps", logoKey: "docker" },
    { name: "GitHub Actions", category: "Cloud & DevOps", logoKey: "githubactions" },
  ],
  "Tools & Concepts": [
    { name: "Git", category: "Tools & Concepts", logoKey: "git" },
    { name: "OAuth 2.0", category: "Tools & Concepts", logoKey: "github" },
    { name: "Supabase", category: "Tools & Concepts", logoKey: "supabase" },
    { name: "D3.js", category: "Tools & Concepts", logoKey: "d3js" },
    { name: "Socket.IO", category: "Tools & Concepts", logoKey: "socketdotio" },
    { name: "Puppeteer", category: "Tools & Concepts", logoKey: "puppeteer" },
  ],
};
