type Tone = {
  from: string;
  via: string;
  to: string;
  glyph: "grid" | "rings" | "wave" | "tiles";
};

const tones: Tone[] = [
  { from: "oklch(0.92 0.06 150)", via: "oklch(0.78 0.10 150)", to: "oklch(0.45 0.12 150)", glyph: "rings" },
  { from: "oklch(0.93 0.06 25)", via: "oklch(0.80 0.12 25)", to: "oklch(0.50 0.14 25)", glyph: "wave" },
  { from: "oklch(0.93 0.05 240)", via: "oklch(0.78 0.10 240)", to: "oklch(0.45 0.12 240)", glyph: "tiles" },
  { from: "oklch(0.93 0.04 80)", via: "oklch(0.82 0.08 80)", to: "oklch(0.55 0.10 80)", glyph: "grid" },
];

export function ProjectThumbnail({ index, label }: { index: number; label: string }) {
  const tone = tones[index % tones.length];
  const num = String(index + 1).padStart(2, "0");

  return (
    <div
      className="relative aspect-[4/3] w-full rounded-xl overflow-hidden border border-[var(--color-border)]"
      style={{
        background: `linear-gradient(135deg, ${tone.from} 0%, ${tone.via} 50%, ${tone.to} 100%)`,
      }}
    >
      <Glyph kind={tone.glyph} />
      <div className="absolute inset-0 flex items-end justify-between p-4 text-white/90 mix-blend-overlay">
        <span className="font-mono text-[10px] uppercase tracking-widest">{label}</span>
        <span className="font-mono text-[10px] uppercase tracking-widest">
          {num} / 04
        </span>
      </div>
    </div>
  );
}

function Glyph({ kind }: { kind: Tone["glyph"] }) {
  switch (kind) {
    case "rings":
      return (
        <svg
          viewBox="0 0 200 150"
          className="absolute inset-0 w-full h-full opacity-40"
          aria-hidden
        >
          <g fill="none" stroke="white" strokeWidth="0.6">
            {[10, 25, 40, 55, 70, 85].map((r) => (
              <circle key={r} cx="160" cy="40" r={r} />
            ))}
          </g>
        </svg>
      );
    case "wave":
      return (
        <svg
          viewBox="0 0 200 150"
          className="absolute inset-0 w-full h-full opacity-40"
          aria-hidden
        >
          <g fill="none" stroke="white" strokeWidth="0.6">
            {Array.from({ length: 14 }).map((_, i) => (
              <path
                key={i}
                d={`M0 ${20 + i * 8} Q 50 ${5 + i * 8}, 100 ${20 + i * 8} T 200 ${20 + i * 8}`}
              />
            ))}
          </g>
        </svg>
      );
    case "tiles":
      return (
        <svg
          viewBox="0 0 200 150"
          className="absolute inset-0 w-full h-full opacity-30"
          aria-hidden
        >
          <g fill="none" stroke="white" strokeWidth="0.5">
            {Array.from({ length: 6 }).map((_, r) =>
              Array.from({ length: 8 }).map((_, c) => (
                <rect
                  key={`${r}-${c}`}
                  x={c * 25 + 5}
                  y={r * 25 + 5}
                  width="20"
                  height="20"
                  opacity={(r + c) % 3 === 0 ? 1 : 0.3}
                />
              )),
            )}
          </g>
        </svg>
      );
    case "grid":
    default:
      return (
        <svg
          viewBox="0 0 200 150"
          className="absolute inset-0 w-full h-full opacity-35"
          aria-hidden
        >
          <defs>
            <pattern id="grid-pat" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="200" height="150" fill="url(#grid-pat)" />
          <circle cx="55" cy="90" r="38" fill="white" opacity="0.18" />
        </svg>
      );
  }
}
