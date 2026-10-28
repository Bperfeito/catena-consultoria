import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { areas, cases, images, posts, contact } from "@/content/catena";
import { CtaBand, SectionLabel } from "@/components/site/Blocks";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Catena Consultoria — Engenharia e Gestão de Negócios | UFRJ Macaé" },
      { name: "description", content: "Empresa Júnior das Engenharias da UFRJ — Campus Macaé. Consultoria em Engenharia de Produção, Civil e Mecânica com preço baixo e qualidade." },
      { property: "og:title", content: "Catena Consultoria — Engenharia e Gestão de Negócios" },
      { property: "og:description", content: "Consultoria em Engenharia de Produção, Civil e Mecânica feita por estudantes da UFRJ — Campus Macaé." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[100svh] overflow-hidden bg-ink text-ink-foreground">
        <img src={images.architectureSky} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        <div className="blueprint pointer-events-none absolute inset-0 opacity-50" />
        <div className="relative mx-auto flex min-h-[100svh] max-w-7xl flex-col justify-end px-6 pb-16 pt-40 lg:px-10 lg:pb-24">
          <p className="eyebrow reveal text-accent">Consultoria em Engenharia e Gestão de Negócios</p>
          <h1 className="reveal mt-6 max-w-5xl text-[3.25rem] leading-[0.98] md:text-[6.5rem]">
            Preço baixo e qualidade para tirar seu projeto <em className="text-accent">do papel.</em>
          </h1>
          <div className="reveal mt-12 flex flex-col gap-10 border-t border-ink-line pt-8 md:flex-row md:items-end md:justify-between">
            <p className="max-w-md text-ink-muted">
              Empresa Júnior das Engenharias da UFRJ — Campus Macaé, com soluções em Produção, Civil e Mecânica.
            </p>
            <div className="flex flex-wrap gap-3 md:pr-24">
              <Link to="/contato" className="inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5">
                Marque uma avaliação gratuita <ArrowUpRight className="h-4 w-4" />
              </Link>
              <Link to="/servicos" className="inline-flex items-center gap-2 rounded-full border border-ink-line px-6 py-3.5 font-medium transition-colors hover:border-ink-foreground">
                Conheça os serviços
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quem somos */}
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-28 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-5">
          <SectionLabel index="01">Quem somos</SectionLabel>
          <h2 className="mt-8 text-4xl leading-tight md:text-5xl">
            Estudantes de engenharia resolvendo problemas <em>reais</em> desde 2014.
          </h2>
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
            A Catena Consultoria é uma empresa sem fins lucrativos composta, exclusivamente, por estudantes dos cursos de Engenharia da Universidade Federal do Rio de Janeiro — Campus Macaé, sob a orientação de professores e profissionais.
          </p>
          <Link to="/quem-somos" className="mt-10 inline-flex items-center gap-2 border-b border-foreground pb-1 font-semibold">
            Saiba mais sobre a Catena <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="relative lg:col-span-7">
          <img src={images.equipe} alt="Equipe da Catena Consultoria" className="aspect-[4/3] w-full rounded-lg object-cover" />
          <div className="absolute -bottom-8 left-6 right-6 grid grid-cols-3 divide-x divide-border rounded-lg bg-card p-6 shadow-xl md:left-auto md:right-8 md:w-[26rem]">
            {[["2014", "Fundação"], ["3", "Engenharias"], ["UFRJ", "Campus Macaé"]].map(([n, l]) => (
              <div key={l} className="px-4 first:pl-0">
                <p className="font-display text-3xl text-primary">{n}</p>
                <p className="eyebrow mt-1 text-muted-foreground">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-paper py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <SectionLabel index="02">Áreas de atuação</SectionLabel>
              <h2 className="mt-8 max-w-2xl text-4xl leading-tight md:text-5xl">Três engenharias, uma consultoria.</h2>
            </div>
            <Link to="/servicos" className="inline-flex items-center gap-2 font-semibold">Todos os serviços <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-16 divide-y divide-border border-y border-border">
            {areas.map((a) => (
              <Link
                key={a.slug}
                to="/servicos/$area"
                params={{ area: a.slug }}
                className="group grid items-center gap-6 py-10 md:grid-cols-[6rem_1fr_1fr_14rem]"
              >
                <span className="eyebrow text-primary">{a.index}</span>
                <div>
                  <p className="eyebrow text-muted-foreground">{a.discipline}</p>
                  <h3 className="mt-2 text-3xl md:text-4xl">{a.title}</h3>
                </div>
                <p className="text-muted-foreground">{a.services.length ? a.services.slice(0, 4).map((s) => s.name).join(" · ") + "…" : "Consultoria em sistemas mecânicos"}</p>
                <div className="relative h-28 overflow-hidden rounded-md">
                  <img src={a.image} alt="" className="h-full w-full object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0" />
                  <span className="absolute bottom-2 right-2 grid h-9 w-9 place-items-center rounded-full bg-card text-foreground transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cases */}
      <section className="bg-ink py-28 text-ink-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <p className="eyebrow text-accent">03 — Cases de sucesso</p>
          <div className="mt-8 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <h2 className="max-w-2xl text-4xl leading-tight md:text-5xl">Projetos que impactaram negócios e a vida dos nossos clientes.</h2>
            <Link to="/cases" className="inline-flex items-center gap-2 font-semibold text-accent">Ver todos os cases <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="mt-16 grid gap-5 md:grid-cols-6">
            {cases.map((c, i) => (
              <Link
                key={c.slug}
                to="/cases"
                hash={c.slug}
                className={`group flex flex-col overflow-hidden rounded-lg border border-ink-line ${i < 2 ? "md:col-span-3" : "md:col-span-2"}`}
              >
                <div className={`relative overflow-hidden bg-ink-foreground ${i < 2 ? "aspect-[16/10]" : "aspect-[4/3]"}`}>
                  <img src={c.image} alt={c.client} className={`h-full w-full transition-transform duration-700 group-hover:scale-105 ${c.imageFit === "cover" ? "object-cover" : "object-contain p-10"}`} />
                </div>
                <div className="flex flex-1 items-start justify-between gap-4 p-6">
                  <div>
                    <p className="eyebrow text-ink-muted">{c.area}</p>
                    <h3 className="mt-2 text-2xl">{c.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{c.client}</p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 shrink-0 text-accent transition-transform group-hover:rotate-45" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="mx-auto max-w-7xl px-6 py-28 lg:px-10">
        <SectionLabel index="04">Por que a Catena</SectionLabel>
        <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
          {[
            { t: "Vínculo universitário", d: "Empresa Júnior das Engenharias da UFRJ — Campus Macaé, com o auxílio de professores com estudos e experiências nas áreas atendidas." },
            { t: "Abordagem multidisciplinar", d: "Engenharia de Produção, Civil e Mecânica sob o mesmo teto, para soluções que vão do negócio à obra e ao sistema mecânico." },
            { t: "Preço baixo e qualidade", d: "Como empresa sem fins lucrativos, levamos soluções inovadoras e de alta qualidade a empresas, instituições e à sociedade." },
          ].map((f, i) => (
            <div key={f.t} className="bg-background p-10">
              <span className="eyebrow text-primary">0{i + 1}</span>
              <h3 className="mt-6 text-3xl">{f.t}</h3>
              <p className="mt-4 leading-relaxed text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Blog */}
      <section className="mx-auto max-w-7xl px-6 pb-28 lg:px-10">
        <div className="flex flex-col justify-between gap-6 border-t border-border pt-16 md:flex-row md:items-end">
          <div>
            <SectionLabel index="05">Blog</SectionLabel>
            <h2 className="mt-8 text-4xl md:text-5xl">Conteúdo para quem empreende.</h2>
          </div>
          <a href={contact.instagram} target="_blank" rel="noreferrer" className="text-sm text-muted-foreground hover:text-foreground">
            No Instagram, posts todas as terças e quintas →
          </a>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {posts.map((p) => (
            <a key={p.title} href={p.url} target="_blank" rel="noreferrer" className="group">
              <div className="aspect-[16/10] overflow-hidden rounded-md bg-muted">
                <img src={p.image} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="eyebrow mt-5 text-muted-foreground">{p.date} · {p.read}</p>
              <h3 className="mt-2 text-2xl leading-snug group-hover:text-primary">{p.title}</h3>
            </a>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
