"use client";

import { motion } from "motion/react";
import { Mic } from "lucide-react";
import { community, speakingHighlights } from "@/lib/data";
import { Section } from "./section";

export function Speaking() {
  return (
    <Section id="speaking" eyebrow="Beyond work" title="Speaking & community.">
      <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-4">
            Speaking
          </p>
          <ul className="space-y-3">
            {speakingHighlights.map((s) => (
              <li key={s} className="flex items-start gap-3 text-sm leading-relaxed">
                <Mic className="size-4 mt-0.5 text-[var(--color-accent)] shrink-0" />
                <span>{s}</span>
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
            Organizations
          </p>
          <ul className="space-y-5">
            {community.map((c) => (
              <li key={c.org}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-medium text-sm">{c.org}</p>
                  <p className="font-mono text-xs text-[var(--color-muted)]">{c.period}</p>
                </div>
                <p className="text-sm text-[var(--color-muted)]">{c.role}</p>
                <p className="text-sm text-[var(--color-muted)] mt-1 leading-relaxed text-pretty">
                  {c.detail}
                </p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
}
