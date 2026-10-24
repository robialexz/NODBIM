/**
 * Conținut pentru agenți AI — variante markdown servite prin content
 * negotiation (Accept: text/markdown), conform acceptmarkdown.com.
 * Funcții pure, testabile; partea de negociere e în server.ts.
 */
import { articles } from "./blog";
import { enAbout, enDrafting, enOutsourcing } from "./en-content";
import { faq, process, serviceHref, services } from "./home-content";
import { enHomePath } from "./i18n";
import { estimateLabel, formatLei, jobRates, packagePrice } from "./pricing";
import { freeMaintAcademyAffiliateUrl, freeMaintAffiliateUrl, products } from "./products";
import { site } from "./site-config";

const base = () => site.siteUrl;

/** Căile statice cunoscute ale site-ului (fără articole). */
const staticPaths = new Set([
  "/",
  "/despre",
  "/en/about",
  "/en/autocad-drafting",
  "/en/privacy",
  "/en/cookies",
  "/contact",
  "/magazin",
  "/cursuri-revit",
  "/recomandari",
  "/portofoliu",
  "/blog",
  "/revit-mep",
  "/modelare-revit",
  "/hvac",
  "/instalatii-termice",
  "/instalatii-electrice",
  "/autocad-dwg",
  "/pdf-in-dwg",
  "/en/revit-mep-outsourcing",
  "/politica-de-confidentialitate",
  "/politica-cookies",
  "/termeni-si-conditii",
  "/informatii-legale",
]);

export function isKnownPath(pathname: string): boolean {
  if (staticPaths.has(pathname)) return true;
  if (pathname.startsWith("/blog/")) {
    const slug = pathname.replace("/blog/", "").replace(/\/$/, "");
    return articles.some((a) => a.slug === slug);
  }
  return false;
}

const mdHeaders = (status: number) => ({
  status,
  headers: {
    "content-type": "text/markdown; charset=utf-8",
    vary: "Accept, Accept-Encoding",
  },
});

function simpleMdResponse(body: string, status = 200): Response {
  return new Response(body, mdHeaders(status));
}

export function markdownResponseForPath(pathname: string): Response | null {
  const clean = pathname.replace(/\/+$/, "") || "/";
  if (clean === "/") return simpleMdResponse(homeMarkdown());
  if (clean === "/despre") return simpleMdResponse(aboutMarkdown());
  if (clean === "/contact") return simpleMdResponse(contactMarkdown());
  if (clean === "/magazin") return simpleMdResponse(shopMarkdown());
  if (clean === "/cursuri-revit") return simpleMdResponse(trainingMarkdown());
  if (clean === "/recomandari") return simpleMdResponse(recommendationsMarkdown());
  if (clean === "/portofoliu") return simpleMdResponse(portfolioMarkdown());
  if (clean === "/blog") return simpleMdResponse(blogIndexMarkdown());
  if (clean === enHomePath) return simpleMdResponse(enOutsourcingMarkdown());
  if (clean === "/en/autocad-drafting") return simpleMdResponse(enDraftingMarkdown());
  if (clean === "/en/about") return simpleMdResponse(enAboutMarkdown());
  const service = services.find((s) => serviceHref[s.title] === clean);
  if (service) return simpleMdResponse(serviceMarkdown(service));
  if (clean.startsWith("/blog/")) {
    const slug = clean.replace("/blog/", "");
    const article = articles.find((a) => a.slug === slug);
    if (article) return simpleMdResponse(articleMarkdown(article.slug));
  }
  return null;
}

