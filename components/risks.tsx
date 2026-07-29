import { ServerCog, Wrench, UserX } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const risks = [
  {
    icon: ServerCog,
    tag: "Técnico",
    title: "Calidad de los datos climáticos",
    text: "La precisión depende de fuentes confiables y cobertura local.",
    mitigation: "Combinar múltiples fuentes y validación comunitaria.",
  },
  {
    icon: Wrench,
    tag: "Operativo",
    title: "Conectividad rural limitada",
    text: "Zonas con internet inestable dificultan el acceso en tiempo real.",
    mitigation: "Modo offline y alertas ligeras por SMS.",
  },
  {
    icon: UserX,
    tag: "Adopción",
    title: "Baja alfabetización digital",
    text: "Algunos agricultores pueden resistirse a usar herramientas digitales.",
    mitigation: "Interfaz visual sencilla y capacitación con líderes locales.",
  },
]

const tagStyles: Record<string, string> = {
  Técnico: "bg-chart-2/15 text-chart-2",
  Operativo: "bg-accent/25 text-accent-foreground",
  Adopción: "bg-destructive/10 text-destructive",
}

export function Risks() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Riesgos"
          title="Principales riesgos y cómo los mitigamos"
          description="Reconocer los riesgos técnicos, operativos y de adopción es parte de construir una solución resiliente."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {risks.map((r) => (
            <div key={r.title} className="flex flex-col rounded-2xl border border-border bg-card p-6">
              <div className="flex items-center justify-between">
                <span className="flex size-11 items-center justify-center rounded-xl bg-secondary text-foreground">
                  <r.icon className="size-5" aria-hidden="true" />
                </span>
                <span className={`rounded-full px-2.5 py-1 text-xs font-medium ${tagStyles[r.tag]}`}>{r.tag}</span>
              </div>
              <h3 className="mt-4 font-semibold">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.text}</p>
              <div className="mt-4 rounded-lg border border-dashed border-border bg-secondary/50 p-3">
                <p className="text-xs font-semibold text-primary">Mitigación</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{r.mitigation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
