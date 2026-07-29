import { CloudSun, Droplets, TriangleAlert, ArrowRight, Sprout } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HumidityChart } from "@/components/humidity-chart"
import { RiskMap } from "@/components/risk-map"

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-secondary/70 via-background to-background" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sprout className="size-3.5" aria-hidden="true" />
            Agricultura climáticamente inteligente
          </span>
          <h1 className="mt-5 text-pretty text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            AgroAlerta Honduras
          </h1>
          <p className="mt-4 text-balance text-lg font-medium text-primary">
            Anticipa el clima, protege tu cosecha.
          </p>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Un dashboard interactivo que reúne alertas climáticas locales, un mapa comunitario de riesgo de
            plagas y datos técnicos de suelo simplificados, para que los pequeños agricultores tomen mejores
            decisiones y dejen de perder cultivos valiosos.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" render={<a href="#producto" />}>
              Ver el dashboard
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
            <Button size="lg" variant="outline" render={<a href="#problema" />}>
              Conocer el problema
            </Button>
          </div>
          <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-6">
            {[
              { k: "+12k", v: "agricultores objetivo" },
              { k: "18", v: "departamentos" },
              { k: "24/7", v: "alertas locales" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="text-2xl font-bold tracking-tight">{s.k}</dt>
                <dd className="text-xs text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-xl shadow-primary/5 sm:p-5">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">Panel de tu parcela</p>
                <p className="text-xs text-muted-foreground">Valle de Comayagua · Hoy</p>
              </div>
              <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                En vivo
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <MiniStat icon={<CloudSun className="size-4" />} label="Clima" value="28°C" hint="Soleado" />
              <MiniStat icon={<Droplets className="size-4" />} label="Humedad" value="84%" hint="Óptima" />
              <MiniStat icon={<TriangleAlert className="size-4" />} label="Plagas" value="Medio" hint="Vigilar" />
            </div>

            <div className="mt-4 rounded-xl border border-border bg-secondary/40 p-3">
              <div className="mb-1 flex items-center justify-between">
                <p className="text-xs font-medium text-muted-foreground">Humedad del suelo</p>
                <p className="text-xs font-semibold text-chart-2">Tendencia estable</p>
              </div>
              <HumidityChart />
            </div>

            <div className="mt-4 rounded-xl border border-border bg-card p-3">
              <p className="mb-2 text-xs font-medium text-muted-foreground">Mapa de riesgo de plagas</p>
              <RiskMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MiniStat({
  icon,
  label,
  value,
  hint,
}: {
  icon: React.ReactNode
  label: string
  value: string
  hint: string
}) {
  return (
    <div className="rounded-xl border border-border bg-secondary/40 p-3">
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10 text-primary">{icon}</span>
      <p className="mt-2 text-xs text-muted-foreground">{label}</p>
      <p className="text-lg font-bold leading-tight">{value}</p>
      <p className="text-[11px] text-muted-foreground">{hint}</p>
    </div>
  )
}
