import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Yash Milind Dhadge | Full-Stack Developer",
  description:
    "Full-Stack Developer, AI/ML Enthusiast, and Open Source Contributor. Computer Engineering Student @ PCCOER, Pune.",
  metadataBase: new URL("https://yashdhadge.netlify.app/"), // Placeholder URL as requested

  // Basic metadata
  applicationName: "Yash Milind Dhadge Portfolio",
  authors: [{ name: "Yash Milind Dhadge" }],
  keywords: [
    "Software Engineer",
    "Full Stack Developer",
    "AI/ML",
    "React",
    "Next.js",
    "TypeScript",
    "PCCOER",
  ],

  openGraph: {
    type: "website",
    url: "https://yashdhadge.netlify.app/",
    title: "Yash Milind Dhadge | Full-Stack Developer",
    description:
      "Full-Stack Developer, AI/ML Enthusiast, and Open Source Contributor. Computer Engineering Student @ PCCOER, Pune.",
    siteName: "Yash Milind Dhadge",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Yash Milind Dhadge - Portfolio",
      },
    ],
  },

  icons: {
    icon:  { url: "/icon.png", type: "image/png" },
    apple: { url: "/icon.png", type: "image/png" },
  },

  alternates: {
    canonical: "https://yashdhadge.netlify.app/",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <ClientLayout>{children}</ClientLayout>;
}
