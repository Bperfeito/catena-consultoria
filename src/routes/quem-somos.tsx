import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { images, mej, networks, pillars } from "@/content/catena";
import { CtaBand, PageHero, SectionLabel } from "@/components/site/Blocks";

export const Route = createFileRoute("/quem-somos")({
  head: () => ({
    meta: [
      { title: "Quem Somos — Catena Consultoria" },
      { name: "description", content: "Fundada em 2014, a Catena é a Empresa Júnior das Engenharias da UFRJ — Campus Macaé. Conheça nossa missão, visão e valores." },
      { property: "og:title", content: "Quem Somos — Catena Consultoria" },
      { property: "og:description", content: "A Empresa Júnior das Engenharias da UFRJ — Campus Macaé, desde 2014." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero
        eyebrow="Quem somos"
        title={<>Engenharia aplicada, <em className="text-accent">feita por quem está se formando nela.</em></>}
        intro="Somos uma empresa júnior de engenharia afiliada à Universidade Federal do Rio de Janeiro (UFRJ) em Macaé, Rio de Janeiro, Brasil. Oferecemos serviços nas áreas de engenharia de produção, civil e mecânica."
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-2 lg:px-10">
        <img src={images.equipe} alt="Equipe da Catena Consultoria com a bandeira da empresa" className="w-full rounded-lg object-cover" />
        <div className="pr-14">
          <SectionLabel index="01">Sobre nós</SectionLabel>
          <div className="mt-8 space-y-6 text-lg leading-relaxed text-muted-foreground">
            <p>
              <span className="text-foreground">A Catena Consultoria, fundada em 2014, é a Empresa Júnior das Engenharias da Universidade Federal do Rio de Janeiro — Campus Macaé.</span>{" "}
              Prestamos serviços de consultoria de engenharia, com foco nas áreas de Civil, Mecânica e Produção, tendo o auxílio de professores com estudos e experiências nestas áreas.
            </p>
            <p>A empresa é composta por estudantes universitários que fornecem soluções para empresas, instituições e sociedade, sob a orientação de professores e profissionais.</p>
            <p>Nosso objetivo é fornecer soluções inovadoras e de alta qualidade para nossos clientes, ao mesmo tempo em que oferecemos aos estudantes a oportunidade de aplicar seus conhecimentos em um ambiente empresarial real.</p>
          </div>
        </div>
      </section>

      <section className="bg-ink py-28 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-accent">02 — O que nos motiva e inspira</p>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg bg-ink-line md:grid-cols-3">
            {pillars.map((b) => (
              <div key={b.title} className="bg-ink p-10">
                <h2 className="text-4xl text-accent">{b.title}</h2>
                <p className="mt-6 leading-relaxed text-ink-muted">{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionLabel index="03">Movimento Empresa Júnior</SectionLabel>
          <h2 className="mt-8 text-4xl leading-tight md:text-5xl">O que é o MEJ?</h2>
        </div>
        <div className="lg:col-span-7">
          <p className="text-lg leading-relaxed text-muted-foreground">{mej.definition}</p>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{mej.representation}</p>
          <Link to="/movimento-empresa-junior" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 font-semibold">
            Conheça o Movimento Empresa Júnior <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-12 grid grid-cols-3 items-center gap-8 border-t border-border pt-10">
            {networks.map((n) => (
              <img key={n.name} src={n.logo} alt={n.name} className="mx-auto max-h-20 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
