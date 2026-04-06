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
  { label: string; color: string; glow: string; border: string; bg: string }
> = {
  all: {
    label: "All",
    color: "#e2e8f0",
    glow: "rgba(226,232,240,0.15)",
    border: "rgba(226,232,240,0.2)",
    bg: "rgba(226,232,240,0.08)",
  },
  hackathon: {
    label: "Hackathon",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.25)",
    border: "rgba(245,158,11,0.4)",
    bg: "rgba(245,158,11,0.08)",
  },
  certification: {
    label: "Certifications",
    color: "#06b6d4",
    glow: "rgba(6,182,212,0.25)",
    border: "rgba(6,182,212,0.4)",
    bg: "rgba(6,182,212,0.08)",
  },
  academic: {
    label: "Academic",
    color: "#10b981",
    glow: "rgba(16,185,129,0.25)",
    border: "rgba(16,185,129,0.4)",
    bg: "rgba(16,185,129,0.08)",
  },
  other: {
    label: "Other",
    color: "#a78bfa",
    glow: "rgba(167,139,250,0.25)",
    border: "rgba(167,139,250,0.4)",
    bg: "rgba(167,139,250,0.08)",
  },
};

export const filters: (AchievementCategory | "all")[] = ["all", "hackathon", "certification", "academic"];

// ─── Stats ──────────────────────────────────────────────────────────────────
export const stats = [
  { emoji: "🏆", count: 4, label: "Hackathon Finalists", color: "#f59e0b" },
  { emoji: "☁️", count: 5, label: "Cloud Certifications", color: "#06b6d4" },
  { emoji: "📚", count: 1, label: "Academic Milestone", color: "#10b981" },
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
      className="mb-6 col-span-full"
    >
      <div
        className="relative overflow-hidden rounded-2xl p-[1px]"
        style={{
          background: `linear-gradient(135deg, ${cfg.border}, rgba(255,255,255,0.04), ${cfg.border})`,
          boxShadow: `0 0 40px ${cfg.glow}`,
        }}
      >
        {/* Shimmer animation overlay */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden pointer-events-none">
          <motion.div
            animate={{ x: ["-100%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear", repeatDelay: 2 }}
            className="absolute inset-y-0 w-1/3 opacity-20"
            style={{
              background: `linear-gradient(90deg, transparent, ${cfg.color}, transparent)`,
            }}
          />
        </div>

        <div
          className="relative rounded-2xl p-6 md:p-8"
          style={{ background: "rgba(15,17,35,0.95)" }}
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            {/* Trophy icon */}
            <div
              className="flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center"
              style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
            >
              <Trophy className="w-8 h-8" style={{ color: cfg.color }} />
            </div>

            {/* Content */}
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <span
                  className="text-xs font-semibold px-3 py-1 rounded-full"
                  style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}` }}
                >
                  🥈 Runner-Up
                </span>
                <span className="text-xs text-slate-400">{featured.year}</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-1">
                {featured.title}
              </h3>
              <p className="text-slate-400">{featured.description}</p>
            </div>
          </div>
        </div>
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
  const cfg = categoryConfig[achievement.category];
  const Icon = iconMap[achievement.icon] ?? Award;

  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      animate={{ y: hovered ? -4 : 0 }}
      style={{
        transition: "transform 200ms ease, box-shadow 200ms ease",
        boxShadow: hovered ? `0 8px 32px ${cfg.glow}` : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative h-full rounded-xl overflow-hidden cursor-pointer"
    >
      {/* Border */}
      <div
        className="absolute inset-0 rounded-xl transition-all duration-200"
        style={{
          border: `1px solid ${hovered ? cfg.border : "rgba(255,255,255,0.08)"}`,
          pointerEvents: "none",
        }}
      />

      {/* Body */}
      <div
        className="relative h-full min-h-[120px] p-5 flex flex-col gap-3 rounded-xl"
        style={{
          background: hovered ? cfg.bg : "rgba(255,255,255,0.04)",
          transition: "background 200ms ease",
        }}
      >
        {/* Top row: icon + category pill */}
        <div className="flex items-center justify-between">
          <div
            className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: cfg.bg, border: `1px solid ${cfg.border}` }}
          >
            <Icon className="w-5 h-5" style={{ color: cfg.color }} />
          </div>
          <span
            className="text-[10px] font-semibold px-2 py-0.5 rounded-full uppercase tracking-wider"
            style={{ background: cfg.bg, color: cfg.color }}
          >
            {cfg.label}
          </span>
        </div>

        {/* Title */}
        <p className="font-semibold text-white text-sm leading-snug flex-1">
          {achievement.title}
        </p>

        {/* Description + year */}
        <p className="text-xs text-slate-400 line-clamp-2">{achievement.description}</p>

        {/* Footer */}
        <div className="flex items-center justify-between mt-auto pt-1">
          <span className="text-[11px] text-slate-500">{achievement.year}</span>
          {achievement.url && (
            <motion.span
              animate={{ opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.15 }}
              className="text-xs font-medium flex items-center gap-1"
              style={{ color: cfg.color }}
            >
              View <ExternalLink className="w-3 h-3" />
            </motion.span>
          )}
        </div>
      </div>
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
    <section
      className="relative overflow-hidden py-16 md:py-28"
      style={{ background: "linear-gradient(180deg, #0d0f1a 0%, #0a0c18 100%)" }}
    >
      {/* Subtle background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white tracking-tight mb-3">
            Achievements
          </h2>
          <p className="text-slate-400 text-base md:text-lg max-w-xl mx-auto">
            Recognition and milestones from my technical journey
          </p>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-4 mb-10"
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-4 py-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <span className="text-base">{stat.emoji}</span>
              <span className="text-sm font-semibold" style={{ color: stat.color }}>
                {stat.count}
              </span>
              <span className="text-sm text-slate-400">{stat.label}</span>
            </div>
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
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-200"
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
