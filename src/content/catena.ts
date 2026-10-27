import logo from "@/assets/catena/logo-catena.png.asset.json";
import equipe from "@/assets/catena/equipe-catena.jpg.asset.json";
import architectureSky from "@/assets/catena/architecture-sky.jpg.asset.json";
import analytics from "@/assets/catena/business-analytics.jpg.asset.json";
import dashboard from "@/assets/catena/dashboard-laptop.jpg.asset.json";
import engenheiro from "@/assets/catena/engenheiro-obra.jpg.asset.json";
import maquete from "@/assets/catena/maquete-arquitetura.jpg.asset.json";
import caseTd from "@/assets/catena/case-td-sustentavel.png.asset.json";
import case3d from "@/assets/catena/case-orcamento-3d.jpg.asset.json";
import caseAmerican from "@/assets/catena/case-american-insight.png.asset.json";
import caseEssencial from "@/assets/catena/case-essencial.png.asset.json";
import caseSupply from "@/assets/catena/case-supplyfreios.png.asset.json";
import ebookMkt from "@/assets/catena/ebook-plano-marketing.png.asset.json";
import ebookPlan from "@/assets/catena/ebook-planejamento.jpg.asset.json";
import ebookNeg from "@/assets/catena/ebook-plano-negocios.jpg.asset.json";
import blogClima from "@/assets/catena/blog-climatizacao.png.asset.json";
import blogArq from "@/assets/catena/blog-arquitetura.jpg.asset.json";
import blogMacae from "@/assets/catena/blog-macae.png.asset.json";
import brasilJr from "@/assets/catena/brasil-junior.png.asset.json";
import rioJr from "@/assets/catena/rio-junior.png.asset.json";
import nucleo from "@/assets/catena/nucleo-norte-fluminense.png.asset.json";

const WIX = "https://catenaufrj.wixsite.com/catenaufrj";

export const images = {
  logo: logo.url,
  equipe: equipe.url,
  architectureSky: architectureSky.url,
  analytics: analytics.url,
  dashboard: dashboard.url,
  engenheiro: engenheiro.url,
  maquete: maquete.url,
};

export const contact = {
  phone: "(22) 99873-0354",
  phoneHref: "tel:+5522998730354",
  whatsapp: "https://wa.me/5522998730354",
  email: "contato@catenaufrj.com",
  address: ["Av. Aloísio da Silva Gomes, 50, Novo Cavaleiros", "UFRJ — Campus Macaé", "Macaé — RJ", "CEP 27930-560"],
  instagram: "https://www.instagram.com/catenaconsultoriaufrj/",
  linkedin: "https://br.linkedin.com/company/catenaconsultoria",
  facebook: "https://www.facebook.com/catenaconsultoria",
};

export type Service = { name: string; description: string };
export type Area = {
  slug: "negocios" | "obras" | "mecanica";
  index: string;
  discipline: string;
  title: string;
  intro: string;
  image: string;
  services: Service[];
  pending?: string;
};

export const areas: Area[] = [
  {
    slug: "negocios",
    index: "01",
    discipline: "Engenharia de Produção",
    title: "Soluções para o seu negócio",
    image: analytics.url,
    intro:
      "Uma gama abrangente de serviços para impulsionar o sucesso do seu negócio. Com soluções personalizadas, abordamos desde a base operacional até estratégias de expansão — transformando desafios em oportunidades.",
    services: [
      { name: "Mapeamento de Processos", description: "Identificação, documentação e otimização detalhada de todos os processos internos de uma organização para melhorar a eficiência operacional." },
      { name: "Planejamento Estratégico", description: "Definição de metas a longo prazo, alocação de recursos e direcionamento estratégico para garantir o crescimento sustentável e a adaptação às mudanças do ambiente de negócios." },
      { name: "Pesquisa de Satisfação", description: "Coleta sistemática de feedback dos clientes para avaliar a qualidade dos produtos e serviços, identificar áreas de melhoria e fortalecer a relação com o público-alvo." },
      { name: "Análise de Franqueabilidade", description: "Avaliação da adequação de um negócio para o modelo de franquia, considerando aspectos legais, operacionais e de mercado para garantir o sucesso da expansão nesse formato." },
      { name: "Plano de Marketing", description: "Estruturação de estratégias de marketing abrangentes, incluindo segmentação de mercado, posicionamento, mix de marketing e táticas promocionais, para impulsionar a visibilidade e as vendas." },
      { name: "Análise de Viabilidade Técnica e Econômica", description: "Avaliação criteriosa da capacidade técnica e da viabilidade financeira de um projeto, fornecendo insights cruciais para a tomada de decisões empresariais." },
      { name: "Estudo de Mercado", description: "Investigação abrangente das condições de mercado, concorrência e demanda, visando identificar oportunidades e desafios para orientar estratégias de posicionamento e crescimento." },
      { name: "Gestão da Qualidade", description: "Implementação de práticas e padrões para garantir a excelência operacional, otimizando processos, reduzindo falhas e melhorando a satisfação do cliente." },
      { name: "Formatação de Franquia", description: "Desenvolvimento e estruturação de um modelo de negócios replicável, estabelecendo padrões e diretrizes para a expansão bem-sucedida por meio de franquias." },
      { name: "Plano de Negócio", description: "Documento estratégico que delineia objetivos, estratégias, projeções financeiras e planos de ação para orientar o desenvolvimento e a gestão eficaz de uma empresa." },
    ],
  },
  {
    slug: "obras",
    index: "02",
    discipline: "Engenharia Civil",
    title: "Soluções para a sua obra",
    image: maquete.url,
    intro:
      "Serviços especializados em engenharia civil, projetados para superar desafios e transformar visões em estruturas sólidas. Uma abordagem focada em qualidade e inovação, com uma equipe pronta para conduzir o seu projeto.",
    services: [
      { name: "Sistema de Captação de Água de Chuva", description: "Implementação de infraestrutura eficiente para coleta e armazenamento de água pluvial, promovendo a sustentabilidade e a redução do consumo de água potável em edificações." },
      { name: "Plantas Baixas e Modelos 3D", description: "Criação detalhada de plantas arquitetônicas e modelos tridimensionais, proporcionando uma visualização realista e precisa do projeto e facilitando a comunicação e a tomada de decisões." },
      { name: "Legalização de Imóveis", description: "Regularização documental e legal de propriedades, garantindo conformidade com normas e legislações vigentes e promovendo segurança jurídica aos proprietários." },
      { name: "Projeto Arquitetônico", description: "Desenvolvimento de planos e concepções visuais para construções, integrando funcionalidade e estética e considerando aspectos como iluminação, ventilação e otimização de espaços." },
      { name: "Orçamento de Obras", description: "Elaboração detalhada de estimativas de custos para projetos de construção, fornecendo informações cruciais para o planejamento financeiro e a execução eficiente das obras." },
    ],
  },
  {
    slug: "mecanica",
    index: "03",
    discipline: "Engenharia Mecânica",
    title: "Soluções para o seu sistema mecânico",
    image: engenheiro.url,
    intro:
      "Consultoria em engenharia mecânica desenvolvida por estudantes da UFRJ — Campus Macaé, com a orientação de professores com estudos e experiência na área.",
    services: [],
    pending:
      "A lista detalhada de serviços de Engenharia Mecânica não estava disponível no site original e está pendente de confirmação pela equipe Catena.",
  },
];

