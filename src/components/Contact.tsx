"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/lib/content";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Contact() {
  return (
    <section id="contact" className="bg-ink px-6 py-24 text-paper">
      <div className="mx-auto max-w-4xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-display text-4xl font-bold text-paper sm:text-5xl"
        >
          Let&apos;s build something.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-md font-body text-sm text-paper/50"
        >
          Open to frontend, full-stack and data Engineer Opportunities — or just a good
          conversation about a hard problem.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          href={`mailto:${profile.email}`}
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-7 py-3.5 font-body text-sm font-semibold text-paper transition-opacity hover:opacity-85"
        >
          <Mail size={16} />
          {profile.email}
          <ArrowUpRight size={16} />
        </motion.a>

        <div className="mt-10 flex items-center justify-center gap-6">
          <a
            href={profile.github}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-paper/40 hover:text-paper"
            aria-label="GitHub"
          >
            <GithubIcon size={18} />
          </a>
          <a
            href={profile.linkedin}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-paper/15 text-paper/70 transition-colors hover:border-paper/40 hover:text-paper"
            aria-label="LinkedIn"
          >
            <LinkedinIcon size={18} />
          </a>
        </div>
      </div>

      <div className="mx-auto mt-20 flex max-w-6xl flex-col items-center justify-between gap-3 border-t border-paper/10 pt-8 font-body text-xs text-paper/35 sm:flex-row">
        <p>© {new Date().getFullYear()} Akshay Kalbhor. Built with Next.js & Tailwind.</p>
        <p>Delhi, India</p>
      </div>
    </section>
  );
}
