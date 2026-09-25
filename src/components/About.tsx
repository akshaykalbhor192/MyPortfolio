"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-paper px-6 py-24 text-ink">
      <div className="mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm font-medium tracking-[0.25em] text-accent uppercase"
        >
          About
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-4 font-display text-2xl font-medium leading-snug text-ink sm:text-3xl"
        >
          IT graduate passionate about Data Engineering, Data Analytics, and Software Development.
          I build data-driven solutions, ETL pipelines, dashboards, and scalable applications using modern technologies.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-6 max-w-xl font-body text-sm text-ink/55"
        >
          Two internships, a handful of shipped projects, and a habit of
          reaching for whichever tool — frontend, backend, or a notebook full
          of pandas — actually solves the problem.
        </motion.p>

        <div className="mt-16 grid grid-cols-2 gap-8 border-t border-ink/10 pt-12 sm:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="font-display text-4xl font-bold text-accent sm:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 font-body text-xs font-medium tracking-wide text-ink/45 uppercase">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
