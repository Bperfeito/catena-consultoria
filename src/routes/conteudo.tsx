import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Instagram } from "lucide-react";
import { blogUrl, contact, ebooks, ebooksUrl, posts } from "@/content/catena";
import { CtaBand, PageHero, SectionLabel } from "@/components/site/Blocks";

export const Route = createFileRoute("/conteudo")({
  head: () => ({
    meta: [
      { title: "Blog e E-books Gratuitos — Catena Consultoria" },
      { name: "description", content: "Artigos sobre engenharia e negócios e e-books gratuitos: Plano de Negócios, Planejamento Estratégico e Plano de Marketing." },
      { property: "og:title", content: "Blog e E-books Gratuitos — Catena Consultoria" },
      { property: "og:description", content: "Conteúdo gratuito para quem empreende e constrói." },
    ],
  }),
  component: Content,
});

function Content() {
  return (
    <>
      <PageHero eyebrow="Blog & E-books" title={<>Conhecimento <em className="text-accent">gratuito</em>, onde e quando quiser.</>} />

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <SectionLabel index="01">E-books gratuitos</SectionLabel>
        <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
          Explore nossa coleção de e-books gratuitos e aprimore seus conhecimentos e habilidades em qualquer lugar e a qualquer momento.
        </p>
        <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-4">
          {ebooks.map((e) => (
            <div key={e.title} className="flex flex-col">
              <div className="grid aspect-[3/4] place-items-center overflow-hidden rounded-md bg-ink">
                {e.cover ? <img src={e.cover} alt={`Capa do e-book ${e.title}`} className="h-full w-full object-cover" /> : <span className="eyebrow text-ink-muted">Em breve</span>}
              </div>
              <h3 className="mt-4 text-xl">{e.title}</h3>
              {e.available ? (
                <a href={ebooksUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Baixar <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="mt-2 text-sm text-muted-foreground">Indisponível</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionLabel index="02">Blog — 37 posts</SectionLabel>
            <a href={blogUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 font-semibold">Ver todos os posts <ArrowUpRight className="h-4 w-4" /></a>
          </div>
          <div className="mt-12 space-y-px overflow-hidden rounded-lg border border-border bg-border">
            {posts.map((p) => (
              <a key={p.title} href={p.url} target="_blank" rel="noreferrer" className="group grid items-center gap-8 bg-background p-6 md:grid-cols-[16rem_1fr_auto]">
                <img src={p.image} alt="" className="aspect-[16/10] w-full rounded object-cover" />
                <div>
                  <p className="eyebrow text-muted-foreground">{p.date} · {p.read} de leitura</p>
                  <h3 className="mt-2 text-2xl leading-snug md:text-3xl group-hover:text-primary">{p.title}</h3>
                  <p className="mt-3 text-muted-foreground">{p.excerpt}</p>
                </div>
                <ArrowUpRight className="hidden h-6 w-6 text-primary transition-transform group-hover:rotate-45 md:block" />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        <a href={contact.instagram} target="_blank" rel="noreferrer" className="group flex flex-col justify-between gap-6 rounded-lg border border-border p-10 md:flex-row md:items-center">
          <div className="flex items-center gap-5">
            <Instagram className="h-10 w-10 text-primary" />
            <div>
              <h2 className="text-3xl">Siga a Catena no Instagram</h2>
              <p className="mt-1 text-muted-foreground">Posts todas as terças e quintas!</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-2 font-semibold text-primary">@catenaconsultoriaufrj <ArrowUpRight className="h-4 w-4" /></span>
        </a>
      </section>

      <CtaBand />
    </>
  );
}
