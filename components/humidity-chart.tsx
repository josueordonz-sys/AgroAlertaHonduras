"use client"

const data = [42, 48, 55, 51, 63, 70, 66, 74, 82, 78, 88, 84]
const labels = ["E", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"]

export function HumidityChart({ className }: { className?: string }) {
  const width = 320
  const height = 140
  const pad = 8
  const max = 100
  const min = 30
  const stepX = (width - pad * 2) / (data.length - 1)

  const points = data.map((v, i) => {
    const x = pad + i * stepX
    const y = pad + (1 - (v - min) / (max - min)) * (height - pad * 2)
    return [x, y] as const
  })

  const linePath = points.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ")
  const areaPath = `${linePath} L${points[points.length - 1][0].toFixed(1)},${height - pad} L${points[0][0].toFixed(1)},${height - pad} Z`

  return (
    <div className={className}>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="h-auto w-full"
        role="img"
        aria-label="Gráfico de humedad del suelo a lo largo del año"
      >
        <defs>
          <linearGradient id="humFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--chart-2)" stopOpacity="0.35" />
            <stop offset="100%" stopColor="var(--chart-2)" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((g) => {
          const y = pad + (g / 3) * (height - pad * 2)
          return <line key={g} x1={pad} y1={y} x2={width - pad} y2={y} stroke="var(--border)" strokeWidth="1" />
        })}
        <path d={areaPath} fill="url(#humFill)" />
        <path d={linePath} fill="none" stroke="var(--chart-2)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        {points.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="2.5" fill="var(--chart-2)" />
        ))}
      </svg>
      <div className="mt-1 flex justify-between px-1 text-[10px] text-muted-foreground">
        {labels.map((l, i) => (
          <span key={i}>{l}</span>
        ))}
      </div>
    </div>
  )
}
