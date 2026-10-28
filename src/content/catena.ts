
import logo from "@/assets/catena/logo-catena.png";
import equipeCatena from "@/assets/catena/equipe-catena-user.png";
import architectureSky from "@/assets/catena/architecture-sky.jpg";
import arquitetura from "@/assets/catena/importanciaProjetoArquitetonico.avif";
import analytics from "@/assets/catena/business-analytics.jpg";
import dashboard from "@/assets/catena/dashboard-laptop.jpg";
import engenheiro from "@/assets/catena/engenheiro-obra.jpg";
import maquete from "@/assets/catena/maquete-arquitetura.jpg";
import caseTd from "@/assets/catena/case-td-sustentavel.png";
import case3d from "@/assets/catena/case-orcamento-3d.jpg";
import case3dFacade from "@/assets/catena/case-3d-fachada.png";
import case3dSala from "@/assets/catena/case-3d-sala.png";
import case3dSuite from "@/assets/catena/case-3d-suite.png";
import case3dVaranda from "@/assets/catena/case-3d-varanda.png";
import caseAmerican from "@/assets/catena/case-american-insight.png";
import caseEssencial from "@/assets/catena/case-essencial.png";
import caseSupply from "@/assets/catena/case-supplyfreios.png";
import ebookMkt from "@/assets/catena/ebook-plano-marketing.png";
import ebookPlan from "@/assets/catena/ebook-planejamento.jpg";
import ebookNeg from "@/assets/catena/ebook-plano-negocios.jpg";
import blogClima from "@/assets/catena/blog-climatizacao.png";
import blogArq from "@/assets/catena/blog-arquitetura.jpg";
import blogMacae from "@/assets/catena/blog-macae.png";
import brasilJr from "@/assets/catena/brasil-junior.png";
import rioJr from "@/assets/catena/rio-junior.png";
import nucleo from "@/assets/catena/nucleo-norte-fluminense.png";


const WIX = "https://catenaufrj.wixsite.com/catenaufrj";


export const images = {
  logo,
  equipe: equipeCatena,
  architectureSky,
  arquitetura,
  analytics,
  dashboard,
  engenheiro,
  maquete,
  caseTd,
  case3d,
  caseAmerican,
  caseEssencial,
  caseSupply,
  ebookMkt,
  ebookPlan,
  ebookNeg,
  blogClima,
  blogArq,
  blogMacae,
  brasilJr,
  rioJr,
  nucleo,
};

export const contact = {
  phone: "(22) 99762-4691",
  phoneHref: "tel:+5522997624691",
  whatsapp: "https://wa.me/5522997624691",
  email: "comercial@catenaufrj.com",
  address: ["Av. Aloísio da Silva Gomes, 50, Novo Cavaleiros", "UFRJ — Campus Macaé", "Macaé — RJ", "CEP 27930-560"],
  instagram: "https://www.instagram.com/catena_consultoria/",
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
    image: analytics,
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
    image: maquete,
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
    image: engenheiro,
    intro:
      "Soluções especializadas para atender às suas necessidades. Nossa equipe equipada está pronta para te proporcionar uma experiência confiável e eficiente, garantindo o funcionamento seguro e otimizado. Conte conosco para um atendimento dedicado e soluções personalizadas que mantenham os sistemas mecânicos operando no seu melhor desempenho.",
    services: [
      { name: "Modelagem 2D e 3D", description: "Transforma conceitos em representações bidimensionais e tridimensionais realistas, facilitando a visualização e análise detalhada de objetos e ambientes." },
      { name: "Ensaios Mecânicos", description: "Realiza testes rigorosos para avaliar a resistência, durabilidade e desempenho de materiais e estruturas, garantindo a conformidade com padrões de qualidade e segurança." },
      { name: "Projeto de Climatização", description: "Desenvolve sistemas eficientes para controlar a temperatura, umidade e qualidade do ar em ambientes internos, visando o conforto e a saúde das pessoas." },
      { name: "Projeto de Exaustão", description: "Planeja sistemas de exaustão para remover poluentes do ar, fumaça ou vapores indesejados em espaços fechados, promovendo um ambiente seguro e saudável." },
    ],
  },
];

