import { createFileRoute, Link } from "@tanstack/react-router";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { MobileCta } from "@/components/site/MobileCta";
import { freeMaintAcademyAffiliateUrl, freeMaintAffiliateUrl } from "@/lib/products";
import { track } from "@/lib/analytics";
import { canonicalUrl } from "@/lib/site-config";

const title = "Software pentru mentenanță: FreeMaint CMMS · NOD BIM";
const description =
  "Când merită un CMMS pentru mentenanță? Compară FreeMaint Core, limitele exportului și cursul gratuit de implementare. Linkurile afiliate sunt declarate.";
const url = canonicalUrl("/recomandari");

export const Route = createFileRoute("/recomandari")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ro_RO" },
      { property: "og:url", content: url },
    ],
    links: [{ rel: "canonical", href: url }],
  }),
  component: Recomandari,
});

function Recomandari() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main id="continut">
        <section className="border-b border-border-strong">
          <div className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-20">
            <nav aria-label="Breadcrumb" className="tech-label text-muted-foreground">
              <Link to="/" className="hover:text-primary">
                Acasă
              </Link>
              <span className="px-2">/</span>
              <span className="text-foreground">Recomandări</span>
            </nav>
            <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end lg:gap-16">
              <div className="lg:col-span-7">
                <p className="tech-label text-primary">Produse și software de la parteneri</p>
                <h1 className="display-xl mt-6 max-w-4xl text-[2.8rem] sm:text-6xl lg:text-7xl">
                  Recomandări utile pentru clădiri și echipe tehnice.
                </h1>
              </div>
              <div className="lg:col-span-5">
                <p className="max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
                  Aici găsești produse furnizate direct de parteneri. Fiecare recomandare precizează
                  cine oferă serviciul, unde verifici prețul și dacă linkul este afiliat.
                </p>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Linkurile marcate ca afiliate pot aduce un comision pentru NOD BIM. Furnizorul
                  gestionează produsul, contractul, facturarea și suportul; ofertele proprii sunt
                  prezentate separat în magazin.
                </p>
                <Link
                  to="/magazin"
                  className="tech-label mt-6 inline-flex border border-foreground px-4 py-3 transition-colors hover:border-primary hover:text-primary"
                >
                  Vezi ofertele NOD BIM ↗
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1200px] px-5 py-12 md:px-8 md:py-20">
          <div className="flex items-baseline gap-4">
            <span className="tech-label text-muted-foreground">01</span>
            <span className="tech-label text-muted-foreground">Software pentru mentenanță</span>
            <span className="h-px flex-1 bg-border-strong" />
          </div>

          <article className="mt-8 grid gap-8 border border-border-strong bg-card p-6 md:p-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="tech-label text-primary">
                CMMS · administrarea activelor și lucrărilor
              </p>
              <h2 className="mt-5 font-display text-3xl font-semibold tracking-tight md:text-4xl">
                FreeMaint CMMS
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Software pentru echipe care urmăresc echipamente, ordine de lucru și mentenanță
                preventivă. Este un instrument de administrare a mentenanței, nu un program de
                proiectare BIM și nici un serviciu livrat de NOD BIM.
              </p>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/80">
                {[
                  "Registru de active și locații",
                  "Ordine de lucru și solicitări de intervenție",
                  "Planificarea mentenanței preventive",
                ].map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="text-primary" aria-hidden="true">
                      ·
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-6">
                <h3 className="font-display text-xl font-semibold">Ai nevoie de un CMMS?</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Un tabel poate fi suficient pentru un registru simplu. Dacă intervențiile au mai
                  mulți responsabili, scadențe și istoric greu de urmărit, compară un CMMS cu fluxul
                  actual înainte să alegi un abonament.
                </p>
                <Link
                  to="/blog/$slug"
                  params={{ slug: "mentenanta-hvac-excel-sau-cmms" }}
                  className="mt-4 inline-block text-sm text-primary underline underline-offset-4"
                >
                  Ghid: Excel sau CMMS pentru mentenanța HVAC?
                </Link>
              </div>
            </div>

            <aside className="flex flex-col border-t border-border-strong pt-6 lg:col-span-5 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              <p className="tech-label text-muted-foreground">Prețuri afișate de furnizor</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                <div className="border border-border p-4">
                  <p className="tech-label text-muted-foreground">Core</p>
                  <p className="mt-2 font-display text-2xl font-semibold">0 USD</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Include active, ordine de lucru și mentenanță preventivă.
                  </p>
                </div>
                <div className="border border-border p-4">
                  <p className="tech-label text-muted-foreground">Planuri plătite</p>
                  <p className="mt-2 font-display text-2xl font-semibold">de la 29 USD/lună</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Tarif per companie. Exporturile PDF/Excel cer Starter; taxele și funcțiile se
                    verifică la furnizor înainte de migrarea datelor.
                  </p>
                </div>
              </div>

              <a
                href={freeMaintAffiliateUrl}
                onClick={() =>
                  track("affiliate_click", { partner: "freemaint", source: "recomandari" })
                }
                target="_blank"
                rel="sponsored noopener noreferrer"
                className="tech-label mt-6 inline-flex w-fit border border-foreground bg-foreground px-4 py-3 text-background transition-colors hover:border-primary hover:bg-primary"
              >
                Vezi planurile FreeMaint ↗
              </a>
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Link afiliat: FreeMaint declară o reducere de 10% pentru clienții care folosesc
                linkul și un comision recurent de 25% din plățile eligibile pentru NOD BIM. Un cont
                gratuit nu generează comision.
              </p>
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs">
                <a
                  href="https://freemaint.com/affiliates/kit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Termenii programului
                </a>
                <a
                  href="https://freemaint.com/pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 hover:text-primary"
                >
                  Prețuri oficiale
                </a>
              </div>
              <div className="mt-8 border-t border-border-strong pt-6">
                <p className="tech-label text-primary">Resursă gratuită · FreeMaint Academy</p>
                <h3 className="mt-3 font-display text-xl font-semibold">
                  Înțelege implementarea înainte să alegi un CMMS
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Cursul oficial are 10 lecții de aproximativ 90 de minute în total. Lecțiile se
                  citesc fără cont; pentru examenul final și certificatul gratuit este necesar un
                  cont gratuit. Furnizorul spune că metoda se aplică oricărui CMMS și folosește
                  FreeMaint doar ca exemplu în unele lecții.
                </p>
                <a
                  href={freeMaintAcademyAffiliateUrl}
                  onClick={() =>
                    track("affiliate_click", {
                      partner: "freemaint",
                      source: "recomandari-academy",
                    })
                  }
                  target="_blank"
                  rel="sponsored noopener noreferrer"
                  className="tech-label mt-4 inline-flex w-fit border border-foreground px-4 py-3 transition-colors hover:border-primary hover:text-primary"
                >
                  Începe cursul gratuit ↗
                </a>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                  Link afiliat NOD BIM. Lectiile și contul de bază sunt gratuite; comisionul poate
                  proveni numai din plăți eligibile raportate de furnizor.
                </p>
              </div>
            </aside>
          </article>

          <p className="mt-6 max-w-3xl text-xs leading-relaxed text-muted-foreground">
            În prezent, FreeMaint este singura recomandare afiliată publicată. Alte produse vor fi
            adăugate după verificarea furnizorului, a condițiilor comerciale și a livrării.
          </p>
        </section>
      </main>
      <Footer />
      <MobileCta />
    </div>
  );
}
