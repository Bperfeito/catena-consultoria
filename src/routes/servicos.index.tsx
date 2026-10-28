import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { areas, images } from "@/content/catena";
import { CtaBand, PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/servicos/")({
  head: () => ({
    meta: [
      { title: "Serviços — Catena Consultoria" },
      { name: "description", content: "Soluções em Engenharia de Produção, Engenharia Civil e Engenharia Mecânica para negócios, obras e sistemas mecânicos." },
      { property: "og:title", content: "Serviços — Catena Consultoria" },
      { property: "og:description", content: "Soluções para o seu negócio, a sua obra e o seu sistema mecânico." },
    ],
  }),
  component: Services,
});

function Services() {
  return (
    <>
      <PageHero eyebrow="Serviços" title={<>Escolha a área e conheça <em className="text-accent">nossas soluções.</em></>} image={images.dashboard} />
      <section className="mx-auto max-w-7xl space-y-24 px-6 py-28 lg:px-10">
        {areas.map((a, i) => (
          <article key={a.slug} className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className="overflow-hidden rounded-lg">
              <img src={a.image} alt="" className="aspect-[4/3] w-full object-cover" />
            </div>
            <div className="pr-14">
              <p className="eyebrow text-primary">{a.index} — {a.discipline}</p>
              <h2 className="mt-5 text-4xl md:text-5xl">{a.title}</h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{a.intro}</p>
              {a.services.length > 0 && (
                <ul className="mt-8 flex flex-wrap gap-2">
                  {a.services.map((s) => (
                    <li key={s.name} className="rounded-full border border-border px-4 py-1.5 text-sm">{s.name}</li>
                  ))}
                </ul>
              )}
              <Link to="/servicos/$area" params={{ area: a.slug }} className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Ver serviços <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </article>
        ))}
      </section>
      <CtaBand />
    </>
  );
}