export type Case = {
  slug: string;
  title: string;
  client: string;
  area: string;
  image: string;
  imageFit: "cover" | "contain";
  description: string[];
  gallery?: { src: string; alt: string; label: string }[];
};

export const cases: Case[] = [
  {
    slug: "controle-de-qualidade",
    title: "Controle de Qualidade",
    client: "Oficina Mecânica — Supplyfreios",
    area: "Engenharia de Produção",
    image: caseSupply,
    imageFit: "contain",
    description: [
      "A SupplyFreios procurou a Catena após identificar pontos de melhoria na gestão empresarial e nos processos internos. O projeto aplicou ferramentas de Controle de Qualidade para apoiar a preparação da oficina para uma auditoria externa e melhorar seu desempenho no mercado.",
      "A equipe desenvolveu ferramentas para apoiar a gestão interna e padronizar processos. O material entregue serve de base para o crescimento do negócio e para uma evolução consistente da cultura de qualidade.",
    ],
  },
  {
    slug: "orcamento-desenho-3d",
    title: "Orçamento e Desenho 3D",
    client: "Cliente Particular",
    area: "Engenharia Civil",
    image: case3dFacade,
    imageFit: "cover",
    gallery: [
      { src: case3dFacade, alt: "Fachada da casa projetada em 3D", label: "Fachada" },
      { src: case3dSala, alt: "Renderização 3D da sala e área de jantar", label: "Sala" },
      { src: case3dSuite, alt: "Renderização 3D da suíte", label: "Suíte" },
      { src: case3dVaranda, alt: "Renderização 3D da varanda", label: "Varanda" },
    ],
    description: [
      "O cliente precisava planejar a construção de uma casa de médio padrão, visualizar o resultado em 3D e estimar os custos da obra. A Catena desenvolveu o modelo tridimensional em Revit com base nas plantas e especificações fornecidas pelo cliente, além de elaborar o orçamento correspondente.",
      "Reuniões periódicas ajudaram a definir as soluções do projeto. Na entrega, o cliente recebeu vistas e renderizações da casa, aproximando o material técnico do resultado esperado, junto com um orçamento elaborado com base na TCPO e em levantamentos de preços com fornecedores e lojas especializadas.",
    ],
  },
  {
    slug: "plano-de-negocios",
    title: "Plano de Negócios",
    client: "Farmácia — Essencial",
    area: "Engenharia de Produção",
    image: caseEssencial,
    imageFit: "contain",
    description: [
      "Para a Farmácia Essencial, em Macaé, a Catena elaborou um Plano de Negócios com análises de mercado, marketing, operação e aspectos financeiros. O trabalho identificou pontos da estrutura do negócio que poderiam estar limitando seu desempenho.",
      "A partir do diagnóstico, foram recomendadas melhorias para fortalecer a atuação da farmácia, aumentar a satisfação dos clientes e apoiar o crescimento do faturamento.",
    ],
  },
  {
    slug: "mapeamento-processos",
    title: "Mapeamento e Modelagem de Processos",
    client: "Startup de redução de consumo de água — T&D Sustentável",
    area: "Engenharia de Produção",
    image: caseTd,
    imageFit: "contain",
    description: [
      "A T&D Sustentável contratou a Catena para mapear e modelar seus processos e criar manuais para franqueados e para a franqueadora, ajudando a alinhar a operação de toda a rede.",
      "Os mapeamentos e documentos produzidos passaram a ser utilizados pela startup desde o início do trabalho. O projeto também considerou as mudanças e necessidades próprias de uma empresa em fase de rápido crescimento.",
    ],
  },
  {
    slug: "market-share-franqueabilidade",
    title: "Market Share e Análise de Franqueabilidade",
    client: "Curso de inglês — American Insight",
    area: "Engenharia de Produção",
    image: caseAmerican,
    imageFit: "contain",
    description: [
      "A Catena analisou a participação de mercado da American Insight em Macaé usando questionários e outras fontes de dados. O estudo identificou a aceitação da escola, seu alcance e perfis promissores de consumidores, apoiando decisões de marketing mais estratégicas.",
      "Em um segundo projeto, avaliou a franqueabilidade do negócio: marca e posicionamento, vendas e concorrência, estrutura e investimento, diferenciais, modelo financeiro e conhecimento operacional. O diagnóstico ajudou a escola a reconhecer o que já estava preparado e o que precisava desenvolver para expandir por franquias.",
    ],
  },
];

