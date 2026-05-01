"use client";

import { motion } from "motion/react";
import { skills } from "@/lib/data";
import { Section } from "./section";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="Tools & certifications.">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4">
            Technical
          </p>
          <ul className="flex flex-wrap gap-2">
            {skills.technical.map((s) => (
              <li
                key={s}
                className="text-sm px-3 py-1.5 rounded-full border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors"
              >
                {s}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4">
            Certifications
          </p>
          <ul className="divide-y divide-[var(--color-border)] border-y border-[var(--color-border)]">
            {skills.certifications.map((c) => (
              <li
                key={c.name}
                className="py-3 flex items-baseline justify-between gap-4"
              >
                <span className="text-sm">{c.name}</span>
                <span className="font-mono text-xs text-[var(--color-muted)]">{c.year}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
