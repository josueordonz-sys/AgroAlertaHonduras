"use client"

type Zone = {
  id: string
  name: string
  x: number
  y: number
  level: "alto" | "medio" | "bajo"
}

const zones: Zone[] = [
  { id: "a", name: "Comayagua", x: 34, y: 48, level: "alto" },
  { id: "b", name: "Olancho", x: 62, y: 40, level: "medio" },
  { id: "c", name: "Copán", x: 20, y: 38, level: "medio" },
  { id: "d", name: "Choluteca", x: 44, y: 78, level: "alto" },
  { id: "e", name: "Yoro", x: 46, y: 30, level: "bajo" },
  { id: "f", name: "El Paraíso", x: 58, y: 62, level: "bajo" },
]

const levelColor: Record<Zone["level"], string> = {
  alto: "var(--destructive)",
  medio: "var(--accent)",
  bajo: "var(--primary)",
}

export function RiskMap({ className }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative overflow-hidden rounded-xl border border-border bg-secondary/40">
        <svg viewBox="0 0 100 90" className="h-auto w-full" role="img" aria-label="Mapa de riesgo de plagas por región de Honduras">
          {/* stylized country landmass */}
          <path
            d="M10,40 Q14,24 30,22 Q44,16 58,22 Q74,18 86,30 Q92,40 84,52 Q86,66 70,72 Q56,84 40,80 Q24,80 16,66 Q6,56 10,40 Z"
            fill="var(--muted)"
            stroke="var(--border)"
            strokeWidth="0.8"
          />
          {zones.map((z) => (
            <g key={z.id}>
              <circle cx={z.x} cy={z.y} r="5.5" fill={levelColor[z.level]} opacity="0.18" />
              <circle cx={z.x} cy={z.y} r="2.6" fill={levelColor[z.level]}>
                {z.level === "alto" && (
                  <animate attributeName="r" values="2.6;4;2.6" dur="2s" repeatCount="indefinite" />
                )}
              </circle>
            </g>
          ))}
        </svg>
      </div>
      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs">
        <LegendDot color="var(--destructive)" label="Riesgo alto" />
        <LegendDot color="var(--accent)" label="Riesgo medio" />
        <LegendDot color="var(--primary)" label="Riesgo bajo" />
      </div>
    </div>
  )
}

function LegendDot({ color, label }: { color: string; label: string }) {
  return (
    <span className="flex items-center gap-1.5 text-muted-foreground">
      <span className="size-2.5 rounded-full" style={{ backgroundColor: color }} />
      {label}
    </span>
  )
}
