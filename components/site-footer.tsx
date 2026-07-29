import { Leaf, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-gradient-to-br from-primary to-chart-5 p-8 text-center sm:p-12">
          <h2 className="text-balance text-2xl font-bold text-primary-foreground sm:text-3xl">
            Protejamos juntos la cosecha de Honduras
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-pretty leading-relaxed text-primary-foreground/85">
            Únete a AgroAlerta y lleva alertas climáticas, mapas de plagas y datos de suelo a cada parcela.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
            <Button size="lg" variant="secondary" render={<a href="#producto" />}>
              Solicitar demo
              <ArrowRight className="size-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Leaf className="size-4" aria-hidden="true" />
            </span>
            <span className="text-sm font-semibold">AgroAlerta Honduras</span>
          </div>
          <p className="text-xs text-muted-foreground">
            {"© "}
            {new Date().getFullYear()} AgroAlerta Honduras · Proyecto académico
          </p>
        </div>
      </div>
    </footer>
  )
}
