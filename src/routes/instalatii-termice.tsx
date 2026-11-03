import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/ServicePage";
import { canonicalUrl } from "@/lib/site-config";
import projTermice from "@/assets/proj-termice.webp";
import projSheet from "@/assets/proj-sheet.webp";

const title = "Planșe instalații termice în Revit și AutoCAD · NOD BIM";
const description =
  "Desenez planșe de instalații termice în Revit și AutoCAD, pe proiectul tău: trasee, radiatoare, centrală. Ofertă de regulă în 1–2 zile lucrătoare.";
const url = canonicalUrl("/instalatii-termice");

export const Route = createFileRoute("/instalatii-termice")({
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
  component: () => (
    <ServicePage
      label="Instalații termice"
      h1="Modelare Revit și planșe pentru instalații termice"
      intro="Desenez și modelez după proiectul tău; nu fac proiect autorizat sau semnat. Trasee, echipamente și planșe pentru instalații de încălzire, în Revit și AutoCAD."
      sections={[
        {
          title: "Trasee și conducte",
          body: "Modelez circuitele de tur și retur, cu diametrele și racordurile indicate în tema tehnică, inclusiv coloanele verticale și trecerile între niveluri.",
          items: [
            "tur / retur",
            "coloane",
            "distribuție pe niveluri",
            "racorduri",
            "izolații indicate în planșă",
          ],
        },
        {
          title: "Echipamente și corpuri de încălzire",
          body: "Amplasez corpurile de încălzire și echipamentele din centrala termică, cu identificarea necesară pentru citirea planșei și pentru listele de componente.",
          items: [
            "radiatoare",
            "centrale termice",
            "pompe",
            "distribuitoare / colectoare",
            "vase de expansiune",
            "armături",
          ],
        },
        {
          title: "Încălzire în pardoseală",
          body: "Pentru sistemele de încălzire în pardoseală desenez circuitele pe camere, cu marcarea distribuitorului și a lungimilor de circuit indicate în tema de proiect.",
          items: [
            "circuite pe camere",
            "poziția distribuitorului",
            "marcarea circuitelor",
            "legendă",
          ],
        },
        {
          title: "Planșe și scheme",
          body: "Documentația include planurile pe niveluri, secțiunile necesare și schema funcțională a instalației, în măsura în care informația tehnică este furnizată.",
          items: ["planuri de nivel", "secțiuni", "schemă coloane", "legende", "note tehnice"],
        },
      ]}
      images={[
        {
          src: projTermice,
          alt: "Plan nivel instalații termice realizat în Revit, cu trasee de conducte, radiatoare și distribuitoare",
          caption: "Termice · Plan nivel",
          meta: "Revit MEP",
        },
        {
          src: projSheet,
          alt: "Planșă tehnică de instalații termice cu legendă, indicator și note",
          caption: "Planșă cu indicator",
          meta: "SH-T01",
        },
      ]}
      deliverables={[
        "planuri de încălzire pe niveluri",
        "schemă a instalației, pe baza datelor furnizate",
        "secțiuni și detalii de racord",
        "model 3D al traseelor",
        "RVT · DWG · PDF",
      ]}
      faq={[
        [
          "Pot trimite doar planul de arhitectură?",
          "Da, dar am nevoie și de tema tehnică: tipul sistemului, corpurile de încălzire dorite și eventualele calcule existente.",
        ],
        [
          "Poți corecta o documentație termică începută?",
          "Da. Preiau fișierele RVT sau DWG existente și implementez modificările sau completările necesare.",
        ],
        [
          "Livrezi și schema pe coloane?",
          "Da, atunci când informațiile de proiect permit realizarea ei corectă.",
        ],
      ]}
      related={["/revit-mep", "/hvac", "/autocad-dwg"]}
      note="Serviciul constă în modelare și desenare tehnică pe baza soluției și informațiilor de proiect furnizate."
    >
      <aside
        aria-labelledby="olx-sizing-heading"
        className="grid gap-6 border border-border-strong bg-background p-6 md:grid-cols-[1fr_auto] md:items-center md:p-8"
      >
        <div>
          <p className="tech-label text-muted-foreground">Anunț NOD BIM pe OLX</p>
          <h2 id="olx-sizing-heading" className="mt-3 text-2xl md:text-3xl">
            Calcul hidraulic și dimensionare conducte pentru instalații HVAC
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-foreground/80">
            Serviciu de calcul preliminar pentru conducte de apă în instalații de încălzire și
            răcire, cu verificarea vitezelor și a pierderilor de presiune pe tronsoane.
          </p>
          <p className="mt-2 max-w-2xl text-xs leading-relaxed text-muted-foreground">
            Livrabilul nu este proiect tehnic semnat și nu înlocuiește verificarea sau asumarea de
            către proiectantul autorizat.
          </p>
        </div>
        <a
          href="https://www.olx.ro/d/311452970/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary w-fit"
        >
          Vezi anunțul de dimensionare pe OLX
        </a>
      </aside>
    </ServicePage>
  ),
});