export const ebooks = [
  { title: "Plano de Negócios", cover: ebookNeg, available: true },
  { title: "Planejamento Estratégico", cover: ebookPlan, available: true },
  { title: "Plano de Marketing", cover: ebookMkt, available: true },
  { title: "Como Montar um Negócio do Zero", cover: null, available: false },
];
export const ebooksUrl = `${WIX}/general-8`;

export const posts = [
  { title: "Projeto de Climatização e Exaustão: Garantindo Ambientes Eficientes e Confortáveis", excerpt: "Seja em um escritório, fábrica ou qualquer outro ambiente, a climatização e exaustão desempenham um papel fundamental na qualidade do ambiente.", date: "4 jul. 2024", read: "2 min", image: blogClima, url: `${WIX}/post/projeto-de-climatização-e-exaustão-garantindo-ambientes-eficientes-e-confortáveis` },
  { title: "Vale a pena investir em um negócio em Macaé?", excerpt: "Você já se perguntou se Macaé é o lugar certo para começar um negócio? Com sua fama de “Capital Nacional do Petróleo”, essa cidade…", date: "21 jun. 2024", read: "2 min", image: blogMacae, url: `${WIX}/post/vale-a-pena-investir-em-um-negócio-em-macaé` },
  { title: "A Importância do Projeto Arquitetônico para o Seu Negócio", excerpt: "A arquitetura é uma arte que combina estética, funcionalidade e inovação. Um projeto arquitetônico não é apenas sobre a criação de um espaço…", date: "19 jun. 2024", read: "2 min", image: blogArq, url: `${WIX}/post/a-importância-do-projeto-arquitetônico-para-o-seu-negócio` },
];
export const blogUrl = `${WIX}/blog`;

export const networks = [
  { name: "Brasil Júnior", logo: brasilJr },
  { name: "Rio Júnior", logo: rioJr },
  { name: "Núcleo Norte Fluminense", logo: nucleo },
];

export const mej = {
  definition:
    "As Empresas Juniores (EJs) são organizações formadas por estudantes de graduação que buscam aplicar os conhecimentos adquiridos em sala de aula na prática, desenvolvendo projetos e serviços para empresas e organizações reais. Essas empresas são gerenciadas pelos próprios estudantes, sob orientação de professores e profissionais do mercado.",
  representation:
    "No Brasil, as empresas juniores são representadas pela Confederação Brasileira de Empresas Juniores — a Brasil Júnior —, presente no estado do Rio de Janeiro através da Rio Júnior, a Federação das Empresas Juniores do Estado do Rio de Janeiro.",
  purpose:
    "Gerenciadas pelos próprios estudantes e acompanhadas por professores e profissionais do mercado, as empresas juniores funcionam como um espaço de aprendizagem prática: o estudante vive a rotina de uma empresa real antes de se formar, e a organização recebe um atendimento dedicado, com preço baixo e qualidade.",
};

export const pillars = [
  {
    title: "Missão",
    description:
      "Desenvolver e implementar estratégias que fortaleçam a imagem e reputação da Catena, que atraiam e fidelizem clientes impulsionando o crescimento e a rentabilidade da empresa. Proporcionando assim, uma vivência prática e enriquecedora para os membros por meio de contato com clientes, parceiros e mercado.",
  },
  {
    title: "Visão",
    description:
      "Aumentar a visibilidade e o reconhecimento da empresa na região, estimulando a satisfação e o engajamento dos leads.",
  },
  {
    title: "Valores",
    description:
      "Criatividade, inovação, responsabilidade social, comprometimento e persistência.",
  },
];
