"use client";

import { motion } from "framer-motion";
import { Braces, Database, LayoutGrid, Sparkles } from "lucide-react";
import { services } from "@/lib/content";
import { TechPlayground } from "./TechPlayground";

const ICONS = [LayoutGrid, Database, Sparkles, Braces];

const TONE_BG: Record<string, string> = {
  accent: "bg-accent text-paper",
  ink: "bg-paper text-ink",
};

export function Skills() {
  return (
    <section id="skills" className="bg-ink px-6 py-24 text-paper">
      <div className="mx-auto max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm font-medium tracking-[0.25em] text-accent uppercase"
        >
          What I bring
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-lg font-display text-3xl font-bold text-paper sm:text-4xl"
        >
          Full-stack range, frontend focus.
        </motion.h2>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col rounded-xl border border-paper/10 bg-ink-2 p-6"
              >
                <div className={`flex h-11 w-11 items-center justify-center rounded-md ${TONE_BG[service.tone]}`}>
                  <Icon size={20} />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-paper">
                  {service.title}
                </h3>
                <p className="mt-2 font-body text-sm leading-relaxed text-paper/55">
                  {service.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-paper/10 px-2.5 py-1 font-body text-xs text-paper/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <TechPlayground />
      </div>
    </section>
  );
}
