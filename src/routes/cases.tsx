import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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
              <div>
                <p className="eyebrow text-muted-foreground">{c.area}</p>
                <h2 className="mt-3 text-4xl leading-tight">{c.title}</h2>
                <p className="mt-3 text-lg text-muted-foreground">{c.client}</p>
                <Link to="/contato" search={{ servico: c.title }} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  Quero um projeto como este <ArrowUpRight className="h-4 w-4" />
                </Link>
              </div>
              <div className="overflow-hidden rounded-lg bg-card ring-1 ring-border">
                <img src={c.image} alt={c.client} className={`aspect-[16/10] w-full ${c.imageFit === "cover" ? "object-cover" : "object-contain p-12"}`} />
              </div>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-sm text-muted-foreground">
          Os detalhes completos de cada projeto (contexto, solução e resultados) não estavam acessíveis no site original e estão pendentes de confirmação pela equipe Catena.
        </p>
      </section>
      <CtaBand />
    </>
  );
}
