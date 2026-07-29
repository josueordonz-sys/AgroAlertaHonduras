import { Eye, Languages, Radio, ShieldCheck } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const values = [
  { icon: Eye, title: "Muy visual", text: "Gráficos de humedad, mapas y paneles claros en vez de tablas complejas." },
  { icon: Radio, title: "Comunitario y en vivo", text: "Los agricultores reportan incidencias que alimentan alertas en tiempo real." },
  { icon: Languages, title: "Datos simplificados", text: "Información técnica del suelo traducida a acciones concretas." },
  { icon: ShieldCheck, title: "Enfocado en prevención", text: "Anticipa el riesgo antes de que el cultivo se pierda, no después." },
]

export function ValueProposition() {
  return (
    <section className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Propuesta de valor"
              title="Qué nos hace diferentes"
              description="Otras soluciones muestran datos crudos o solo el clima. AgroAlerta combina clima, plagas y suelo en una experiencia visual, comunitaria y pensada para el campo hondureño."
            />
            <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6">
              <p className="text-sm leading-relaxed text-foreground">
                <span className="font-semibold text-primary">Nuestra promesa:</span> convertir datos dispersos y
                técnicos en decisiones simples que cualquier agricultor pueda tomar desde su teléfono.
              </p>
            </div>
          </div>
          <div className="grid gap-5 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <v.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