export type Case = {
  slug: string;
  title: string;
  client: string;
  area: string;
  image: string;
  imageFit: "cover" | "contain";
};

export const cases: Case[] = [
  { slug: "controle-de-qualidade", title: "Controle de Qualidade", client: "Oficina Mecânica — Supplyfreios", area: "Engenharia de Produção", image: caseSupply.url, imageFit: "contain" },
  { slug: "orcamento-desenho-3d", title: "Orçamento e Desenho 3D", client: "Cliente Particular", area: "Engenharia Civil", image: case3d.url, imageFit: "cover" },
  { slug: "plano-de-negocios", title: "Plano de Negócios", client: "Farmácia — Essencial", area: "Engenharia de Produção", image: caseEssencial.url, imageFit: "contain" },
  { slug: "mapeamento-processos", title: "Mapeamento e Modelagem de Processos", client: "Startup de redução de consumo de água — T&D Sustentável", area: "Engenharia de Produção", image: caseTd.url, imageFit: "contain" },
  { slug: "market-share-franqueabilidade", title: "Market Share e Análise de Franqueabilidade", client: "Curso de inglês — American Insight", area: "Engenharia de Produção", image: caseAmerican.url, imageFit: "contain" },
];

export const ebooks = [
  { title: "Plano de Negócios", cover: ebookNeg.url, available: true },
  { title: "Planejamento Estratégico", cover: ebookPlan.url, available: true },
  { title: "Plano de Marketing", cover: ebookMkt.url, available: true },
  { title: "Como Montar um Negócio do Zero", cover: null, available: false },
];
export const ebooksUrl = `${WIX}/general-8`;

export const posts = [
  { title: "Projeto de Climatização e Exaustão: Garantindo Ambientes Eficientes e Confortáveis", excerpt: "Seja em um escritório, fábrica ou qualquer outro ambiente, a climatização e exaustão desempenham um papel fundamental na qualidade do ambiente.", date: "4 jul. 2024", read: "2 min", image: blogClima.url, url: `${WIX}/post/projeto-de-climatização-e-exaustão-garantindo-ambientes-eficientes-e-confortáveis` },
  { title: "Vale a pena investir em um negócio em Macaé?", excerpt: "Você já se perguntou se Macaé é o lugar certo para começar um negócio? Com sua fama de “Capital Nacional do Petróleo”, essa cidade…", date: "21 jun. 2024", read: "2 min", image: blogMacae.url, url: `${WIX}/post/vale-a-pena-investir-em-um-negócio-em-macaé` },
  { title: "A Importância do Projeto Arquitetônico para o Seu Negócio", excerpt: "A arquitetura é uma arte que combina estética, funcionalidade e inovação. Um projeto arquitetônico não é apenas sobre a criação de um espaço…", date: "19 jun. 2024", read: "2 min", image: blogArq.url, url: `${WIX}/post/a-importância-do-projeto-arquitetônico-para-o-seu-negócio` },
];
export const blogUrl = `${WIX}/blog`;

export const networks = [
  { name: "Brasil Júnior", logo: brasilJr.url },
  { name: "Rio Júnior", logo: rioJr.url },
  { name: "Núcleo Norte Fluminense", logo: nucleo.url },
];
