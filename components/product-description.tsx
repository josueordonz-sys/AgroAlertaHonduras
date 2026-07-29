import { CloudSun, MapPinned, FlaskConical, Users } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const features = [
  {
    icon: CloudSun,
    title: "Alertas climáticas locales",
    text: "Pronósticos y avisos de lluvia, sequía o heladas ajustados a la zona exacta de cada parcela.",
  },
  {
    icon: MapPinned,
    title: "Mapa de riesgo de plagas",
    text: "Un mapa comunitario en tiempo real que muestra dónde se concentran las plagas más comunes.",
  },
  {
    icon: FlaskConical,
    title: "Datos de suelo simplificados",
    text: "Indicadores de humedad, pH y nutrientes explicados en lenguaje sencillo y accionable.",
  },
  {
    icon: Users,
    title: "Reportes de la comunidad",
    text: "Los propios agricultores reportan incidencias que alimentan y validan las alertas del sistema.",
  },
]

export function ProductDescription() {
  return (
    <section id="producto" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Qué es"
          title="Una sola plataforma para decidir con datos"
          description="AgroAlerta Honduras consolida en un dashboard visual toda la información que un pequeño agricultor necesita para proteger su cultivo: clima, plagas y salud del suelo, sin tecnicismos."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
