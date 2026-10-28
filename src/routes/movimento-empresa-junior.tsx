import { createFileRoute } from "@tanstack/react-router";
import { mej, networks, pillars, images } from "@/content/catena";
import { CtaBand, PageHero, SectionLabel } from "@/components/site/Blocks";

export const Route = createFileRoute("/movimento-empresa-junior")({
  head: () => ({
    meta: [
      { title: "Movimento Empresa Júnior — Catena Consultoria" },
      { name: "description", content: "O que é uma Empresa Júnior e o que é o Movimento Empresa Júnior (MEJ), e o que motiva e inspira a Catena: missão, visão e valores." },
      { property: "og:title", content: "Movimento Empresa Júnior — Catena Consultoria" },
      { property: "og:description", content: "Conheça o Movimento Empresa Júnior e os pilares que guiam a Catena." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: MejPage,
});

function MejPage() {
  return (
    <>
      <PageHero
        eyebrow="Movimento Empresa Júnior"
        title={<>O que é o <em className="text-accent">MEJ?</em></>}
        intro="Somos membros do Movimento Empresa Júnior — a rede que conecta estudantes que aprendem fazendo a empresas que precisam de soluções bem-feitas."
        image={images.equipe}
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionLabel index="01">Empresa Júnior</SectionLabel>
          <h2 className="mt-8 text-4xl leading-tight md:text-5xl">
            Estudantes que <em>gerenciam</em> uma empresa real.
          </h2>
        </div>
        <div className="lg:col-span-7 lg:pr-14">
          <p className="text-lg leading-relaxed text-muted-foreground">{mej.definition}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{mej.purpose}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{mej.representation}</p>
          <div className="mt-12 grid grid-cols-3 items-center gap-8 border-t border-border pt-10">
            {networks.map((n) => (
              <img key={n.name} src={n.logo} alt={n.name} className="mx-auto max-h-20 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-accent">02 — O que nos motiva e inspira</p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-ink-line md:grid-cols-3">
            {pillars.map((p, i) => (
              <div key={p.title} className="bg-ink p-10">
                <span className="eyebrow text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-5 text-4xl text-accent">{p.title}</h2>
                <p className="mt-6 leading-relaxed text-ink-muted">{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