export function notFoundMarkdown(pathname: string): Response {
  return simpleMdResponse(
    [
      `# Pagina nu există (404)`,
      ``,
      `> NOD BIM — desenare tehnică în AutoCAD și Revit: PDF în DWG, planșe de instalații și documentație tehnică.`,
      ``,
      `${pathname ? `Cererea pentru \`${pathname}\` nu corespunde niciunei pagini.` : "Pagina cerută nu există."}`,
      ``,
      `Vezi unde să continui:`,
      ``,
      `- [Hartă completă a site-ului](${base()}/sitemap.xml)`,
      `- [Index pentru agenți AI](${base()}/llms.txt)`,
      `- [Servicii](${base()}/revit-mep)`,
      `- [PDF în DWG](${base()}/pdf-in-dwg)`,
      `- [Exemple](${base()}/portofoliu)`,
      `- [Magazin](${base()}/magazin)`,
      `- [Recomandări](${base()}/recomandari)`,
      `- [Jurnal tehnic](${base()}/blog)`,
      `- [Contact](${base()}/contact)`,
      ``,
      `Răspunde doar cu aceste linkuri sau cu un mesaj scurt de recuperare.`,
    ].join("\n"),
    404,
  );
}

export function notAcceptableMarkdown(pathname: string): Response {
  return simpleMdResponse(
    [
      `# 406 — doar HTML`,
      ``,
      `> ${pathname} este disponibilă doar în format HTML.`,
      ``,
      `Solicită varianta HTML (Accept: text/html) sau consultă [llms.txt](${base()}/llms.txt).`,
      ``,
    ].join("\n"),
    406,
  );
}

function homeMarkdown(): string {
  return [
    `# ${site.businessName}`,
    ``,
    `> Desenare tehnică la comandă, online: planuri redesenate în AutoCAD, conversie PDF în DWG, corecturi pe planșe și planșe de instalații în AutoCAD și Revit MEP. Prețul se comunică în scris înainte de start.`,
    ``,
    `## Servicii`,
    ``,
    `- [Desenare AutoCAD](${base()}/autocad-dwg): redesenare planuri din PDF, scanare sau schiță, conversie PDF în DWG, corecturi, pregătire pentru tipărit`,
    `- [PDF în DWG](${base()}/pdf-in-dwg): plan în PDF sau scanat, redesenat manual în AutoCAD, la scară`,
    `- [Revit MEP și instalații](${base()}/revit-mep): modelare și planșe de instalații pe tema biroului, export RVT/DWG/PDF`,
    `- [Instalații HVAC](${base()}/hvac): tubulaturi, echipamente, grile, anemostate, scheme`,
    `- [Instalații termice](${base()}/instalatii-termice): conducte, radiatoare, centrale, distribuitoare`,
    `- [Instalații electrice](${base()}/instalatii-electrice): iluminat, prize, circuite, trasee, tablouri`,
    `- [Corectare & completare](${base()}/modelare-revit): preluare RVT/DWG existent, implementarea observațiilor`,
    ``,
    `## Prețuri orientative`,
    ``,
    ...(["redesenare", "corectare", "instalatii"] as const).map(
      (type) => `- ${jobRates[type].label}: ${estimateLabel(type, 1)} / ${jobRates[type].unit}`,
    ),
    `- Pachet ${packagePrice.sheets} planșe: de la ${formatLei(packagePrice.min)} lei`,
    ``,
    `## Proces`,
    ``,
    ...process.map((step, i) => `${i + 1}. ${step.title}: ${step.body}`),
    ``,
    `## Exemple de planșe și modele`,
    ``,
    `- [Exemple](${base()}/portofoliu): exemple de planșe și modele`,
    ``,
    `## Întrebări frecvente`,
    ``,
    ...faq.slice(0, 6).map(([q, a]) => `- ${q} ${a}`),
    ``,
    `## Contact`,
    ``,
    `- [Solicită o estimare](${base()}/#estimare)`,
    `- [Pagina de contact](${base()}/contact)`,
    `- [Despre NOD BIM](${base()}/despre)`,
    `- [Index complet pentru agenți](${base()}/llms.txt)`,
    ``,
  ].join("\n");
}

