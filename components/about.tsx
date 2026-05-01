"use client";

import { motion } from "motion/react";
import { profile, education } from "@/lib/data";
import { Section } from "./section";

export function About() {
  return (
    <Section id="about" eyebrow="About" title="From data to decisions, from systems to solutions.">
      <div className="grid lg:grid-cols-3 gap-10 lg:gap-16">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="lg:col-span-2 text-lg leading-relaxed text-pretty text-[var(--color-muted)]"
        >
          {profile.summary}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="space-y-6"
        >
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3">
              Education
            </p>
            <ul className="space-y-3">
              {education.map((e) => (
                <li key={e.school} className="text-sm">
                  <p className="font-medium">{e.school}</p>
                  <p className="text-[var(--color-muted)]">{e.degree}</p>
                  <p className="font-mono text-xs text-[var(--color-muted)] mt-0.5">
                    {e.period}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mb-3">
              Languages
            </p>
            <ul className="flex flex-wrap gap-1.5">
              {profile.languages.map((l) => (
                <li
                  key={l}
                  className="text-xs px-2.5 py-1 rounded-full border border-[var(--color-border)]"
                >
                  {l}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
