"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Code,
  Cpu,
  Zap,
  BookOpen,
  Cloud,
  Github,
  Sparkles,
  ExternalLink,
  type LucideIcon,
} from "lucide-react";
import { achievements } from "@/data/achievements";
import type { AchievementCategory } from "@/data/achievements";
import { cn } from "@/lib/utils";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// ─── Icon map ──────────────────────────────────────────────────────────────
export const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  code: Code,
  cpu: Cpu,
  zap: Zap,
  "book-open": BookOpen,
  cloud: Cloud,
  github: Github,
  sparkles: Sparkles,
};

// ─── Category config ────────────────────────────────────────────────────────
export const categoryConfig: Record<
  AchievementCategory | "all",
  { label: string; textClass: string; bgClass: string; borderClass: string }
> = {
  all: {
    label: "All",
    textClass: "text-slate-600 dark:text-slate-300",
    bgClass: "bg-slate-100 dark:bg-slate-500/10",
    borderClass: "border-slate-200 dark:border-slate-500/20",
  },
  hackathon: {
    label: "Hackathon",
    textClass: "text-amber-600 dark:text-amber-400",
    bgClass: "bg-amber-100 dark:bg-amber-500/10",
    borderClass: "border-amber-200 dark:border-amber-500/20",
  },
  certification: {
    label: "Certifications",
    textClass: "text-cyan-600 dark:text-cyan-400",
    bgClass: "bg-cyan-100 dark:bg-cyan-500/10",
    borderClass: "border-cyan-200 dark:border-cyan-500/20",
  },
  academic: {
    label: "Academic",
    textClass: "text-emerald-600 dark:text-emerald-400",
    bgClass: "bg-emerald-100 dark:bg-emerald-500/10",
    borderClass: "border-emerald-200 dark:border-emerald-500/20",
  },
  other: {
    label: "Other",
    textClass: "text-purple-600 dark:text-purple-400",
    bgClass: "bg-purple-100 dark:bg-purple-500/10",
    borderClass: "border-purple-200 dark:border-purple-500/20",
  },
};

export const filters: (AchievementCategory | "all")[] = ["all", "hackathon", "certification", "academic"];

// ─── Stats ──────────────────────────────────────────────────────────────────
export const stats = [
  { emoji: "🏆", count: 4, label: "Hackathon Finalists", colorClass: "text-amber-600 dark:text-amber-400" },
  { emoji: "☁️", count: 5, label: "Cloud Certifications", colorClass: "text-cyan-600 dark:text-cyan-400" },
  { emoji: "📚", count: 1, label: "Academic Milestone", colorClass: "text-emerald-600 dark:text-emerald-400" },
];

// ─── Featured Card ──────────────────────────────────────────────────────────
export function FeaturedCard() {
  const featured = achievements.find((a) => a.featured);
  if (!featured) return null;
  const cfg = categoryConfig.hackathon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mb-8 col-span-full"
    >
      <div className={cn("relative overflow-hidden rounded-2xl p-[1px] bg-gradient-to-br from-amber-300/50 via-background to-amber-300/50 dark:from-amber-500/20 dark:via-background dark:to-amber-500/20")}>
        <Card className="relative rounded-2xl border-none bg-card/95 backdrop-blur-sm shadow-lg dark:shadow-none overflow-hidden">
          <CardContent className="p-6 md:p-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              {/* Trophy icon */}
              <div
                className={cn(
                  "flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center border",
                  cfg.bgClass,
                  cfg.borderClass
                )}
              >
                <Trophy className={cn("w-8 h-8", cfg.textClass)} />
              </div>

              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <Badge
                    variant="outline"
                    className={cn(
                      "font-semibold rounded-full border px-3 py-1 text-xs",
                      cfg.bgClass,
                      cfg.textClass,
                      cfg.borderClass
                    )}
                  >
                    🥈 Runner-Up
                  </Badge>
                  <span className="text-xs font-medium text-muted-foreground">{featured.year}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1">
                  {featured.title}
                </h3>
                <p className="text-muted-foreground line-clamp-2 md:line-clamp-none">{featured.description}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}