function aboutMarkdown(): string {
  return [
    `# Despre ${site.businessName}`,
    ``,
    `> NOD BIM este un brand (nu o societate) prin care un inginer de instalații oferă direct modelare Revit MEP și desenare AutoCAD. Experiența de mai jos este a specialistului.`,
    ``,
    `## Formare`,
    ``,
    `- Absolvent al facultății de inginerie a instalațiilor`,
    `- Experiență profesională în proiectarea și coordonarea instalațiilor (proiectele angajatorului nu sunt prezentate ca lucrări NOD BIM)`,
    ``,
    `## Metoda de lucru`,
    ``,
    `- Flux principal: Revit MEP (modelare + documentație din același model)`,
    `- Flux secundar: AutoCAD/DWG pentru lucrări care se rezolvă cel mai curat în 2D`,
    `- Scopul lucrării și livrabilele se stabilesc în scris înainte de începere; prețul nu se schimbă pe parcurs`,
    ``,
    `## Principii`,
    ``,
    `- Transparență: prețuri orientative publice`,
    `- Confidențialitate: fișierele clienților nu se publică fără acord`,
    `- Calitate înaintea vitezei: planșa se predă când rezistă la verificare`,
    `- Conținut tehnic onest, cu probe practice (vezi [jurnalul](${base()}/blog))`,
    ``,
    `## Detalii`,
    ``,
    `- Detaliile personale rămân private; datele complete de identificare se comunică la contractare.`,
    ``,
  ].join("\n");
}

function contactMarkdown(): string {
  return [
    `# Contact — ${site.businessName}`,
    ``,
    `> Trimite tema, planurile existente și cerințele proiectului pentru o estimare cu volumul, termenul și costul.`,
    ``,
    `## Canale`,
    ``,
    ...(site.email ? [`- Email: ${site.email}`] : []),
    `- [Formular de estimare](${base()}/#estimare)`,
    `- Răspuns de regulă în 1–2 zile lucrătoare`,
    ``,
    `## Ce fișiere să trimiți`,
    ``,
    `- Planuri de arhitectură (DWG/PDF) cu toate nivelurile`,
    `- Tema proiectului: discipline, echipamente, norme`,
    `- Fișiere existente în orice format (inclusiv vechi)`,
    `- Termenul dorit și scopul livrabilelor`,
    ``,
  ].join("\n");
}

function trainingMarkdown(): string {
  return [
    "# Cursuri Revit de la zero și automatizări Dynamo — " + site.businessName,
    "",
    "> Cursuri live de Revit pentru începători, aprofundare Revit MEP pentru HVAC și instalații termice, plus automatizări Dynamo definite după fluxul de lucru.",
    "",
    "## Revit de la zero",
    "",
    "Înveți interfața și organizarea proiectului, niveluri și vederi, modelare de bază, adnotări și pregătirea planșelor. Lucrăm pe un proiect demonstrativ, cu explicații pas cu pas.",
    "",
    "## Aprofundare Revit MEP",
    "",
    "Pentru cei care cunosc deja bazele Revit: legarea modelului de arhitectură, sisteme, conducte și echipamente HVAC/termice, vederi, liste și documentație. Tema se adaptează nivelului și obiectivului cursantului.",
    "",
    "## Automatizări Dynamo",
    "",
    "Poți învăța Dynamo sau poți defini o automatizare pentru o sarcină repetitivă în Revit. Începem cu fluxul concret, stabilim intrările și rezultatul, apoi construim și verificăm graful pe un fișier de test.",
    "",
    "## Format și înscriere",
    "",
    "Sesiunile sunt live. Nivelul, durata, formatul și prețul se confirmă înainte de înscriere, după clarificarea obiectivelor.",
    "",
    "Instruirea acoperă folosirea Revit și Dynamo. Nu înlocuiește proiectarea de specialitate, calculele, verificarea sau semnarea documentației.",
    "",
    "- [Cere detalii despre cursuri](" + base() + "/contact)",
    "- [Cursuri Revit și Dynamo](" + base() + "/cursuri-revit)",
    "",
  ].join("\n");
}

