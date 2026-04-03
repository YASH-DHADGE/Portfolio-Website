"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Medal,
  Award,
  Code,
  Cpu,
  Gamepad,
  Zap,
  BookOpen,
  ExternalLink,
  Cloud,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { achievements, achievementTags } from "@/data/achievements";

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  medal: Medal,
  award: Award,
  code: Code,
  cpu: Cpu,
  gamepad: Gamepad,
  zap: Zap,
  "book-open": BookOpen,
  cloud: Cloud,
};

export function Achievements() {
  return (
    <section className="relative overflow-hidden bg-muted/30 py-12 md:py-24">
      <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Achievements
          </h2>
          <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Recognition and milestones from my technical journey
          </p>
        </motion.div>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {achievements.map((achievement, index) => {
            const Icon = iconMap[achievement.icon] ?? Code;
            return (
              <motion.div
                key={achievement.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 15,
                }}
                className="w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-0.75rem)]"
              >
                <Card className={`h-full border-2 transition-all duration-300 ${achievement.url ? 'hover:border-primary cursor-pointer hover:shadow-lg' : ''}`}>
                  {achievement.url ? (
                    <a href={achievement.url} target="_blank" rel="noopener noreferrer" className="block h-full">
                      <CardContent className="flex items-center gap-3 p-4 h-full">
                        <div className={`${achievement.colorClass} shrink-0`}>
                          <Icon className="h-6 w-6" />
                        </div>
                        <div className="text-left flex-1">
                          <p className="font-medium pr-6">{achievement.title}</p>
                        </div>
                        <ExternalLink className="absolute top-4 right-4 h-4 w-4 text-muted-foreground opacity-50" />
                      </CardContent>
                    </a>
                  ) : (
                    <CardContent className="flex items-center gap-3 p-4">
                      <div className={`${achievement.colorClass} shrink-0`}>
                        <Icon className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">{achievement.title}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 inline-flex flex-wrap justify-center gap-2">
          {achievementTags.map((tag) => (
            <Badge key={tag} variant="secondary" className="px-3 py-1.5 text-sm">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