// ─── Regular Card ────────────────────────────────────────────────────────────
export function AchievementCard({
  achievement,
  index,
}: {
  achievement: (typeof achievements)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const cfg = categoryConfig[achievement.category] || categoryConfig.other;
  const Icon = iconMap[achievement.icon] ?? Award;

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      animate={{ y: hovered ? -4 : 0 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-full"
    >
      <Card
        className={cn(
          "relative h-full min-h-[120px] transition-all duration-200 overflow-hidden",
          hovered ? cfg.borderClass : "border-border",
          hovered ? "shadow-md dark:shadow-none" : "shadow-sm"
        )}
      >
        <div
          className={cn(
            "absolute inset-0 opacity-0 transition-opacity duration-200",
            hovered ? "opacity-100" : "",
            cfg.bgClass
          )}
        />
        <CardContent className="relative p-5 flex flex-col gap-3 h-full z-10">
          {/* Top row: icon + category pill */}
          <div className="flex items-center justify-between">
            <div
              className={cn(
                "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 border transition-colors duration-200",
                cfg.bgClass,
                cfg.borderClass
              )}
            >
              <Icon className={cn("w-5 h-5", cfg.textClass)} />
            </div>
            <span
              className={cn(
                "text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider border transition-colors duration-200",
                cfg.bgClass,
                cfg.textClass,
                cfg.borderClass
              )}
            >
              {cfg.label}
            </span>
          </div>

          {/* Title */}
          <p className="font-semibold text-foreground text-sm leading-snug flex-1 mt-2">
            {achievement.title}
          </p>

          {/* Description + year */}
          <p className="text-xs text-muted-foreground line-clamp-2">{achievement.description}</p>

          {/* Footer */}
          <div className="flex items-center justify-between mt-auto pt-2">
            <span className="text-[11px] font-medium text-muted-foreground">{achievement.year}</span>
            {achievement.url && (
              <motion.span
                animate={{ opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.15 }}
                className={cn("text-[11px] font-semibold flex items-center gap-1", cfg.textClass)}
              >
                View <ExternalLink className="w-3 h-3" />
              </motion.span>
            )}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );

  if (achievement.url) {
    return (
      <a href={achievement.url} target="_blank" rel="noopener noreferrer" className="block h-full">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

// ─── Main Section ────────────────────────────────────────────────────────────
export function Achievements() {
  const [activeFilter, setActiveFilter] = useState<AchievementCategory | "all">("all");

  const filtered =
    activeFilter === "all"
      ? achievements.filter((a) => !a.featured)
      : achievements.filter((a) => !a.featured && a.category === activeFilter);

  return (
    <section className="py-12 md:py-24 bg-background">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Header */}
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Achievements
            </h2>
            <p className="mx-auto max-w-[700px] mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Recognition and milestones from my technical journey
            </p>
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {stats.map((stat) => (
            <Badge
              key={stat.label}
              variant="outline"
              className="px-4 py-2 bg-card text-foreground flex items-center gap-2"
            >
              <span className="text-base">{stat.emoji}</span>
              <span className={cn("text-sm font-bold", stat.colorClass)}>
                {stat.count}
              </span>
              <span className="text-sm font-medium text-muted-foreground">{stat.label}</span>
            </Badge>
          ))}
        </motion.div>

        {/* Filter tabs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2 mb-10"
        >
          {filters.map((f) => {
            const cfg = categoryConfig[f];
            const isActive = activeFilter === f;
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border",
                  isActive
                    ? cn(cfg.bgClass, cfg.textClass, cfg.borderClass)
                    : "bg-transparent text-muted-foreground border-border hover:bg-muted"
                )}
              >
                {cfg.label}
              </button>
            );
          })}
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Featured card always shows when filter is "all" or "hackathon" */}
          {(activeFilter === "all" || activeFilter === "hackathon") && (
            <FeaturedCard />
          )}

          <AnimatePresence mode="popLayout">
            {filtered.map((achievement, i) => (
              <motion.div
                key={achievement.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: i * 0.05 }}
                className={cn("col-span-1")}
              >
                <AchievementCard achievement={achievement} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