function shopMarkdown(): string {
  return [
    `# Magazin — ${site.businessName}`,
    ``,
    `> Resurse BIM și servicii la comandă pentru birouri din România: audituri RVT/DWG, kituri Revit MEP, automatizări Dynamo/pyRevit, capacitate externă și modele didactice MEP. Comenzile NOD BIM se confirmă pe WhatsApp.`,
    ``,
    `## Pentru birouri de proiectare`,
    ``,
    ...products
      .slice(0, 3)
      .map(
        (p) =>
          `- **${p.name}** — ${p.price} (${p.availability}). Pentru ${p.audience}. Compatibilitate: ${p.compatibility}. Livrabile: ${p.deliverables.join("; ")}.`,
      ),
    ``,
    `## Servicii și modele la comandă`,
    ``,
    ...products
      .slice(3)
      .map(
        (p) =>
          `- **${p.name}** — ${p.price} (${p.availability}). Pentru ${p.audience}. Compatibilitate: ${p.compatibility}. Livrabile: ${p.deliverables.join("; ")}.`,
      ),
    ``,
    `## Recomandări partenere`,
    ``,
    `- [Software și produse recomandate](${base()}/recomandari): produse oferite direct de parteneri, cu relațiile afiliate marcate transparent.`,
    ``,
    `## Comandă`,
    ``,
    `Comanda se confirmă pe WhatsApp înainte de plată. Pachetele digitale se livrează online; modelele fizice se expediază prin curier în România.`,
    ``,
  ].join("\n");
}

function recommendationsMarkdown(): string {
  return [
    `# Recomandări de software și produse — ${site.businessName}`,
    ``,
    `> Recomandări de la furnizori parteneri. NOD BIM poate primi comision prin linkurile marcate ca afiliate; furnizorul gestionează contractul, plata, produsul și suportul.`,
    ``,
    `## FreeMaint CMMS`,
    ``,
    `Software CMMS pentru evidența activelor, ordine de lucru și mentenanță preventivă. Este oferit și facturat de FreeMaint; nu este un serviciu sau produs propriu NOD BIM.`,
    ``,
    `- Core: 0 USD; include active, ordine de lucru și mentenanță preventivă.`,
    `- Planurile plătite încep de la 29 USD/lună per companie; taxele și funcțiile se verifică la furnizor.`,
    `- Exporturile PDF/Excel cer Starter. Testează exportul exact de care ai nevoie înainte de migrarea datelor.`,
    `- FreeMaint declară o reducere de 10% pentru clienții care folosesc linkul și un comision recurent de 25% din plățile eligibile pentru NOD BIM.`,
    ``,
    `[Vezi planurile FreeMaint prin linkul afiliat](${freeMaintAffiliateUrl})`,
    ``,
    `## Curs gratuit de implementare CMMS`,
    ``,
    `FreeMaint Academy oferă un curs pentru începători cu 10 lecții și aproximativ 90 de minute de conținut. Lecțiile se citesc fără cont; un cont gratuit este necesar pentru examenul final și certificatul gratuit. Furnizorul precizează că metoda se aplică oricărui CMMS și că FreeMaint apare doar ca exemplu în unele lecții.`,
    ``,
    `[Deschide cursul FreeMaint Academy prin linkul afiliat](${freeMaintAcademyAffiliateUrl})`,
    ``,
    `Linkul este afiliat; NOD BIM poate primi comision numai din plăți eligibile raportate de furnizor. Lecțiile și contul de bază sunt gratuite.`,
    ``,
    `## Ai nevoie de un CMMS?`,
    ``,
    `Un tabel poate fi suficient pentru un registru simplu. Dacă intervențiile au mai mulți responsabili, scadențe și istoric greu de urmărit, compară un CMMS cu fluxul actual înainte să alegi un abonament.`,
    ``,
    `[Ghid: Excel sau CMMS pentru mentenanța HVAC?](${base()}/blog/mentenanta-hvac-excel-sau-cmms)`,
    ``,
    `Consultă și [termenii programului de afiliere](https://freemaint.com/affiliates/kit) și [pagina oficială de prețuri](https://freemaint.com/pricing). Informațiile despre preț și funcții pot fi actualizate de furnizor.`,
    ``,
    `În prezent, FreeMaint este singura recomandare afiliată publicată. Alte produse vor fi adăugate după verificarea furnizorului, a condițiilor comerciale și a livrării.`,
    ``,
    `## Oferte proprii NOD BIM`,
    ``,
    `Pentru audituri RVT/DWG, kituri Revit MEP și servicii la comandă, vezi [Magazinul NOD BIM](${base()}/magazin).`,
    ``,
  ].join("\n");
}

