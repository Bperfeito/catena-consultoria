import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { cases } from "@/content/catena";
import { CtaBand, PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/cases")({
  head: () => ({
    meta: [
      { title: "Cases de Sucesso — Catena Consultoria" },
      { name: "description", content: "Controle de qualidade, orçamento e desenho 3D, plano de negócios, mapeamento de processos e análise de franqueabilidade: conheça os projetos da Catena." },
      { property: "og:title", content: "Cases de Sucesso — Catena Consultoria" },
      { property: "og:description", content: "Projetos reais que impactaram negócios e a vida dos nossos clientes." },
    ],
  }),
  component: Cases,
});

function Cases() {
  return (
    <>
      <PageHero
        eyebrow="Cases de sucesso"
        title={<>Projetos reais, <em className="text-accent">clientes reais.</em></>}
        intro="Conheça alguns dos nossos projetos e saiba como eles impactaram nos negócios e na vida dos nossos clientes."
      />
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <div className="divide-y divide-border border-y border-border">
          {cases.map((c, i) => (
            <article id={c.slug} key={c.slug} className="grid scroll-mt-28 items-center gap-10 py-14 md:grid-cols-[5rem_1fr_1.1fr]">
              <span className="font-display text-5xl text-primary">{String(i + 1).padStart(2, "0")}</span>
              <div className="pr-14">
                <p className="eyebrow text-muted-foreground">{c.area}</p>
                <h2 className="mt-3 text-4xl leading-tight">{c.title}</h2>
                <p className="mt-3 text-lg text-muted-foreground">{c.client}</p>
                <details className="group mt-6 border-t border-border pt-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-primary marker:hidden [&::-webkit-details-marker]:hidden">
                    <span>O que foi feito neste projeto</span>
                    <ChevronDown className="h-4 w-4 shrink-0 transition-transform group-open:rotate-180" aria-hidden="true" />
                  </summary>
                  <div className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                  </div>
                  {c.gallery && (
                    <div className="mt-6 grid gap-4 sm:grid-cols-2">
                      {c.gallery.map((image) => (
                        <figure key={image.label} className="overflow-hidden rounded-lg border border-border bg-card">
                          <img src={image.src} alt={image.alt} className="h-auto max-h-[28rem] w-full object-contain" loading="lazy" />
                          <figcaption className="px-4 py-3 text-xs font-medium text-muted-foreground">{image.label}</figcaption>
                        </figure>
                      ))}
                    </div>
                  )}
                </details>
                <Link to="/contato" search={{ servico: c.title }} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Quero um projeto como este <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="grid aspect-[16/10] place-items-center overflow-hidden rounded-lg bg-card ring-1 ring-border">
                <img src={c.image} alt={c.client} className={c.imageFit === "cover" ? "h-full w-full object-cover" : "h-auto w-auto max-h-[70%] max-w-[84%] object-contain"} />
              </div>
            </article>
          ))}
        </div>

      </section>
      <CtaBand />
    </>
  );
}
