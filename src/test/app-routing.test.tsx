import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";
import { areas, contact } from "@/content/catena";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  function routerFor() {
    return createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  }

  it("matches a page for / instead of falling back to not found", () => {
    const matches = routerFor().matchRoutes("/");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });

  it("matches a page for /movimento-empresa-junior", () => {
    const matches = routerFor().matchRoutes("/movimento-empresa-junior");

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
  });
});

describe("Catena contact data", () => {
  it("uses the official phone number in every channel derived from it", () => {
    expect(contact.phone).toBe("(22) 99762-4691");
    expect(contact.phoneHref).toBe("tel:+5522997624691");
    expect(contact.whatsapp).toBe("https://wa.me/5522997624691");
  });

  it("points Instagram at the official profile", () => {
    expect(contact.instagram).toBe("https://www.instagram.com/catena_consultoria/");
  });

  it("lists the four mechanical engineering services confirmed by the team", () => {
    const mecanica = areas.find((a) => a.slug === "mecanica");
    if (!mecanica) throw new Error("Área mecânica não encontrada");

    expect(mecanica.services.map((s) => s.name)).toEqual([
      "Modelagem 2D e 3D",
      "Ensaios Mecânicos",
      "Projeto de Climatização",
      "Projeto de Exaustão",
    ]);
  });
});