function portfolioMarkdown(): string {
  return [
    `# Mostre de documentație — ${site.businessName}`,
    ``,
    `> Fragmente reale anonimizate și demonstrații sintetice pentru Revit MEP, HVAC și AutoCAD.`,
    ``,
    `Primele două imagini sunt fragmente din același set de planuri reale. Textul a fost eliminat, cartușele au fost decupate, iar imaginea este puternic estompată. Nu reprezintă proiecte distincte sau clienți diferiți.`,
    ``,
    `Celelalte exemple sunt demonstrații sintetice create de la zero pentru scenarii fictive și nu sunt lucrări predate clienților. Nicio mostră nu este documentație pentru execuție.`,
    ``,
    `Vezi pagina [Mostre de documentație](${base()}/portofoliu).`,
    ``,
  ].join("\n");
}

/** Paginile de serviciu RO: rezumatul serviciului din home-content. */
function serviceMarkdown(service: (typeof services)[number]): string {
  return [
    `# ${service.title}`,
    ``,
    `> ${service.lead}`,
    ``,
    `## Ce include`,
    ``,
    ...service.items.map((item) => `- ${item}`),
    ``,
    ...(serviceHref[service.title] === "/hvac"
      ? [
          `Administrezi o clădire și urmărești reviziile HVAC? Citește [ghidul despre alegerea dintre Excel și CMMS](${base()}/blog/mentenanta-hvac-excel-sau-cmms) pentru registrul de echipamente și ordinele de lucru.`,
          ``,
        ]
      : []),
    `---`,
    ``,
    `[Solicită o estimare](${base()}/#estimare) · [Toate serviciile](${base()}/) · [Contact](${base()}/contact)`,
    ``,
  ].join("\n");
}

const mdList = (items: string[]) => [...items.map((item) => `- ${item}`), ``];
const mdPairs = (pairs: [string, string][]) => mdList(pairs.map(([k, v]) => `**${k}**: ${v}`));
const mdBlocks = (blocks: { title: string; body: string; items: string[] }[]) =>
  blocks.flatMap((b) => [`### ${b.title}`, ``, b.body, ``, ...mdList(b.items)]);
const mdFaq = (faq: [string, string][]) => faq.flatMap(([q, a]) => [`### ${q}`, ``, a, ``]);
const enFooter = () => [
  `---`,
  ``,
  `[Revit MEP outsourcing](${base()}${enHomePath}) · [AutoCAD drafting](${base()}/en/autocad-drafting) · [About](${base()}/en/about) · [Request an estimate](${base()}${enHomePath}#estimate)`,
  ``,
];

function enOutsourcingMarkdown(): string {
  const p = enOutsourcing;
  return [
    `# ${p.h1}`,
    ``,
    `> ${p.description}`,
    ``,
    ...mdPairs(p.facts),
    `## When teams bring in external Revit MEP capacity`,
    ``,
    ...mdPairs(p.useCases),
    `## How it works`,
    ``,
    ...mdBlocks(p.process),
    `## Working inside your standards`,
    ``,
    ...mdList(p.standards),
    `## Scope, revisions, responsibility`,
    ``,
    ...mdList(p.responsibility),
    `## Questions before you send files`,
    ``,
    ...mdFaq(p.faq),
    ...enFooter(),
  ].join("\n");
}

