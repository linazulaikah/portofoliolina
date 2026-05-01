"use client";

import { motion } from "motion/react";
import { projects } from "@/lib/data";
import { ProjectThumbnail } from "./project-thumbnail";
import { Section } from "./section";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Projects" title="Selected work.">
      <div className="grid gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className="group p-6 sm:p-8 rounded-2xl border border-[var(--color-border)] bg-[var(--color-card)] hover:border-[var(--color-accent)] transition-colors"
          >
            <div className="grid md:grid-cols-[14rem_1fr] gap-6 md:gap-8">
              <div className="md:col-span-1 space-y-4">
                <ProjectThumbnail index={i} label={p.stack[0]} />
                <h3 className="text-xl font-serif leading-tight tracking-tight text-balance">
                  {p.title}
                </h3>
              </div>
              <div className="md:col-span-1 space-y-4">
                <Row label="Problem" value={p.problem} />
                <Row label="Approach" value={p.approach} />
                <Row label="Outcome" value={p.outcome} />
                <ul className="flex flex-wrap gap-1.5 pt-2">
                  {p.stack.map((s) => (
                    <li
                      key={s}
                      className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full bg-[var(--color-subtle)] text-[var(--color-muted)]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="grid grid-cols-[5rem_1fr] gap-4 items-baseline">
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-pretty">{value}</p>
    </div>
  );
}
