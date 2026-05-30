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
  },
  {
    id: "hsc",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Maharashtra State Board",
    location: "Pune, India",
    startDate: "2021",
    endDate: "2023",
    gpa: "75%",
  },
  {
    id: "ssc",
    degree: "Secondary School Certificate (SSC)",
    institution: "Maharashtra State Board",
    location: "Pune, India",
    startDate: "2020",
    endDate: "2021",
    gpa: "82.2%",
  }
];