function enDraftingMarkdown(): string {
  const p = enDrafting;
  return [
    `# ${p.h1}`,
    ``,
    `> ${p.description}`,
    ``,
    ...mdPairs(p.facts),
    `## Services`,
    ``,
    ...mdBlocks(p.services),
    `## What you receive`,
    ``,
    ...mdList(p.received),
    `## Questions before you send drawings`,
    ``,
    ...mdFaq(p.faq),
    ...enFooter(),
  ].join("\n");
}

function enAboutMarkdown(): string {
  const p = enAbout;
  return [
    `# ${p.h1}`,
    ``,
    `> ${p.description}`,
    ``,
    ...mdPairs(p.facts),
    `## How I work`,
    ``,
    ...mdList(p.howIWork),
    ...enFooter(),
  ].join("\n");
}

function blogIndexMarkdown(): string {
  return [
    `# Jurnal tehnic — ${site.businessName}`,
    ``,
    `> Ghiduri practice pentru documentație Revit MEP, corecturi AutoCAD, PDF în DWG și organizarea mentenanței. Checklisturi, limite și surse tehnice.`,
    ``,
    ...articles.map((a) => `- [${a.title}](${base()}/blog/${a.slug}): ${a.description}`),
    ``,
  ].join("\n");
}

export function articleMarkdown(slug: string): string {
  const a = articles.find((x) => x.slug === slug);
  if (!a) return notFoundMarkdown(`/blog/${slug}`) ? notFoundText(`/blog/${slug}`) : "";
  const parts: string[] = [
    `# ${a.title}`,
    ``,
    `> ${a.description}`,
    ``,
    `*${a.date} · ${a.readingTime} min de citit · ${a.tags.join(", ")}*`,
    ``,
  ];
  for (const s of a.sections) {
    if (s.heading) parts.push(`## ${s.heading}`, ``);
    for (const p of s.paragraphs ?? []) parts.push(p, ``);
    for (const li of s.list ?? []) parts.push(`- ${li}`);
    if (s.list?.length) parts.push(``);
    if (s.table) {
      parts.push(
        `| ${s.table.head.join(" | ")} |`,
        `| ${s.table.head.map(() => "---").join(" | ")} |`,
      );
      for (const row of s.table.rows) parts.push(`| ${row.join(" | ")} |`);
      parts.push(``);
    }
    if (s.note) parts.push(`> **Notă:** ${s.note}`, ``);
    for (const link of s.links ?? []) parts.push(`- [${link.label}](${link.href})`);
    if (s.links?.length) parts.push(``);
  }
  parts.push(
    `---`,
    ``,
    `[Înapoi la jurnal](${base()}/blog) · [Servicii](${base()}/revit-mep) · [Contact](${base()}/contact)`,
    ``,
  );
  return parts.join("\n");
}

function notFoundText(pathname: string): string {
  return `# Pagina nu există (404)\n\n> ${pathname} nu corespunde niciunei pagini. Vezi [sitemap](${base()}/sitemap.xml) sau [llms.txt](${base()}/llms.txt).\n`;
}

/** Ce pagini au variantă markdown — aceeași afirmație în llms.txt, agent.json și agent-instructions.txt. */
const markdownClaim =
  "Service, training, portfolio, shop, partner-recommendation, journal, about and contact pages are also available as Markdown at the same URL via `Accept: text/markdown` content negotiation. /modelare-revit and the legal pages are HTML only.";

