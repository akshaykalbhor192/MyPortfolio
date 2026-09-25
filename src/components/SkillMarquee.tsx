import { Asterisk } from "./icons";

const WORDS = [
  "FRONTEND",
  "REACT",
  "NEXT.JS",
  "TYPESCRIPT",
  "NODE.JS",
  "PYTHON",
  "DATA ANALYSIS",
  "AI / ML",
  "UI / UX",
];

function Strip() {
  return (
    <div className="flex shrink-0 items-center">
      {WORDS.map((word) => (
        <span key={word} className="flex items-center">
          <span className="px-6 font-display text-2xl font-bold uppercase tracking-tight text-paper sm:text-3xl">
            {word}
          </span>
          <Asterisk size={20} className="shrink-0 text-accent" />
        </span>
      ))}
    </div>
  );
}

export function SkillMarquee() {
  return (
    <div className="overflow-hidden bg-paper py-6 md:py-10">
      <div className="relative w-[120vw] -translate-x-[8vw] -rotate-2 overflow-hidden border-y-2 border-accent bg-ink py-5">
        <div className="animate-marquee flex w-max">
          <Strip />
          <Strip />
        </div>
      </div>
    </div>
  );
}
