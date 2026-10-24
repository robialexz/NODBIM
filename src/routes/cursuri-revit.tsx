import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { MobileCta } from "@/components/site/MobileCta";
import { Reveal } from "@/components/site/Reveal";
import { canonicalUrl, quoteContextForPath, whatsappLink } from "@/lib/site-config";
import { trackConversion } from "@/lib/analytics";
import shopAutomation from "@/assets/shop-automation.webp";
import shopStarterKit from "@/assets/shop-starter-kit.webp";

const title = "Cursuri Revit de la zero și automatizări Dynamo · NOD BIM";
const description =
  "Cursuri live de Revit de la zero, aprofundare Revit MEP pentru HVAC și termice, plus automatizări Dynamo definite după fluxul tău de lucru.";
const url = canonicalUrl("/cursuri-revit");
const whatsappMessage =
  quoteContextForPath("/cursuri-revit")?.whatsappMessage ??
  "Salut! Mă interesează cursurile Revit și automatizările Dynamo. Îmi poți trimite detaliile?";
const whatsappHref = whatsappLink(whatsappMessage);

const programs = [
  {
    id: "revit-zero",
    kind: "Course",
    number: "01",
    label: "Începători",
    name: "Revit de la zero",
    description:
      "Înveți interfața și organizarea proiectului, nivelurile și vederile, modelarea de bază, adnotările și pregătirea primelor planșe.",
    points: ["Setarea proiectului și navigarea", "Model și vederi", "Adnotări și planșe"],
  },
  {
    id: "revit-mep",
    kind: "Course",
    number: "02",
    label: "Aprofundare",
    name: "Revit MEP pentru HVAC și termice",
    description:
      "Pentru cei care cunosc deja bazele Revit și vor să lucreze mai sigur cu modele și documentație pentru instalații.",
    points: [
      "Legarea modelului de arhitectură",
      "Sisteme, conducte și echipamente",
      "Vederi, liste și documentație",
    ],
  },
  {
    id: "dynamo",
    kind: "Service",
    number: "03",
    label: "La cerere",
    name: "Automatizări Dynamo",
    description:
      "Pornim de la o sarcină repetitivă din Revit și definim o automatizare potrivită fluxului tău, apoi o verificăm pe un fișier de test.",
    points: [
      "Definim problema și rezultatul",
      "Construim graful pas cu pas",
      "Testăm și explicăm fluxul",
    ],
  },
] as const;

const courseFaq: [string, string][] = [
  [
    "Trebuie să știu deja Revit?",
    "Nu pentru cursul de bază. Începem cu interfața și construim treptat un proiect demonstrativ. Pentru aprofundare Revit MEP, stabilim nivelul înainte de înscriere.",
  ],
  [
    "Pot cere doar o sesiune avansată sau despre Dynamo?",
    "Da. Poți cere aprofundare Revit MEP ori o automatizare Dynamo pentru un flux concret. Stabilim tema și ce trebuie să facă soluția înainte de sesiune.",
  ],
  [
    "Când are loc următoarea sesiune și cât costă?",
    "Programul, durata și prețul se confirmă înainte de înscriere, după ce clarificăm nivelul, formatul și obiectivele.",
  ],
  [
    "Cursul include proiectare sau calcule de instalații?",
    "Nu. Instruirea este despre folosirea Revit și Dynamo. Proiectarea de specialitate, calculele, verificarea și semnarea documentației rămân în responsabilitatea proiectantului.",
  ],
];

function courseSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url + "#page",
        url,
        name: title,
        description,
        inLanguage: "ro-RO",
        dateModified: "2026-10-24",
        mainEntity: programs.map((program) => ({ "@id": url + "#" + program.id })),
      },
      ...programs.map((program) => ({
        "@id": url + "#" + program.id,
        "@type": program.kind,
        name: program.name,
        description: program.description,
        inLanguage: "ro-RO",
      })),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Acasă", item: canonicalUrl("/") },
          { "@type": "ListItem", position: 2, name: "Cursuri Revit și Dynamo", item: url },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: courseFaq.map(([question, answer]) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      },
    ],
  };
}

export const Route = createFileRoute("/cursuri-revit")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index,follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: url },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify(courseSchema()) }],
  }),
  component: CursuriRevit,
});

