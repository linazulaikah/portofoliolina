"use client";

import { motion } from "motion/react";
import { experiences } from "@/lib/data";
import { Section } from "./section";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Experience" title="Where I've worked.">
      <ol className="relative border-l border-[var(--color-border)] ml-2 sm:ml-3">
        {experiences.map((e, i) => (
          <motion.li
            key={`${e.company}-${e.period}`}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="relative pl-8 sm:pl-10 pb-10 last:pb-0"
          >
            <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full bg-[var(--color-bg)] border-2 border-[var(--color-accent)]" />
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-2">
              <h3 className="text-lg font-medium tracking-tight">
                {e.role}{" "}
                <span className="text-[var(--color-muted)] font-normal">@ {e.company}</span>
              </h3>
              <p className="font-mono text-xs text-[var(--color-muted)]">{e.period}</p>
            </div>
            <p className="font-mono text-xs text-[var(--color-muted)] mb-3">{e.location}</p>
            <ul className="space-y-1.5 text-sm text-[var(--color-muted)] leading-relaxed text-pretty">
              {e.bullets.map((b) => (
                <li key={b} className="pl-4 relative">
                  <span className="absolute left-0 top-2.5 size-1 rounded-full bg-[var(--color-muted)]" />
                  {b}
                </li>
              ))}
            </ul>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
