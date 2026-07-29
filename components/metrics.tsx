import { SectionHeading } from "@/components/section-heading"

const okrs = [
  {
    objective: "Adopción por la comunidad",
    results: [
      { label: "Agricultores activos", value: "5,000", progress: 62 },
      { label: "Reportes comunitarios / mes", value: "1,200", progress: 48 },
    ],
  },
  {
    objective: "Impacto en los cultivos",
    results: [
      { label: "Reducción de pérdidas", value: "25%", progress: 55 },
      { label: "Alertas accionadas a tiempo", value: "80%", progress: 80 },
    ],
  },
  {
    objective: "Cobertura territorial",
    results: [
      { label: "Departamentos cubiertos", value: "12 / 18", progress: 67 },
      { label: "Cooperativas aliadas", value: "40", progress: 40 },
    ],
  },
]

export function Metrics() {
  return (
    <section id="metricas" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Métricas de éxito / OKRs"
          title="Objetivos y resultados clave"
          description="Medimos el éxito por el impacto real en los agricultores y sus cosechas, no solo por descargas."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {okrs.map((o) => (
            <div key={o.objective} className="rounded-2xl border border-border bg-card p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">Objetivo</p>
              <h3 className="mt-1 font-semibold">{o.objective}</h3>
              <div className="mt-6 space-y-5">
                {o.results.map((r) => (
                  <div key={r.label}>
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm text-muted-foreground">{r.label}</span>
                      <span className="text-sm font-bold">{r.value}</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-secondary">
                      <div className="h-full rounded-full bg-primary" style={{ width: `${r.progress}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