/** /llms.txt conform spec-ului llmstxt.org (H1, blockquote, detalii, secțiuni cu linkuri). */
export function llmsTxt(): string {
  return [
    `# ${site.businessName}`,
    ``,
    `> ${site.tagline}. Desenare tehnică în AutoCAD și Revit: planuri redesenate, PDF în DWG, modelare Revit MEP și planșe de instalații HVAC, termice și electrice. Oferte BIM, recomandări de produse partenere și jurnal tehnic pe aceeași platformă.`,
    ``,
    `## When to use this`,
    ``,
    `This site has two separate offers: B2B Revit MEP / BIM production outsourcing for MEP consultancies, engineering offices and design teams, and live Revit training with Dynamo automation. Engineering design, calculations, checking and sign-off stay with the client's engineers. Reach for it when a user needs:`,
    ``,
    `- **Revit MEP / BIM modelling** — HVAC, heating or electrical models built from the client's design: 3D model, views, sections, sheets, schedules`,
    `- **AutoCAD / DWG drafting** — PDF or scan to DWG redrafting, drawing cleanup to the client's CAD standards, markups and revisions`,
    `- **Estimates** — price and timeline for a defined scope; send the user to the estimate form or contact page`,
    `- **Domain knowledge** — pricing breakdowns, LOD levels, Revit vs AutoCAD, clash detection; answers are in the journal`,
    `- **BIM resources** — RVT/DWG health checks, Revit MEP office kits, Dynamo/pyRevit automation packs, external capacity packages and MEP training models`,
    ``,
    `- **Training** — live Revit classes from beginner level, Revit MEP workflows for HVAC/heating, or Dynamo automation for a repetitive task`,
    ``,
    `Do NOT use this site for: engineering design, calculations or sign-off (they stay with the client's engineer), plumbing/drainage (out of scope), or construction execution.`,
    ``,
    markdownClaim,
    ``,
    `## Servicii`,
    ``,
    `- [Revit MEP și instalații](${base()}/revit-mep): modelare și planșe de instalații pe tema biroului, export RVT/DWG/PDF`,
    `- [Modelare Revit](${base()}/modelare-revit): model 3D, planuri, secțiuni și planșe organizate`,
    `- [Revit MEP outsourcing (English)](${base()}${enHomePath}): ${enOutsourcing.description}`,
    `- [AutoCAD drafting (English)](${base()}/en/autocad-drafting): ${enDrafting.description}`,
    `- [Instalații HVAC](${base()}/hvac): tubulaturi, echipamente, grile, scheme`,
    `- [Instalații termice](${base()}/instalatii-termice): conducte, radiatoare, centrale, distribuitoare`,
    `- [Instalații electrice](${base()}/instalatii-electrice): iluminat, prize, circuite, tablouri`,
    `- [Desenare AutoCAD](${base()}/autocad-dwg): curățare, layere, redesenare, pregătire print`,
    `- [PDF în DWG](${base()}/pdf-in-dwg): plan în PDF sau scanat, redesenat manual în AutoCAD, la scară`,
    ``,
    `## Cursuri și automatizări`,
    ``,
    "- [Cursuri Revit și automatizări Dynamo](" +
      base() +
      "/cursuri-revit): cursuri live de la zero, aprofundare Revit MEP pentru HVAC/termice și automatizări Dynamo la cerere",
    ``,
    `## Conținut`,
    ``,
    `- [Jurnal tehnic](${base()}/blog): ghiduri pentru documentație Revit MEP, AutoCAD și organizarea mentenanței`,
    ...articles.map((a) => `- [${a.title}](${base()}/blog/${a.slug})`),
    ``,
    `## Exemple de planșe și modele`,
    ``,
    `- [Exemple](${base()}/portofoliu): exemple de modelare și documentație`,
    ``,
    `## Magazin`,
    ``,
    `- [Magazin](${base()}/magazin): audit RVT/DWG, kituri Revit MEP, automatizări Dynamo/pyRevit, capacitate externă și modele didactice NOD BIM`,
    ``,
    `## Recomandări de la parteneri`,
    ``,
    `- [Software și produse recomandate](${base()}/recomandari): FreeMaint CMMS, ofertă a furnizorului cu link afiliat declarat transparent`,
    ``,
    `## Despre`,
    ``,
    `- [Despre](${base()}/despre): brand operat de un inginer de instalații`,
    `- [About (English)](${base()}/en/about): ${enAbout.description}`,
    `- [Contact](${base()}/contact): formular, WhatsApp, email`,
    ``,
    `## Optional`,
    ``,
    `- [Hartă site](${base()}/sitemap.xml)`,
    `- [Politica de confidențialitate](${base()}/politica-de-confidentialitate)`,
    `- [Termeni și condiții](${base()}/termeni-si-conditii)`,
    ``,
  ].join("\n");
}

