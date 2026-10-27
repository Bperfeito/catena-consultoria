import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { contact } from "@/content/catena";
import { PageHero } from "@/components/site/Blocks";

export const Route = createFileRoute("/contato")({
  validateSearch: z.object({ servico: z.string().optional() }),
  head: () => ({
    meta: [
      { title: "Diagnóstico sem compromisso — Contato | Catena Consultoria" },
      { name: "description", content: "Solicite um diagnóstico gratuito e sem compromisso com a Catena Consultoria. Tel. (22) 99873-0354 · contato@catenaufrj.com." },
      { property: "og:title", content: "Solicite um diagnóstico sem compromisso — Catena Consultoria" },
      { property: "og:description", content: "Fale com a Empresa Júnior das Engenharias da UFRJ — Campus Macaé." },
    ],
  }),
  component: Contact,
});

const schema = z.object({
  nome: z.string().trim().min(1, "Informe seu nome").max(100),
  sobrenome: z.string().trim().max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().max(30),
  mensagem: z.string().trim().min(1, "Escreva uma mensagem").max(2000),
});

const field = "w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

function Contact() {
  const { servico } = Route.useSearch();
  const [error, setError] = useState<string | null>(null);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) return setError(parsed.error.issues[0].message);
    setError(null);
    const d = parsed.data;
    const body = `Nome: ${d.nome} ${d.sobrenome}\nE-mail: ${d.email}\nTelefone: ${d.telefone}\n\n${d.mensagem}`;
    window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent("Solicitação de diagnóstico — site")}&body=${encodeURIComponent(body)}`;
  }

  return (
    <>
      <PageHero eyebrow="Diagnóstico" title={<>Solicite um diagnóstico <em className="text-accent">sem compromisso!</em></>} />
      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-12 lg:px-10">
        <form onSubmit={submit} className="grid gap-8 md:grid-cols-2 lg:col-span-7" noValidate>
          <input name="nome" placeholder="Nome" className={field} maxLength={100} />
          <input name="sobrenome" placeholder="Sobrenome" className={field} maxLength={100} />
          <input name="email" type="email" placeholder="E-mail" className={field} maxLength={255} />
          <input name="telefone" type="tel" placeholder="Telefone" className={field} maxLength={30} />
          <textarea
            name="mensagem"
            rows={5}
            placeholder="Conte-nos sobre o seu projeto"
            defaultValue={servico ? `Tenho interesse em: ${servico}\n\n` : ""}
            className={`${field} md:col-span-2 resize-none`}
            maxLength={2000}
          />
          <div className="flex flex-wrap items-center gap-6 md:col-span-2">
            <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
              Enviar <ArrowUpRight className="h-4 w-4" />
            </button>
            {error && <p className="text-sm text-destructive">{error}</p>}
          </div>
        </form>
        <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
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
