import { Link } from "@tanstack/react-router";
import { Instagram, Linkedin, Facebook } from "lucide-react";
import { areas, contact, images } from "@/content/catena";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ink-foreground">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-12 lg:px-10">
        <div className="md:col-span-4">
          <img src={images.logo} alt="Catena Consultoria" className="h-14 w-auto" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-muted">
            Empresa Júnior das Engenharias da Universidade Federal do Rio de Janeiro — Campus Macaé. Fundada em 2014.
          </p>
          <div className="mt-6 flex gap-3">
            {[
              { href: contact.instagram, icon: Instagram, label: "Instagram" },
              { href: contact.linkedin, icon: Linkedin, label: "LinkedIn" },
              { href: contact.facebook, icon: Facebook, label: "Facebook" },
            ].map(({ href, icon: Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="grid h-10 w-10 place-items-center rounded-full border border-ink-line text-ink-muted transition-colors hover:border-accent hover:text-accent">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
        <div className="md:col-span-2">
          <p className="eyebrow text-ink-muted">Navegação</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><Link to="/quem-somos" className="hover:text-accent">Quem somos</Link></li>
            <li><Link to="/servicos" className="hover:text-accent">Serviços</Link></li>
            <li><Link to="/cases" className="hover:text-accent">Cases de sucesso</Link></li>
            <li><Link to="/conteudo" className="hover:text-accent">Blog & E-books</Link></li>
            <li><Link to="/contato" className="hover:text-accent">Diagnóstico gratuito</Link></li>
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-ink-muted">Áreas de atuação</p>
          <ul className="mt-5 space-y-3 text-sm">
            {areas.map((a) => (
              <li key={a.slug}>
                <Link to="/servicos/$area" params={{ area: a.slug }} className="hover:text-accent">{a.discipline}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-ink-muted">Contato</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href={contact.phoneHref} className="hover:text-accent">{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`} className="hover:text-accent">{contact.email}</a></li>
            <li className="pt-2 leading-relaxed text-ink-muted">{contact.address.map((l) => <span key={l} className="block">{l}</span>)}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-line">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-2 px-6 py-6 text-xs text-ink-muted md:flex-row lg:px-10">
          <span>© {new Date().getFullYear()} Catena Consultoria. Todos os direitos reservados.</span>
          <span>Membro do Movimento Empresa Júnior</span>
        </div>
      </div>
    </footer>
  );
}
