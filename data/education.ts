export interface Education {
  id: string;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  gpa?: string;
  description?: string;
}

export const education: Education[] = [
  {
    id: "pccoer",
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    institution: "Pimpri Chinchwad College of Engineering and Research (PCCOER)",
    location: "Ravet, Pune",
    startDate: "August 2023",
    endDate: "May 2027",
    gpa: "8.52/10.00",
    description: "Scored 96 Percentile in MHT-CET Maharashtra State Entrance Examination.",
  }
];
