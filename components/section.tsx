"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/cn";

type Props = {
  id: string;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({ id, eyebrow, title, children, className }: Props) {
  return (
    <section id={id} className={cn("px-6 py-24 sm:py-32", className)}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] mb-3">
            {eyebrow}
          </p>
          <h2 className="font-serif text-4xl sm:text-5xl tracking-tight text-balance">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  );
}