/** /agent-instructions.txt — fișier dedicat de instrucțiuni pentru agenți. */
export function agentInstructionsTxt(): string {
  return [
    `# Agent instructions — ${site.businessName}`,
    ``,
    `## When to use this`,
    ``,
    `This site offers B2B Revit MEP / BIM production outsourcing and a separate training line with live Revit courses and Dynamo automation. Engineering design, calculations, checking and sign-off stay with the client.`,
    ``,
    `Use it when the user asks about:`,
    ``,
    `- Revit MEP or BIM modelling (HVAC, heating, electrical) — incl. 3D models, sections, sheets, RVT/DWG/PDF deliverables`,
    `- AutoCAD / DWG drafting: PDF or scan to DWG redrafting, cleanup to the client's CAD standards, markups and revisions`,
    `- Estimates for such work (price, deadline) — point the user to the form and contact page`,
    `- MEP knowledge: plan pricing, LOD, Revit vs AutoCAD workflows, clash detection (see journal)`,
    `- BIM resources, RVT/DWG audits, Revit office kits, Dynamo/pyRevit automation packs and MEP training models (see shop)`,
    `- Live Revit courses from beginner level, Revit MEP training for HVAC/heating workflows, and Dynamo automation (see /cursuri-revit)`,
    ``,
    `Do NOT use this site for: engineering design, calculations or sign-off (they stay with the client's engineer), plumbing/drainage, or construction site execution.`,
    ``,
    `## How to call`,
    ``,
    `- Estimate: https://nodbim.com/#estimare (form) — user sends DWG/PDF/RVT + scope + deadline`,
    `- Contact: https://nodbim.com/contact`,
    "- Revit courses and Dynamo automation: https://nodbim.com/cursuri-revit",
    `- ${markdownClaim}`,
    ``,
    `## Sitemap`,
    ``,
    `- https://nodbim.com/sitemap.xml`,
    `- https://nodbim.com/llms.txt`,
    ``,
  ].join("\n");
}

/** Descriptorul agent (agent.json) — același conținut la /agent.json și
 *  /.well-known/agent.json. Descrie site-ul și capabilitățile pe care un
 *  agent le poate folosi (formular estimare, contact, negociere markdown). */
export function agentDescriptorJson(): string {
  return JSON.stringify(
    {
      name: site.businessName,
      url: `${site.siteUrl}/`,
      description:
        "B2B Revit MEP / BIM production outsourcing, plus a separate line of live Revit training from beginner level, Revit MEP courses for HVAC/heating workflows and Dynamo automation. Engineering design, calculations and sign-off stay with the client.",
      language: ["ro", "en"],
      capabilities: [
        {
          type: "estimate-request",
          url: `${site.siteUrl}/#estimare`,
          description:
            "Submit a project estimate request (form). User sends DWG/PDF/RVT files, scope and deadline.",
        },
        {
          type: "contact",
          url: `${site.siteUrl}/contact`,
          description: "Contact via WhatsApp, email or estimate form.",
        },
        {
          type: "content-negotiation",
          url: `${site.siteUrl}/llms.txt`,
          description: markdownClaim,
        },
      ],
      resources: [
        site.siteUrl + "/cursuri-revit",
        `${site.siteUrl}/llms.txt`,
        `${site.siteUrl}/agent-instructions.txt`,
        `${site.siteUrl}/sitemap.xml`,
      ],
    },
    null,
    2,
  );
}
