"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { Trophy } from "lucide-react";
import { awards, stats } from "@/lib/data";
import { Section } from "./section";

function StatCounter({
  value,
  suffix,
  label,
}: {
  value: number;
  suffix: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    const dur = 1100;
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(eased * value));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-5xl sm:text-6xl tracking-tight">
        {n}
        {suffix}
      </p>
      <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mt-2">
        {label}
      </p>
    </div>
  );
}

export function Recognition() {
  return (
    <Section id="recognition" eyebrow="Recognition" title="Awards & impact.">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 py-10 border-y border-[var(--color-border)]">
        {stats.map((s) => (
          <StatCounter key={s.label} {...s} />
        ))}
      </div>

      <ul className="grid sm:grid-cols-2 gap-3">
        {awards.map((a, i) => (
          <motion.li
            key={a.title}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="flex items-start gap-3 p-4 rounded-xl border border-[var(--color-border)]"
          >
            <Trophy className="size-4 mt-0.5 text-[var(--color-accent)] shrink-0" />
            <div>
              <p className="text-sm font-medium leading-snug text-balance">{a.title}</p>
              <p className="font-mono text-xs text-[var(--color-muted)] mt-0.5">{a.year}</p>
            </div>
          </motion.li>
        ))}
      </ul>
    </Section>
  );
}
