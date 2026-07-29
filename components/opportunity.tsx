import { TrendingUp, Globe2, HandCoins, Network, Check } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const benefits = [
  { icon: TrendingUp, title: "Mayor productividad", text: "Decisiones informadas que reducen pérdidas y aumentan el rendimiento por hectárea." },
  { icon: Network, title: "Red comunitaria", text: "El valor crece con cada agricultor que reporta y consulta incidencias." },
  { icon: HandCoins, title: "Ingresos protegidos", text: "Menos cultivos perdidos significa ingresos más estables para las familias." },
  { icon: Globe2, title: "Escalable a la región", text: "El modelo es replicable en toda Centroamérica y otros contextos rurales." },
]

const growth = [
  "Expansión a cooperativas y asociaciones agrícolas",
  "Alianzas con instituciones climáticas y agronómicas",
  "Integración de sensores IoT de bajo costo",
  "Marketplace de insumos y asesoría técnica",
]

export function Opportunity() {
  return (
    <section id="oportunidad" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="La oportunidad"
          title="Beneficios y potencial de crecimiento"
          description="AgroAlerta no solo resuelve un dolor inmediato: construye una red de datos agrícolas cada vez más valiosa a medida que crece la comunidad."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((b) => (
              <div key={b.title} className="rounded-2xl border border-border bg-card p-6">
                <span className="flex size-11 items-center justify-center rounded-xl bg-accent/25 text-accent-foreground">
                  <b.icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-semibold">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-border bg-secondary/50 p-6 sm:p-8">
            <h3 className="text-lg font-semibold">Camino de crecimiento</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Un producto que evoluciona junto a la comunidad agrícola que sirve.
            </p>
            <ul className="mt-6 space-y-4">
              {growth.map((g) => (
                <li key={g} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="size-3.5" aria-hidden="true" />
                  </span>
                  <span className="text-sm leading-relaxed">{g}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
