"use client";

import { motion } from "motion/react";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center px-6 overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 size-[40rem] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--color-accent-soft), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-5xl w-full pt-24">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[var(--color-border)] bg-[var(--color-card)] text-xs text-[var(--color-muted)] mb-8"
        >
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-60 animate-ping" />
            <span className="relative inline-flex rounded-full size-1.5 bg-[var(--color-accent)]" />
          </span>
          {profile.status}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="text-balance font-serif text-5xl sm:text-7xl lg:text-8xl leading-[0.95] tracking-tight"
        >
          {profile.name.split(" ")[0]}
          <br />
          <span className="text-[var(--color-muted)]">{profile.name.split(" ")[1]}.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-8 max-w-xl text-lg sm:text-xl text-pretty text-[var(--color-muted)] leading-relaxed"
        >
          {profile.tagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#research"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] text-[var(--color-bg)] px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
          >
            View research
            <ArrowDown className="size-4 transition-transform group-hover:translate-y-0.5" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--color-subtle)] transition-colors"
          >
            Get in touch
          </a>
          <a
            href="/lina-zulaikah-cv.pdf"
            download
            className="group inline-flex items-center gap-2 rounded-full px-3 py-2.5 text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-fg)] transition-colors"
          >
            <Download className="size-4" />
            Resume
          </a>
          <span className="inline-flex items-center gap-1.5 text-sm text-[var(--color-muted)] ml-1">
            <MapPin className="size-3.5" />
            {profile.location}
          </span>
        </motion.div>
      </div>

    </section>
  );
}
