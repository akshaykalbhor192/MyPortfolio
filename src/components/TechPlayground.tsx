"use client";

import { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { Move3d } from "lucide-react";
import type { IconType } from "react-icons";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiPython,
  SiPandas,
  SiPytorch,
  SiHuggingface,
  SiFigma,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";

type Tech = { name: string; Icon: IconType; color: string };

const STACK: Tech[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", Icon: SiNextdotjs, color: "#131118" },
  { name: "TypeScript", Icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F0DB4F" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", Icon: SiNodedotjs, color: "#339933" },
  { name: "Express", Icon: SiExpress, color: "#131118" },
  { name: "FastAPI", Icon: SiFastapi, color: "#009688" },
  { name: "Firebase", Icon: SiFirebase, color: "#FFCA28" },
  { name: "MongoDB", Icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", Icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", Icon: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", Icon: SiSupabase, color: "#3ECF8E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Pandas", Icon: SiPandas, color: "#150458" },
  { name: "PyTorch", Icon: SiPytorch, color: "#EE4C2C" },
  { name: "Hugging Face", Icon: SiHuggingface, color: "#FF9D0B" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Git", Icon: SiGit, color: "#F05032" },
  { name: "GitHub", Icon: SiGithub, color: "#131118" },
  { name: "Postman", Icon: SiPostman, color: "#FF6C37" },
];

const BLOCK = 60;
const GAP = 14;

function clamp(value: number, min: number, max: number) {
  return Math.max(min, Math.min(max, value));
}

export function TechPlayground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);
  const bodiesRef = useRef<Matter.Body[]>([]);
  const boundsRef = useRef({ width: 0, height: 0 });
  const hoveredIndexRef = useRef<number | null>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const { Engine, Runner, Bodies, Composite, Body } = Matter;

    const wallThickness = 80;
    // Generously oversized so the floor/ceiling always span the container
    // even after it grows on resize — only their center gets repositioned.
    const wallSpan = 3000;
    const wallOpts: Matter.IChamferableBodyDefinition = { isStatic: true };

    let engine: Matter.Engine | null = null;
    let runner: Matter.Runner | null = null;
    let rafId = 0;
    let sealTimeoutId = 0;
    let floor: Matter.Body | null = null;
    let ceiling: Matter.Body | null = null;
    let leftWall: Matter.Body | null = null;
    let rightWall: Matter.Body | null = null;
    let bodies: Matter.Body[] = [];

    function sizeFor(width: number) {
      const cols = Math.max(3, Math.floor((width - 32) / (BLOCK + GAP)));
      const rows = Math.ceil(STACK.length / cols);
      const height = clamp(rows * (BLOCK + GAP) + 110, 240, 460);
      return { cols, height };
    }

    // Blocks spawn above the ceiling-less top edge and drop in under gravity —
    // this only runs once init() actually fires (see tryInit below), so the
    // "drop" plays the first time the section scrolls into view, not on load.
    function init(width: number, height: number, cols: number) {
      engine = Engine.create();
      engine.gravity.y = reduceMotion ? 0 : 0.85;

      // The ceiling is added a beat later (see below) — if it existed from
      // frame one it would seal the container's top edge shut, and blocks
      // spawned above it could never fall in.
      floor = Bodies.rectangle(width / 2, height + wallThickness / 2, wallSpan, wallThickness, wallOpts);
      leftWall = Bodies.rectangle(-wallThickness / 2, height / 2, wallThickness, wallSpan, wallOpts);
      rightWall = Bodies.rectangle(width + wallThickness / 2, height / 2, wallThickness, wallSpan, wallOpts);

      bodies = STACK.map((_, i) => {
        const col = i % cols;
        const row = Math.floor(i / cols);
        const x = clamp(
          24 + BLOCK / 2 + col * (BLOCK + GAP) + (Math.random() - 0.5) * 8,
          BLOCK / 2 + 2,
          width - BLOCK / 2 - 2,
        );
        const y = reduceMotion
          ? height - 30 - row * (BLOCK + GAP)
          : -60 - row * (BLOCK + GAP) - Math.random() * 100;
        const body = Bodies.rectangle(x, y, BLOCK, BLOCK, {
          chamfer: { radius: BLOCK * 0.26 },
          restitution: 0.35,
          friction: 0.25,
          frictionAir: 0.015,
          angle: (Math.random() - 0.5) * 1,
        });
        Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.15);
        return body;
      });
      bodiesRef.current = bodies;

      Composite.add(engine.world, [floor, leftWall, rightWall, ...bodies]);

      runner = Runner.create();
      Runner.run(runner, engine);

      // Seal the top once the drop has had time to play out, so tosses
      // afterward stay contained without blocking the entrance animation.
      const sealDelay = reduceMotion ? 0 : 1700;
      sealTimeoutId = window.setTimeout(() => {
        if (!engine) return;
        ceiling = Bodies.rectangle(width / 2, -wallThickness / 2, wallSpan, wallThickness, wallOpts);
        Composite.add(engine.world, ceiling);
      }, sealDelay);

      function sync() {
        bodies.forEach((body, i) => {
          const el = blockRefs.current[i];
          if (!el) return;
          el.style.transform = `translate(${body.position.x - BLOCK / 2}px, ${
            body.position.y - BLOCK / 2
          }px) rotate(${body.angle}rad)`;
        });

        const hi = hoveredIndexRef.current;
        if (hi !== null && tooltipRef.current) {
          const body = bodies[hi];
          if (body) {
            tooltipRef.current.style.transform = `translate(${body.position.x}px, ${
              body.position.y - BLOCK / 2 - 10
            }px) translate(-50%, -100%)`;
          }
        }

        rafId = requestAnimationFrame(sync);
      }
      rafId = requestAnimationFrame(sync);
    }

    function reposition(width: number, height: number) {
      if (!floor || !leftWall || !rightWall) return;
      Body.setPosition(floor, { x: width / 2, y: height + wallThickness / 2 });
      if (ceiling) Body.setPosition(ceiling, { x: width / 2, y: -wallThickness / 2 });
      Body.setPosition(leftWall, { x: -wallThickness / 2, y: height / 2 });
      Body.setPosition(rightWall, { x: width + wallThickness / 2, y: height / 2 });
    }

    let initialized = false;
    let hasSize = false;
    let isVisible = false;
    let latest = { width: 0, height: 0, cols: 3 };

    function tryInit() {
      if (initialized || !hasSize || !isVisible) return;
      initialized = true;
      init(latest.width, latest.height, latest.cols);
    }

    const ro = new ResizeObserver((entries) => {
      const width = entries[0].contentRect.width;
      if (width <= 0) return;
      const { cols, height } = sizeFor(width);
      container.style.height = `${height}px`;
      boundsRef.current = { width, height };
      latest = { width, height, cols };
      hasSize = true;

      if (!initialized) {
        tryInit();
      } else {
        reposition(width, height);
      }
    });
    ro.observe(container);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          isVisible = true;
          tryInit();
          io.disconnect();
        }
      },
      { threshold: 0.15 },
    );
    io.observe(container);

    return () => {
      ro.disconnect();
      io.disconnect();
      window.clearTimeout(sealTimeoutId);
      cancelAnimationFrame(rafId);
      if (runner) Runner.stop(runner);
      if (engine) {
        Composite.clear(engine.world, false);
        Engine.clear(engine);
      }
    };
  }, []);

  function handlePointerDown(index: number) {
    return (e: React.PointerEvent<HTMLDivElement>) => {
      const body = bodiesRef.current[index];
      if (!body) return;
      const el = e.currentTarget;
      el.setPointerCapture(e.pointerId);
      el.style.cursor = "grabbing";

      const { width: W, height: H } = boundsRef.current;
      const pad = BLOCK / 2 + 1;

      const startPointer = { x: e.clientX, y: e.clientY };
      const startBody = { x: body.position.x, y: body.position.y };
      let last = { x: e.clientX, y: e.clientY, t: performance.now() };

      Matter.Body.setVelocity(body, { x: 0, y: 0 });
      Matter.Body.setAngularVelocity(body, 0);

      const MAX_SPEED = 28;
      function onMove(ev: PointerEvent) {
        const now = performance.now();
        const dt = Math.max(16, now - last.t);
        const vx = clamp(((ev.clientX - last.x) / dt) * 16.67, -MAX_SPEED, MAX_SPEED);
        const vy = clamp(((ev.clientY - last.y) / dt) * 16.67, -MAX_SPEED, MAX_SPEED);
        const targetX = clamp(startBody.x + (ev.clientX - startPointer.x), pad, W - pad);
        const targetY = clamp(startBody.y + (ev.clientY - startPointer.y), pad, H - pad);
        Matter.Body.setPosition(body, { x: targetX, y: targetY });
        Matter.Body.setVelocity(body, { x: vx, y: vy });
        last = { x: ev.clientX, y: ev.clientY, t: now };
      }

      function onUp() {
        el.style.cursor = "grab";
        window.removeEventListener("pointermove", onMove);
        window.removeEventListener("pointerup", onUp);
      }

      window.addEventListener("pointermove", onMove);
      window.addEventListener("pointerup", onUp);
    };
  }

  function handleHoverStart(index: number, name: string) {
    return () => {
      hoveredIndexRef.current = index;
      setHoveredTech(name);
    };
  }

  function handleHoverEnd(index: number) {
    return () => {
      if (hoveredIndexRef.current === index) {
        hoveredIndexRef.current = null;
        setHoveredTech(null);
      }
    };
  }

  return (
    <div className="mt-16">
      <div className="flex items-baseline justify-between">
        <p className="font-body text-xs font-medium tracking-[0.2em] text-paper/40 uppercase">
          The toolkit
        </p>
        <p className="inline-flex items-center gap-1.5 rounded-full border border-paper/15 px-3 py-1 font-body text-[11px] text-paper/45">
          <Move3d size={12} className="text-accent" />
          drag them around
        </p>
      </div>

      <div
        ref={containerRef}
        className="relative mt-5 h-[300px] touch-none overflow-hidden border-b-2 border-paper/15"
        style={{
          backgroundImage:
            "radial-gradient(rgba(243,241,234,0.09) 1.4px, transparent 1.4px)",
          backgroundSize: "24px 24px",
          backgroundPosition: "10px 10px",
        }}
      >
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 60% at 50% 100%, rgba(239,75,44,0.10), transparent 70%)",
          }}
        />

        {STACK.map((tech, i) => (
          <div
            key={tech.name}
            ref={(el) => {
              blockRefs.current[i] = el;
            }}
            onPointerDown={handlePointerDown(i)}
            onPointerEnter={handleHoverStart(i, tech.name)}
            onPointerLeave={handleHoverEnd(i)}
            className="absolute top-0 left-0 flex cursor-grab items-center justify-center rounded-[28%] bg-paper shadow-lg shadow-black/40 ring-1 ring-black/5 select-none active:cursor-grabbing"
            style={{ width: BLOCK, height: BLOCK, willChange: "transform", touchAction: "none" }}
            aria-hidden
          >
            <tech.Icon size={BLOCK * 0.48} color={tech.color} />
          </div>
        ))}

        <div
          ref={tooltipRef}
          className="pointer-events-none absolute top-0 left-0 z-10 rounded-md bg-ink px-2.5 py-1 font-body text-xs font-semibold whitespace-nowrap text-paper shadow-lg transition-opacity duration-150"
          style={{ opacity: hoveredTech ? 1 : 0, willChange: "transform" }}
        >
          {hoveredTech}
        </div>
      </div>

      <p className="sr-only">
        Technologies: {STACK.map((t) => t.name).join(", ")}.
      </p>
    </div>
  );
}
