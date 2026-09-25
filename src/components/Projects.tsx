"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, SquareArrowOutUpRight } from "lucide-react";
import { projects } from "@/lib/content";
import { GithubIcon } from "./icons";

const THUMB_TONE = ["bg-ink", "bg-accent", "bg-ink-2"];

// "#" is the placeholder used in content.ts for a link that isn't ready yet —
// treat it (and anything empty) as "no link" so the button doesn't render.
function hasLink(url: string | null | undefined) {
  return Boolean(url && url !== "#");
}

export function Projects() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  function updateArrows() {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < track.scrollWidth - track.clientWidth - 8);
  }

  useEffect(() => {
    updateArrows();
    const track = trackRef.current;
    if (!track) return;
    const onResize = () => updateArrows();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function scrollByCard(dir: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector("[data-card]") as HTMLElement | null;
    const amount = (card?.offsetWidth ?? 340) + 24;
    track.scrollBy({ left: dir * amount, behavior: "smooth" });
  }

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="font-body text-sm font-medium tracking-[0.25em] text-accent uppercase"
            >
              Projects
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-3 max-w-lg font-display text-3xl font-bold text-ink sm:text-4xl"
            >
              A few things I&apos;ve built.
            </motion.h2>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => scrollByCard(-1)}
              disabled={!canPrev}
              aria-label="Previous project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowLeft size={17} />
            </button>
            <button
              type="button"
              onClick={() => scrollByCard(1)}
              disabled={!canNext}
              aria-label="Next project"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-paper disabled:pointer-events-none disabled:opacity-30"
            >
              <ArrowRight size={17} />
            </button>
          </div>
        </div>

        <div className="relative mt-14">
          <div
            ref={trackRef}
            onScroll={updateArrows}
            className="no-scrollbar flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2"
          >
            {projects.map((project, i) => (
              <motion.article
                key={project.title}
                data-card
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: Math.min(i, 3) * 0.08 }}
                className="flex w-[85vw] shrink-0 snap-start flex-col overflow-hidden rounded-xl border border-line bg-paper sm:w-[360px]"
              >
                <div
                  className={`flex h-40 items-center justify-center font-display text-4xl font-bold text-paper/90 ${THUMB_TONE[i % THUMB_TONE.length]}`}
                >
                  {project.title
                    .split(" ")
                    .map((w) => w[0])
                    .slice(0, 2)
                    .join("")}
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-display text-lg font-bold text-ink">
                      {project.title}
                    </h3>
                    {project.date && (
                      <span className="shrink-0 font-body text-xs text-ink/40">
                        {project.date}
                      </span>
                    )}
                  </div>
                  <p className="mt-3 font-body text-sm leading-relaxed text-ink/55">
                    {project.description}
                  </p>

                  {project.flow && (
                    <p className="mt-3 rounded-md bg-paper-2 px-2.5 py-2 font-mono text-[11px] leading-relaxed text-ink/50">
                      {project.flow}
                    </p>
                  )}

                  <div className="mt-4 flex flex-1 flex-wrap items-start gap-1.5">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-md bg-paper-2 px-2.5 py-1 font-body text-xs text-ink/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  {(hasLink(project.github) || hasLink(project.live)) && (
                    <div className="mt-6 flex gap-3 border-t border-line pt-4">
                      {hasLink(project.github) && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-ink/70 transition-colors hover:text-ink"
                        >
                          <GithubIcon size={15} /> Code
                        </a>
                      )}
                      {hasLink(project.live) && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-ink/70 transition-colors hover:text-ink"
                        >
                          <SquareArrowOutUpRight size={15} /> Live
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </motion.article>
            ))}

            {/* trailing spacer so the last card can snap fully into view */}
            <div className="w-px shrink-0" />
          </div>

          {canPrev && (
            <div className="pointer-events-none absolute inset-y-0 left-0 w-6 bg-gradient-to-r from-paper to-transparent sm:w-10" />
          )}
          {canNext && (
            <div className="pointer-events-none absolute inset-y-0 right-0 w-6 bg-gradient-to-l from-paper to-transparent sm:w-10" />
          )}
        </div>
      </div>
    </section>
  );
}
