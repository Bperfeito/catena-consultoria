import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, intro, image }: { eyebrow: string; title: ReactNode; intro?: string; image?: string }) {
  return (
    <section className="relative overflow-hidden bg-ink pb-20 pt-40 text-ink-foreground lg:pb-28 lg:pt-48">
      <div className="blueprint pointer-events-none absolute inset-0 opacity-60" />
      {image && (
        <img src={image} alt="" className="absolute inset-y-0 right-0 hidden h-full w-1/2 object-cover opacity-35 lg:block [mask-image:linear-gradient(to_right,transparent,black_60%)]" />
      )}
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <p className="eyebrow reveal text-accent">{eyebrow}</p>
        <h1 className="reveal mt-6 max-w-4xl text-5xl leading-[1.02] md:text-7xl">{title}</h1>
        {intro && <p className="reveal mt-8 max-w-2xl text-lg leading-relaxed text-ink-muted">{intro}</p>}
      </div>
    </section>
  );
}

export function SectionLabel({ index, children }: { index: string; children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="eyebrow text-primary">{index}</span>
      <span className="h-px w-10 bg-border" />
      <span className="eyebrow text-muted-foreground">{children}</span>
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="relative overflow-hidden rounded-xl bg-primary p-10 text-primary-foreground md:p-16">
          <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
          <div className="relative grid items-end gap-10 md:grid-cols-[1.4fr_1fr]">
            <div>
              <p className="eyebrow opacity-70">Diagnóstico sem compromisso</p>
              <h2 className="mt-5 text-4xl leading-tight md:text-6xl">
                Preço baixo e qualidade para tirar seu projeto <em>do papel</em>.
              </h2>
            </div>
            <div className="md:justify-self-end">
              <Link to="/contato" className="inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
                Marque uma avaliação gratuita <ArrowUpRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
