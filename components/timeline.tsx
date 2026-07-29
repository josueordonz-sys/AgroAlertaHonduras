import { SectionHeading } from "@/components/section-heading"

const steps = [
  { phase: "Fase 1", quarter: "Q1", title: "Investigación y validación", text: "Entrevistas con agricultores y cooperativas para definir necesidades reales.", state: "done" },
  { phase: "Fase 2", quarter: "Q2", title: "Prototipo del dashboard", text: "Diseño de paneles visuales de clima, plagas y humedad del suelo.", state: "active" },
  { phase: "Fase 3", quarter: "Q3", title: "Piloto comunitario", text: "Despliegue con reportes de agricultores en departamentos seleccionados.", state: "next" },
  { phase: "Fase 4", quarter: "Q4", title: "Escalado regional", text: "Expansión de cobertura, alianzas y sensores IoT de bajo costo.", state: "next" },
]

const dotStyles: Record<string, string> = {
  done: "bg-primary text-primary-foreground border-primary",
  active: "bg-accent text-accent-foreground border-accent",
  next: "bg-card text-muted-foreground border-border",
}

export function Timeline() {
  return (
    <section id="roadmap" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Próximos pasos"
          title="Línea de tiempo del proyecto"
          description="Un camino por etapas, desde la validación con la comunidad hasta el escalado regional."
        />
        <ol className="mt-12 grid gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title} className="relative">
              <div className="flex items-center gap-3">
                <span
                  className={`flex size-10 shrink-0 items-center justify-center rounded-full border-2 text-sm font-bold ${dotStyles[s.state]}`}
                >
                  {s.quarter}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-0.5 flex-1 bg-border md:block" aria-hidden="true" />
                )}
              </div>
              <div className="mt-4 rounded-2xl border border-border bg-card p-5">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">{s.phase}</p>
                <h3 className="mt-1 font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
