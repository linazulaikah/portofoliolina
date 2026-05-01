"use client";
import { useEffect, useState, useSyncExternalStore } from "react";
import { Sun, Moon, Home } from "lucide-react";
import { cn } from "@/lib/cn";

const sections = [
  { id: "about", label: "About" },
  { id: "research", label: "Research" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "recognition", label: "Recognition" },
  { id: "contact", label: "Contact" },
];

function subscribeTheme(cb: () => void) {
  const observer = new MutationObserver(cb);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
}

function getTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const theme = useSyncExternalStore(
    subscribeTheme,
    getTheme,
    () => "light" as const,
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-[var(--color-bg)]/70 border-b border-[var(--color-border)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto max-w-5xl px-8 py-4 flex items-center justify-between">
        
          href="#top"
          className="size-9 inline-flex items-center justify-center rounded-full border border-[var(--color-border)] hover:bg-[var(--color-subtle)] transition-colors text-[var(--color-muted)]"
        >
          <Home className="size-4" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm text-[var(--color-muted)]">
          {sections.map((s) => (
            
              key={s.id}
              href={`#${s.id}`}
              className="transition-colors hover:text-[var(--color-fg)]"
            >
              {s.label}
            </a>
          ))}
        </nav>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className="size-9 inline-flex items-center justify-center rounded-full border border-[var(--color-border)] hover:bg-[var(--color-subtle)] transition-colors"
        >
          {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
        </button>
      </div>
    </header>
  );
}