function SectionLabel({ number, label }: { number: string; label: string }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="tech-label text-muted-foreground">{number}</span>
      <span className="tech-label text-muted-foreground">{label}</span>
      <span className="h-px flex-1 bg-border-strong" />
    </div>
  );
}

function CursuriRevit() {
  const contactHref = whatsappHref || "/contact";

  return (
    <div className="min-h-screen bg-background">
      <Header ctaHref="#inscriere" />
      <main id="continut">
        <section className="border-b border-border-strong">
          <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-20">
            <nav aria-label="Breadcrumb" className="tech-label text-muted-foreground">
              <a href="/" className="hover:text-primary">
                Acasă
              </a>
              <span className="px-2">/</span>
              <span className="text-foreground">Cursuri Revit și Dynamo</span>
            </nav>
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
              <div className="lg:col-span-7">
                <p className="tech-label text-primary">Cursuri live · Revit · Dynamo</p>
                <h1 className="display-xl mt-6 max-w-4xl text-[2.8rem] sm:text-6xl lg:text-7xl">
                  Învață Revit de la zero.
                  <br />
                  Du-l până la planșă.
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
                  Lucrăm pas cu pas, pe un proiect demonstrativ. Poți începe fără experiență,
                  aprofunda Revit MEP pentru HVAC și instalații termice sau cere ajutor cu un flux
                  Dynamo pe care vrei să-l automatizezi.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#cursuri" className="btn btn-primary">
                    Vezi ce poți învăța
                  </a>
                  <a
                    href={contactHref}
                    onClick={
                      whatsappHref
                        ? () => trackConversion("whatsapp_click", { source: "cursuri_revit" })
                        : undefined
                    }
                    className="btn btn-secondary"
                  >
                    Întreabă de o sesiune
                  </a>
                </div>
                <p className="mt-6 tech-label text-muted-foreground">
                  Nivel, program și preț stabilite înainte de înscriere
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5">
                <figure className="border border-border-strong bg-card">
                  <img
                    src={shopStarterKit}
                    alt="Exemplu vizual de template Revit și documentație tehnică"
                    className="aspect-[4/3] w-full object-cover"
                    width={720}
                    height={540}
                  />
                  <figcaption className="p-4">
                    <span className="tech-label text-muted-foreground">01 · Revit</span>
                    <p className="mt-2 text-sm">Model, vederi și planșe într-un flux clar.</p>
                  </figcaption>
                </figure>
                <figure className="mt-0 border border-border-strong bg-card sm:mt-10">
                  <img
                    src={shopAutomation}
                    alt="Exemplu vizual de automatizare pentru un flux Revit MEP"
                    className="aspect-[4/3] w-full object-cover"
                    width={720}
                    height={540}
                  />
                  <figcaption className="p-4">
                    <span className="tech-label text-muted-foreground">02 · Dynamo</span>
                    <p className="mt-2 text-sm">Automatizăm pașii pe care îi repeți mereu.</p>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section id="cursuri" className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-20">
          <Reveal>
            <SectionLabel number="01" label="Alege punctul de plecare" />
            <div className="mt-8 max-w-3xl">
              <h2 className="text-4xl md:text-5xl">Revit, pe bune. În ritmul și la nivelul tău.</h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Nu trebuie să alegi un program rigid. Spune-mi ce știi acum și ce vrei să poți face
                la final, iar sesiunea se construiește în jurul obiectivului tău.
              </p>
            </div>
            <div className="mt-10 grid gap-px bg-border-strong md:grid-cols-3">
              {programs.map((program) => (
                <article key={program.id} className="flex flex-col bg-background p-6 md:p-7">
                  <div className="flex items-center justify-between">
                    <span className="tech-label text-muted-foreground">{program.number}</span>
                    <span className="tech-label text-primary">{program.label}</span>
                  </div>
                  <h3 className="mt-8 text-2xl">{program.name}</h3>
                  <p className="mt-4 min-h-24 text-sm leading-relaxed text-muted-foreground">
                    {program.description}
                  </p>
                  <ul className="mt-6 space-y-3 border-t border-border pt-5 text-sm">
                    {program.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 bg-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                  <a
                    href={contactHref}
                    onClick={
                      whatsappHref
                        ? () => trackConversion("whatsapp_click", { source: "cursuri_revit" })
                        : undefined
                    }
                    className="mt-8 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-primary hover:underline"
                  >
                    Întreabă despre acest modul <span aria-hidden="true">↗</span>
                  </a>
                </article>
              ))}
            </div>
          </Reveal>
        </section>

        <section className="border-y border-border-strong bg-sheet">
          <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 md:px-8 md:py-20 lg:grid-cols-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel number="02" label="Cum lucrăm" />
              <h2 className="mt-8 text-4xl md:text-5xl">
                Înțelegi fiecare pas, nu doar îl copiezi.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Sesiunile sunt live și practice. Punem bazele, lucrăm pe un model demonstrativ și
                explicăm de ce folosim fiecare unealtă, astfel încât să poți repeta fluxul și după
                curs.
              </p>
            </Reveal>
            <div className="lg:col-span-7">
              {[
                [
                  "01",
                  "Stabilim nivelul",
                  "Îmi spui dacă pornești de la zero sau ce ai încercat deja.",
                ],
                [
                  "02",
                  "Alegem rezultatul",
                  "Definim ce model, planșă sau automatizare vrei să poți face.",
                ],
                [
                  "03",
                  "Lucrăm live",
                  "Parcurgem pașii într-un proiect demonstrativ și clarificăm întrebările pe parcurs.",
                ],
              ].map(([number, heading, body]) => (
                <div
                  key={number}
                  className="grid gap-3 border-t border-border-strong py-6 sm:grid-cols-[4rem_1fr]"
                >
                  <span className="tech-label text-primary">{number}</span>
                  <div>
                    <h3 className="text-xl">{heading}</h3>
                    <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
                      {body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="automatizari-dynamo"
          className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-20"
        >
          <Reveal>
            <SectionLabel number="03" label="Dynamo pentru Revit" />
            <div className="mt-8 grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <h2 className="text-4xl md:text-5xl">
                  Ai o sarcină repetitivă? Hai s-o automatizăm.
                </h2>
                <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                  Poți învăța cum se construiește un grafic Dynamo sau poți cere o automatizare
                  pentru un proces concret din Revit. Începem cu problema, verificăm datele de
                  intrare și stabilim rezultatul înainte să construim soluția.
                </p>
              </div>
              <div className="border border-border-strong bg-card p-6 lg:col-span-5 md:p-8">
                <p className="tech-label text-primary">De la flux la grafic</p>
                <ol className="mt-6 space-y-4 text-sm">
                  <li className="flex gap-4">
                    <span className="tech-label text-muted-foreground">01</span>
                    <span>Descrii pasul pe care îl repeți.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="tech-label text-muted-foreground">02</span>
                    <span>Stabilim datele și regulile de lucru.</span>
                  </li>
                  <li className="flex gap-4">
                    <span className="tech-label text-muted-foreground">03</span>
                    <span>Construim și testăm automatizarea.</span>
                  </li>
                </ol>
                <a
                  href={contactHref}
                  onClick={
                    whatsappHref
                      ? () => trackConversion("whatsapp_click", { source: "dynamo_automatizari" })
                      : undefined
                  }
                  className="btn btn-primary mt-8 w-full"
                >
                  Discută despre automatizarea ta
                </a>
              </div>
            </div>
          </Reveal>
        </section>

        <section
          id="inscriere"
          className="border-t border-border-strong bg-graphite text-graphite-foreground"
        >
          <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-20">
            <div className="grid gap-12 lg:grid-cols-12">
              <div className="lg:col-span-5">
                <p className="tech-label text-primary">Înscriere · întrebări frecvente</p>
                <h2 className="mt-6 text-4xl md:text-5xl">Spune-mi ce vrei să faci în Revit.</h2>
                <p className="mt-5 text-sm leading-relaxed text-graphite-foreground/70 md:text-base">
                  Trimite-mi nivelul tău actual și ce ai vrea să înveți. Îți răspund cu formatul,
                  durata și prețul înainte de orice înscriere.
                </p>
                <a
                  href={contactHref}
                  onClick={
                    whatsappHref
                      ? () => trackConversion("whatsapp_click", { source: "cursuri_revit" })
                      : undefined
                  }
                  className="btn btn-primary mt-8"
                >
                  Cere detalii despre cursuri
                </a>
              </div>
              <div className="lg:col-span-7">
                {courseFaq.map(([question, answer]) => (
                  <details key={question} className="border-t border-graphite-foreground/20 py-5">
                    <summary className="cursor-pointer text-lg font-medium">{question}</summary>
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-graphite-foreground/70">
                      {answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
