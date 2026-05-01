"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { publications } from "@/lib/data";
import { Section } from "./section";


export function Research() {
  return (
    <Section id="research" eyebrow="Research" title="Selected publications.">
      <div className="grid sm:grid-cols-2 gap-4">
        {publications.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group relative p-6 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)] transition-colors"
          >
            <div className="flex items-center justify-between mb-4">
              <span
                className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full text-[var(--color-bg)]"
                style={{ background: "var(--color-accent)" }}
              >
                {p.venue} {p.year}
              </span>
              <ArrowUpRight className="size-4 text-[var(--color-muted)] group-hover:text-[var(--color-accent)] group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
            </div>
            <h3 className="text-base font-medium leading-snug text-balance mb-3">
              {p.title}
            </h3>
            <p className="text-sm text-[var(--color-muted)] leading-relaxed text-pretty mb-4">
              {p.summary}
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {p.tags.map((t) => (
                <li
                  key={t}
                  className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-subtle)] text-[var(--color-muted)]"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
