// data/skills.ts
export type SkillCategory =
  | "Languages"
  | "Frontend"
  | "Backend & APIs"
  | "AI/ML"
  | "Databases"
  | "Cloud & DevOps"
  | "Computer Engg Fundamentals"
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
  ],
  Frontend: [
    { name: "React.js", category: "Frontend", logoKey: "react" },
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
    { name: "Agentic AI", category: "AI/ML", logoKey: "agenticai" },
    { name: "RAG", category: "AI/ML", logoKey: "rag" },
    { name: "n8n", category: "AI/ML", logoKey: "n8n" },
    { name: "Prompt Engineering", category: "AI/ML", logoKey: "promptengineering" },
  ],
  Databases: [
    { name: "MongoDB", category: "Databases", logoKey: "mongodb" },
    { name: "MySQL", category: "Databases", logoKey: "mysql" },
  ],
  "Computer Engg Fundamentals": [
  { name: "OOPs", category: "Computer Engg Fundamentals", logoKey: "oops" },
  { name: "DSA", category: "Computer Engg Fundamentals", logoKey: "dsa" },
  { name: "DBMS", category: "Computer Engg Fundamentals", logoKey: "dbms" },
  { name: "Software Engineering", category: "Computer Engg Fundamentals", logoKey: "se" },
  { name: "Cloud", category: "Computer Engg Fundamentals", logoKey: "cloud" },
  { name: "Data Science", category: "Computer Engg Fundamentals", logoKey: "datascience" },
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
  { name: "Supabase", category: "Tools & Concepts", logoKey: "supabase" },
  { name: "OAuth 2.0", category: "Tools & Concepts", logoKey: "github" },
  { name: "Cursor AI", category: "Tools & Concepts", logoKey: "cursorai" },
  { name: "Postman", category: "Tools & Concepts", logoKey: "postman" },
  { name: "Figma", category: "Tools & Concepts", logoKey: "figma" },
],
};
