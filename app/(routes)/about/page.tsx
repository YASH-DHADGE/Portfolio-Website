// app/(routes)/about/page.tsx
"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Trophy } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/education";
import { skills, type SkillCategory } from "@/data/skills";
import { StarHeader } from "@/components/shared/star-header";

import {
  achievements,
  type AchievementCategory,
} from "@/data/achievements";
import {
  categoryConfig,
  filters,
  stats,
  FeaturedCard,
  AchievementCard,
} from "@/components/home/achievements";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function AboutPage() {
  const [activeFilter, setActiveFilter] = useState<AchievementCategory | "all">("all");

  const filtered =
    activeFilter === "all"
      ? achievements.filter((a) => !a.featured)
      : achievements.filter((a) => !a.featured && a.category === activeFilter);

  return (
    <>
      <StarHeader>
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center justify-center space-y-4 text-center"
          >
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              About Me
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Get to know more about my background and skills
            </p>
          </motion.div>
        </div>
      </StarHeader>

      <section className="pb-12 md:pb-24">
        <div className="container mx-auto px-4 md:px-6">
          {/* Bio + Skills — 2-column grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left — Bio + Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Who I Am</h2>
              <Card>
                <CardContent className="space-y-4 p-6 leading-relaxed">
                  <p>
                    I&apos;m Yash Milind Dhadge, a Full-Stack Developer and AI/ML Enthusiast pursuing
                    my Bachelor of Technology in Computer Engineering at PCCOER, Pune. I build
                    highly scalable, user-centric web and mobile applications with a strong focus on
                    EdTech and workflow automation platforms.
                  </p>
                  <p>
                    I&apos;m passionate about solving real-world problems. Whether it&apos;s leading
                    my team to runner-up position at the Smart India Hackathon (SIH 2025) with a
                    gamified learning platform, passing the OpenAI × NxtWave Buildathon to finals,
                    or engineering autonomous CI/CD pipelines, I thrive on building meaningful
                    solutions. I also actively mentor peers and give back to the community as the
                    Chairperson of the ACMxPCCOER Student Chapter.
                  </p>
                  <p>
                    My tech stack spans the modern web — React, React Native, Vite on the frontend,
                    Node.js, Express, Django on the backend, and multiple AI/ML integrations
                    (LangChain, OpenAI, Gemini) to craft intelligent systems. With certifications
                    in Oracle Generative AI and AWS Cloud Foundations, I ensure the tools I build
                    are robust, secure, and production-ready.
                  </p>
                </CardContent>
              </Card>

              <h2 className="mt-8 mb-4 text-2xl font-bold">Education</h2>
              <div className="space-y-4">
                {education.map((edu) => (
                  <Card key={edu.id}>
                    <CardContent className="flex gap-4 p-5">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                        <GraduationCap className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold">{edu.degree}</h3>
                        <p className="text-sm text-muted-foreground">{edu.institution}</p>
                        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            {edu.startDate} – {edu.endDate}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            {edu.location}
                          </span>
                        </div>
                        {edu.gpa && (
                          <Badge variant="outline" className="mt-2">
                            {edu.gpa.includes("%") ? "Percentage" : "CGPA"}: {edu.gpa}
                          </Badge>
                        )}
                        {edu.description && (
                          <p className="text-xs text-muted-foreground mt-2">{edu.description}</p>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>

            {/* Right — Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="mb-4 text-2xl font-bold">Skills</h2>
              <div className="space-y-4">
                {Object.keys(skills).map((category) => (
                  <Card key={category}>
                    <CardContent className="p-5">
                      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
                        {category}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {skills[category as SkillCategory].map((skill) => (
                          <Badge key={skill.name} variant="secondary" className="text-xs">
                            {skill.name}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements Section */}
          <div className="mt-24 space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <div className="mb-4 flex items-center justify-center gap-2">
                <Trophy className="h-6 w-6 text-primary" />
                <h2 className="text-3xl font-bold">Achievements</h2>
              </div>
              <p className="mx-auto max-w-xl text-muted-foreground">
                Recognition and milestones from my technical journey
              </p>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-2"
                >
                  <span className="text-base">{stat.emoji}</span>
                  <span className="text-sm font-semibold" style={{ color: stat.color }}>
                    {stat.count}
                  </span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap justify-center gap-2"
            >
              {filters.map((f) => {
                const cfg = categoryConfig[f];
                const isActive = activeFilter === f;
                return (
                  <button
                    key={f}
                    onClick={() => setActiveFilter(f)}
                    className="rounded-full px-5 py-2 text-sm font-medium transition-all duration-200"
                    style={{
                      background: isActive ? cfg.color : "rgba(255,255,255,0.05)",
                      color: isActive ? "#0d0f1a" : cfg.color,
                      border: `1px solid ${isActive ? cfg.color : "rgba(255,255,255,0.10)"}`,
                      boxShadow: isActive ? `0 0 16px ${cfg.glow}` : "none",
                    }}
                  >
                    {cfg.label}
                  </button>
                );
              })}
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {(activeFilter === "all" || activeFilter === "hackathon") && <FeaturedCard />}

              <AnimatePresence mode="popLayout">
                {filtered.map((achievement, i) => (
                  <motion.div
                    key={achievement.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                  >
                    <AchievementCard achievement={achievement} index={i} />
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
