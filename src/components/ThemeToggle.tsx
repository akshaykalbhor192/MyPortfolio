"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  // Starts null so the server-rendered markup matches the client's first
  // paint exactly; the inline script in <head> already set the real theme
  // on <html> before this ever runs, we're just reading it back.
  const [isDark, setIsDark] = useState<boolean | null>(null);

  useEffect(() => {
    // Syncing from the DOM attribute the inline head script already set,
    // not from React state — this one-time read is what lets SSR and the
    // client's first paint match exactly instead of flashing the wrong icon.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsDark(document.documentElement.dataset.theme === "dark");
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {
      // localStorage unavailable (private mode, etc.) — theme just won't persist
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:bg-ink hover:text-paper"
    >
      {isDark === null ? (
        <span className="block h-[17px] w-[17px]" />
      ) : isDark ? (
        <Sun size={17} />
      ) : (
        <Moon size={17} />
      )}
    </button>
  );
}
