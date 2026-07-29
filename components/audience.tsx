import { Tractor, Users2, Building2, GraduationCap } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const audiences = [
  { icon: Tractor, title: "Pequeños agricultores", text: "Productores familiares que buscan proteger sus cosechas y decidir mejor." },
  { icon: Users2, title: "Cooperativas", text: "Asociaciones que coordinan a decenas de productores en una misma región." },
  { icon: GraduationCap, title: "Técnicos agrónomos", text: "Extensionistas que asesoran en campo y necesitan datos consolidados." },
  { icon: Building2, title: "Instituciones locales", text: "Organismos que monitorean clima, plagas y seguridad alimentaria." },
]

export function Audience() {
  return (
    <section id="publico" className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Público objetivo"
          title="¿Para quién es AgroAlerta?"
          description="Diseñada para las personas que trabajan la tierra y para quienes las apoyan con conocimiento técnico."
          align="center"
        />
        <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((a) => (
            <div
              key={a.title}
              className="flex flex-col items-center rounded-2xl border border-border bg-card p-6 text-center"
            >
              <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <a.icon className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-semibold">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
