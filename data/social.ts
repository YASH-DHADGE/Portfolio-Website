export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "linkedin",
    name: "LinkedIn",
    url: "https://linkedin.com/in/yash-dhadge",
    icon: "linkedin",
  },
  {
    id: "github",
    name: "GitHub",
    url: "https://github.com/YASH-DHADGE",
    icon: "github",
  },
  {
    id: "email",
    name: "Email",
    url: "mailto:yash.dhadge_comp23@pccoer.in",
    icon: "mail",
  },
  {
    id: "phone",
    name: "Phone",
    url: "tel:+917498193847",
    icon: "phone",
  },
];
