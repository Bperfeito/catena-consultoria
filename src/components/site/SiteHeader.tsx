import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { images } from "@/content/catena";

const nav = [
  { to: "/quem-somos", label: "Quem somos" },
  { to: "/servicos", label: "Serviços" },
  { to: "/cases", label: "Cases" },
  { to: "/conteudo", label: "Blog & E-books" },
  { to: "/contato", label: "Contato" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? "bg-ink/95 py-3 shadow-lg backdrop-blur" : "bg-transparent py-6"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link to="/" className="flex items-center gap-3 text-ink-foreground" onClick={() => setOpen(false)}>
          <img src={images.logo} alt="Catena Consultoria" className="h-12 w-auto" />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-ink-muted transition-colors hover:text-ink-foreground"
              activeProps={{ className: "text-sm text-ink-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/contato"
            className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
          >
            Avaliação gratuita <ArrowUpRight className="h-4 w-4" />
          </Link>
        </nav>
        <button
          className="text-ink-foreground lg:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 px-6 pb-6 pt-4 lg:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-ink-line py-3 font-display text-2xl text-ink-foreground">
              {n.label}
            </Link>
          ))}
          <Link to="/contato" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-accent px-5 py-3 text-center font-semibold text-accent-foreground">
            Marque uma avaliação gratuita
          </Link>
        </nav>
      )}
    </header>
  );
}
