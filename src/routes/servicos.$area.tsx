import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { areas } from "@/content/catena";
import { CtaBand, PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/servicos/$area")({
  loader: ({ params }) => {
    const area = areas.find((a) => a.slug === params.area);
    if (!area) throw notFound();
    return { area };
  },
  head: ({ loaderData }) => {
    const a = loaderData?.area;
    const title = a ? `${a.discipline}: ${a.title} — Catena Consultoria` : "Serviço não encontrado — Catena Consultoria";
    return {
      meta: [
        { title },
        { name: "description", content: a?.intro ?? "Serviços da Catena Consultoria." },
        { property: "og:title", content: title },
        { property: "og:description", content: a?.intro ?? "Serviços da Catena Consultoria." },
        ...(a ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  component: AreaPage,
});

function AreaPage() {
  const { area } = Route.useLoaderData();
  return (
    <>
      <PageHero eyebrow={`${area.index} — ${area.discipline}`} title={area.title} intro={area.intro} image={area.image} />
      <div className="sticky top-[60px] z-40 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-4 lg:px-10">
          {areas.map((a) => (
            <Link key={a.slug} to="/servicos/$area" params={{ area: a.slug }} className="whitespace-nowrap text-sm text-muted-foreground" activeProps={{ className: "whitespace-nowrap text-sm font-semibold text-primary" }}>
              {a.discipline}
            </Link>
          ))}
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-10">
        {area.services.length > 0 ? (
          <ol className="grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
            {area.services.map((s, i) => (
              <li key={s.name} className="group bg-background p-10 transition-colors hover:bg-card">
                <span className="eyebrow text-primary">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-5 text-3xl">{s.name}</h2>
                <p className="mt-4 leading-relaxed text-muted-foreground">{s.description}</p>
                <Link to="/contato" search={{ servico: s.name }} className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary opacity-70 transition-opacity group-hover:opacity-100">
                  Solicitar informações <ArrowUpRight className="h-4 w-4" />
                </Link>
              </li>
            ))}
          </ol>
        ) : (
          <div className="rounded-lg border border-dashed border-border p-12 text-center">
            <p className="eyebrow text-muted-foreground">Pendente de confirmação</p>
            <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">{area.pending}</p>
            <Link to="/contato" search={{ servico: area.discipline }} className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground">
              Fale com a equipe sobre seu projeto <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </section>
      <CtaBand />
    </>
  );
}
