import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ArrowUpRight, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/content/catena";
import { PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/contato")({
  validateSearch: z.object({ servico: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Diagnóstico sem compromisso — Contato | Catena Consultoria" },
      { name: "description", content: "Solicite um diagnóstico gratuito e sem compromisso com a Catena Consultoria pelo WhatsApp. Tel. (22) 99762-4691 · comercial@catenaufrj.com." },
      { property: "og:title", content: "Solicite um diagnóstico sem compromisso — Catena Consultoria" },
      { property: "og:description", content: "Fale com a Empresa Júnior das Engenharias da UFRJ — Campus Macaé." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const { servico } = Route.useSearch();

  const message = servico
    ? `Olá, Catena! Vim pelo site e tenho interesse em: ${servico}. Gostaria de solicitar uma avaliação gratuita.`
    : "Olá, Catena! Vim pelo site e gostaria de solicitar uma avaliação gratuita do meu projeto.";
  const whatsapp = `${contact.whatsapp}?text=${encodeURIComponent(message)}`;

  return (
    <>
      <PageHero
        eyebrow="Diagnóstico"
        title={<>Solicite um diagnóstico <em className="text-accent">sem compromisso!</em></>}
        intro="Conte para a gente o que você precisa. Respondemos pelo WhatsApp e montamos uma proposta sob medida para o seu projeto."
      />

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <div className="lg:col-span-7">
          <div className="relative overflow-hidden rounded-xl bg-primary p-10 text-primary-foreground md:p-14">
            <div className="blueprint pointer-events-none absolute inset-0 opacity-40" />
            <div className="relative">
              <p className="eyebrow opacity-70">Fale com a equipe</p>
              <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
                Atendimento pelo WhatsApp, <em>sem compromisso.</em>
              </h2>
              <p className="mt-6 max-w-xl leading-relaxed text-primary-foreground/80">
                Clique no botão abaixo para abrir uma conversa com o número oficial da Catena. Sua
                mensagem já vai preenchida — é só enviar e contar o que você precisa.
              </p>
              {servico && (
                <p className="mt-6 inline-flex rounded-full border border-primary-foreground/30 px-4 py-1.5 text-sm">
                  Interesse: {servico}
                </p>
              )}
              <div className="mt-10 flex flex-wrap items-center gap-5">
                <a
                  href={whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 rounded-full bg-accent px-8 py-4 text-lg font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
                >
                  Solicitar avaliação gratuita <ArrowUpRight className="h-5 w-5" />
                </a>
                <a href={contact.phoneHref} className="inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline">
                  <Phone className="h-4 w-4" /> {contact.phone}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-border pt-8">
            <p className="text-sm text-muted-foreground">Prefere outro canal?</p>
            <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <Mail className="h-4 w-4" /> {contact.email}
            </a>
            <a href={contact.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>

        <aside className="space-y-10 pr-14 lg:col-span-4 lg:col-start-9">
          <div>
            <p className="eyebrow flex items-center gap-2 text-primary"><Phone className="h-4 w-4" /> Contate-nos</p>
            <a href={contact.phoneHref} className="mt-3 block font-display text-3xl">{contact.phone}</a>
            <a href={`mailto:${contact.email}`} className="mt-1 flex items-center gap-2 text-muted-foreground hover:text-foreground"><Mail className="h-4 w-4" />{contact.email}</a>
          </div>
          <div>
            <p className="eyebrow flex items-center gap-2 text-primary"><MapPin className="h-4 w-4" /> Visite-nos</p>
            <address className="mt-3 not-italic leading-relaxed text-muted-foreground">
              {contact.address.map((l) => <span key={l} className="block">{l}</span>)}
            </address>
          </div>
          <iframe
            title="Mapa — UFRJ Campus Macaé"
            src="https://www.google.com/maps?q=Av.+Alo%C3%ADsio+da+Silva+Gomes,+50,+Novo+Cavaleiros,+Maca%C3%A9+-+RJ&output=embed"
            className="aspect-square w-full rounded-lg border border-border grayscale"
            loading="lazy"
          />
        </aside>
      </section>
    </>
  );
}
