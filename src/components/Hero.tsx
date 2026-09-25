"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Award, GraduationCap, Sparkles } from "lucide-react";
import { profile } from "@/lib/content";
import { Asterisk } from "./icons";

const EASE = [0.65, 0, 0.35, 1] as const;

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-14 pb-16 md:pt-20 md:pb-24">
      <div className="mx-auto grid max-w-6xl items-end gap-12 md:grid-cols-[1fr_1.1fr]">
        {/* copy */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="font-display text-[13vw] font-bold uppercase leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Hi, I&apos;m Akshay.
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="flex flex-wrap items-center gap-x-4 font-display text-[13vw] font-bold uppercase leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            A creative
            <Asterisk size={36} className="shrink-0 text-accent sm:size-11" />
            developer
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: EASE }}
            className="font-display text-[13vw] font-bold uppercase leading-[0.98] tracking-tight text-ink sm:text-6xl lg:text-7xl"
          >
            Based in{" "}
            <span className="relative text-ink/30">
              Pune
              <span className="absolute left-0 top-1/2 h-[3px] w-full -translate-y-1/2 bg-accent" />
            </span>{" "}
            Delhi
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease: EASE }}
            className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 font-body text-sm font-semibold uppercase tracking-[0.15em] text-ink/60"
          >
            Frontend <Asterisk size={12} className="text-accent" />
            React / Next.js <Asterisk size={12} className="text-accent" />
            Data &amp; AI
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.38, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#projects"
              className="inline-flex items-center rounded-md bg-ink px-6 py-3 font-body text-sm font-semibold text-paper transition-opacity hover:opacity-85"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-md border border-ink px-6 py-3 font-body text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              Let&apos;s talk.
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
            className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-sm text-ink/45"
          >
            <a href={profile.github} className="transition-colors hover:text-ink">
              GitHub
            </a>
            <span className="text-ink/25">·</span>
            <a href={profile.linkedin} className="transition-colors hover:text-ink">
              LinkedIn
            </a>
            <span className="text-ink/25">·</span>
            <a href={`mailto:${profile.email}`} className="transition-colors hover:text-ink">
              {profile.email}
            </a>
            <span className="text-ink/25">·</span>
            <a href={profile.resumeHref} className="transition-colors hover:text-ink">
              Resume
            </a>
          </motion.div>
        </div>

        {/* portrait */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-sm md:max-w-xl"
        >
          <Image
            src="/1.png"
            alt="Akshay Kalbhor"
            width={1183}
            height={1330}
            priority
            sizes="(min-width: 768px) 576px, 384px"
            className="relative z-[1] h-auto w-full select-none"
          />

          {/* floating badges */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: EASE }}
            className="absolute left-20 top-15 z-10 flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-2 shadow-lg shadow-ink/5"
          >
            <GraduationCap size={15} className="text-accent" />
            <span className="font-body text-xs font-semibold text-ink">B.Tech IT · 2026</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.82, ease: EASE }}
            className="absolute -right-30 top-100 z-10 flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-2 shadow-lg shadow-ink/5"
          >
            <Award size={15} className="text-accent" />
            <span className="font-body text-xs font-semibold text-ink">Rank 11,716 · CodeVita</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.94, ease: EASE }}
            className="absolute -bottom-5  left-4 z-10 flex items-center gap-2 rounded-md border border-line bg-paper px-3 py-2 shadow-lg shadow-ink/5"
          >
            <Sparkles size={15} className="text-accent" />
            <span className="font-body text-xs font-semibold text-ink">React &amp; Next.js Certified</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
