import { createFileRoute, Link } from "@tanstack/react-router";
import { images } from "@/content/catena";
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
        <img src={images.equipe} alt="Equipe da Catena Consultoria com a bandeira da empresa" className="aspect-[4/3] w-full rounded-lg bg-muted object-contain" />
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

      <CtaBand />
    </>
  );
}
