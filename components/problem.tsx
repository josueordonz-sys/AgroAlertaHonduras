import { CloudLightning, Bug, FileQuestion } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const problems = [
  {
    icon: CloudLightning,
    title: "Clima impredecible",
    text: "Lluvias fuera de temporada, sequías y heladas repentinas arruinan siembras enteras sin previo aviso.",
  },
  {
    icon: Bug,
    title: "Plagas repentinas",
    text: "Los brotes de plagas se propagan entre parcelas vecinas antes de que el agricultor pueda reaccionar.",
  },
  {
    icon: FileQuestion,
    title: "Datos inaccesibles",
    text: "La información técnica sobre suelos existe, pero está dispersa y en un lenguaje difícil de aplicar en campo.",
  },
]

export function Problem() {
  return (
    <section id="problema" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="El problema"
          title="Los pequeños agricultores pierden cultivos valiosos"
          description="Sin acceso oportuno a información confiable, cada temporada se convierte en una apuesta contra el clima, las plagas y la falta de datos técnicos simplificados sobre sus suelos."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="rounded-2xl border border-border bg-card p-6">
              <span className="flex size-11 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                <p.icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
