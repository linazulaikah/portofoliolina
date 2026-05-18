"use client";

import { motion } from "motion/react";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-32 sm:py-40 border-t border-[var(--color-border)]">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] mb-4">
            Contact
          </p>
          <h2 className="font-serif text-5xl sm:text-7xl tracking-tight text-balance leading-[1] mb-8">
            Let&rsquo;s build something{" "}
            <span className="text-[var(--color-muted)]">thoughtful.</span>
          </h2>
          <p className="text-lg text-[var(--color-muted)] max-w-xl text-pretty mb-10">
            Open to research collaborations, speaking engagements, and analyst roles in AI,
            ERP, and data-driven product teams.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-fg)] text-[var(--color-bg)] px-5 py-2.5 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <Mail className="size-4" />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--color-subtle)] transition-colors"
            >
              LinkedIn
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="/lina-zulaikah-cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--color-subtle)] transition-colors"
            >
              <Download className="size-4" />
              Download CV
            </a>
          </div>
        </motion.div>

        <div className="mt-24 pt-8 border-t border-[var(--color-border)] flex flex-wrap items-center justify-between gap-3 font-mono text-xs text-[var(--color-muted)]">
          <p>© {new Date().getFullYear()} Lina Zulaikah</p>
          <p>{profile.location}</p>
        </div>
      </div>
    </section>
  );
}
