import { Clock, ThermometerSun, Sprout } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const points = [
  {
    icon: ThermometerSun,
    stat: "+1.5°C",
    title: "El clima cambia más rápido",
    text: "El aumento de temperatura intensifica sequías y lluvias extremas cada año en Centroamérica.",
  },
  {
    icon: Clock,
    stat: "72 h",
    title: "Ventana crítica de reacción",
    text: "Detectar una plaga o alerta climática a tiempo puede salvar una cosecha completa.",
  },
  {
    icon: Sprout,
    stat: "40%",
    title: "Pérdidas evitables",
    text: "Buena parte de las pérdidas de cultivo podrían prevenirse con información oportuna y clara.",
  },
]

export function Urgency() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="absolute inset-0 -z-10 bg-foreground" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-widest text-foreground/80">
            Por qué ahora
          </span>
          <h2 className="mt-2 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            La urgencia de resolverlo hoy
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-foreground/85">
            Cada temporada perdida golpea la seguridad alimentaria y los ingresos de miles de familias. El
            momento de actuar con datos es ahora, no cuando el cultivo ya se perdió.
          </p>
        </div>
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl border border-[#6ac67d]/30 p-6 backdrop-blur-sm" style={{ backgroundColor: '#6ac67d' }}>
              <span className="flex size-11 items-center justify-center rounded-xl text-foreground" style={{ backgroundColor: 'rgba(106, 198, 125, 0.2)' }}>
                <p.icon className="size-5" aria-hidden="true" />
              </span>
              <p className="mt-4 text-3xl font-bold text-foreground">{p.stat}</p>
              <h3 className="mt-1 font-semibold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-foreground/80">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
