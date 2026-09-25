"use client";

import { motion } from "framer-motion";
import { education, experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="bg-paper-2/50 px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="font-body text-sm font-medium tracking-[0.25em] text-accent uppercase"
        >
          Experience
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl"
        >
          Where I&apos;ve worked.
        </motion.h2>

        <div className="mt-14 space-y-10">
          {experience.map((job, i) => (
            <motion.div
              key={job.role}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative rounded-2xl border border-line bg-paper p-7 pl-8 sm:p-8 sm:pl-10"
            >
              <div className="absolute top-8 left-0 h-2 w-2 -translate-x-[5px] rounded-full bg-accent sm:top-9" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                  {job.role}
                </h3>
                <span className="font-body text-xs font-medium tracking-wide text-accent uppercase">
                  {job.period}
                </span>
              </div>
              <p className="mt-1 font-body text-sm text-ink/50">{job.org}</p>
              <ul className="mt-4 space-y-2">
                {job.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 font-body text-sm leading-relaxed text-ink/65"
                  >
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-ink/30" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-line pt-10"
        >
          <p className="font-body text-xs font-medium tracking-[0.2em] text-accent uppercase">
            Education
          </p>

          <div className="mt-6 space-y-4">
            {education.map((edu) => (
              <div
                key={edu.institution}
                className="flex flex-col gap-5 rounded-2xl border border-line bg-paper p-6 sm:flex-row sm:items-center sm:p-7"
              >
                {/* Swap for <Image src={edu.logo} .../> once the crest is supplied */}
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl  font-display text-xs font-bold tracking-tight text-ink">
                  <img src={edu.logo} alt="BVP Logo" width={64} height={64} />
                </div>

                <div className="flex-1">
                  <h3 className="font-display text-lg font-bold text-ink sm:text-xl">
                    {edu.degree}
                  </h3>
                  <p className="mt-1 font-body text-sm text-ink/50">{edu.institution}</p>
                </div>

                <div className="flex gap-8 border-t border-line pt-5 sm:border-t-0 sm:border-l sm:pt-0 sm:pl-7">
                  {edu.stat && (
                    <div>
                      <p className="font-display text-2xl font-bold text-accent">
                        {edu.stat.value}
                      </p>
                      <p className="mt-1 font-body text-xs font-medium tracking-wide text-ink/45 uppercase">
                        {edu.stat.label}
                      </p>
                    </div>
                  )}
                  <div>
                    <p className="font-display text-sm font-bold text-ink">Completed</p>
                    <p className="mt-1 font-body text-xs font-medium tracking-wide text-ink/45 uppercase">
                      {edu.period.includes("–") ? edu.period.split("–")[1]?.trim() : edu.period}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
