/**
 * Articolele tehnice NOD BIM — conținut de inginerie cu probe practice,
 * nu umplutură SEO. Fiecare articol are o temă complicată, explicată
 * din experiența de lucru reală.
 */
export type ArticleSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  links?: { label: string; href: string }[];
  table?: { head: string[]; rows: string[][] };
  note?: string;
};

export type Article = {
  slug: string;
  title: string;
  /** Titlu scurt pentru <title>; `title` rămâne H1-ul articolului. */
  metaTitle: string;
  description: string;
  date: string;
  readingTime: number;
  tags: string[];
  sections: ArticleSection[];
};

export const articles: Article[] = [
{
  "slug": "externalizare-modelare-revit-mep-pachet-livrare",
  "title": "Externalizarea modelării Revit MEP: cum delimitezi pachetul de lucru",
  "metaTitle": "Externalizare Revit MEP: pachet, fișiere și livrabile",
  "description": "Ai nevoie de capacitate suplimentară pentru planșe sau actualizări? Vezi ce fișiere, standarde și criterii de predare să clarifici înainte să externalizezi producția Revit MEP.",
  "date": "2026-10-26",
  "readingTime": 5,
  "tags": [
    "Revit MEP",
    "Externalizare BIM",
    "Modelare Revit",
    "Planșe MEP",
    "Proiectare instalații"
  ],
  "sections": [
    {
      "paragraphs": [
        "Când volumul de desenare crește, un birou de proiectare poate externaliza o parte din producția Revit MEP fără să transfere deciziile inginerești. Ca sprijinul să fie util, delimitează ce se modelează, în ce fișier și cum arată livrabilul acceptat.",
        "Ghidul privește modelarea și pregătirea documentației pe baza informațiilor și soluției aprobate de echipa responsabilă."
      ]
    },
    {
      "heading": "Ce poți include într-un pachet de lucru",
      "paragraphs": [
        "Un pachet poate acoperi doar partea de producție de care echipa are nevoie în acel moment:"
      ],
      "list": [
        "modelarea sau actualizarea fișierului Revit după planurile și indicațiile aprobate;",
        "organizarea vederilor, secțiunilor și planșelor incluse în listă;",
        "introducerea corecturilor documentate pe redline, în limita reviziei convenite;",
        "extracția planșelor și tabelelor și pregătirea exporturilor RVT, PDF sau DWG cerute."
      ],
      "note": "Calculele, dimensionarea, alegerea soluției tehnice și semnătura rămân la proiectantul responsabil."
    },
    {
      "heading": "Ce trimiți înainte de estimare",
      "paragraphs": [
        "Fișierele și criteriile clare reduc întrebările și refacerea documentației. Pentru o estimare, pregătește:"
      ],
      "list": [
        "modelul de pornire și linkurile necesare, cu reviziile confirmate;",
        "planurile, tema și observațiile aprobate care descriu soluția de modelat;",
        "template-ul, regulile de denumire, familiile și standardul de vedere al biroului, dacă se folosesc;",
        "lista planșelor și livrabilelor, numărul de revizii și termenul dorit;",
        "o foaie reprezentativă sau un exemplu de predare care arată rezultatul așteptat."
      ]
    },
    {
      "heading": "Stabilește criteriul de acceptare înainte să înceapă lucrul",
      "paragraphs": [
        "„Gata în Revit” nu descrie singur o predare. Confirmă ce trebuie să conțină fiecare planșă: vederea, scara, titlul, legendele, cotele, simbolurile și setările de export. Verifică o foaie reprezentativă în model și în PDF înainte să aplici aceleași setări pe restul setului.",
        "Delimitează și reviziile. O schimbare aprobată după începerea lucrului poate modifica volumul și termenul. Notează ce se schimbă, ce rămâne, cine confirmă și care este noua dată de predare."
      ]
    },
    {
      "heading": "Păstrează responsabilitatea tehnică la echipa de proiectare",
      "paragraphs": [
        "Un colaborator extern poate organiza modelul și produce documentația conform informațiilor primite. Proiectantul responsabil stabilește și aprobă soluția, verifică dimensionările și semnează. Dacă datele lipsesc sau se contrazic, clarifică-le înainte să introduci ipoteze în model.",
        "Înainte de predare, verifică revizia fișierelor, lista planșelor, exporturile și observațiile rămase deschise. Astfel, echipa știe ce a fost produs și ce mai trebuie validat."
      ]
    },
    {
      "heading": "Checklist pentru o cerere clară",
      "paragraphs": [
        "În mesajul inițial, include:"
      ],
      "list": [
        "disciplina și partea de producție pe care vrei s-o externalizezi;",
        "fișierele disponibile și revizia care trebuie folosită;",
        "numărul aproximativ de planșe și formatele cerute;",
        "standardul, template-ul și exemplul de predare;",
        "termenul și persoana care validează soluția și livrabilele."
      ]
    },
    {
      "heading": "Cum începi",
      "paragraphs": [
        "Trimite o planșă reprezentativă, lista livrabilelor, fișierele disponibile și termenul. NOD BIM poate analiza volumul și reveni cu o propunere de scop, cost și dată de predare înainte de începerea lucrului."
      ],
      "links": [
        {
          "label": "Servicii de modelare Revit MEP",
          "href": "/revit-mep"
        },
        {
          "label": "Mostre de documentație",
          "href": "/portofoliu"
        },
        {
          "label": "Cere o estimare",
          "href": "/contact"
        }
      ]
    }
  ]
},
  {
    slug: "circuit-electric-tablou-revit-mep-checklist",
    title: "Circuitul electric și tabloul în Revit: ce verifici înainte de predare",
    metaTitle: "Circuite electrice și tablouri în Revit MEP",
    description:
      "Un circuit apare în Revit, dar tabelul tabloului nu este gata de predare? Verifică legătura la panou, datele de intrare, parametrii și foaia exportată.",
    date: "2026-10-23",
    readingTime: 6,
    tags: [
      "Revit MEP",
      "Instalații electrice",
      "Circuite electrice",
      "Tablouri electrice",
      "Panel Schedule",
      "Documentație Revit",
    ],
    sections: [
      {
        paragraphs: [
          "Într-un model Revit, dispozitivele pot fi plasate corect în plan, dar circuitul poate rămâne asociat cu alt panou, tabelul poate afișa câmpuri nepotrivite sau simbolurile și traseele pot aglomera foaia. Verifică separat datele modelului, conexiunea logică la panou și prezentarea tabelului.",
          "Acest ghid privește modelarea și documentația. Tensiunile, numărul de poli, atribuirea circuitelor, sarcinile și criteriile electrice trebuie furnizate ori aprobate de proiectantul responsabil; Revit nu înlocuiește această decizie.",
        ],
      },
      {
        heading: "Cere datele electrice înainte să creezi circuitul",
        paragraphs: [
          "Înainte de conectarea dispozitivelor, confirmă cu proiectantul panoul care alimentează circuitul și distribuția prevăzută. Panourile și transformatoarele trebuie configurate pentru un sistem de distribuție înainte să poată fi folosite cu circuite; Revit creează circuite pentru componente electrice compatibile, apoi le conectează la echipament.",
          "Pentru circuitele de putere și iluminat, notează și valorile aprobate pentru tensiune și numărul de poli. Nu le deduce din aspectul simbolului sau dintr-un circuit asemănător din alt proiect.",
        ],
        links: [
          {
            label: "Autodesk Revit 2026: configurarea echipamentelor electrice și a circuitelor",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-MEPEng/files/GUID-D9575C51-F666-4617-9FF0-B3FBE52370EA.htm",
          },
          {
            label: "Autodesk Revit 2026: circuite de putere și iluminat",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-MEPEng/files/GUID-267A4006-80D3-4306-A404-0AF77F3D49A8.htm",
          },
        ],
      },
      {
        heading: "Separă circuitul logic de traseul de cablaj",
        paragraphs: [
          "După crearea circuitului, Revit îl poate reprezenta printr-o linie întreruptă între componente. Această relație logică păstrează informația sistemului chiar dacă proiectul nu conține cablaj permanent desenat. Adăugarea cablajului este opțională și trebuie decisă după livrabilul cerut.",
          "Prin urmare, o linie întreruptă nu dovedește că traseul de cablu sau tubulatură este modelat. Dacă se cere și documentarea traseelor, precizează separat reprezentarea, nivelul de detaliu și ce trebuie să apară în RVT sau pe planșe.",
        ],
        links: [
          {
            label: "Autodesk Revit 2026: circuite logice și cablaj permanent",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-MEPEng/files/GUID-267A4006-80D3-4306-A404-0AF77F3D49A8.htm",
          },
        ],
      },
      {
        heading: "Rulează verificarea circuitelor și urmărește avertizările",
        paragraphs: [
          "Comanda Check Circuits examinează dacă fiecare circuit este conectat corespunzător la un panou. Când găsește erori, poți deschide detaliul avertizării și evidenția dispozitivul în vedere pentru a investiga legătura.",
          "Rezolvă avertizările cu informațiile aprobate pentru proiect, apoi rulează verificarea din nou. Rezultatul acestei comenzi privește conexiunea circuitelor la panouri; nu confirmă proiectarea, dimensionarea sau conformitatea instalației.",
        ],
        links: [
          {
            label: "Autodesk Revit 2026: Check Circuits",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-MEPEng/files/GUID-1EF3CCFF-5F15-4DEC-AAD5-235BBCE5F71E.htm",
          },
        ],
      },
      {
        heading: "Verifică datele din tabelul tabloului",
        paragraphs: [
          "Un panel schedule afișează informații despre panou, circuitele conectate și sarcinile corespunzătoare. Tabelul are patru părți: antet, tabelul circuitelor, rezumatul sarcinilor și subsol. Compară panoul selectat și circuitul atribuit cu tema și planșa de referință înainte să consideri tabelul gata.",
          "Valorile afișate provin din model și din setările de calcul. Un tabel completat vizual nu este, de unul singur, verificare inginerească; confirmarea sarcinilor și a criteriilor electrice rămâne la proiectantul responsabil.",
        ],
        links: [
          {
            label: "Autodesk Revit 2026: ce informații afișează un panel schedule",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-3D2D0E77-ED17-4FBF-AAE4-CB9185A3F779.htm",
          },
        ],
      },
      {
        heading: "Confirmă că șablonul include parametrii ceruți",
        paragraphs: [
          "Dacă tabelul nu conține câmpul așteptat, verifică șablonul panel schedule și categoria parametrului. Autodesk permite parametri din Electrical Equipment, Electrical Circuits și Project Information, însă fiecare parte a șablonului acceptă categorii diferite: parametrii circuitelor intră în tabelul circuitelor, iar rezumatul sarcinilor acceptă parametri ai echipamentelor electrice.",
          "Compară antetul, coloanele, unitățile și ordinea circuitelor cu standardul biroului. Etichetele scrise în șablon sunt text static; nu presupune că ele reprezintă automat valoarea unui parametru.",
        ],
        links: [
          {
            label: "Autodesk Revit 2026: adăugarea parametrilor în șablonul tabloului",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-3136A502-5E67-4A51-AC05-80F8C761B26D.htm",
          },
        ],
      },
      {
        heading: "Controlează foaia și fișierele care se predau",
        paragraphs: [
          "Deschide foaia la scara de predare și verifică dacă tabelul poate fi citit, dacă numele panoului și numerele circuitelor corespund planului și dacă notele nu sunt tăiate. Compară PDF-ul exportat cu foaia din Revit; confirmă formatul și versiunea care trebuie transmise.",
          "Înainte de închidere, stabilește dacă livrabilul include model RVT, foi PDF și eventual DWG, precum și regulile de denumire și revizie. Un export reușit nu aprobă datele electrice; păstrează identificarea reviziei și responsabilul pentru verificarea tehnică.",
        ],
      },
      {
        heading: "Checklist pentru cererea de modelare Revit MEP",
        paragraphs: [
          "Pentru o cerere clară, transmite modelul și criteriile după care va fi acceptată documentația:",
        ],
        list: [
          "Fișierul RVT de pornire, șablonul și standardul de denumire aplicabil.",
          "Lista panourilor și sistemele de distribuție configurate sau confirmate de proiectant.",
          "Dispozitivele care aparțin fiecărui circuit, panoul de destinație și valorile aprobate pentru circuit.",
          "Parametrii obligatorii, aspectul tabelului, regulile de numerotare și un exemplu de planșă acceptată.",
          "Dacă se cere doar circuitul logic sau și cablajul/traseele desenate.",
          "Lista foilor și formatele finale: RVT, PDF și/sau DWG, inclusiv revizia care trebuie predată.",
        ],
        note: "Modelarea și verificarea documentației urmează datele și criteriile primite. Proiectarea, calculul și aprobarea soluției electrice rămân la inginerul responsabil.",
      },
      {
        heading: "Delimitează serviciul și criteriul de acceptare",
        paragraphs: [
          "Pot prelua modelarea Revit MEP și organizarea planșelor pe baza temei și a fișierelor aprobate. Delimitează de la început circuitele care trebuie reprezentate, informația cerută în tabele și fișierele de predare. Proiectantul responsabil validează atribuirea și datele electrice.",
        ],
        links: [
          {
            label: "Modelare Revit MEP pentru birouri de proiectare",
            href: "/revit-mep",
          },
          {
            label: "Articol conex: familii Revit MEP și conectori de echipamente",
            href: "/blog/familii-revit-mep-conectori-echipamente",
          },
        ],
      },
    ],
  },
  {
    slug: "afisare-link-revit-mep-planse",
    title: "Linkul arhitectural în Revit MEP: cum stabilești afișarea în planșe",
    metaTitle: "Afișarea linkului Revit în planșele MEP",
    description:
      "Linkul arhitectural este aliniat, dar aglomerează planșele MEP? Află când folosești By Host View, By Linked View sau Custom și ce clarifici înainte de predare.",
    date: "2026-10-18",
    readingTime: 7,
    tags: [
      "Revit MEP",
      "Link Revit",
      "Vizibilitate Revit",
      "Planșe MEP",
      "View Templates",
      "Documentație Revit",
    ],
    sections: [
      {
        paragraphs: [
          "Ai un model Revit MEP legat de arhitectură, dar planșele nu se citesc la fel: într-o vedere linkul este prea încărcat, în alta lipsesc elemente sau apar grile și adnotări care nu sunt necesare. Înainte de corecturi, separă problema de poziționare a modelului de felul în care este afișat linkul în fiecare vedere.",
          "Dacă poziția linkului este corectă, controlează-i vizibilitatea în vederea gazdă prin Visibility/Graphics și fila Revit Links. Revit oferă trei moduri de afișare — By Host View, By Linked View și Custom — iar alegerea trebuie verificată pe planșa pe care o vei preda.",
        ],
      },
      {
        heading: "Confirmă poziția înainte să schimbi grafica",
        paragraphs: [
          "Dacă modelul arhitectural pare deplasat sau rotit față de proiect, clarifică mai întâi reperul și regula de poziționare. Ascunderea categoriilor ori schimbarea stilului grafic nu corectează coordonatele.",
          "Dacă poziția este corectă, dar linkul lipsește sau este prea încărcat numai în anumite vederi, deschide Visibility/Graphics și verifică fila Revit Links. Vizibilitatea linkului se controlează pe vedere. Dacă același model are mai multe instanțe, setarea părintelui afectează toate instanțele, iar setarea unei instanțe afectează numai acea copie.",
        ],
        links: [
          {
            label: "Autodesk: vizibilitatea modelelor Revit legate",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-EB571589-C335-4525-A8BE-CF1A2493B2F5.htm",
          },
          {
            label: "Articol conex: coordonatele și poziționarea linkurilor Revit MEP",
            href: "/blog/coordonate-linkuri-revit-mep-externalizare",
          },
        ],
      },
      {
        heading: "By Host View: aplici regulile vederii MEP",
        paragraphs: [
          "By Host View este setarea implicită. Ea aplică linkului și modelelor imbricate filtrele și alte suprascrieri grafice definite în vederea gazdă. Este o opțiune de verificat când vrei ca linkul arhitectural să urmeze regulile grafice ale vederii MEP.",
          "Există o limită tehnică importantă: setările Hidden Lines aplicate prin By Host View nu schimbă afișarea modelelor legate. Dacă o muchie ascunsă nu se comportă cum te aștepți, testează separat vederea și modul de afișare al linkului înainte să extinzi regula la planșe.",
        ],
        links: [
          {
            label: "Autodesk: afișarea unui model legat după vederea gazdă",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-A39798E1-7567-40EC-9D52-77CDF1B0EA43.htm",
          },
        ],
      },
      {
        heading: "By Linked View: folosești o vedere din modelul arhitectural",
        paragraphs: [
          "By Linked View folosește afișarea unei vederi selectate din modelul legat. Dacă acea vedere are un filtru aplicat, filtrul se aplică linkului din vederea gazdă. Opțiunea poate fi utilă când biroul arhitectural pregătește o vedere pentru coordonare sau pentru planșele MEP.",
          "Notează numele exact al vederii și confirmă cu responsabilul arhitectural că reprezintă categoriile și adnotările dorite. O vedere cu nume asemănător poate avea alte setări sau alt scop; aprobă rezultatul pe un exemplu înainte să-l folosești în mai multe planșe.",
        ],
        links: [
          {
            label: "Autodesk: afișarea unui model legat după vederea selectată",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-62DD9C0C-C689-4D08-B9E2-4CE53A993B27.htm",
          },
        ],
      },
      {
        heading: "Custom: reglezi categoriile necesare planșei",
        paragraphs: [
          "Când setările generale nu corespund planșei, Custom permite controlul afișării linkului pe categorii. Separă elementele modelului de adnotări și importuri: de exemplu, stabilește dacă pereții și ușile rămân vizibile, iar grilele sau anumite adnotări trebuie ascunse ori afișate discret.",
          "Păstrează schimbările în modelul MEP și precizează dacă se aplică numai unor vederi. Pentru adnotări și categorii importate, Revit permite suprascrieri de proiecție și suprafață, nu toate setările disponibile pentru categoriile de model.",
        ],
        links: [
          {
            label: "Autodesk: suprascrierea afișării categoriilor, inclusiv în linkuri",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-CFE335EC-D17A-447C-999D-4D2E91C62C77.htm",
          },
        ],
      },
      {
        heading: "Folosește șabloane pentru vederi consecvente",
        paragraphs: [
          "Setările de vizibilitate ale linkului sunt legate de vedere. Dacă mai multe planuri, secțiuni sau vederi de coordonare trebuie să arate arhitectura după aceleași reguli, verifică dacă proiectul folosește view templates și dacă acestea controlează setările Revit Links.",
          "Aprobă câte un exemplu pentru fiecare tip de vedere înainte să aplici regula pe toate planșele. O vedere de coordonare poate necesita mai multe categorii decât planul MEP destinat predării.",
        ],
        links: [
          {
            label: "Autodesk: vizibilitatea linkurilor și șabloanele de vedere",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-EB571589-C335-4525-A8BE-CF1A2493B2F5.htm",
          },
        ],
      },
      {
        heading: "Checklist pentru cererea de modelare și documentare",
        paragraphs: [
          "Pentru ca afișarea să poată fi estimată și verificată, trimite fișierele și criteriile care descriu rezultatul așteptat:",
        ],
        list: [
          "Modelul gazdă MEP și fiecare link Revit relevant, cu revizia folosită în proiect.",
          "Lista vederilor și planșelor care trebuie continuate sau create; atașează câte un exemplu pentru plan, secțiune sau coordonare, după caz.",
          "Modul de afișare dorit pentru link: By Host View, By Linked View cu numele vederii selectate sau reguli Custom.",
          "Categoriile arhitecturale și adnotările care trebuie afișate, estompate ori ascunse în fiecare tip de vedere.",
          "Șablonul de vedere și standardul biroului care trebuie urmate, dacă există.",
          "Livrabilele cerute: RVT, PDF și/sau DWG, inclusiv lista de planșe și setările de export aprobate.",
        ],
        note: "Modelul și planșele se verifică după scopul transmis. Afișarea corectă a linkului nu validează soluția tehnică sau coordonatele proiectului.",
      },
      {
        heading: "Verifică separat PDF-ul și exportul DWG",
        paragraphs: [
          "Nu valida planșa doar în zona de desen a Revit. Verifică o foaie reprezentativă și PDF-ul la dimensiunea de predare, ca să confirmi că linkul, adnotările și traseele MEP rămân lizibile împreună.",
          "Dacă se cere și DWG, confirmă setarea de export și maparea layerelor. La exportul DWG/DXF, un link afișat By Host View este tratat ca suprascriere; Autodesk documentează opțiunile de export care păstrează, ignoră sau mută suprascrierile grafice pe layere noi. Cere și verifică un DWG de probă înainte de predarea finală.",
        ],
        links: [
          {
            label: "Autodesk: maparea layerelor la exportul DWG/DXF din Revit",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-3541F82B-9E25-47C5-BE52-3F6C6F40DA02.htm",
          },
        ],
      },
      {
        heading: "Delimitează serviciul Revit MEP și criteriul de acceptare",
        paragraphs: [
          "Pot prelua modelarea Revit MEP și organizarea documentației pe baza temei și a fișierelor primite. Înainte de începere, stabilește modelul de referință, vederile, aspectul linkului și livrabilele. Soluția tehnică și aprobarea finală rămân la proiectantul responsabil.",
        ],
        links: [
          {
            label: "Modelare Revit MEP pentru birouri de proiectare",
            href: "/revit-mep",
          },
          {
            label: "Articol conex: coordonatele linkurilor Revit MEP",
            href: "/blog/coordonate-linkuri-revit-mep-externalizare",
          },
        ],
      },
    ],
  },
  {
    slug: "comparatie-revizii-dwg-autocad",
    title: "Cum compari două revizii DWG în AutoCAD înainte de predare",
    metaTitle: "Compară două revizii DWG în AutoCAD înainte de predare",
    description:
      "Primești două versiuni DWG și nu știi ce s-a schimbat? Vezi cum folosești DWG Compare, ce verifici manual și ce trimiți pentru corecturi.",
    date: "2026-10-16",
    readingTime: 6,
    tags: [
      "AutoCAD",
      "DWG Compare",
      "Revizii DWG",
      "Comparație desene",
      "Predare DWG",
      "Corecturi AutoCAD",
    ],
    sections: [
      {
        paragraphs: [
          "Ai primit două fișiere DWG pentru aceeași planșă, însă nota din cartuș nu arată clar ce s-a modificat? În AutoCAD, DWG Compare poate evidenția diferențele dintre două desene, grupându-le în zone pe care le poți parcurge. Rezultatul te ajută să localizezi schimbările și să ceri clarificări înainte de a continua desenul sau de a emite PDF-ul.",
          "Comparația este un instrument vizual pentru revizuirea fișierelor. Nu stabilește singură care versiune este aprobată și nu confirmă dacă o modificare reprezintă soluția tehnică corectă. Aceste decizii trebuie să vină de la persoana responsabilă de proiect.",
        ],
      },
      {
        heading: "Identifică desenul de bază și versiunea care trebuie revizuită",
        paragraphs: [
          "Înainte să deschizi comparația, identifică ambele fișiere după numărul reviziei, data emiterii și informația din cartuș. Cere confirmarea responsabilului asupra desenului care trebuie păstrat ca versiune curentă. O dată de modificare mai recentă sau un nume de fișier diferit nu dovedește, singure, că documentul a fost acceptat.",
          "Păstrează fișierele primite separat și lucrează pe copii dacă urmează să imporți obiecte sau să faci corecturi. Notează care fișier este deschis ca desen curent și care va fi selectat pentru comparație; orientarea lor determină cum se citesc culorile.",
        ],
      },
      {
        heading: "Pornește COMPARE și citește diferențele după fișierul curent",
        paragraphs: [
          "Pentru două fișiere DWG distincte, deschide desenul pe care îl tratezi drept curent și rulează comanda COMPARE. Selectează al doilea fișier în fereastra de comparație. Documentația Autodesk pentru AutoCAD 2025 descrie acest flux și arată diferențele în desenul curent; verifică disponibilitatea comenzii în produsul și versiunea instalate înainte să te bazezi pe ea.",
          "În configurarea implicită, obiectele comune celor două desene apar cu gri, obiectele existente numai în desenul selectat pentru comparație apar cu roșu, iar cele existente numai în desenul curent apar cu verde. Schimbă perspectiva dacă ai deschis întâi versiunea mai veche: roșu și verde descriu fișierul de comparație față de cel curent, nu înlocuiesc etichetele de revizie. AutoCAD poate încadra diferențele în nori de revizie și îți permite să treci la următoarea zonă din bara DWG Compare.",
        ],
        links: [
          {
            label: "Autodesk: compararea diferențelor dintre desene DWG",
            href: "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Core/files/GUID-2D69E78D-5C82-464F-B864-CD29D5720EB9.htm",
          },
          {
            label: "Autodesk: pașii și comenzile DWG Compare",
            href: "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Core/files/GUID-744D8A49-D582-4C06-80B1-6B0313E92CA2.htm",
          },
        ],
      },
      {
        heading: "Parcurge toate zonele și verifică setările care pot ascunde diferențe",
        paragraphs: [
          "Folosește săgețile de navigare pentru a inspecta fiecare grup de diferențe, apoi mărește desenul în zona respectivă. Textul și hașurile pot fi ascunse prin filtrele comparației, iar elementele de pe layere oprite sau înghețate în desenul curent nu intră în rezultatul DWG Compare. Dacă te aștepți să găsești modificări care lipsesc, verifică întâi starea layerelor și filtrele active.",
          "O schimbare apropiată de alte obiecte poate apărea în același grup, iar diferențele nu sunt o listă de observații aprobate. Notează separat ce ai identificat, ce trebuie confirmat și ce urmează să fie desenat. Pentru o copie de revizie, funcția Export Snapshot creează un DWG nou care păstrează reprezentarea comparației și include cele două desene ca blocuri.",
        ],
        links: [
          {
            label: "Autodesk: navigarea, filtrele și exportul unui snapshot",
            href: "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Core/files/GUID-744D8A49-D582-4C06-80B1-6B0313E92CA2.htm",
          },
        ],
      },
      {
        heading: "Nu folosi comparația ca verificare completă a planșei",
        paragraphs: [
          "DWG Compare operează în Model Space și acceptă fișiere DWG; dacă alegi un desen salvat într-un layout, AutoCAD trece la fila Model. Prin urmare, comparația nu verifică automat fiecare layout, încadrarea pe foaie sau PDF-ul emis. Verifică separat pagina, scara de plotare, textele și legendele în documentele care vor fi predate.",
          "Autodesk precizează și că unele elemente nu sunt comparate, între care imaginile, norii de puncte, modelele de coordonare și referințele externe care nu sunt DWG. DWG Compare nu detectează nici schimbările de proprietate ByBlock sau ByLayer din blocuri imbricate. Dacă desenul depinde de asemenea obiecte sau proprietăți, cere o verificare separată; un rezultat fără diferențe vizibile nu demonstrează că toate datele au fost comparate.",
        ],
        links: [
          {
            label: "Autodesk: limitele funcției DWG Compare",
            href: "https://help.autodesk.com/cloudhelp/2025/ENU/AutoCAD-Core/files/GUID-3D918CC7-4FB7-4951-8F04-C2434DFD04A2.htm",
          },
        ],
        note: "Comparația vizuală localizează diferențe între fișiere; nu aprobă soluția, valorile tehnice sau revizia care trebuie emisă.",
      },
      {
        heading: "Clarifică ce se revizuiește și ce intră în corectură",
        paragraphs: [
          "Înainte de ofertare, precizează dacă ai nevoie doar de localizarea diferențelor, de aplicarea unor observații confirmate sau de o planșă DWG/PDF pregătită pentru predare. Trimite ambele versiuni și explică ce fișier este baza. O listă de modificări numerotată, legată de zonele sau planșele afectate, ajută la separarea observațiilor deja aprobate de cele care încă cer răspuns.",
        ],
        list: [
          "Cele două fișiere DWG, cu revizia și data emiterii cunoscute; indică desenul care trebuie folosit ca bază.",
          "PDF-ul sau planșa de referință, dacă trebuie verificată separat încadrarea și rezultatul pentru tipărire.",
          "Lista diferențelor de investigat și instrucțiunile aprobate pentru modificările care se aplică.",
          "Layouturile, formatul foilor și livrabilele cerute: DWG, PDF sau ambele.",
          "Persoana care confirmă informațiile tehnice și versiunea finală pentru emitere.",
        ],
        note: "Nu deduce dimensiuni, valori sau schimbări de soluție din norii de revizie; cere confirmarea proiectantului responsabil.",
      },
      {
        heading: "Ai nevoie de comparație și corecturi pe DWG?",
        paragraphs: [
          "NOD BIM poate evalua corecturi pe planșe AutoCAD existente, implementarea observațiilor primite și pregătirea fișierelor DWG și PDF pentru predare. Trimite versiunile disponibile, schimbările aprobate și formatul dorit pentru a putea delimita lucrarea înainte de începere. Desenarea urmează proiectul și informațiile transmise; proiectarea, calculele, verificarea și semnătura de specialitate rămân la proiectantul responsabil.",
        ],
        links: [
          {
            label: "Servicii AutoCAD: planșe, corecturi DWG și layouturi",
            href: "/autocad-dwg",
          },
          {
            label: "Articol conex: scara viewporturilor la predarea DWG și PDF",
            href: "/blog/scara-viewporturilor-autocad-dwg-pdf",
          },
        ],
      },
    ],
  },
  {
    slug: "familii-revit-mep-conectori-echipamente",
    title: "Familii Revit MEP pentru echipamente: ce clarifici înainte de modelare",
    metaTitle: "Familii Revit MEP pentru echipamente: checklist",
    description:
      "Ce date clarifici despre echipamentele HVAC, termice și electrice, familii Revit și conectori înainte de externalizarea modelării MEP.",
    date: "2026-10-15",
    readingTime: 7,
    tags: [
      "Revit MEP",
      "Familii Revit",
      "Conectori MEP",
      "Echipamente HVAC",
      "RFA",
      "Modelare Revit",
      "Documentație tehnică",
      "BIM",
    ],
    sections: [
      {
        paragraphs: [
          "Când un model Revit MEP trebuie să includă echipamente, o geometrie 3D asemănătoare produsului nu este suficientă pentru orice scop. Familia trebuie să corespundă informațiilor proiectului și modului în care elementul va fi folosit în vederi, liste și sisteme. Înainte de externalizarea modelării, clarifică dacă este suficient un tip din biblioteca biroului, trebuie adaptată o familie RFA existentă sau se cere o familie nouă.",
        ],
      },
      {
        heading: "Familia Revit nu este doar geometria vizibilă",
        paragraphs: [
          "O familie Revit reunește o reprezentare grafică și proprietăți comune. În funcție de utilizare, aceste proprietăți pot susține diferențierea tipurilor, completarea parametrilor și afișarea elementului în model și în documentație. O reprezentare care arată corect în 3D nu confirmă singură că familia are datele sau comportamentul MEP cerut.",
          "De aceea, descrie separat forma necesară și informația care trebuie să rămână utilizabilă în fișier. Dacă echipamentul apare în liste, precizează câmpurile și convenția de denumire aprobate de birou; dacă trebuie conectat la un sistem, notează cerințele MEP confirmate de proiectant.",
        ],
        links: [
          {
            label: "Autodesk: familiile Revit și proprietățile lor",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Model/files/GUID-4EBB97AD-C7B6-4828-91EB-BC0E99B81E43.htm",
          },
          {
            label: "Autodesk: proprietăți de tip și de instanță",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-GetStarted/files/GUID-7AEC5D66-C2E0-40E2-9504-3CC13781B87A.htm",
          },
        ],
      },
      {
        heading: "Verifică întâi familiile existente, apoi decide dacă este nevoie de una nouă",
        paragraphs: [
          "Autodesk recomandă să identifici familiile necesare și să cauți în biblioteca Revit, pe web, în template-urile Revit sau în template-ul biroului. Dacă găsești o familie potrivită, dar lipsește tipul cerut, poți porni de la un tip nou; dacă există una similară, poate fi adaptată. O familie nouă se justifică atunci când opțiunile existente nu acoperă cerința.",
          "Pentru ofertare, separă aceste cazuri: folosirea unei familii existente, modificarea unui RFA și crearea unei familii noi pot însemna scopuri diferite. Nu presupune că un obiect descărcat de la producător este deja pregătit pentru template-ul și sistemele proiectului.",
        ],
        links: [
          {
            label: "Autodesk: fluxul de lucru pentru familii încărcabile",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Model/files/GUID-5987A3C5-C2F2-438B-AA4D-58322F8E61BB.htm",
          },
        ],
      },
      {
        heading: "Stabilește cum trebuie să arate și să se comporte echipamentul",
        paragraphs: [
          "Înainte de modelare, confirmă variantele dimensionale, vederile în care elementul trebuie să apară, existența unei gazde, nivelul de detaliu și punctul de inserție. Aceste alegeri influențează geometria, vizibilitatea și felul în care familia se plasează în proiect. O vedere de plan pentru documentație poate cere altă reprezentare decât o vedere 3D folosită la coordonare.",
          "Pentru un echipament cu mai multe variante, trimite lista tipurilor și dimensiunile aprobate. Precizează și parametrii care trebuie să fie de tip sau de instanță, dacă proiectul folosește aceste valori în etichete ori schedule-uri. Valorile tehnice se preiau din documentația confirmată de proiectant, nu se deduc dintr-o imagine sau din forma carcasei.",
        ],
        links: [
          {
            label: "Autodesk: ce planifici înainte de a crea o familie încărcabilă",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Customize/files/GUID-AB5F6B3C-663F-4E0C-941E-E661A2914CDA.htm",
          },
        ],
      },
      {
        heading: "Conectorii contează când familia trebuie să participe într-un sistem MEP",
        paragraphs: [
          "În Revit, o componentă fără conectori nu poate participa în topologia unui sistem MEP. Dacă echipamentul trebuie conectat, clarifică disciplina fiecărui conector — de exemplu tubulatură, conducte sau electric — împreună cu poziția, dimensiunea și orientarea aprobate. Revit folosește dimensiunea și orientarea conectorului pentru a stabili ce componente compatibile se pot conecta.",
          "Pentru conectorii de tubulatură sau conductă, săgeata indică direcția în care este creat segmentul pentru completarea conexiunii, nu sensul curgerii. Nu folosi o captură 3D drept validare a sistemului. Responsabilul tehnic trebuie să confirme tipul, valorile și comportamentul cerute pentru proiect.",
        ],
        links: [
          {
            label: "Autodesk: conectorii din familiile MEP",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Model/files/GUID-92B74F31-03EB-4D14-93A1-BD4E4294A629.htm",
          },
          {
            label: "Autodesk: dimensiunea și orientarea conectorilor",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Customize/files/GUID-BE4F1954-1049-46EC-BCB2-D03D27B4C77A.htm",
          },
          {
            label: "Autodesk: sensul săgeții unui conector",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Customize/files/GUID-3181AA1C-7D3E-4D2F-8E06-ED74E6EEEFF5.htm",
          },
        ],
      },
      {
        heading: "Checklist: ce trimiți și ce decizii ceri înainte de începere",
        paragraphs: [
          "Atașează informațiile disponibile și marchează explicit ce trebuie confirmat de proiectant. O cerere clară poate include:",
        ],
        list: [
          "Echipamentul și varianta cerută, cu documentația tehnică sau fișierul furnizorului pe care proiectantul îl aprobă pentru modelare.",
          "Dimensiunile, punctul de inserție, poziția și orientarea în model, precum și nivelul de detaliu necesar în plan, secțiune și 3D.",
          "Familiile existente, template-ul biroului, versiunea Revit și regulile de numire sau de parametri care trebuie urmate.",
          "Pentru conectare: disciplina, numărul și poziția conectorilor, dimensiunile și celelalte valori confirmate pentru sistemul proiectat.",
          "Tipurile, parametrii și coloanele de schedule care intră în livrare, cu valorile de referință aprobate.",
          "Dacă scopul cere doar plasarea echipamentului în RVT sau include și modificarea/crearea familiei RFA; precizează dacă fișierul RFA se predă separat.",
          "Livrabilele cerute — RVT, planșe DWG și/sau PDF — și persoana care confirmă datele tehnice și acceptarea modelului.",
        ],
        note: "Nu completa prin presupunere dimensiunile, conexiunile, performanțele sau parametrii tehnici care nu au fost transmiși și aprobați.",
      },
      {
        heading: "Verifică familia în contextul în care va fi folosită",
        paragraphs: [
          "La predare, verifică elementul în fișierul și template-ul convenite: tipul și valorile cerute apar corect, reprezentarea este lizibilă în vederile agreate, iar câmpurile cerute sunt prezente în proprietăți și utilizabile în lista convenită. Dacă familia trebuie să se conecteze, controlul ei se face în contextul sistemului și al cerințelor aprobate, nu doar prin inspectarea formei 3D.",
          "Notează separat ce a fost modelat, ce date au fost furnizate și ce așteaptă confirmare. Acest control urmărește conformitatea livrabilului cu scopul scris; nu înlocuiește verificarea soluției de instalații, calculele sau aprobarea proiectantului responsabil.",
        ],
      },
      {
        heading: "Delimitează modelarea și documentația Revit MEP",
        paragraphs: [
          "NOD BIM preia modelarea Revit MEP și planșele HVAC, termice și electrice pe baza temei și a informațiilor tehnice primite. Dacă echipamentul necesită o familie RFA nouă ori modificată, include această cerință explicit în scop pentru evaluare; livrarea fișierului editabil se stabilește înainte de începere. Proiectarea, calculele, verificarea și semnătura de specialitate rămân la proiectantul responsabil.",
          "Pentru modelare și documentație Revit MEP, vezi serviciul și pregătește fișierele și criteriile de acceptare înainte de preluare.",
        ],
        links: [
          {
            label: "Modelare Revit MEP pentru birouri de proiectare",
            href: "/revit-mep",
          },
          {
            label: "Articol conex: ce conține un template Revit MEP bun",
            href: "/blog/template-revit-mep-bun",
          },
        ],
      },
    ],
  },
  {
    slug: "scara-viewporturilor-autocad-dwg-pdf",
    title: "Scara viewporturilor AutoCAD: ce confirmi la predarea DWG și PDF",
    metaTitle: "Scara viewporturilor AutoCAD la predarea DWG și PDF",
    description:
      "Află cum se deosebesc scara viewportului și scara de plot, ce blochează viewport lock și ce confirmi pentru un DWG și PDF la scară.",
    date: "2026-10-14",
    readingTime: 6,
    tags: [
      "AutoCAD",
      "DWG",
      "Layout",
      "Paper Space",
      "Model Space",
      "Viewport",
      "Scară de plot",
      "PDF",
    ],
    sections: [
      {
        paragraphs: [
          "Un DWG poate arăta corect în zona de desen și totuși să iasă pe hârtie la altă scară dacă se confundă dimensiunea modelului, scara fiecărui viewport și setarea de plotare. Pentru predarea DWG-ului împreună cu PDF-ul, clarifică separat scara vederilor și formatul paginii, apoi controlează rezultatul exportat.",
        ],
      },
      {
        heading: "Model Space păstrează geometria, Paper Space pregătește foaia",
        paragraphs: [
          "În fluxul obișnuit, desenezi geometria în Model Space la dimensiunea reală, folosind unitățile convenite. De exemplu, dacă unitatea aleasă este milimetrul, o distanță de 1 m înseamnă 1.000 de unități. În Paper Space, fiecare layout reprezintă o foaie; cartușul, notele și viewporturile sunt așezate în raport cu dimensiunea acelei foi.",
          "Un desen început de altcineva poate avea unități sau convenții care trebuie confirmate. Cere unitatea folosită și o dimensiune de referință validată înainte de a trata scara afișată drept dovadă că modelul este corect dimensionat.",
        ],
        links: [
          {
            label: "Autodesk: Model Space și Paper Space",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-990538B6-DDA1-4190-BCC0-BB5BA94C9879.htm",
          },
        ],
      },
      {
        heading: "Scara viewportului stabilește cât din model încape pe foaie",
        paragraphs: [
          "Viewportul este fereastra din layout prin care vezi o porțiune din Model Space. Scara sa raportează dimensiunea modelului la dimensiunea de pe foaie. Dacă unitățile modelului și ale foii sunt ambele milimetri, la 1:100 fiecare milimetru de pe foaie corespunde la 100 mm din model.",
          "Fiecare viewport poate avea propria scară, de exemplu o vedere generală la 1:100 și un detaliu la 1:20. Redimensionarea conturului viewportului schimbă zona vizibilă sau forma ferestrei, dar nu schimbă prin ea însăși scara vederii. Verifică proprietatea Standard Scale sau valoarea personalizată pentru fiecare viewport cerut.",
        ],
        links: [
          {
            label: "Autodesk: scara vederilor din viewporturile layoutului",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-LT-MAC/files/GUID-0DA94ACE-29D0-41C5-8B68-186EF463A734.htm",
          },
          {
            label: "Autodesk: modificarea scării unui viewport de layout",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-9929178F-64E4-4B76-BDE2-00BFDAEFC8B6.htm",
          },
        ],
      },
      {
        heading: "Scara de plotare controlează ieșirea paginii, nu vederea din viewport",
        paragraphs: [
          "Într-un layout există două relații de scară. Viewportul raportează modelul la foaie; scara de plotare raportează layoutul întreg la hârtie. Pentru o planșă la scară exactă, configurația obișnuită este scara cerută în viewport și plotarea layoutului la 1:1 pe formatul de hârtie convenit.",
          "La plotarea directă din Model Space, scara se stabilește la etapa de plotare. Opțiunea Fit to Paper încadrează zona aleasă în format și poate modifica factorul rezultat; nu o folosi dacă planșa trebuie măsurată la o scară fixă. Dacă documentul se predă ca PDF pentru consultare vizuală, spune asta separat de cerința unei scări fizice exacte. În dialogul documentat de Autodesk, Fit to Paper nu este disponibil când Plot Area este setat la Layout.",
        ],
        links: [
          {
            label: "Autodesk: cum se stabilește scara de plotare",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-89604826-0B55-4994-8214-1CA93FA66985.htm",
          },
          {
            label: "Autodesk: opțiunile din dialogul Plot",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-MAC-Core/files/GUID-D2820944-F8F0-4810-9E85-C41604FF58D9.htm",
          },
        ],
      },
      {
        heading: "Viewport lock păstrează scara după ce a fost aleasă",
        paragraphs: [
          "După ce ai setat și verificat scara unui viewport, activează Display Locked pentru a reduce riscul ca un zoom accidental să o schimbe. Autodesk precizează că, atunci când viewportul este blocat, zoomul se aplică întregului layout, iar scara viewportului rămâne neschimbată.",
          "Blocarea nu validează valoarea inițială și nu fixează formatul ori setările de plotare. Confirmă scara mai întâi, apoi blochează separat fiecare viewport relevant.",
        ],
        links: [
          {
            label: "Autodesk: blocarea scării unui viewport de layout",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-F9A37755-68A8-489D-B508-253EDD88F356.htm",
          },
        ],
      },
      {
        heading: "Ce confirmi înainte să ceri predarea DWG și PDF",
        paragraphs: [
          "O cerere completă îi permite desenatorului să pregătească planșele după scopul tău, fără să ghicească unitățile sau scara de pe fiecare vedere. Confirmă în scris următoarele:",
        ],
        list: [
          "DWG-ul de bază și emiterea pe care se lucrează; dacă există o dimensiune de control, transmite valoarea confirmată și unitatea.",
          "Layouturile care intră în livrare și formatul fizic al fiecărei foi, de exemplu A3 sau A1, împreună cu orientarea.",
          "Scara cerută pentru fiecare viewport sau vedere; precizează separat detaliile care folosesc altă scară.",
          "Dacă PDF-ul trebuie să păstreze scara când este tipărit la dimensiunea originală sau este doar pentru citire pe ecran.",
          "Dacă predarea include DWG editabil, PDF, sau ambele, și cine aprobă dimensiunile și informațiile tehnice afișate.",
          "Convenția de unități a desenului și orice excepție față de template-ul folosit de biroul tău.",
        ],
        note: "Scările, dimensiunile și conținutul cu semnificație tehnică trebuie confirmate de client sau de proiectantul responsabil.",
      },
      {
        heading: "Verifică fiecare viewport în DWG și fiecare pagină în PDF",
        paragraphs: [
          "În DWG, selectează viewporturile din layout și verifică scara din proprietăți, apoi confirmă Display Locked pentru cele a căror scară a fost aprobată. Înainte de export, deschide previzualizarea de plotare și verifică formatul, orientarea, zona Layout și încadrarea paginii.",
          "Deschide PDF-ul exportat și compară dimensiunea paginii și conținutul cu cerința convenită. Dacă este importantă scara pe hârtie, tipărește pagina la dimensiunea originală, fără redimensionarea de tip Fit, și compară o distanță de referință aprobată. Mărirea pe ecran nu înlocuiește controlul paginii tipărite la scara cerută.",
        ],
        links: [
          {
            label: "Autodesk: previzualizare și scara implicită la plotarea unui layout",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-MAC-Core/files/GUID-D2820944-F8F0-4810-9E85-C41604FF58D9.htm",
          },
        ],
      },
      {
        heading: "Ai nevoie de layouturi AutoCAD pregătite pentru predare?",
        paragraphs: [
          "Serviciile AutoCAD NOD BIM includ desenare și corecturi pe planșe existente, layouturi cu viewporturi și scări, precum și pregătirea fișierelor DWG și PDF. Trimite desenul, formatul foilor, scările solicitate și livrabilele dorite pentru evaluarea lucrării. Desenarea urmează informațiile furnizate; proiectarea, calculele, verificarea și semnătura de specialitate rămân la proiectantul responsabil.",
        ],
        links: [
          {
            label: "Servicii AutoCAD: planșe, corecturi DWG și layouturi",
            href: "/autocad-dwg",
          },
          {
            label: "Articol conex: ce clarifici la predarea unui DWG corectat",
            href: "/blog/corecturi-dwg-pdf-redline-layout-predare",
          },
        ],
      },
    ],
  },
  {
    slug: "coordonate-linkuri-revit-mep-externalizare",
    title: "Coordonatele linkurilor Revit MEP: ce clarifici înainte de externalizare",
    metaTitle: "Coordonate Revit MEP: poziționarea linkurilor",
    description:
      "Ce clarifici despre origini, coordonate partajate și controlul linkurilor Revit înainte de externalizarea modelării MEP.",
    date: "2026-10-13",
    readingTime: 7,
    tags: ["Revit MEP", "Coordonate partajate", "Legături Revit", "Externalizare", "BIM"],
    sections: [
      {
        paragraphs: [
          "Într-un model Revit MEP legat de arhitectură, structură sau topografie, traseele și planșele depind de poziția și orientarea referinței. Înainte de externalizare, biroul de proiectare trebuie să precizeze ce model este reperul și cum se așteaptă să fie poziționat în fișierul MEP.",
          "Revit oferă mai multe reguli de plasare. Numele opțiunii nu confirmă singur că două fișiere folosesc același reper. Fără fișierul gazdă, legăturile relevante și reperul confirmat de proiectant, nu se poate stabili dinainte care metodă aliniază corect proiectul.",
        ],
      },
      {
        heading: "Separă originea internă de punctele proiectului și ale topografiei",
        paragraphs: [
          "Revit folosește un sistem de coordonate al proiectului și unul de topografie. Project Base Point definește originea sistemului proiectului, iar Survey Point indică un reper în sistemul de topografie și oferă contextul amplasamentului. Internal Origin stă la baza sistemelor. Project Base Point poate fi mutat, deci nu presupune că mai coincide cu originea internă.",
          "Coordonatele partajate descriu poziția relativă a fișierelor legate. În cererea de modelare, precizează dacă reperul convenit este originea internă, un punct comun din model sau coordonatele de topografie.",
        ],
        links: [
          {
            label: "Autodesk: Project Base Point și Survey Point",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Model/files/GUID-68611F67-ED48-4659-9C3B-59C5024CE5F2.htm",
          },
          {
            label: "Autodesk: sistemele de coordonate în Revit",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Model/files/GUID-E67ED082-2556-475B-84A7-4605329F612F.htm",
          },
        ],
      },
      {
        heading: "Origin to Origin folosește origini interne aliniate",
        paragraphs: [
          "Opțiunea Auto - Origin to Origin plasează originea geometriei primite la originea internă a modelului gazdă. Într-un fișier Revit, aceasta nu înseamnă automat alinierea Project Base Point-urilor: punctul de bază poate fi mutat față de originea internă.",
          "Metoda este potrivită când fișierele au fost pregătite în jurul unui punct de origine comun. Autodesk o indică drept alegere uzuală în multe cazuri, dar recomandă By Shared Coordinates când modelul gazdă folosește coordonate partajate. Alege regula după convenția proiectului, nu doar după cum arată prima vedere.",
        ],
        links: [
          {
            label: "Autodesk: poziționarea importurilor și a legăturilor",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Model/files/GUID-C922A152-0A30-4E27-BED2-BCE9FF2E5E30.htm",
          },
          {
            label: "Autodesk: legarea unui model Revit la alt model",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Collaborate/files/GUID-3D79F9CC-005B-4C4D-9F47-60CEAAE65638.htm",
          },
        ],
      },
      {
        heading: "By Shared Coordinates folosește o relație coordonată între fișiere",
        paragraphs: [
          "Auto - By Shared Coordinates poziționează geometria folosind coordonatele partajate. Folosește-o când relația dintre modelul gazdă și legături a fost definită și confirmată de echipa proiectului. Pentru proiecte cu mai multe legături, Autodesk recomandă coordonarea aceleiași poziții cu participanții proiectului.",
          "Dacă un model Revit legat nu împarte coordonate cu gazda, opțiunea poate folosi poziționarea Center to Center. Prin urmare, selectarea By Shared Coordinates nu creează singură coordonate comune și nu este dovadă că amplasarea corespunde ridicării sau modelului de referință.",
        ],
        links: [
          {
            label: "Autodesk: poziționarea partajată a modelelor",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Collaborate/files/GUID-049BE99D-249F-4D1F-A79C-A348955AB49C.htm",
          },
          {
            label: "Autodesk: reguli pentru poziționarea importurilor și a legăturilor",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Model/files/GUID-C922A152-0A30-4E27-BED2-BCE9FF2E5E30.htm",
          },
        ],
      },
      {
        heading: "Checklist: ce să clarifice biroul înainte de predare",
        paragraphs: [
          "Trimite instrucțiuni legate de legătura dintre modelele proiectului, nu doar o captură în care par să se suprapună. Include următoarele informații atunci când sunt relevante:",
        ],
        list: [
          "Care fișier este gazda și care este modelul de referință: arhitectură, structură sau topografie; indică revizia pe care trebuie să se bazeze lucrul.",
          "Ce regulă de plasare este convenită: Origin to Origin sau By Shared Coordinates; notează cine confirmă reperul de coordonate.",
          "Dacă se folosesc coordonate partajate, indică amplasamentul/site-ul denumit și sursa sa. Atașează datele de topografie aprobate dacă fac parte din proiect.",
          "Marchează un punct comun identificabil și poziția/orientarea așteptată. Menționează nivelurile și relația dintre Project North și True North dacă proiectul le diferențiază.",
          "Precizează versiunea Revit salvată pentru modelul gazdă și fiecare legătură, precum și dacă este permisă conversia unui fișier la o versiune mai nouă.",
          "Dacă modelele au faze diferite, indică ce corespondență de faze și ce vedere trebuie folosite pentru verificarea vizuală.",
        ],
      },
      {
        heading: "Verifică legătura în plan și în 3D",
        paragraphs: [
          "După plasare, compară modelul legat cu reperul confirmat în cel puțin o vedere de plan și într-o vedere 3D sau de elevație. Verifică punctul comun, orientarea și nivelurile, apoi afișează punctele de bază și de topografie ale legăturii pentru a vedea relația dintre sisteme.",
          "Dacă legătura nu apare în vedere, verifică mai întâi vizibilitatea și disciplina vederii. Autodesk indică disciplina Coordination pentru afișarea elementelor din toate disciplinele. Dacă geometria pare deplasată, notează vederea și reperul așteptat și cere confirmarea sursei; nu trage linkul până când suprapunerea pare convenabilă.",
        ],
        links: [
          {
            label: "Autodesk: legarea unui model și afișarea coordonatelor de bază",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Collaborate/files/GUID-3D79F9CC-005B-4C4D-9F47-60CEAAE65638.htm",
          },
        ],
      },
      {
        heading: "Acquire și Publish schimbă relația coordonatelor",
        paragraphs: [
          "În proprietățile unei legături, Acquire preia coordonatele linkului în modelul gazdă, iar Publish transmite coordonatele gazdei către link. Autodesk arată că operația schimbă sistemul de coordonate folosit de unul dintre modele și cere reconcilierea pozițiilor.",
          "Aceste comenzi nu sunt o corecție vizuală fără efecte asupra fișierelor. Folosește-le numai după ce responsabilul proiectului confirmă modelul de referință și autorizează modificarea relației dintre fișiere.",
          "În Revit Cloud Worksharing nu se pot publica coordonate partajate către modelul legat; Autodesk permite preluarea lor prin Acquire. Convenția trebuie clarificată și în funcție de modul de colaborare al proiectului.",
        ],
        links: [
          {
            label: "Autodesk: Acquire sau Publish prin proprietățile legăturii",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-008933F3-DE4C-471F-890A-1A4B82D9C808.htm",
          },
        ],
      },
      {
        heading: "Versiunea și faza se verifică separat de poziționare",
        paragraphs: [
          "Cere versiunea Revit a gazdei și a fiecărui fișier legat. La legarea unui model care necesită upgrade, Revit afișează un mesaj. Upgrade-ul făcut pentru legare este temporar și nu salvează linkul odată cu gazda; actualizarea permanentă cere deschiderea și salvarea separată a modelului legat. După upgrade și salvare, modelul nu mai poate fi deschis cu versiunea anterioară. Clarifică dinainte cu proprietarul dacă este permisă această conversie.",
          "Fazele contează numai când proiectul trebuie să afișeze stări diferite ale lucrării. Pentru un link Revit cu mai multe faze, verifică Phase Mapping și setările vederii; ele controlează corespondența și afișarea fazelor, nu stabilesc coordonatele comune.",
        ],
        links: [
          {
            label: "Autodesk: legături Revit care necesită upgrade",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-5DEE0468-9BB9-49BF-8605-9B3C8F1CE939.htm",
          },
          {
            label: "Autodesk: maparea fazelor între modele legate",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-97E3F329-B78A-4854-841D-CDE2EAA1FD73.htm",
          },
        ],
      },
      {
        heading: "Coordonatele și proiectarea rămân la responsabilul proiectului",
        paragraphs: [
          "Modelarea Revit MEP poate urma fișierele, coordonatele și standardele confirmate de biroul de proiectare. Alegerea reperului de topografie, validarea poziției proiectului și deciziile tehnice rămân la proiectantul responsabil. Un link care se suprapune vizual nu verifică soluția tehnică și nu ține loc de măsurători sau de validarea coordonatelor.",
          "Pentru modelare și documentație HVAC, termică sau electrică în Revit, consultă serviciul și clarifică fișierele și scopul proiectului înainte de preluare.",
        ],
        links: [
          {
            label: "Modelare Revit MEP pentru birouri de proiectare",
            href: "/revit-mep",
          },
          {
            label: "Ce fișiere trimiți pentru modelarea Revit MEP",
            href: "/blog/ce-fisiere-trimiti-pentru-modelare-mep",
          },
        ],
      },
    ],
  },
  {
    slug: "mentenanta-hvac-excel-sau-cmms",
    title: "Mentenanța HVAC: Excel sau un CMMS?",
    metaTitle: "Mentenanță HVAC: Excel sau CMMS?",
    description:
      "Află când ajunge un tabel pentru echipamente și revizii HVAC și când un CMMS ajută la ordine de lucru, scadențe, responsabili și istoric.",
    date: "2026-10-12",
    readingTime: 7,
    tags: ["HVAC", "Mentenanță", "CMMS", "Excel", "Mentenanță preventivă"],
    sections: [
      {
        paragraphs: [
          "Pentru mentenanța HVAC, alegerea dintre Excel și un CMMS ține mai puțin de numărul de funcții și mai mult de felul în care sunt urmărite echipamentele, scadențele și intervențiile. Un tabel poate fi suficient dacă există puține active, un responsabil clar și un mod consecvent de a înregistra fiecare lucrare. Un CMMS devine util când lucrările recurente, mai mulți oameni sau mai multe locații fac dificilă păstrarea aceleiași imagini.",
          "Un CMMS este un sistem de administrare a mentenanței. El poate centraliza activele, solicitările, ordinele de lucru și planurile preventive. Nu stabilește singur intervalul tehnic potrivit unui anumit echipament și nu înlocuiește documentația producătorului ori deciziile responsabilului de mentenanță.",
        ],
        links: [
          {
            label: "DOE/FEMP: Operations & Maintenance Best Practices Guide, Release 3.0",
            href: "https://www.energy.gov/sites/default/files/2020/04/f74/omguide_complete_w-eo-disclaimer.pdf",
          },
        ],
      },
      {
        heading: "Când ajunge Excel și când merită un CMMS",
        paragraphs: [
          "Înainte să migrezi datele, descrie fluxul real: cine observă o problemă, cine aprobă lucrarea, cine o execută, cum afli că este terminată și unde rămân constatările. Ghidul DOE/FEMP recomandă evaluarea nevoilor și a funcțiilor necesare înaintea alegerii unui CMMS; avertizează și asupra funcțiilor prea complexe pentru ce poate administra echipa.",
        ],
        table: {
          head: ["Situație", "Excel poate ajunge", "Un CMMS poate fi mai potrivit"],
          rows: [
            [
              "Responsabili și locații",
              "Un singur responsabil actualizează același registru, iar versiunea curentă este ușor de găsit.",
              "Mai mulți tehnicieni sau administratori trebuie să vadă aceeași lucrare și să-i schimbe responsabilul ori starea.",
            ],
            [
              "Scadențe",
              "Revizuirea periodică a unei liste de termene este ușor de făcut și verificat.",
              "Există multe lucrări recurente și este util ca planurile să genereze ordine de lucru și să apară într-un calendar.",
            ],
            [
              "Istoric",
              "Intervențiile pot fi adăugate ca rânduri noi fără să fie suprascris istoricul.",
              "Trebuie căutate rapid lucrările, constatările și atașamentele pentru un echipament sau o locație.",
            ],
            [
              "Complexitate",
              "Procesul este stabil, iar formulele și câmpurile pot fi menținute fără automatizări fragile.",
              "Urmărirea manuală produce sarcini dublate, date lipsă sau neclaritate privind ce este în lucru.",
            ],
          ],
        },
        links: [
          {
            label: "Ghidul DOE/FEMP despre evaluarea nevoii și funcțiile CMMS",
            href: "https://www.energy.gov/sites/default/files/2020/04/f74/omguide_complete_w-eo-disclaimer.pdf",
          },
        ],
      },
      {
        heading: "Descarcă două registre pentru a începe în Excel",
        paragraphs: [
          "Poți începe fără un abonament: descarcă registrul de echipamente și registrul de ordine de lucru, apoi folosește același cod de echipament în ambele. Fișierele CSV sunt gratuite, cu separator punct și virgulă și diacritice UTF-8. În Excel, dacă datele apar într-o singură coloană, importă fișierul și selectează separatorul punct și virgulă.",
          "Șterge rândul DEMO înainte de utilizare și completează numai datele verificate ale echipamentelor tale. Fiecare intervenție primește un rând nou în registrul de ordine de lucru, pentru a păstra istoricul. Sursa intervalului și scadențele se completează după documentația modelului și procedura aplicabilă.",
        ],
        note: "Sunt șabloane independente pentru organizarea datelor. Nu reprezintă un plan tehnic de mentenanță și nu este garantat importul lor direct în FreeMaint sau alt CMMS.",
        links: [
          {
            label: "Descarcă registrul de echipamente HVAC (CSV pentru Excel)",
            href: "/resurse/registru-echipamente-hvac.csv",
          },
          {
            label: "Descarcă registrul de ordine de lucru HVAC (CSV pentru Excel)",
            href: "/resurse/registru-ordine-de-lucru-hvac.csv",
          },
        ],
      },
      {
        heading: "Începe cu un registru de echipamente folositor",
        paragraphs: [
          "Indiferent de instrument, registrul trebuie să lege fiecare intervenție de echipamentul corect. Folosește un identificator unic și păstrează informațiile utile pentru localizare, identificare și planificare. Nu completa după presupuneri câmpurile necunoscute; marchează-le pentru verificare la echipament sau în documentația existentă.",
        ],
        list: [
          "Identificator stabil și denumire ușor de recunoscut, de exemplu CTA-01 sau Split-Oficiu-02.",
          "Clădirea, nivelul și încăperea ori zona în care este montat echipamentul.",
          "Tipul echipamentului, producătorul, modelul și seria, când sunt disponibile.",
          "Linkul sau locația manualului potrivit modelului și reviziei echipamentului.",
          "Planul sau procedura aplicabilă, cu sursa intervalului și persoana care validează revizia.",
          "Data ultimei lucrări, lucrarea efectuată, responsabilul, starea și următoarea scadență.",
        ],
        links: [
          {
            label: "FreeMaint Docs: înregistrarea unui activ și câmpurile sale",
            href: "https://freemaint.com/docs/assets/registering",
          },
        ],
      },
      {
        heading: "Separă planul preventiv de ordinul de lucru",
        paragraphs: [
          "Un plan preventiv descrie ce lucrare se repetă și după ce regulă se planifică. Un ordin de lucru este intervenția concretă: ce trebuie făcut, pentru ce activ și locație, cine răspunde, care este termenul și ce documente sau constatări se atașează. O solicitare de intervenție poate porni, la rândul ei, o lucrare corectivă în afara calendarului preventiv.",
          "În Excel, păstrează registrul activelor separat de istoricul lucrărilor sau folosește foi legate prin același identificator. Într-un CMMS, verifică dacă activul și locația sunt asociate ordinului, dacă poți atribui responsabilul și dacă stările reflectă fluxul folosit în realitate. Nu suprascrie rândul ultimei revizii cu o dată nouă: adaugă o înregistrare nouă pentru a păstra istoricul.",
        ],
        links: [
          {
            label: "FreeMaint Docs: ce conține și cum se urmărește o ordine de lucru",
            href: "https://freemaint.com/docs/getting-started/create-work-order",
          },
          {
            label: "DOE/FEMP: CMMS și istoricul lucrărilor",
            href: "https://www.energy.gov/sites/default/files/2020/04/f74/omguide_complete_w-eo-disclaimer.pdf",
          },
        ],
      },
      {
        heading: "Intervalul se preia din documentația echipamentului",
        paragraphs: [
          "Înregistrează sursa intervalului, nu doar frecvența introdusă într-un calendar. Ghidul DOE/FEMP precizează că îndrumările sale generale nu înlocuiesc specificațiile și recomandările producătorului. Pentru un aparat HVAC, verifică manualul potrivit modelului și reviziei, apoi notează cerința și locul din document din care a fost preluată. Dacă intervalul trebuie adaptat condițiilor de exploatare, consemnează cine l-a verificat și pe ce bază.",
          "Un plan calendaristic poate urmări o periodicitate exprimată în timp. Dacă sarcina depinde de ore de funcționare sau de alte citiri, verifică dacă instrumentul și planul ales pot folosi acel tip de declanșare. Software-ul poate calcula următoarea scadență după regula introdusă; nu validează că regula este corectă pentru echipament.",
        ],
        links: [
          {
            label: "DOE/FEMP: recomandările producătorului și programul preventiv",
            href: "https://www.energy.gov/sites/default/files/2020/04/f74/omguide_complete_w-eo-disclaimer.pdf",
          },
          {
            label:
              "FreeMaint Docs: programarea mentenanței pe timp și recomandarea de pornire de la intervalul producătorului",
            href: "https://freemaint.com/docs/preventive-maintenance/optimizing",
          },
          {
            label: "FreeMaint Docs: planuri preventive calendaristice",
            href: "https://freemaint.com/docs/preventive-maintenance/time-based",
          },
        ],
      },
      {
        heading: "Exemplu ipotetic: o clădire mică, un responsabil",
        paragraphs: [
          "Imaginează-ți o clădire cu o unitate rooftop și câteva aparate split, iar o singură persoană ține registrul și verifică termenele. Într-un tabel, fiecare echipament are un cod și o locație; manualul corect este atașat sau localizat; periodicitatea este introdusă numai după verificarea cerinței pentru modelul respectiv; fiecare intervenție se adaugă ca înregistrare nouă, cu dată, responsabil și observații.",
          "Dacă aceeași persoană poate verifica lista la intervalul stabilit, tabelul poate rămâne suficient. Dacă lucrările ajung să fie împărțite între tehnicieni, locațiile se înmulțesc ori nimeni nu mai știe ce ordin este deschis, testează un CMMS pe câteva active reprezentative. Acesta este un exemplu de proces, nu o măsurare a economiilor sau a performanței.",
        ],
      },
      {
        heading: "Ce oferă FreeMaint la data verificării",
        paragraphs: [
          "La consultarea paginii oficiale de prețuri din 12 octombrie 2026, FreeMaint afișa Core la 0 USD și Starter de la 29 USD pe companie pe lună, cu taxele aplicabile calculate la checkout. Pagina listează în Core utilizatori, active și ordine de lucru nelimitate, planuri preventive calendaristice, solicitări și locații. Starter adaugă, între altele, contoare și declanșatoare preventive bazate pe citiri, plus export PDF/Excel. Prețul și funcțiile sunt un instantaneu al paginii consultate și trebuie reverificate înaintea unei decizii.",
        ],
        links: [
          {
            label: "FreeMaint: prețuri și comparația planurilor",
            href: "https://freemaint.com/pricing",
          },
          {
            label: "FreeMaint Docs: declanșatoare de mentenanță pe contoare",
            href: "https://freemaint.com/docs/preventive-maintenance/meter-based",
          },
        ],
      },
      {
        heading: "Testează exportul și planul înainte de migrare",
        paragraphs: [
          "Exportul merită verificat pe modulul, formatul și planul de care ai nevoie, nu doar printr-o afirmație generală că datele pot fi exportate. La verificarea read-only din 7 octombrie 2026, exportul Assets în format Excel/CSV din contul Core a afișat mesajul că funcția bulk export cere Starter. Pe 8 octombrie, arhiva JSON a workspace-ului existent s-a descărcat; testul respectiv a confirmat acea cale de arhivare, nu toate exporturile individuale.",
          "La consultarea din 12 octombrie, tabelul de planuri FreeMaint pune exportul PDF/Excel în Starter, dar FAQ-ul menționează CSV import/export în Core, iar paginile de documentație despre export și portabilitate descriu exporturi CSV/Excel fără o limitare de plan. Aceste afirmații nu se potrivesc complet cu mesajul observat în modulul Assets. Înainte de a migra, verifică din contul propriu formatul exact, modulul, volumul și permisiunile necesare; păstrează separat o copie verificată a datelor.",
        ],
        links: [
          {
            label: "FreeMaint: comparația planurilor și FAQ-ul",
            href: "https://freemaint.com/pricing",
          },
          {
            label: "FreeMaint Docs: exportul din module",
            href: "https://freemaint.com/docs/import-export/data-export",
          },
          {
            label: "FreeMaint Docs: formate și portabilitatea datelor",
            href: "https://freemaint.com/docs/import-export/data-portability",
          },
        ],
      },
      {
        heading: "O verificare practică înainte să alegi",
        list: [
          "Numără echipamentele și locațiile, apoi identifică cine va administra registrul și cine va închide lucrările.",
          "Ia câteva active diferite și confirmă că manualul, modelul și intervalul sunt asociați corect fiecăruia.",
          "Încearcă un caz preventiv și unul corectiv: planificare, atribuire, stare, atașament și păstrarea istoricului.",
          "Verifică dacă aplicația oferă calendarul sau declanșatorul cerut de procedură, fără să presupui că toate tipurile de plan sunt disponibile în fiecare abonament.",
          "Exportă date de test din exact ecranul și formatul de care depinzi, apoi deschide fișierul și confirmă că identificatorii și câmpurile utile sunt păstrate.",
          "Compară funcțiile cu nevoia reală și timpul disponibil pentru administrare; un CMMS folosit parțial poate lăsa același gol de evidență ca un tabel neactualizat.",
        ],
        links: [
          {
            label: "DOE/FEMP: evaluarea nevoii și a capacității de utilizare a unui CMMS",
            href: "https://www.energy.gov/sites/default/files/2020/04/f74/omguide_complete_w-eo-disclaimer.pdf",
          },
        ],
      },
      {
        heading: "Transparență privind recomandarea",
        paragraphs: [
          "FreeMaint este un produs furnizat de FreeMaint, nu un serviciu de mentenanță HVAC livrat de NOD BIM. Pagina NOD BIM de recomandări conține linkul afiliat; dacă alegi oferta prin acea pagină, NOD BIM poate primi comision pentru plățile eligibile. Contul gratuit nu generează comision. Alegerea unui CMMS rămâne opțională: folosește instrumentul care permite echipei tale să păstreze corect registrul și istoricul.",
        ],
        links: [
          {
            label: "Vezi oferta FreeMaint și condițiile afișate de NOD BIM",
            href: "/recomandari",
          },
          {
            label: "FreeMaint: pagina oficială a programului de afiliere",
            href: "https://freemaint.com/affiliates/kit",
          },
        ],
      },
      {
        heading: "Surse primare consultate la 12 octombrie 2026",
        paragraphs: [
          "Pentru organizarea mentenanței am folosit ghidul DOE/FEMP Operations & Maintenance Best Practices Guide, Release 3.0. Pentru funcțiile și limitele produsului am verificat pagina FreeMaint de prețuri și documentația oficială despre active, ordine de lucru, planuri preventive și export. Capturile și notele interne consemnează testele read-only din 7–8 octombrie 2026.",
        ],
        links: [
          {
            label: "DOE/FEMP: Operations & Maintenance Best Practices Guide, Release 3.0",
            href: "https://www.energy.gov/sites/default/files/2020/04/f74/omguide_complete_w-eo-disclaimer.pdf",
          },
          {
            label: "FreeMaint: prețuri și funcții pe planuri",
            href: "https://freemaint.com/pricing",
          },
          {
            label: "FreeMaint Docs: active, ordine de lucru, planuri preventive și export",
            href: "https://freemaint.com/docs",
          },
        ],
      },
    ],
  },
  {
    slug: "corectare-atribute-blocuri-autocad-dwg",
    title: "Blocuri AutoCAD cu atribute: cum corectezi valorile din DWG",
    metaTitle: "Corectare atribute de bloc în AutoCAD și DWG",
    description:
      "Ai identificatori sau texte greșite în blocurile unui DWG? Vezi ce modifici la o singură inserție, ce ține de definiția blocului și ce trimiți pentru o corectură clară.",
    date: "2026-10-12",
    readingTime: 5,
    tags: ["AutoCAD", "DWG", "Blocuri", "Atribute", "Corecturi"],
    sections: [
      {
        paragraphs: [
          "Un DWG poate afișa același simbol în mai multe locuri, dar fiecare inserție poate avea o valoare proprie: un cod, un număr de încăpere sau un câmp din cartuș. Dacă etichetele sunt goale, greșite ori formatate diferit, cererea de corectură trebuie să precizeze dacă se schimbă o singură inserție sau structura blocului.",
          "Distincția contează înainte de estimare: modificarea unui text punctual nu implică redesenarea planșei, iar sincronizarea definiției unui bloc nu înlocuiește automat valorile individuale.",
        ],
      },
      {
        heading: "Verifică dacă textul este atribut sau text obișnuit",
        paragraphs: [
          "Definiția blocului păstrează geometria comună, iar fiecare inserție din desen este o referință la acea definiție. Un atribut este un câmp al blocului a cărui valoare poate varia între referințe. Autodesk folosește drept exemple numărul unei încăperi și informațiile dintr-un cartuș.",
          "Textul obișnuit inclus în definiție se repetă în fiecare inserție. De aceea, înainte să ceri schimbarea unui cod, verifică dacă este atribut, text fix sau geometrie desenată. Aspectul din plan nu arată singur cum este construit.",
        ],
        links: [
          {
            label: "Autodesk: blocuri, referințe și atribute",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/AutoCAD-OnBoarding/files/ACD_FOUNDATIONS_MAIN11.html",
          },
        ],
      },
      {
        heading: "Alege nivelul corect al corecturii",
        paragraphs: [
          "Descrie problema în funcție de ce trebuie să se schimbe. O listă de valori noi nu indică neapărat dacă se modifică o singură inserție, toate referințele aceluiași bloc sau chiar geometria simbolului.",
        ],
        table: {
          head: ["Problema observată", "Ce trebuie clarificat", "Ce să transmiți"],
          rows: [
            [
              "Un singur cod sau o singură denumire este greșită",
              "Care inserție și care atribut se modifică?",
              "Planșa, zona, eticheta și perechea valoare veche–valoare aprobată.",
            ],
            [
              "Eticheta ori afișarea este greșită în bloc",
              "Se schimbă definiția? Se aplică referințelor existente?",
              "Numele blocului, aspectul dorit și inserțiile vizate.",
            ],
            [
              "Mai multe coduri individuale trebuie corectate",
              "Care este lista confirmată pentru fiecare inserție?",
              "Un tabel cu poziția blocului și valoarea aprobată pentru fiecare câmp.",
            ],
            [
              "Simbolul sau geometria este greșită",
              "Este necesară o intervenție grafică separată?",
              "O observație marcată și sursa care confirmă geometria cerută.",
            ],
          ],
        },
        note: "Tabelul este o propunere pentru delimitarea cererii. Valorile și geometria cu semnificație tehnică trebuie confirmate de proiectantul responsabil.",
      },
      {
        heading: "ATTEDIT și Block Attribute Manager fac schimbări diferite",
        paragraphs: [
          "Pentru valoarea dintr-o anumită referință de bloc, comanda ATTEDIT deschide editarea atributelor acelei referințe. Este potrivită când se corectează, de exemplu, un singur cod identificat pe planșă.",
          "Block Attribute Manager modifică definiția atributului: tagul, promptul, valoarea implicită, modul de afișare și alte proprietăți. Înainte de aplicare, stabilește dacă modificarea se aplică inserțiilor existente sau doar celor noi.",
        ],
        links: [
          {
            label: "Autodesk: ATTEDIT pentru valorile unei referințe",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/AutoCAD-Core/files/GUID-AB03D5EE-6B27-492A-8147-671D0F536CB5.htm",
          },
          {
            label: "Autodesk: modificarea definițiilor atributelor",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/AutoCAD-Core/files/GUID-F351FDBB-2731-40C1-A186-1B1F47779E32.htm",
          },
        ],
      },
      {
        heading: "Sincronizarea definiției nu rescrie valorile",
        paragraphs: [
          "Block Attribute Manager poate sincroniza referințele existente cu definiția curentă. Autodesk precizează că Sync actualizează proprietățile atributelor, dar nu schimbă valorile atribuite fiecărei referințe. Schimbarea tagului, a promptului sau a valorii implicite nu înlocuiește automat valorile deja completate.",
          "Prin urmare, dacă mai multe coduri sunt incorecte, sincronizarea nu este o înlocuire în masă a codurilor. Pregătește separat lista valorilor aprobate și leagă fiecare valoare de inserția corectă. Dacă managerul evidențiază taguri duplicate, clarifică structura înainte de redenumirea lor.",
        ],
        links: [
          {
            label: "Autodesk: editarea și sincronizarea atributelor existente",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/AutoCAD-Core/files/GUID-889213DA-A3AF-4020-89F0-1E5049AD26EC.htm",
          },
        ],
      },
      {
        heading: "Pregătește lista înainte de corectarea multor inserții",
        paragraphs: [
          "Pentru un desen cu multe blocuri, valorile atributelor pot fi extrase într-un tabel sau într-un fișier CSV. Compară lista cu datele aprobate de proiectant și notează diferențele care trebuie corectate. Exportul arată valorile existente; nu confirmă că sunt corecte tehnic.",
          "Înainte de modificare, păstrează desenul de bază și verifică o inserție reprezentativă. După intervenție, compară valorile și aspectul cu lista aprobată și deschide PDF-ul rezultat pentru a controla ce se vede pe planșă.",
        ],
        links: [
          {
            label: "Autodesk: stocarea și extragerea valorilor atributelor",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/AutoCAD-OnBoarding/files/ACD_FOUNDATIONS_MAIN11.html",
          },
        ],
      },
      {
        heading: "Checklist înainte să ceri corectura",
        list: [
          "Trimite DWG-ul de lucru și identifică emiterea folosită ca bază.",
          "Marchează planșa și poziția fiecărei inserții vizate.",
          "Indică tagul și valoarea actuală, apoi valoarea aprobată.",
          "Precizează dacă se schimbă o singură inserție sau definiția blocului.",
          "Confirmă cine aprobă valorile și geometria cu semnificație tehnică.",
          "Stabilește livrabilele: DWG editabil, PDF sau ambele.",
        ],
        note: "Checklistul organizează preluarea și verificarea desenului; nu înlocuiește verificarea proiectantului responsabil.",
      },
      {
        heading: "Corecturi AutoCAD pe un DWG existent",
        paragraphs: [
          "Serviciile AutoCAD NOD BIM includ corecturi pe DWG-uri existente și organizarea blocurilor. Trimite desenul, valorile confirmate și cerințele de livrare pentru evaluarea lucrării; costul se stabilește după verificarea fișierelor și înainte de începere. Desenarea și documentarea nu înlocuiesc soluțiile tehnice, calculele sau semnătura proiectantului responsabil.",
        ],
        links: [
          {
            label: "Servicii AutoCAD: corecturi și pregătire DWG/PDF",
            href: "/autocad-dwg",
          },
        ],
      },
    ],
  },
  {
    slug: "instalatii-existente-revit-mep-date-limite",
    title: "Instalații existente în Revit: date pentru modelare",
    metaTitle: "Releveu instalații în Revit: date și limite",
    description:
      "Ai măsurători, fotografii și schițe ale instalațiilor existente? Vezi ce trimiți pentru modelare Revit MEP și cum se documentează zonele neconfirmate.",
    date: "2026-10-11",
    readingTime: 5,
    tags: ["Revit MEP", "Instalații existente", "Releveu", "Documentație"],
    sections: [
      {
        paragraphs: [
          "Ai nevoie de un model Revit al instalațiilor existente și ai măsurători, fotografii sau schițe din clădire. Înainte de externalizarea modelării, trebuie stabilit ce informații descriu situația observată și unde documentația rămâne incompletă.",
          "Pentru HVAC, instalații termice și electrice, un model util trebuie să păstreze această diferență. Un traseu desenat continuu poate părea confirmat chiar dacă o parte este ascunsă. Cererea de modelare trebuie să precizeze cum se reprezintă și se documentează astfel de zone.",
        ],
      },
      {
        heading: "Leagă măsurătorile de repere identificabile",
        paragraphs: [
          "Trimite planul de bază cu nivelurile și încăperile identificate. Pentru fiecare zonă, indică reperele folosite la măsurare, unitățile și cotele relevante: poziții față de pereți sau axe, înălțimi și dimensiuni ale elementelor observate.",
          "O listă de dimensiuni fără localizare lasă întrebări deschise. Numerotează schițele și folosește aceleași coduri în fotografii și pe plan. Indică data observațiilor și cine poate clarifica neconcordanțele. Nu cere modelatorului să aleagă între două cote contradictorii fără confirmarea sursei.",
        ],
      },
      {
        heading: "Fotografiile trebuie însoțite de informațiile măsurate",
        paragraphs: [
          "Include imagini de ansamblu și detalii ale echipamentelor, racordurilor și schimbărilor de direcție vizibile. Marchează poziția și orientarea fotografiei pe plan, ca persoana care modelează să poată identifica zona.",
          "Însoțește imaginile de dimensiunile cunoscute și de informațiile lizibile de pe etichete. Separă datele citite de cele presupuse. Dacă documentele vechi și fotografiile recente diferă, arată discrepanța și precizează ce sursă a fost confirmată pentru lucru.",
        ],
      },
      {
        heading: "Stabilește cum se tratează traseele ascunse",
        paragraphs: [
          "Precizează ce zone nu au fost accesibile și ce se cunoaște despre legăturile dintre elementele vizibile. O continuitate dedusă trebuie documentată ca atare. Nu transforma o presupunere într-un traseu prezentat drept măsurat.",
          "Poți conveni o clasificare simplă pentru preluarea datelor. Tabelul de mai jos este o propunere de organizare, adaptabilă procesului clientului.",
        ],
        table: {
          head: ["Stare propusă", "Ce se documentează", "Ce rămâne de clarificat"],
          rows: [
            [
              "Măsurat și localizat",
              "Dimensiunea, reperul și sursa măsurătorii.",
              "Eventualele contradicții între surse.",
            ],
            [
              "Vizibil, cu date incomplete",
              "Elementul și fotografia în care apare.",
              "Dimensiunile sau poziția care lipsesc.",
            ],
            [
              "Ascuns sau neconfirmat",
              "Zona afectată și informațiile disponibile.",
              "Continuitatea, configurația ori datele care nu au fost observate.",
            ],
          ],
        },
      },
      {
        heading: "Păstrează sursa și starea documentării",
        paragraphs: [
          "Informația poate fi păstrată într-un registru asociat modelului sau în parametrii agreați ai proiectului. Autodesk documentează folosirea parametrilor de proiect pentru liste, sortare și filtrare, cu aplicare la categoriile selectate și stocare pe tip ori pe instanță.",
          "Dacă urmărești observații diferite pentru fiecare element, discută cu modelatorul cum se păstrează acele valori individuale. Folosește câmpurile existente în template când sunt potrivite. Nu presupune că un parametru numit «confirmat» reprezintă o verificare efectuată: valoarea trebuie legată de o sursă și de cine a confirmat-o.",
        ],
        links: [
          {
            label: "Autodesk: parametrii de proiect și utilizarea lor",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/Revit-Model/files/GUID-28CBBEC2-6262-42D3-AE41-B36166E8318F.htm",
          },
        ],
      },
      {
        heading: "Separă situația existentă de intervențiile propuse",
        paragraphs: [
          "Dacă modelul include și o intervenție viitoare, stabilește fazele și documentele care trebuie să arate situația existentă, elementele eliminate sau propunerile. În Revit, elementele folosesc proprietățile Phase Created și Phase Demolished, iar vederile au Phase și Phase Filter.",
          "Statutul Existing este relativ la faza vederii: elementul a fost creat într-o fază anterioară. Filtrele de fază controlează afișarea elementelor după statutul lor. Aceste setări organizează reprezentarea; ele nu confirmă că poziția, dimensiunea sau existența unui element au fost verificate în clădire.",
        ],
        links: [
          {
            label: "Autodesk: proprietăți și statut de fază",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/Revit-DocumentPresent/files/GUID-602AB1FE-6C10-4A80-BD74-76ED77D4B601.htm",
          },
          {
            label: "Autodesk: filtrele de fază și afișarea elementelor",
            href: "https://help.autodesk.com/cloudhelp/2027/ENU/Revit-DocumentPresent/files/GUID-DB104358-4D5A-494E-ACAE-BB8B4E72E572.htm",
          },
        ],
      },
      {
        heading: "Checklist înainte de cererea de modelare",
        list: [
          "Planul de bază, nivelurile, încăperile și unitățile sunt identificate.",
          "Măsurătorile indică reperele și zonele cărora le aparțin.",
          "Fotografiile și schițele pot fi asociate cu pozițiile de pe plan.",
          "Echipamentele și datele citite de pe etichete sunt identificate.",
          "Zonele inaccesibile, contradicțiile și ipotezele sunt semnalate.",
          "Este stabilit cine clarifică și confirmă informațiile.",
          "Scopul, nivelul de reprezentare și livrabilele sunt precizate.",
        ],
      },
      {
        heading: "Ce verifici în documentația primită",
        paragraphs: [
          "Compară câteva repere și dimensiuni cunoscute cu modelul și planșele rezultate. Cere ca zonele neconfirmate să poată fi identificate și ca lista întrebărilor deschise să fie livrată împreună cu documentația.",
          "Acceptarea trebuie raportată la sursele și limitele convenite. Aspectul complet al modelului nu este o măsurare suplimentară. Dacă apar observații noi din clădire, acestea trebuie transmise înainte de actualizarea reprezentării.",
        ],
      },
      {
        heading: "Întrebări frecvente",
        paragraphs: [
          "Se poate porni numai de la fotografii? Pot fi evaluate ca sursă, dar trebuie clarificate localizarea, dimensiunile și informațiile care lipsesc înainte de stabilirea lucrării.",
          "Modelarea include măsurători la fața locului? Serviciul descris aici pornește de la măsurătorile, fotografiile și schițele furnizate de client.",
          "Când poate fi predat ca as-built? Stabilește ce situație și ce nivel de confirmare trebuie să documenteze predarea. Zonele neobservate și ipotezele trebuie consemnate, chiar dacă fișierul este numit as-built.",
        ],
      },
      {
        heading: "Ai date despre instalațiile existente?",
        paragraphs: [
          "NOD BIM documentează instalații HVAC, termice și electrice în AutoCAD sau Revit pe baza măsurătorilor, fotografiilor și schițelor tale. Trimite sursele și rezultatul dorit pentru evaluarea scopului și a livrării RVT, DWG sau PDF. Soluțiile tehnice, calculele și semnătura de specialitate rămân la proiectanții responsabili.",
        ],
        links: [
          {
            label: "Modelare Revit MEP și documentarea instalațiilor existente",
            href: "/revit-mep",
          },
          {
            label: "Desenare și documentație AutoCAD",
            href: "/autocad-dwg",
          },
        ],
      },
    ],
  },
  {
    slug: "predare-model-revit-mep-central-local-copie",
    title: "Model Revit MEP la predare: worksharing sau copie independentă?",
    metaTitle: "Predare model Revit MEP: worksharing sau copie independentă",
    description:
      "Înainte să trimiți un model Revit MEP, stabilește dacă destinatarul continuă lucrul în proiectul partajat sau are nevoie de o copie independentă.",
    date: "2026-10-10",
    readingTime: 5,
    tags: ["Revit MEP", "Worksharing", "Predare model", "RVT"],
    sections: [
      {
        paragraphs: [
          "Ai primit un fișier RVT și trebuie să continui modelarea sau planșele. Înainte să începi, clarifică dacă fișierul face parte dintr-un proiect cu worksharing și ce fel de predare așteaptă proprietarul. O copie locală folosită în worksharing nu este automat o copie independentă: poate aparține încă fluxului de sincronizare cu modelul central.",
          "Diferența contează când mai multe persoane lucrează pe același proiect, când există elemente cu proprietari diferiți sau când se cere o versiune separată pentru verificare. Cere tipul de acces și rezultatul dorit înainte să schimbi modelul.",
        ],
      },
      {
        heading: "Ce rol au modelul central și copia locală?",
        paragraphs: [
          "Într-un proiect workshared, modelul central păstrează proiectul comun și informațiile despre cine deține workset-urile și elementele. Fiecare participant lucrează în propria copie locală; prin Synchronize with Central publică modificările către modelul comun și primește schimbările celorlalți.",
          "Prin urmare, simpla trimitere a unui fișier local nu confirmă că destinatarul poate continua colaborarea. Trebuie clarificat accesul la modelul central, starea ultimei sincronizări și dacă modificările locale au fost deja publicate.",
        ],
        links: [
          {
            label: "Autodesk: fluxul unui proiect workshared",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-D9797137-09C7-4F92-AFC3-670202D043E2.htm",
          },
          {
            label: "Autodesk: lucrul într-un proiect în echipă",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-D2579433-CBF9-4853-8BE6-1D6013CD3BFC.htm",
          },
        ],
      },
      {
        heading: "Când trebuie să continue aceeași colaborare",
        paragraphs: [
          "Dacă modificările trebuie să ajungă în același proiect, stabilește cu proprietarul cum se oferă accesul la modelul central și ce rol primește fiecare persoană. Nu lucra pe o copie paralelă prezentată drept modelul curent: schimbările făcute acolo nu ajung automat la ceilalți participanți.",
          "Înainte de intervenție, cere confirmarea că modelul a fost sincronizat și că sursele de care depinde — de exemplu modele Revit legate — sunt disponibile în contextul proiectului. Dacă nu ai accesul sau fișierele necesare, marchează limita și cere clarificare; nu repoziționa ori înlocui legături doar ca să dispară avertismentele.",
        ],
      },
      {
        heading: "Când este necesară o copie independentă",
        paragraphs: [
          "Pentru o verificare sau editare separată, proprietarul poate pregăti o copie detașată de modelul central. Autodesk explică faptul că, după Detach from Central, copia nu mai păstrează calea și informațiile de permisiuni ale modelului inițial și nu poate sincroniza schimbări înapoi către acesta. La salvare, ea devine un model separat.",
          "La detașare trebuie aleasă și păstrarea sau eliminarea workset-urilor. Eliminarea lor șterge workset-urile, atribuirea elementelor și setările de vizibilitate asociate; acestea nu pot fi recuperate. Alegerea aparține persoanei responsabile de proiect. Nu detașa și nu elimina workset-uri fără acordul proprietarului și fără să fie clar ce se întâmplă cu rezultatul.",
        ],
        links: [
          {
            label: "Autodesk: deschiderea independentă a unui model workshared",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-2B3E48F7-96A3-4379-BF6B-538D8C9ED5EF.htm",
          },
          {
            label: "Autodesk: detașarea și eliminarea workset-urilor",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-Collaborate/files/GUID-6A3C4C65-ED01-4F73-8F7E-5D63F205CF9B.htm",
          },
        ],
      },
      {
        heading: "Checklist înainte de predarea fișierului",
        list: [
          "Este modelul workshared sau un proiect RVT obișnuit?",
          "Destinatarul trebuie să continue sincronizarea în proiectul existent sau să lucreze separat?",
          "Care este ultima versiune confirmată și există modificări locale nesincronizate?",
          "Cine aprobă accesul, detașarea și alegerea privind workset-urile?",
          "Ce modele legate și alte surse sunt necesare pentru contextul de lucru?",
          "Ce se predă la final: modificări în proiectul comun, un RVT independent, planșe sau documente exportate?",
        ],
        note: "Checklistul delimitează predarea; nu înlocuiește regulile de colaborare stabilite de proprietarul proiectului.",
      },
      {
        heading: "Înainte de continuarea modelării Revit MEP",
        paragraphs: [
          "Odată stabilite accesul, starea modelului și livrabilele, poți descrie clar partea de modelare sau documentație care trebuie continuată. Ghidurile conexe te ajută să verifici modelul și să pregătești fișierele pentru evaluare.",
          "NOD BIM preia lucrări delimitate de modelare și planșe Revit MEP după clarificarea fișierelor și a cerințelor. Soluția tehnică și semnarea proiectului rămân la proiectanții responsabili.",
        ],
        links: [
          {
            label: "Cum verifici un model Revit primit",
            href: "/blog/cum-verifici-un-model-revit-primit",
          },
          {
            label: "Ce fișiere trimiți pentru modelare MEP",
            href: "/blog/ce-fisiere-trimiti-pentru-modelare-mep",
          },
          {
            label: "Servicii de modelare și documentație Revit MEP",
            href: "/revit-mep",
          },
        ],
      },
    ],
  },
  {
    slug: "xref-lipsa-autocad-preluare-dwg",
    title: "DWG cu Xref lipsă: ce verifici înainte de preluare",
    metaTitle: "Xref lipsă în AutoCAD: preluarea corectă a DWG-ului",
    description:
      "Ai primit un DWG cu referințe externe lipsă? Vezi cum clarifici sursele, căile și poziționarea înainte de a cere continuarea desenării în AutoCAD.",
    date: "2026-10-08",
    readingTime: 5,
    tags: ["AutoCAD", "Xref", "Preluare DWG", "Referințe externe"],
    sections: [
      {
        paragraphs: [
          "Ai primit un DWG care se deschide, dar lipsesc pereți, echipamente sau o parte din plan. Înainte să ceri redesenarea elementelor absente, verifică dacă desenul depinde de alte fișiere. Uneori, problema este o referință externă lipsă sau o legătură către un folder care exista numai pe calculatorul expeditorului.",
          "Pentru continuarea desenării în AutoCAD, trebuie stabilit ce conține fișierul principal, ce vine din surse externe și unde sunt permise modificările. Această verificare ajută la definirea lucrării înainte de ofertă.",
        ],
      },
      {
        heading: "Un Xref păstrează legătura cu un alt DWG",
        paragraphs: [
          "În terminologia AutoCAD, un Xref este o referință externă către un fișier DWG. Desenul gazdă afișează conținutul din Model Space al sursei, printr-o legătură. Actualizările sursei salvate se reflectă la redeschiderea gazdei sau la reîncărcarea referinței.",
          "Prin urmare, un plan vizibil în DWG-ul principal poate aparține altui fișier. Pentru o corectură, precizează dacă se schimbă desenul gazdă ori sursa referențiată. Cere păstrarea legăturilor dacă sursele trebuie actualizate ulterior; integrarea permanentă prin Bind este o decizie separată, de confirmat cu proprietarul documentației.",
        ],
        links: [
          {
            label: "Autodesk: legătura dintre desenul gazdă și Xref",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-A987D2FF-45BD-474E-99C1-E6316A42F667.htm",
          },
        ],
      },
      {
        heading: "Identifică fișierul de lucru și sursele acceptate",
        paragraphs: [
          "Mai multe DWG-uri cu nume asemănătoare nu explică automat care este versiunea acceptată pentru lucru. Indică desenul principal, emiterea folosită ca bază și responsabilul care confirmă sursele. Data salvării poate ajuta la identificare, însă nu înlocuiește această confirmare.",
          "Trimite și un PDF de referință care arată configurația așteptată. Acesta permite compararea vizuală a planului deschis cu documentul transmis. Marchează separat sursele care trebuie doar afișate și fișierele în care sunt autorizate corecturi. Astfel, repararea unei legături nu se confundă cu modificarea desenului altui colaborator.",
        ],
      },
      {
        heading: "Starea referinței arată ce trebuie investigat",
        paragraphs: [
          "Paleta External References, deschisă și prin comanda EXTERNALREFERENCES, listează referințele și starea lor. Tree View arată și fișierele referențiate în interiorul altor surse. Nu trata toate elementele absente ca fișiere pierdute.",
        ],
        table: {
          head: ["Stare", "Semnificație", "Ce clarifici înainte de lucru"],
          rows: [
            [
              "Unloaded",
              "Referința este neîncărcată temporar; legătura este păstrată.",
              "Trebuia păstrată ascunsă sau trebuie reîncărcată?",
            ],
            [
              "Not Found",
              "Fișierul nu este găsit în căile de căutare valide.",
              "Lipsește sursa sau trebuie corectată calea?",
            ],
            [
              "Unresolved",
              "Fișierul referențiat nu poate fi citit.",
              "Este disponibilă o sursă care poate fi deschisă?",
            ],
            [
              "Orphaned",
              "Referința depinde de alta neîncărcată, negăsită sau necitibilă.",
              "Care este problema referinței părinte?",
            ],
          ],
        },
        note: "Saved Path este calea memorată în desen; Found At este locația efectivă a fișierului găsit. Compară-le pentru a confirma că se folosește sursa dorită, mai ales când există copii cu același nume.",
        links: [
          {
            label: "Autodesk: stările și căile din External References",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-7947385D-1A5D-4474-9AB9-FD5E46ADEF53.htm",
          },
        ],
      },
      {
        heading: "Păstrează structura folderelor la preluare",
        paragraphs: [
          "AutoCAD permite căi absolute, relative sau fără cale salvată. O cale relativă poate permite mutarea setului pe alt calculator dacă relația dintre foldere se păstrează. Mutarea numai a desenului principal poate rupe această relație.",
          "Cere arhiva cu structura originală și evită reunirea arbitrară a tuturor fișierelor într-un singur folder. Înainte de schimbarea unei căi, identifică sursa corectă. Dacă două emiteri au același nume de fișier, o legătură reparată către copia greșită poate afișa un plan diferit de cel acceptat.",
        ],
        links: [
          {
            label: "Autodesk: căile către desenele referențiate",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-164C2548-91E6-476D-AFDF-6257340C2EE2.htm",
          },
        ],
      },
      {
        heading: "Attachment și Overlay controlează propagarea referinței",
        paragraphs: [
          "Referințele DWG pot fi atașate ca Attachment sau Overlay. Un Overlay este vizibil în gazda lui, dar nu este inclus când acea gazdă este referențiată într-un alt desen.",
          "Exemplu ipotetic: instalatii.dwg afișează arhitectura.dwg, iar sinteza.dwg referențiază instalatii.dwg. Dacă arhitectura este Overlay în instalatii.dwg, nu se propagă prin această legătură în sinteza.dwg. Ca Attachment, poate apărea ca referință imbricată. Alegerea trebuie să corespundă organizării desenelor cerute de client; schimbarea tuturor referințelor în Attachment nu este o soluție universală pentru lipsurile din plan.",
        ],
        links: [
          {
            label: "Autodesk: referințe imbricate și Overlay",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-0D7D1315-B58A-4BCD-9953-282FF578B144.htm",
          },
        ],
      },
      {
        heading: "O sursă găsită trebuie verificată și în poziție",
        paragraphs: [
          "Dialogul de atașare permite stabilirea punctului de inserție, a factorilor de scară și a rotației. El afișează și informațiile despre unități și factorul de conversie calculat din acestea. Faptul că referința s-a încărcat nu confirmă singur alinierea.",
          "Transmite unitățile, reperele comune și poziționarea cerută, dacă sunt cunoscute. Verifică o dimensiune și câteva repere convenite cu proiectantul. Dacă sursa apare deplasată, rotită sau la o dimensiune neașteptată, clarifică setările înainte să fie mutată manual pentru a semăna cu PDF-ul.",
        ],
        links: [
          {
            label: "Autodesk: inserție, scară, rotație și unități pentru Xref",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-53030EDD-1D1D-40C4-922E-9B964A048ED9.htm",
          },
        ],
      },
      {
        heading: "Checklist pentru continuarea desenării în AutoCAD",
        list: [
          "Desenul principal și sursele externe sunt identificate prin fișier și emitere.",
          "Structura folderelor este păstrată, inclusiv dependențele imbricate.",
          "Lipsurile și referințele neîncărcate intenționat sunt semnalate separat.",
          "PDF-ul de referință permite verificarea configurației așteptate.",
          "Unitățile și reperele de poziționare sunt confirmate sau marcate pentru clarificare.",
          "Este precizat ce fișiere pot fi modificate și cine acceptă schimbările.",
          "Lista intervențiilor și livrabilele DWG/PDF sunt definite.",
        ],
        note: "Checklistul este o propunere de organizare a preluării, adaptabilă procesului clientului.",
      },
      {
        heading: "Ai nevoie de pregătirea unui DWG primit?",
        paragraphs: [
          "NOD BIM oferă corecturi AutoCAD, organizarea layerelor, blocurilor și referințelor externe, plus pregătirea documentelor DWG/PDF. Trimite fișierele și cerințele pentru evaluarea lucrării; costul se stabilește după verificarea documentației, înainte de începere. Calculele, soluțiile tehnice și semnătura de specialitate rămân la proiectanții responsabili.",
        ],
        links: [
          {
            label: "Servicii AutoCAD: pregătire DWG și referințe externe",
            href: "/autocad-dwg",
          },
        ],
      },
    ],
  },
  {
    slug: "liste-cantitati-revit-mep-campuri-filtre-verificare",
    title: "Liste de cantități Revit MEP: ce ceri și cum le verifici",
    metaTitle: "Liste de cantități Revit MEP: câmpuri și verificare",
    description:
      "Ce stabilești pentru listele dintr-un model Revit MEP: categorii, parametri, filtre, unități și modele legate, înainte de externalizarea documentației.",
    date: "2026-10-07",
    readingTime: 5,
    tags: ["Revit MEP", "Liste de cantități", "Parametri", "Documentație"],
    sections: [
      {
        paragraphs: [
          "Ai nevoie ca modelul Revit MEP să vină și cu o listă de echipamente sau de cantități? Cererea «vreau toate cantitățile» nu precizează ce trebuie extras și cum vei verifica rezultatul. Un tabel poate fi lizibil și totuși să includă alte elemente decât cele așteptate.",
          "Pentru un birou care externalizează modelarea HVAC, termică sau electrică, lista trebuie definită ca livrabil: categorii, informații, limite și format. Acest ghid explică ce merită stabilit înainte de lucru și ce verifici în tabelul primit.",
        ],
      },
      {
        heading: "Definește lista după scopul în care o vei folosi",
        paragraphs: [
          "O listă pentru identificarea echipamentelor are alte coloane decât una pentru totalizarea lungimilor. În Revit, crearea unui Schedule/Quantities presupune selectarea categoriei și a fazei, apoi configurarea câmpurilor, filtrelor și grupării.",
          "Exemplele de mai jos sunt orientative; câmpurile disponibile depind de categoria și informațiile modelului.",
        ],
        table: {
          head: ["Lista cerută", "Informații de precizat", "Control util"],
          rows: [
            [
              "Echipamente",
              "Cod, familie/tip, număr de instanțe",
              "Identificarea elementelor din model",
            ],
            [
              "Trasee",
              "Categorie, tip/dimensiune, lungime și unitate",
              "Separarea traseelor de alte componente",
            ],
            [
              "Accesorii sau fitinguri",
              "Categorie, tip și număr",
              "Regulile de grupare și excluderile",
            ],
          ],
        },
        links: [
          {
            label: "Autodesk: crearea unui Schedule/Quantities",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-6D4DBBDA-3611-40CD-9A45-BE40EB07188A.htm",
          },
        ],
      },
      {
        heading: "Cere parametri care identifică elementul",
        paragraphs: [
          "Stabilește denumirea coloanelor și informația pe care trebuie să o conțină. Un cod intern de echipament, un tip și o denumire comercială nu sunt neapărat același parametru. O coloană intitulată convenabil nu demonstrează că valorile sale sunt completate corect.",
          "Revit permite selectarea câmpurilor și folosirea parametrilor de tip sau de instanță. Transmite definițiile parametrilor folosiți de birou și indică ce valori lipsă trebuie raportate. Nu cere completarea lor prin presupuneri.",
          "Documentația Autodesk avertizează că, atunci când introduci parametri partajați într-un tabel, categoriile care nu au parametrul selectat nu sunt afișate. Absența unui rând trebuie investigată înainte să concluzionezi că elementul nu există.",
        ],
        links: [
          {
            label: "Autodesk: selectarea câmpurilor unui tabel",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-F7D48874-EDB0-454B-8E5B-19C551A78978.htm",
          },
          {
            label: "Autodesk: categorii și parametri partajați",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-6D4DBBDA-3611-40CD-9A45-BE40EB07188A.htm",
          },
        ],
      },
      {
        heading: "Verifică filtrele și modelele din care se extrag datele",
        paragraphs: [
          "Un tabel poate afișa numai o parte din model. Notează faza, filtrele și eventualele limite de zonă sau sistem, folosind parametrii disponibili. Revit cere îndeplinirea tuturor filtrelor configurate pentru ca datele să fie afișate; filtrele de text sunt sensibile la litere mari și mici.",
          "Un câmp poate fi ascuns în tabel și totuși folosit pentru filtrare. De aceea, verificarea coloanelor vizibile nu este suficientă pentru a înțelege ce a fost exclus.",
          "Clarifică separat modelul gazdă și modelele legate. Pentru includerea elementelor din legături, Autodesk documentează opțiunea Include elements in links. Cere să fie consemnat dacă este folosită în tabelul respectiv și care sunt fișierele sursă, pentru a evita omisiuni sau includeri nedorite.",
        ],
        links: [
          {
            label: "Autodesk: filtrarea datelor dintr-un tabel",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-C5140A8E-EDB3-4C99-84F0-9299D5136369.htm",
          },
          {
            label: "Autodesk: includerea elementelor din modele legate",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-F7D48874-EDB0-454B-8E5B-19C551A78978.htm",
          },
        ],
      },
      {
        heading: "Un rând grupat poate reprezenta mai multe elemente",
        paragraphs: [
          "Cere explicit dacă vrei fiecare instanță pe un rând sau un sumar pe tipuri. Opțiunea Itemize every instance afișează instanțele individual; când este dezactivată, mai multe instanțe se pot reuni în același rând, potrivit câmpurilor de sortare.",
          "Într-o listă grupată, numărul de rânduri nu este numărul de echipamente. Verifică valoarea Count și regulile grupării. Dacă elementele grupate au valori diferite pentru un parametru, afișarea depinde de setările pentru valori multiple.",
          "Pentru control, poate fi util un tabel detaliat alături de sumar. Aceasta este o recomandare de organizare, nu o cerință obligatorie Autodesk.",
        ],
        links: [
          {
            label: "Autodesk: sortarea și gruparea câmpurilor",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-3ED9C7F0-C340-4317-BCE6-327638ED4A39.htm",
          },
        ],
      },
      {
        heading: "Unitățile și totalurile trebuie să fie explicite",
        paragraphs: [
          "Precizează unitatea și precizia de afișare pentru coloanele numerice. Revit permite formatarea câmpurilor numerice cu unități și ajustarea acesteia separat de setările proiectului.",
          "Totalizarea este disponibilă pentru câmpurile care pot fi însumate și depinde de configurarea tabelului. Cere să fie indicat dacă primești valori pe element, subtotaluri ori un total general. Nu însuma manual o coloană fără să înțelegi ce reprezintă fiecare rând și ce categorii au fost excluse.",
        ],
        links: [
          {
            label: "Autodesk: formatarea câmpurilor și a totalurilor",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-44DD5F85-F715-450B-B98D-1AB23D5F5074.htm",
          },
        ],
      },
      {
        heading: "Checklist pentru primirea listei de cantități",
        list: [
          "Fișierul și data modelului sursă sunt identificate, împreună cu legăturile incluse.",
          "Categoriile, faza, filtrele și excluderile corespund cererii de lucru.",
          "Coloanele au parametri definiți, iar valorile lipsă sunt semnalate.",
          "Instanțele individuale și rândurile grupate se pot distinge; Count este interpretat corect.",
          "Unitățile, precizia și regulile totalurilor sunt explicite.",
          "Câteva elemente selectate pot fi urmărite din tabel până la model.",
          "Formatul primit și lista întrebărilor deschise corespund scopului convenit.",
        ],
      },
      {
        heading: "Cantitățile din model au limitele documentației modelate",
        paragraphs: [
          "Un tabel descrie elementele și informațiile pe care modelul le conține și pe care configurația le include. El nu stabilește singur că documentația este completă pentru achiziție sau că toate componentele necesare au fost modelate.",
          "Orice adaosuri, rezerve sau elemente nemodelate trebuie definite separat de responsabilul documentației. Calculul soluției, verificarea și acceptarea tehnică rămân la proiectant. Lista extrasă nu înlocuiește acest control.",
        ],
      },
      {
        heading: "Pregătești externalizarea documentației Revit MEP?",
        paragraphs: [
          "NOD BIM realizează modelare și documentație HVAC, termică și electrică pe tema biroului de proiectare. Dacă ai nevoie și de tabele din model, include exemplul de listă, parametrii și regulile de extragere în cerere, pentru evaluare și stabilirea livrabilelor. Trimite fișierele și cerințele înainte de începerea lucrării.",
        ],
        links: [
          {
            label: "Externalizare Revit MEP pentru birouri de proiectare",
            href: "/revit-mep",
          },
        ],
      },
    ],
  },
  {
    slug: "corecturi-dwg-pdf-redline-layout-predare",
    title: "Corecturi DWG după PDF redline: ce ceri înainte de predare",
    metaTitle: "Corecturi DWG după PDF redline: layout și predare",
    description:
      "Ai un DWG și observații pe PDF? Vezi ce trimiți pentru corecturi AutoCAD, cum se verifică layouturile și ce trebuie să conțină predarea.",
    date: "2026-10-05",
    readingTime: 5,
    tags: ["AutoCAD", "Corecturi DWG", "Layout", "Predare documentație"],
    sections: [
      {
        paragraphs: [
          "Ai deja desenul DWG, dar proiectantul sau beneficiarul a trimis un PDF cu observații: texte de corectat, elemente de mutat, cote de actualizat sau planșe de reorganizat. Acest PDF comentat este numit adesea redline. Lucrarea pornește de la fișierul editabil existent și cere aplicarea observațiilor, apoi controlul documentelor predate.",
          "Pentru o ofertă clară, descrie atât modificările, cât și rezultatul dorit: DWG editabil, layouturi pregătite și PDF-uri care pot fi verificate. Corectarea desenului și pregătirea tipăririi sunt etape distincte ale aceleiași livrări.",
        ],
      },
      {
        heading: "Ce trimiți pentru corecturi AutoCAD",
        paragraphs: [
          "Indică fișierul de bază și PDF-ul căruia îi corespund observațiile. Un comentariu făcut pe o emitere mai veche poate cere o schimbare deja aplicată sau poate contrazice desenul curent.",
        ],
        list: [
          "DWG-ul de lucru și fișierele la care se referă: alte DWG-uri, imagini ori PDF-uri atașate.",
          "PDF-ul redline complet, cu data sau codul emiterii și observații lizibile pe planșele afectate.",
          "Lista modificărilor și informațiile aprobate pentru implementare; marchează separat întrebările încă deschise.",
          "Template-ul, indicatorul și regulile pentru layere, texte, cote și denumirea fișierelor, dacă există.",
          "Lista layouturilor de predat, formatele de hârtie, scările cerute și setările de tipărire disponibile.",
          "Versiunea DWG necesară, termenul dorit și persoana care confirmă rezultatul înainte de emitere.",
        ],
      },
      {
        heading: "O observație utilă spune ce se schimbă și unde",
        paragraphs: [
          "Numerotează comentariile și precizează planșa, zona și intervenția cerută. «Corectează planul» lasă prea multe interpretări. O cerere precum «actualizează denumirea echipamentului în această vedere și în legendă» permite verificarea rezultatului în locurile relevante.",
          "Separă modificarea geometrică de schimbarea unui text. Dacă o observație cere o altă dimensiune, trebuie clarificat dacă se modifică elementul desenat, cota sau ambele. Valorile și soluțiile tehnice se transmit de către persoana responsabilă de proiectare; nu se deduc dintr-o săgeată ambiguă.",
          "O listă cu stări precum «de aplicat», «în clarificare» și «verificat» poate ajuta. Este o propunere de organizare, adaptabilă procesului clientului. Închiderea unui comentariu trebuie să indice și documentul în care poate fi controlat.",
        ],
      },
      {
        heading: "Layoutul trebuie verificat împreună cu geometria",
        paragraphs: [
          "În fluxul standard AutoCAD, geometria din Model Space se desenează la dimensiunea reală, în unitățile stabilite. Layoutul din Paper Space organizează foaia, indicatorul și vederile modelului. Scara unei vederi se stabilește prin viewport; schimbarea dimensiunii foii nu justifică scalarea întregii geometrii.",
          "După o corectură, verifică dacă zona modificată rămâne vizibilă în toate layouturile necesare. Controlează încadrarea, scara, textele, cotele, legenda și indicatorul. O modificare corectă în Model Space poate apărea tăiată sau greu de citit pe foaia predată.",
          "După stabilirea scării, blocarea afișării viewportului previne schimbarea accidentală a acesteia la zoom. Autodesk precizează că zoomul se aplică atunci întregului layout, păstrând scara din viewport. Confirmă setarea fiecărui viewport relevant, nu doar a primei planșe.",
        ],
        links: [
          {
            label: "Autodesk: Model Space și Paper Space",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-MAC-Core/files/GUID-990538B6-DDA1-4190-BCC0-BB5BA94C9879.htm",
          },
          {
            label: "Autodesk: blocarea scării unui layout viewport",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-F9A37755-68A8-489D-B508-253EDD88F356.htm",
          },
        ],
      },
      {
        heading: "Compararea DWG-urilor ajută, dar nu verifică întreaga predare",
        paragraphs: [
          "DWG Compare poate evidenția obiecte adăugate, eliminate sau modificate între două desene. Compararea fișierului inițial cu cel corectat este utilă pentru identificarea intervențiilor și a schimbărilor neintenționate.",
          "Există însă o limită importantă: instrumentul operează numai în Model Space. Layouturile trebuie controlate separat. De asemenea, layerele oprite sau înghețate în desenul curent nu intră în rezultatul comparației. Un rezultat fără diferențe vizibile nu demonstrează că toate observațiile sunt rezolvate.",
          "Folosește comparația împreună cu lista comentariilor și verificarea PDF-urilor finale, nu drept confirmare automată a acceptării documentației.",
        ],
        links: [
          {
            label: "Autodesk: DWG Compare și limitele comparației",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-2D69E78D-5C82-464F-B864-CD29D5720EB9.htm",
          },
        ],
      },
      {
        heading: "Predă un pachet care poate fi deschis și tipărit",
        paragraphs: [
          "Un DWG poate depinde de referințe externe și de fișiere pentru afișare sau tipărire. eTransmit ajută la pregătirea unui pachet de transmitere. Verifică lista efectivă a fișierelor incluse și evită amestecarea unor versiuni vechi cu documentația curentă.",
          "Documentația Autodesk enumeră între fișierele adăugate automat referințe DWG, imagini, PDF-uri atașate și fișiere CTB, STB sau PC3 folosite de desene. Aceeași referință listează fonturile SHX și TTF între tipurile care nu sunt adăugate automat. Nu presupune că arhiva conține tot ce este necesar; controlează dependențele și eventualele lipsuri.",
          "Include o listă a planșelor, modificările aplicate și întrebările rămase. Această notă permite clientului să verifice pachetul fără să caute explicații în conversații separate.",
        ],
        links: [
          {
            label: "Autodesk: fișierele incluse într-un pachet eTransmit",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-C32FA153-88D6-41D9-B868-0DFF59509CD2.htm",
          },
        ],
      },
      {
        heading: "Checklist înainte de acceptarea corecturilor",
        list: [
          "Fiecare comentariu are o intervenție verificabilă sau o clarificare explicită.",
          "DWG-ul corectat se deschide, iar referințele necesare sunt disponibile.",
          "Geometria, cotele, textele și legendele corespund observațiilor confirmate.",
          "Layouturile păstrează formatul, scara și încadrarea cerute.",
          "PDF-urile finale au fost deschise și controlate pentru lizibilitate și conținut.",
          "Codurile din indicator și denumirile fișierelor identifică aceeași emitere.",
          "Lista livrabilelor precizează ce a fost inclus și ce rămâne de confirmat.",
        ],
      },
      {
        heading: "Ai un DWG cu observații de implementat?",
        paragraphs: [
          "Serviciile AutoCAD NOD BIM includ corecturi pe planșe existente, implementarea observațiilor, organizarea layerelor și pregătirea layouturilor pentru predarea DWG/PDF. Trimite desenul, PDF-ul comentat și cerințele de livrare pentru evaluarea lucrării. Scopul și costul se stabilesc după verificarea documentației; calculele, verificarea și semnătura de specialitate rămân la proiectanții responsabili.",
        ],
        links: [
          {
            label: "Servicii AutoCAD: corecturi DWG și layouturi",
            href: "/autocad-dwg",
          },
        ],
      },
    ],
  },
  {
    slug: "revizii-revit-mep-observatii-predare-rvt-dwg-pdf",
    title: "Revizii Revit MEP: de la observații la predarea RVT, DWG și PDF",
    metaTitle: "Revizii Revit MEP: observații și predare RVT, DWG, PDF",
    description:
      "Cum organizezi observațiile într-un model Revit MEP, marchezi reviziile și verifici predarea RVT, DWG și PDF pentru biroul de proiectare.",
    date: "2026-10-04",
    readingTime: 5,
    tags: ["Revit MEP", "Revizii", "Documentație", "RVT DWG PDF"],
    sections: [
      {
        paragraphs: [
          "Ai un model Revit MEP și un PDF cu observații de la proiectant. Unele cer mutarea traseelor, altele modificarea adnotărilor sau refacerea planșelor. Pentru a externaliza această rundă de lucru, trebuie să fie clar ce se modifică, unde se verifică și ce documente se predau.",
          "Acest ghid propune o organizare practică a reviziilor pentru modele HVAC, termice și electrice. Nu este un standard obligatoriu: regulile biroului de proiectare și scopul convenit au prioritate. Soluția tehnică rămâne responsabilitatea proiectantului.",
        ],
      },
      {
        heading: "Ce pregătești înainte să trimiți observațiile",
        paragraphs: [
          "Identifică pachetul de referință asupra căruia au fost formulate comentariile. O observație pe un PDF vechi poate intra în conflict cu modelul actual.",
        ],
        list: [
          "Modelul RVT relevant, versiunea Revit și referințele necesare pentru zonele afectate.",
          "PDF-ul comentat, cu data sau codul emiterii, și o listă lizibilă a observațiilor.",
          "Deciziile tehnice aprobate: poziții, dimensiuni și informații furnizate de proiectant pentru implementare.",
          "Planșele și vederile care intră în rundă, inclusiv secțiunile sau listele afectate.",
          "Regulile pentru indicator, numerotarea reviziilor, denumirea fișierelor și exportul DWG.",
          "Formatele cerute, termenul dorit și persoana care confirmă închiderea observațiilor.",
        ],
      },
      {
        heading: "Un registru simplu păstrează întrebările deschise vizibile",
        paragraphs: [
          "Poți atribui fiecărei observații un identificator și o stare. «Implementat» arată că intervenția a fost făcută; «verificat» cere controlul rezultatului. Un comentariu neclar rămâne în clarificare până când proiectantul transmite decizia.",
          "Exemplul de mai jos este ipotetic, fără legătură cu un proiect realizat. Stările sunt o propunere de organizare, nu categorii impuse de Revit.",
        ],
        table: {
          head: ["ID", "Observație", "Verificare", "Stare"],
          rows: [
            [
              "OBS-01",
              "Mutarea unui traseu de ventilare",
              "Plan HVAC și secțiune",
              "În clarificare: poziție de confirmat",
            ],
            [
              "OBS-02",
              "Corectarea unei etichete de echipament",
              "Vedere și planșă termice",
              "De implementat",
            ],
            [
              "OBS-03",
              "Actualizarea legendei electrice",
              "Planșele care folosesc legenda",
              "De verificat",
            ],
          ],
        },
      },
      {
        heading: "Implementează observația și verifică toate documentele afectate",
        paragraphs: [
          "Leagă intervenția de observația primită. Dacă se mută un traseu, controlează vederile în care apare, cotele, etichetele și reprezentarea pe planșe. Dacă se schimbă o informație de echipament, verifică și listele în care este folosită.",
          "O modificare vizibilă în model nu închide singură comentariul. Poate rămâne o notă veche, o vedere nepotrivită sau o planșă omisă din export. În registru, consemnează ce ai modificat și unde poate fi verificat. Separă corectarea documentației de o schimbare nouă de temă, care necesită clarificarea scopului.",
        ],
      },
      {
        heading: "Marchează reviziile fără să confunzi norul cu verificarea",
        paragraphs: [
          "Fluxul Autodesk include introducerea informațiilor în Sheet Issues/Revisions, implementarea schimbării, adăugarea norilor de revizie și verificarea informațiilor afișate pe planșe. Un nor nou primește implicit cea mai recentă revizie; atribuirea poate fi schimbată și trebuie controlată.",
          "Norul indică zona modificată, iar eticheta identifică revizia atribuită. Aceste adnotări nu confirmă acceptarea soluției tehnice. Verifică istoricul din indicator și numerotarea conform regulilor proiectului înainte de emitere.",
          "Un tabel din categoria Revision Clouds permite examinarea norilor și a vederilor sau planșelor asociate. Este un instrument distinct de istoricul reviziilor din indicator.",
        ],
        note: "Norii de revizie din modele Revit legate nu sunt incluși în tabelul Revision Clouds creat în modelul gazdă. Verifică separat documentația modelelor legate.",
        links: [
          {
            label: "Autodesk: Workflow — Revisions",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-312CD63E-12FD-4CA7-A05B-CD7DADBAACA7.htm",
          },
          {
            label: "Autodesk: Revision Clouds",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-73DF5264-6C8B-4E58-AE5B-007FB54C1FDA.htm",
          },
          {
            label: "Autodesk: Create a Revision Cloud Schedule",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-D7A5FFC1-E6B3-4FC1-A764-4BF26F543EC5.htm",
          },
        ],
      },
      {
        heading: "Pregătește o predare coerentă în RVT, DWG și PDF",
        paragraphs: [
          "Stabilește un pachet de emitere: modelul de referință, lista planșelor și exporturile aferente. O structură cu directoare RVT, DWG și PDF, plus o notă de predare, poate ajuta la identificarea versiunii curente. Folosește însă convenția de fișiere a clientului.",
          "Revit poate exporta vederi și planșe în PDF, salva seturi pentru reutilizare și aplica reguli de denumire. Confirmă lista selectată și verifică PDF-urile rezultate: indicator, codul reviziei, lizibilitatea și zonele modificate.",
          "Pentru DWG, controlează configurația de export, versiunea AutoCAD și opțiunea de export al vederilor și legăturilor ca referințe externe. Aceasta influențează dacă pachetul conține fișiere care se referă unele la altele. Predă referințele necesare și verifică rezultatul în aplicația destinatarului.",
        ],
        links: [
          {
            label: "Autodesk: Exporting to PDF",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-E9058256-8A36-4FB8-9809-5AA896FC2237.htm",
          },
          {
            label: "Autodesk: Export to DWG or DXF",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/Revit-DocumentPresent/files/GUID-42C75024-4D71-4831-8910-2747168624A3.htm",
          },
        ],
      },
      {
        heading: "Checklist pentru primirea rundei de revizie",
        list: [
          "Fiecare observație are un răspuns, o verificare indicată sau o întrebare încă deschisă.",
          "Lista planșelor din pachet corespunde scopului și nu amestecă exporturi vechi cu cele curente.",
          "Modelul, indicatorii și fișierele exportate permit identificarea aceleiași emiteri.",
          "DWG-urile includ referințele necesare, iar PDF-urile au fost deschise și controlate.",
          "Nota de predare precizează modificările, excluderile și punctele care așteaptă confirmarea proiectantului.",
        ],
      },
      {
        heading: "Ai nevoie de implementarea observațiilor în Revit MEP?",
        paragraphs: [
          "NOD BIM preia corectări și completări pe modele existente, implementarea observațiilor și reorganizarea planșelor HVAC, termice și electrice. Trimite modelul, comentariile și livrabilele dorite pentru evaluarea lucrării. Fișierul RVT editabil se include când face parte din scopul convenit; calculele, verificarea și semnătura de specialitate rămân la proiectanții responsabili.",
        ],
        links: [
          {
            label: "Externalizare Revit MEP și implementarea observațiilor",
            href: "/revit-mep",
          },
        ],
      },
    ],
  },
  {
    slug: "pdf-in-dwg-vectorial-scanare-scara-oferta",
    title: "Cum transformi un PDF în DWG: ce se convertește și ce se redesenează",
    metaTitle: "Cum transformi un PDF în DWG și când nu merge",
    description:
      "Ce importă AutoCAD dintr-un PDF vectorial, de ce o scanare trebuie redesenată și cum verifici scara în DWG. Ghid practic, înainte să ceri o ofertă.",
    date: "2026-10-03",
    readingTime: 4,
    tags: ["AutoCAD", "PDF în DWG", "Redesenare", "Pregătire fișiere"],
    sections: [
      {
        paragraphs: [
          "Ai un plan vechi în PDF și ai nevoie să modifici compartimentarea, să aplici observații sau să predai un DWG editabil. Prima întrebare este ce informație există în PDF. Două documente care arată asemănător pe ecran pot necesita lucrări diferite: import și curățare pentru geometrie vectorială, respectiv redesenare pentru o scanare.",
          "Înainte să ceri o ofertă, merită să clarifici sursa, dimensiunile de referință și rezultatul dorit. Astfel, estimarea se bazează pe documentația reală și pe modificările necesare.",
        ],
      },
      {
        heading: "PDF vectorial sau scanare: de ce contează",
        paragraphs: [
          "Un PDF vectorial poate conține trasee geometrice și text pe care AutoCAD le importă ca obiecte. O scanare conține o imagine formată din pixeli; funcția obișnuită PDFIMPORT poate atașa imaginea, dar nu o transformă automat în linii CAD editabile. Pentru serviciul de redesenare, imaginea devine o referință.",
          "Mărirea documentului poate oferi indicii: contururile pixelate sugerează o imagine. Verificarea vizuală nu este însă suficientă, iar aceeași pagină poate combina imagine, geometrie și text. Nu trebuie să identifici singur formatul înainte să ceri o evaluare; trimite PDF-ul original, fără capturi de ecran sau fotografii suplimentare.",
        ],
      },
      {
        heading: "De ce importul nu înseamnă recuperarea DWG-ului original",
        paragraphs: [
          "Autodesk explică faptul că exportul în PDF pierde informație și precizie. La import, cote, tabele sau hașuri pot deveni mai multe obiecte separate. Un număr vizibil pe plan nu garantează existența unei cote asociate geometriei.",
          "De aceea, solicită un rezultat descris clar: geometrie care poate fi modificată, layere organizate și texte verificate. Dacă ai și DWG-ul sursă, trimite-l. El poate evita reconstruirea unor informații pierdute în PDF. Un fișier care se deschide în AutoCAD trebuie evaluat și după felul în care poate fi folosit.",
        ],
      },
      {
        heading: "Scara se verifică după dimensiuni cunoscute",
        paragraphs: [
          "Mențiunea «1:100» de pe planșă descrie scara prevăzută pentru tipărire; nu dovedește dimensiunea geometriei importate. Documentul poate fi redimensionat la export sau la imprimare. Setarea unităților și compararea cu o cotă cunoscută sunt verificări separate.",
          "În AutoCAD, redimensionarea se poate face cu SCALE și opțiunea Reference, folosind o distanță existentă și lungimea corectă. Verifică apoi o altă cotă, într-o altă zonă a planului. Pentru o scanare, această a doua verificare este utilă pentru a observa diferențe care nu se rezolvă printr-o singură scalare.",
          "Ca exemplu ipotetic, dacă o distanță notată de 5 metri măsoară 4.800 de unități într-un DWG lucrat în milimetri, există o neconcordanță de clarificat. Nu modifica doar textul cotei. Geometria și dimensiunea de referință trebuie reconciliate înainte de continuarea desenului.",
        ],
      },
      {
        heading: "Ce trimiți pentru o ofertă de conversie sau redesenare",
        paragraphs: [
          "O cerere completă permite separarea importului, curățării și redesenării. Pentru evaluare, pregătește următoarele:",
        ],
        list: [
          "PDF-ul original, cu toate paginile relevante, și orice DWG disponibil. Precizează ce planșe intră în lucrare și care sunt doar referințe.",
          "Cotele lizibile și cel puțin o dimensiune de referință verificată. Dacă dimensiunile lipsesc sau se contrazic, menționează problema.",
          "Lista modificărilor: redesenare fidelă, corecturi punctuale, completări sau aplicarea observațiilor. Marchează clar observațiile pe o copie a planului.",
          "Livrabilul cerut: DWG editabil, PDF pentru tipărire, versiunea DWG necesară și eventuale reguli pentru layere, texte sau indicator.",
          "Termenul dorit și modul în care vrei să verifici rezultatul. Numărul de planșe și reviziile trebuie precizate în ofertă.",
          "Scopul utilizării: bază de lucru, documentație de coordonare ori actualizarea unui desen existent. Semnalează zonele neclare care necesită confirmare.",
        ],
      },
      {
        heading: "Ce verifici la predarea DWG-ului",
        paragraphs: [
          "Deschide fișierul și verifică dacă elementele necesare sunt editabile, dacă unitățile sunt cele convenite și dacă dimensiunile de referință corespund. Controlează și textele, layerele, lizibilitatea PDF-ului final și prezența eventualelor imagini externe.",
          "În fluxul obișnuit AutoCAD, geometria se desenează la dimensiunea reală în Model Space; scara vederilor pentru tipărire se stabilește în layout. Un DWG util trebuie să permită continuarea lucrului și reproducerea previzibilă a planșei.",
          "Redesenarea reproduce informația furnizată. Ea nu confirmă că planul descrie situația actuală din teren și nu înlocuiește calculele, verificarea sau semnătura proiectantului de specialitate.",
        ],
      },
      {
        heading: "Ai un PDF și ai nevoie de un DWG editabil?",
        paragraphs: [
          "Serviciile AutoCAD NOD BIM includ redesenare din PDF sau scanări, corectarea planșelor, organizarea layerelor și pregătirea PDF-ului pentru tipărire. Trimite documentația și descrierea rezultatului dorit pentru evaluare. Costul se stabilește după verificarea fișierelor, înainte de începerea lucrării.",
        ],
        links: [
          {
            label: "Servicii AutoCAD: redesenare PDF în DWG",
            href: "/autocad-dwg",
          },
          { label: "Redesenare PDF în DWG: serviciul", href: "/pdf-in-dwg" },
        ],
      },
      {
        heading: "Surse tehnice",
        links: [
          {
            label: "Autodesk: limitele importului PDF în AutoCAD",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-1202CC8A-364F-4E93-8E86-6F476CD83C72.htm",
          },
          {
            label: "Autodesk: opțiuni de import, scară și layere",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-Core/files/GUID-F94D7059-5B4A-4396-97FE-765B1D037D56.htm",
          },
          {
            label: "Autodesk: calibrarea unei imagini sau a unui PDF după o cotă cunoscută",
            href: "https://www.autodesk.com/support/technical/article/caas/sfdcarticles/sfdcarticles/How-to-properly-scale-an-image-after-inserting-into-AutoCAD.html",
          },
          {
            label: "Autodesk: Model Space și Paper Space",
            href: "https://help.autodesk.com/cloudhelp/2026/ENU/AutoCAD-MAC-Core/files/GUID-990538B6-DDA1-4190-BCC0-BB5BA94C9879.htm",
          },
        ],
      },
    ],
  },
  {
    slug: "cat-costa-o-plansa-de-instalatii",
    title: "Cât costă cu adevărat o planșă de instalații? Anatomia unui preț",
    metaTitle: "Cât costă cu adevărat o planșă de instalații",
    description:
      "Descompun prețul unei planșe de instalații în etape, ore și factori reali: de ce costă „de la 300 lei” și de unde apar diferențele între oferte.",
    date: "2026-08-21",
    readingTime: 8,
    tags: ["Prețuri", "Revit MEP", "Proces"],
    sections: [
      {
        paragraphs: [
          "Cea mai frecventă întrebare pe care o primesc nu este „poți să faci X?”, ci „de ce costă atât?”. E o întrebare corectă, pentru că piața de modelare și desenare tehnică nu afișează aproape niciodată prețuri. Acest articol descompune costul unei planșe de instalații pe etape reale de lucru, cu ore și factori concreți — ca să știi exact pentru ce plătești.",
        ],
      },
      {
        heading: "Ce se întâmplă cu fișierele tale, în ordine",
        paragraphs: [
          "O planșă „gata de predare” nu înseamnă doar desen. În spatele ei stau, în medie, aceste etape — proporțiile variază de la proiect la proiect, dar ordinea este aproape mereu aceeași:",
        ],
        list: [
          "Preluare și verificare fișiere (DWG/PDF/RVT): se verifică scara, unitățile, layerele, ce lipsește și ce trebuie refăcut de la zero.",
          "Pregătirea bazei de lucru: curățarea fișierelor primite, organizarea layere-lor, template-ul cu indicator, stiluri de linii, legende.",
          "Modelarea / desenarea propriu-zisă a instalațiilor: trasee, echipamente, adnotări, cote.",
          "Verificare și coordonare: suprapunerea disciplinelor, coliziuni, verificarea logicii traseelor.",
          "Predare: export în formatele cerute, verificarea printului, organizarea livrabilelor.",
        ],
      },
      {
        heading: "Factorii care schimbă prețul (mai mult decât crezi)",
        table: {
          head: ["Factor", "Impact real asupra prețului"],
          rows: [
            [
              "Starea fișierelor primite",
              "Un PDF scanat strâmb poate dubla timpul față de un RVT curat — totul se redesenază de la zero",
            ],
            [
              "Numărul de discipline",
              "HVAC + termice + electrice pe același plan înseamnă coordonare triplă, nu doar desen triplu",
            ],
            [
              "Nivelul de detaliu (LOD)",
              "O schemă de principiu se face în ore; un model 3D coordonat cu sheet-uri și liste, în zile",
            ],
            [
              "Numărul de planșe identice",
              "Planul 2 costă mai puțin decât planul 1: baza de lucru e deja construită",
            ],
            [
              "Termenul",
              "Urgența = ore suplimentare. Un termen normal costă mai puțin decât „pe mâine dimineață”",
            ],
            [
              "Reviziile",
              "1–2 runde normale sunt incluse; reviziile cauzate de schimbări majore de temă sunt lucrare nouă",
            ],
          ],
        },
      },
      {
        heading: "De ce diferențe mari între oferte pentru aceeași lucrare",
        paragraphs: [
          "Pentru aceeași cerere poți primi oferte de la 200 lei la 2.000 lei. Nu e neapărat „țeapă” vs. „corect” — e vorba despre ce se livrează de fapt. O planșă „desenată” fără verificare, fără organizarea fișierelor și fără responsabilitate pentru predare costă altceva decât un livrabil care poate intra direct în documentație.",
          "Regula mea simplă: dacă o ofertă nu îți spune ce primești (formate, număr de planșe, revizii incluse, termen), cere-i să o facă. Un preț fără scopul lucrării nu înseamnă nimic.",
        ],
        note: "Pe site-ul NOD BIM prețurile orientative sunt publice tocmai ca să poți compara corect — de la corectare de planșă până la pachete de proiect.",
      },
      {
        heading: "Concluzia practică",
        paragraphs: [
          "Costul real al unei planșe este suma dintre starea fișierelor tale, complexitatea instalațiilor și standardul de predare. Poți reduce costul fără să reduci calitatea: trimite fișiere curate, cere explicit ce include livrabilul și stabilește termenul realist. Restul e muncă de inginerie — și aia merită plătită corect.",
        ],
        links: [{ label: "Modelare Revit MEP și planșe de instalații", href: "/revit-mep" }],
      },
    ],
  },
  {
    slug: "revit-vs-autocad-experiment",
    title: "Experiment: aceeași modificare în Revit vs AutoCAD — ce se întâmplă cu timpul tău",
    metaTitle: "Experiment: aceeași modificare în Revit vs AutoCAD",
    description:
      "Aceeași modificare de traseu făcută în paralel în Revit și AutoCAD: câte desene actualizezi manual, unde apar erorile și de ce DWG-ul poate costa mai mult.",
    date: "2026-08-21",
    readingTime: 7,
    tags: ["Revit MEP", "AutoCAD", "Experiment"],
    sections: [
      {
        paragraphs: [
          "Discuția „Revit vs AutoCAD” e de obicei religioasă, nu tehnică. Am vrut să o transform într-un experiment simplu: iau aceeași modificare reală — mutarea unui traseu de tubulatură dintr-un hol, cu tot ce decurge din ea — și o fac o dată într-un desen DWG clasic și o dată într-un model Revit MEP. Urmăresc ce se actualizează automat, ce se face manual și unde se strecoară erorile.",
        ],
      },
      {
        heading: "Modificarea aleasă",
        paragraphs: [
          "Scenariul este banal în practică: arhitectura mută un gol de ușă, iar traseul de tubulatură care traversa holul trebuie ridicat cu 15 cm și deviat. Consecințele: planul de nivel se schimbă, secțiunea prin hol se schimbă, legenda și lista de cantități se schimbă — și toate planșele trebuie predate actualizate.",
        ],
      },
      {
        heading: "Ce se întâmplă în AutoCAD (DWG)",
        list: [
          "Modifici traseul pe planul de nivel — desenezi manual noua poziție, ștergi vechea poziție.",
          "Actualizezi manual secțiunea prin hol — aceeași modificare, desenată a doua oară, din alt unghi.",
          "Cauți în legendă și în lista de cantități elementele atinse — lungimi de tubulatură, fitinguri — și le modifici manual.",
          "Verifici dacă nu ai uitat vreo vedere: cote, etichete, referințe încrucișate între planșe.",
        ],
        paragraphs: [
          "Fiecare pas este o nouă ocazie de eroare: un traseu mutat pe plan, dar nu și în secțiune; o cotă rămasă în urmă; o lungime de țeavă nemodificată în listă. În practică, exact aceste neconcordanțe sunt cele care revin ca observații de la verificatori.",
        ],
      },
      {
        heading: "Ce se întâmplă în Revit (RVT)",
        list: [
          "Modifici traseul o singură dată, în orice vedere — plan sau secțiune sau 3D.",
          "Toate vederile se actualizează automat din model: planul, secțiunea, vederea 3D.",
          "Listele de cantități se regenerează din model — lungimile și fitingurile se recalculează singure.",
          "Cotele legate de elemente se actualizează odată cu elementele.",
        ],
        paragraphs: [
          "Diferența nu este viteza de desenare, ci numărul de locuri în care aceeași informație trebuie menținută manual. În 2D, informația trăiește de N ori (o dată în fiecare vedere); în model, trăiește o singură dată.",
        ],
      },
      {
        heading: "Unde câștigă fiecare instrument",
        table: {
          head: ["Criteriu", "AutoCAD / DWG", "Revit / RVT"],
          rows: [
            [
              "Prima planșă simplă, fără modificări",
              "Rapid — desenezi direct ce vezi",
              "Mai lent — construiești modelul înainte de a extrage planșa",
            ],
            [
              "Modificări care ating mai multe vederi",
              "Fiecare vedere se actualizează manual",
              "Se actualizează automat din model",
            ],
            [
              "Coerența între planșe",
              "Depinde de disciplină și verificare manuală",
              "Garantată de model — sursă unică de informație",
            ],
            [
              "Liste de cantități",
              "Numărate manual, cu risc de eroare",
              "Generate din model, recalculabile oricând",
            ],
            ["Predarea editabilă (RVT)", "Nu se aplică", "Fișierul model rămâne livrabil editabil"],
          ],
        },
      },
      {
        heading: "Concluzia experimentului",
        paragraphs: [
          "Niciun instrument nu este „mai bun” în absolut. Regula practică pe care o folosesc: pentru o lucrare care va suferi modificări, care se predă în mai multe vederi sau care trebuie să rămână coerentă — modelul Revit plătește investiția inițială de fiecare dată. Pentru o corectură punctuală, o conversie sau un desen de unică folosință — DWG-ul rămâne unealta potrivită.",
          "De aceea ofer ambele: Revit MEP ca flux principal de modelare și documentație, AutoCAD/DWG pentru lucrările care se rezolvă cel mai curat în 2D. Dacă nu ești sigur care se potrivește lucrării tale, trimite-mi fișierele și îți spun exact ce aș folosi și de ce.",
        ],
        links: [{ label: "Desenare AutoCAD la comandă", href: "/autocad-dwg" }],
      },
    ],
  },
  {
    slug: "cum-verifici-un-model-revit-primit",
    title: "Cum verifici un model Revit primit de la altcineva — checklist de preluare",
    metaTitle: "Cum verifici un model Revit primit: checklist",
    description:
      "Checklist de preluare pentru un fișier RVT primit de la altcineva: ce verifici înainte de a promite termene și semnele unui model prost construit.",
    date: "2026-08-21",
    readingTime: 9,
    tags: ["Revit MEP", "Control calitate", "Preluare proiect"],
    sections: [
      {
        paragraphs: [
          "Preluarea unui model Revit început de altcineva este una dintre cele mai riscante lucrări din modelare: primești un fișier care arată bine în 3D, dar în interior poate fi construit în zece feluri diferite, cu familii explodate, filtre duplicate și parametri inventați. Timpul de curățare poate depăși timpul de modelare. Acest checklist este exact ordinea în care verific eu un model primit, înainte de a estima orice termen.",
        ],
      },
      {
        heading: "Pasul 1 — Integritatea fișierului",
        list: [
          "Deschide modelul fără a încărca link-uri: dacă lipsește arhitectura, ceri link-urile înainte de orice.",
          "Verifică dimensiunea fișierului față de conținut: un model de 300 MB pentru o casă ascunde de obicei importuri CAD grele sau familii explode.",
          "Rulează un audit de fișier (Revit → Audit) la deschidere — semnalează corupții care altfel apar exact înainte de predare.",
        ],
      },
      {
        heading: "Pasul 2 — Structura modelului",
        list: [
          "Browser-ul de proiect: există o logică de organizare a vederilor și sheet-urilor, sau totul e aruncat la rădăcină?",
          "Familiile: câte sunt „Familii locale” vs. încărcate din bibliotecă? O mulțime de familii locale înseamnă muncă nereutilizabilă.",
          "Parametrii partajați: există un fișier de parametri partajați predat odată cu modelul? Fără el, orice program (schedules) care îi folosește devine fragil.",
          "Fazele: modelul are faze setate corect sau totul e „Fază nouă” cu excepții manuale?",
        ],
      },
      {
        heading: "Pasul 3 — Calitatea modelării MEP",
        list: [
          "Sistemele sunt reale (conectate logic) sau traseele sunt doar geometrie fără sistem? Fără sisteme, nu ai liste, nu ai filtre, nu ai control.",
          "Pantele la canalizare: sunt modelate ca pante reale sau „desenate aproximativ” cu texte puse manual?",
          "Cotele și etichetele: citesc valori reale din elemente sau sunt text static? Textul static minte la prima modificare.",
          "Coliziunile existente: rulează o verificare de interferențe înainte de a promite că „doar continui” — moștenești fiecare conflict.",
        ],
      },
      {
        heading: "Pasul 4 — Ce spui clientului înainte de a începe",
        paragraphs: [
          "Dacă modelul pică jumătate din verificări, varianta corectă profesional este să spui asta deschis: „Fișierul primit necesită X ore de curățare înainte de continuare; costul este Y; alternativa este remodelarea porțiunilor problematice”. Promisiunea de a „continua orbește” este exact cum se nasc proiectele care se livrează târziu și prost.",
          "Acest tip de preluare și reorganizare este o lucrare pe care o fac des — dacă ai un model moștenit, trimite-mi-l și îți spun exact ce am găsit și cât costă să-l aduc în stare de lucru.",
        ],
      },
    ],
  },
  {
    slug: "lod-explicat-practic",
    title: "LOD explicat practic: ce înseamnă LOD 100–400 în instalații",
    metaTitle: "LOD explicat practic: LOD 100–400 în instalații",
    description:
      "LOD (Level of Development) pe un proiect de instalații: ce conține fiecare nivel, ce se cere într-o ofertă și cum eviți să plătești LOD 350 pentru LOD 200.",
    date: "2026-08-21",
    readingTime: 8,
    tags: ["BIM", "Standarde", "Revit MEP"],
    sections: [
      {
        paragraphs: [
          "„Vreau modelul la LOD 350” este o cerință care apare în aproape fiecare caiet de sarcini — și care, în practică, rareori înseamnă același lucru pentru ambele părți. LOD (Level of Development) descrie cât de dezvoltat și de fiabil este un element din model, nu cât de detaliat arată. Diferența dintre „dezvoltat” și „arătos” este exact locul unde se pierd banii.",
        ],
      },
      {
        heading: "Nivelurile, pe un exemplu concret: un ventiloconvector",
        table: {
          head: ["Nivel", "Ce conține elementul", "La ce folosește"],
          rows: [
            [
              "LOD 100",
              "Un simbol sau un volum generic, cu locul aproximativ",
              "Studii de fezabilitate, concept — doar ca să existe ceva acolo",
            ],
            [
              "LOD 200",
              "Element cu dimensiuni aproximative, poziție orientativă",
              "Predimensionare, coordonare grosieră între discipline",
            ],
            [
              "LOD 300",
              "Geometrie corectă, poziție exactă, sistem conectat, parametri tehnici",
              "Proiectul care se poate autoriza și executa — nivelul standard al planșelor",
            ],
            [
              "LOD 350",
              "LOD 300 + conexiunile la trasee verificate, suporturi, spații de mentenanță",
              "Coordonare finală interdisciplinară, verificarea montajului",
            ],
            [
              "LOD 400",
              "Tot ce e în 350 + detalii de fabricație și montaj exacte",
              "Prefabricare, execuție asistată direct din model",
            ],
          ],
        },
      },
      {
        heading: "Unde se pierd banii în practică",
        paragraphs: [
          "Problema clasică: se cere LOD 350 în contract, dar livrabilele cerute sunt planșe 2D la scara 1:50. Adică se plătește coordonare de montaj pentru o documentație care nu o folosește. Invers: se cere „doar modelul” la LOD 200, dar modelul trebuie să stea la baza listelor de cantități pentru licitație — liste care au nevoie de LOD 300 ca să fie corecte.",
          "Regula simplă: nivelul LOD se stabilește pornind de la ce se face cu modelul, nu de la un număr la modă. Un element la LOD 300 corect construit valorează mai mult decât unul „350” care doar are mai multe detalii desenate, dar fără sisteme și parametri.",
        ],
      },
      {
        heading: "Cum ceri corect într-o ofertă",
        list: [
          "Specifică scopul: „modelul servește la X” — restul derivă de acolo.",
          "Cere nivelul pe discipline, nu global: HVAC la 300 poate coexista cu sanitare la 200 într-o fază timpurie.",
          "Cere criterii de acceptare: „sisteme conectate, fără coliziuni la verificare, parametri X, Y, Z completați” — măsurabil, nu descriptiv.",
          "Întreabă explicit ce înseamnă LOD-ul ofertat: dacă răspunsul e vag, prețul va fi vag.",
        ],
        note: "În ofertele NOD BIM, nivelul de detaliu este parte din scopul lucrării, stabilit în scris înainte de start — exact ca să nu existe „LOD 350” care înseamnă altceva pentru fiecare.",
      },
    ],
  },
  {
    slug: "ce-fisiere-trimiti-pentru-modelare-mep",
    title: "Ce fișiere să trimiți pentru modelare MEP — ghid pentru arhitecți și beneficiari",
    metaTitle: "Ce fișiere trimiți pentru modelare MEP: ghid",
    description:
      "Ce se poate face din fiecare format (DWG, PDF, RVT, schițe), ce lipsește cel mai des și cum trimiți tema ca estimarea să fie corectă din prima.",
    date: "2026-08-21",
    readingTime: 7,
    tags: ["Proces", "Ghid", "Fișiere"],
    sections: [
      {
        paragraphs: [
          "Jumătate din timpul unei estimări se pierde pe fișiere incomplete. Acest ghid este exact ce cer eu de la un client nou — îl poți folosi ca listă de verificare înainte de a trimite orice cerere de modelare sau planșe de instalații.",
        ],
      },
      {
        heading: "Ce se poate face din fiecare format",
        table: {
          head: ["Format", "Ce primești", "Ce nu primești"],
          rows: [
            [
              "RVT (Revit)",
              "Model complet editabil: cel mai bun punct de plecare",
              "Necesită versiune compatibilă; predarea se stabilește contractual",
            ],
            [
              "DWG (AutoCAD)",
              "Planuri vectoriale, la scară, cu layere",
              "Fără model 3D; calitatea depinde de organizarea layere-lor",
            ],
            [
              "PDF",
              "Planuri doar pentru referință/redesenare",
              "Fără date vectoriale utilizabile direct — totul se redesenază",
            ],
            [
              "Schițe / imagini",
              "Punct de pornire pentru concept",
              "Necesită interpretare și clarificări; risc mare de neînțelegeri",
            ],
          ],
        },
      },
      {
        heading: "Cele mai frecvente lipsuri (și de ce contează)",
        list: [
          "Arhitectura lipsește: fără planurile de arhitectură, instalațiile se modelează „în gol” — și se refac la prima suprapunere.",
          "Tema nu spune disciplinele: „vreau instalații” poate însemna 2 sau 6 specialități — diferența de preț e de ordinul 3-5x.",
          "Fără informații despre echipamente: centrală, ventilație, tablouri — dacă nu există, se lucrează cu ipoteze care se plătesc la revizii.",
          "Fără termen și scop: planșe pentru autorizație vs. planșe pentru execuție sunt lucrări diferite.",
        ],
      },
      {
        heading: "Lista completă de trimitere",
        paragraphs: [
          "Ca regulă, o cerere completă conține: (1) planurile de arhitectură în DWG sau PDF, la scară, cu toate nivelurile; (2) tema proiectului — ce discipline, ce echipamente, ce norme; (3) fișierele existente în orice format, chiar și vechi — mai bine prea multe decât prea puține; (4) termenul dorit; (5) scopul livrabilelor (autorizație, execuție, predare către alt proiectant).",
          "Cu aceste cinci lucruri, o estimare corectă durează o zi, nu o săptămână de întrebări. Și da — trimite fișierele direct pe WhatsApp sau prin formularul de estimare; dimensiunea nu e o problemă.",
        ],
      },
    ],
  },
  {
    slug: "cat-costa-modelarea-bim-pe-tip-de-cladire",
    title: "Cât costă modelarea BIM în 2026: prețuri reale pe tip de clădire",
    metaTitle: "Cât costă modelarea BIM în 2026, pe tip de clădire",
    description:
      "Prețuri orientative pentru modelare BIM pe tipuri de clădiri: casă, apartament, birou, hală. Ce determină prețul și cum compari corect ofertele.",
    date: "2026-08-24",
    readingTime: 9,
    tags: ["Prețuri", "BIM", "Revit MEP"],
    sections: [
      {
        paragraphs: [
          "Modelarea BIM nu are un preț unic — dar nici nu e un mister. Dacă prețurile din piață par aleatorii, e pentru că aproape nimeni nu le explică public. Acest articol descompune costul modelării pe tipuri reale de clădiri, cu intervale orientative și cu factorii care le schimbă.",
        ],
      },
      {
        heading: "Prețuri orientative pe tip de clădire (modelare + planșe rezultate)",
        table: {
          head: ["Tip clădire", "Interval orientativ", "Ce include de regulă"],
          rows: [
            [
              "Apartament (tip 2-3 camere)",
              "800 – 1.500 lei",
              "1-2 discipline, planuri de nivel, 2-3 planșe",
            ],
            [
              "Casă P+1 / P+2",
              "1.500 – 3.500 lei",
              "2-3 discipline, planuri + secțiuni, 4-8 planșe",
            ],
            [
              "Birou / spațiu comercial (100-300 mp)",
              "2.500 – 6.000 lei",
              "3 discipline, coordonare, 6-12 planșe",
            ],
            [
              "Clădire rezidențială (bloc mic)",
              "8.000 – 20.000 lei",
              "Toate disciplinele, model coordonat, 20+ planșe",
            ],
            [
              "Hală industrială",
              "10.000 – 30.000 lei",
              "Model MEP + coordonare, echipamente specifice",
            ],
            [
              "Centru de date / spațiu critic",
              "la cerere",
              "Redundanță modelată ca sisteme separate, standarde Tier",
            ],
          ],
        },
      },
      {
        heading: "Ce face ca modelarea să coste mai mult (sau mai puțin)",
        list: [
          "Numărul de discipline: HVAC + termice + electrice înseamnă coordonare triplă, nu doar triplul desenului.",
          "Starea fișierelor de intrare: un DWG curat e de două ori mai ieftin de modelat decât un PDF scanat.",
          "Nivelul de detaliu cerut: LOD 200 (concept) vs LOD 350 (coordonare de montaj) sunt alte lucrări.",
          "Reviziile incluse: 1-2 runde normale sunt standard; schimbări majore de temă sunt lucrare nouă.",
          "Termenul: urgența plătește ore suplimentare, nu altceva.",
        ],
      },
      {
        heading: "Cum compari ofertele corect",
        paragraphs: [
          "Nu compara prețul total — compară ce e în spatele lui: câte planșe, ce formate, câte runde de revizii, cine verifică modelul, termenul. O ofertă cu 30% mai ieftină care livrează doar jumătate din ce ai nevoie e, de fapt, mai scumpă.",
          "Regula pe care o folosesc eu: dacă oferta nu spune explicit ce primești la final, cere-o în scris înainte de orice plată.",
        ],
        note: "Pe site-ul NOD BIM prețurile orientative sunt publice — de la corectare de planșă la pachete complete — ca să poți compara direct.",
      },
      {
        heading: "Cum reduci costul fără a pierde din calitate",
        paragraphs: [
          "Trimite fișiere curate și complete, stabilește scopul (autorizație vs execuție) și termenul realist, și fă schimbările de temă înainte de începerea lucrării, nu pe parcurs. Modelarea BIM plătește investiția de fiecare dată, pentru că documentația rămâne coerentă din aceeași sursă.",
        ],
      },
    ],
  },
  {
    slug: "clash-detection-ce-este",
    title: "Clash detection: ce se verifică de fapt într-un model și când devine o problemă",
    metaTitle: "Clash detection: ce se verifică într-un model MEP",
    description:
      "Clash detection (verificarea de coliziuni): ce tipuri de coliziuni există, ce se verifică într-un model MEP și cât costă prinsul lor târziu.",
    date: "2026-08-24",
    readingTime: 8,
    tags: ["Coordonare", "BIM", "Revit MEP"],
    sections: [
      {
        paragraphs: [
          "Clash detection înseamnă verificarea automată a intersectărilor dintre elementele modelului — nu doar între instalații, ci între instalații și structură sau arhitectură. O conductă de 200 mm care traversează un grinda... acelea nu se văd în plan 2D, dar se văd imediat în modelul coordonat.",
        ],
      },
      {
        heading: "Cele trei tipuri de coliziuni care contează",
        list: [
          "Hard clash: două obiecte care se intersectează fizic (conductă prin grindă). Este cel mai vizibil și cel mai frecvent prins.",
          "Soft clash: spațiu insuficient fără intersecție directă — curburi minim, spațiu de montaj, izolație, sarcini de mentenanță.",
          "Clearance: zonele de acces și serviciu — o vană care nu mai poate fi operată pentru că tabloul este în fața ei.",
        ],
        paragraphs: [
          "În coordonarea 2D, toate cele trei tipuri se verifică manual, vizual, desen cu desen. De aceea erorile apar exact în planurile aglomerate.",
        ],
      },
      {
        heading: "Cât costă o coliziune prinsă târziu",
        table: {
          head: ["Etapa în care se prinde", "Cost tipic de remediere", "Observații"],
          rows: [
            [
              "În model (înainte de predare)",
              "Nimic — se mutează traseul",
              "O singură modificare, toată documentația se actualizează",
            ],
            [
              "La execuție, înainte de montaj",
              "Săptămâni + materiale",
              "Reluări, neclarități, discuții între echipe",
            ],
            [
              "La montaj (pe șantier)",
              "Zile de oprire + reluare",
              "Cel mai scump scenariu, plus riscul de improvizații",
            ],
          ],
        },
      },
      {
        heading: "Ce se verifică într-un model MEP coordonat",
        list: [
          "Traseele de aer și conducte față de grinzi și goluri de montaj",
          "Spațiul de serviciu la vane, filtre și echipamente",
          "Gabaritele de întreținere (acces pentru schimbare de piese)",
          "Traverse și penetrații compartimentate",
          "Traseele electrice față de conducte de apă (regula de aur a coordonării)",
        ],
      },
      {
        heading: "Cum arată un raport de coordonare",
        paragraphs: [
          "Un raport serios nu e o listă de erori — e o hartă a priorităților: coliziunile critice (care blochează montajul), minore (cosmetice) și zonele de atenție. Fiecare cu poziție, schiță și remediere propusă.",
          "Dacă modelul tău vine de la altcineva, această verificare e primul lucru pe care îl fac înainte de orice termen promis — un model cu zeci de coliziuni moștenite costă mai mult de curățat decât de construit.",
        ],
      },
    ],
  },
  {
    slug: "documentatie-instalatii-dtac-pt",
    title:
      "Documentația de instalații pentru autorizație (DTAC) și proiect tehnic (PTh): pași și greșeli care întârzie",
    metaTitle: "Documentația de instalații pentru DTAC și PTh",
    description:
      "Ce intră în DTAC la instalații, care e diferența față de PTh și ce greșeli blochează autorizarea. Ghid practic pentru beneficiari și arhitecți.",
    date: "2026-08-24",
    readingTime: 9,
    tags: ["Autorizație", "Documentație", "Instalații"],
    sections: [
      {
        paragraphs: [
          "Documentația tehnică de instalații este partea care întârzie cel mai des autorizațiile — nu pentru că ar fi greu de făcut, ci pentru că se pregătește pe ultima sută de metri și sub presiune. Acest ghid îți arată ce trebuie să conțină și unde se pierde timpul de fapt.",
        ],
      },
      {
        heading: "Ce intră în DTAC la instalații",
        list: [
          "Planuri de instalații pe fiecare nivel, cu trasee, echipamente și simboluri standard",
          "Scheme de principiu pe discipline (electrice, termice, ventilare)",
          "Detalii tehnice relevante la scara uzuală",
          "Legende cu simbolurile folosite, cote și adnotări clare",
          "Notă de dimensionare pe instalațiile principale, acolo unde este cerută",
        ],
        paragraphs: [
          "Toate piesele trebuie să fie coerente între ele — un plan care nu corespunde cu schema de principiu e primul motiv de respingere.",
        ],
      },
      {
        heading: "DTAC vs PTh: diferența reală",
        table: {
          head: ["", "DTAC (autorizație)", "PTh (proiect tehnic)"],
          rows: [
            ["Scop", "Obținerea autorizației de construire", "Execuția propriu-zisă a lucrării"],
            [
              "Nivel de detaliu",
              "Definitivarea conceptului, verificarea conformității",
              "Detalii de execuție, liste de materiale, amplasări exacte",
            ],
            [
              "Instalații",
              "Trasee principale, scheme, echipamente",
              "Trasee complete, cote, detalii de montaj, scheme unifilare",
            ],
            ["Cine o folosește", "Autoritatea de autorizare", "Executantul și verificatorii"],
          ],
        },
      },
      {
        heading: "Greșelile care întârzie autorizarea",
        table: {
          head: ["Greșeală", "Impact"],
          rows: [
            [
              "Planuri fără templet și indice (indicator)",
              "Documentul se trimite înapoi pentru completare",
            ],
            [
              "Nerespectarea simbolurilor standard",
              "Verificatorul nu poate urmări logica instalațiilor",
            ],
            [
              "Incoerență între planuri și scheme",
              "Se cere refacerea pieselor sau explicații suplimentare",
            ],
            ["Date incomplete despre echipamente", "Dimensionarea devine incertă, apar observații"],
            [
              "Lipsa notelor și a detaliilor la zona unităților externe",
              "Observații la fațade și amplasamente",
            ],
          ],
        },
      },
      {
        heading: "Cum te pregătești ca să nu refaci nimic",
        paragraphs: [
          "Pregătește de la început documentația ca un set coerent: același template, aceleași simboluri, numerotare unică a planșelor. Dacă arhitectura este la final, instalațiile se pot desena pe un ACAS curat, fără dubluri.",
          "Aceasta este exact tipul de lucrare pe care o predau ca livrabil de sine stătător — documentația iese din model, cu planșe, legende și indicator gata de depunere.",
        ],
        links: [{ label: "Modelare Revit MEP și planșe de instalații", href: "/revit-mep" }],
      },
    ],
  },
  {
    slug: "template-revit-mep-bun",
    title: "Ce trebuie să conțină un template Revit MEP bun (și cum recunoști unul făcut prost)",
    metaTitle: "Ce conține un template Revit MEP bun",
    description:
      "Ce trebuie să conțină un template Revit MEP bun, semnalele unuia făcut prost și cât timp îți economisește la pornirea unui proiect.",
    date: "2026-08-24",
    readingTime: 8,
    tags: ["Revit MEP", "Workflow", "Template"],
    sections: [
      {
        paragraphs: [
          "Template-ul de proiect este baza din care pornește fiecare lucrare Revit: stiluri, filtre, parametri, indicator, legende. Unul bun îți economisește zile la fiecare proiect. Unul prost te costă săptămâni de corectat lucruri care ar fi trebuit să fie setate o singură dată.",
        ],
      },
      {
        heading: "Ce trebuie să conțină un template MEP serios",
        list: [
          "Indicator (cartuș) conform cu cerințele uzuale, cu format A3/A4 și variațiile la scară",
          "Stiluri de linie și obiecte cu grosimi logice pe discipline",
          "Filtre de vizibilitate pe sistem (rețea de aer, conducte, circuite electrice)",
          "View templates pe tip de vedere: plan, secțiune, 3D, sheet",
          "Parametri partajați cu un fișier .txt predat odată cu template-ul",
          "Seturi de legende și simboluri standard",
          "Schedules predefinite pentru liste de cantități",
          "Niveluri, axe și grille inițializate corect",
        ],
      },
      {
        heading: "Semnalele unui template făcut prost",
        list: [
          "Stiluri duplicate cu nume asemănătoare (Lini 1, Lini 2, Linie 1 copy)",
          "Filtre făcute pe deșertăciune, care se strică la prima modificare",
          "Familii locale în loc de familii încărcate din bibliotecă",
          "Parametri fără unități sau cu nume ambigue",
          "Indicator care nu se scalează la A3 cu textul suprapus",
        ],
      },
      {
        heading: "Cât economisești de fapt",
        paragraphs: [
          "În realitate, 2-4 ore la începutul fiecărui proiect plus, mai important, erori evitate: planșe cu simboluri inconsistente, liste incorecte, revizii care puteau fi evitate. La un volum de 10 proiecte pe an, template-ul bun e diferența dintre o jumătate de săptămână și patru săptămâni de muncă.",
          "Dacă proiectul tău nu are un template ținut la zi, orice lucrare nouă pornește cu handicap — și exact asta e prima verificare pe care o fac la orice preluare de model.",
        ],
        note: "Template-uri MEP curate, cu indicator și simboluri, sunt parte din gama de resurse pe care le pot pregăti la comandă — detalii la cerere prin formularul de contact.",
      },
    ],
  },
  {
    slug: "instalatii-centre-de-date",
    title: "Instalațiile unui centru de date: redundanță, Tier și ce se vede în modelul BIM",
    metaTitle: "Instalațiile unui centru de date: redundanță, Tier",
    description:
      "De ce instalațiile unui data center diferă de cele ale unui birou: N+1, 2N, Tier I–IV, răcirea de precizie și rolul modelului BIM în proiectare și operare.",
    date: "2026-08-21",
    readingTime: 10,
    tags: ["Centre de date", "HVAC", "Electrice", "BIM"],
    sections: [
      {
        paragraphs: [
          "Un centru de date nu este o clădire cu servere în ea. Este o mașinărie de continuitate, în care instalațiile nu sunt un capitol al proiectului, ci produsul principal. Dacă într-un birou o pană de curent înseamnă o cafea în plus, într-un data center înseamnă contracte încălcate. Acest articol explică principiile care fac instalațiile unui data center fundamental diferite — și de ce modelarea lor BIM este altfel decât orice altă modelare.",
        ],
      },
      {
        heading: "Redundanța: N, N+1, 2N — și de ce contează fiecare literă",
        paragraphs: [
          "În proiectarea instalațiilor, „N” reprezintă capacitatea necesară exactă pentru sarcină. Redundanța adaugă capacitate de rezervă, iar notațiile spun povestea completă:",
        ],
        list: [
          "N — fără redundanță: orice echipament care cade oprește serviciul. Suficient pentru birouri, inacceptabil pentru date.",
          "N+1 — un echipament de rezervă în plus față de necesar: dacă un chiller cade, celelalte acoperă sarcina.",
          "2N — dublarea completă a căii de alimentare/răcire: două sisteme independente, oricare dintre ele poate susține singur întreaga sarcină.",
          "2N+1 și peste — dublare completă plus rezerve suplimentare, pentru cele mai critice operațiuni.",
        ],
      },
      {
        paragraphs: [
          "Această logică se aplică pe tot lanțul: alimentare electrică (rețea + generatoare + UPS), răcire (chillere, pompe, ventilatoare), distribuție. Modelul BIM reflectă fiecare cale redundantă ca sistem separat — nu doar desenat separat, ci legat logic: din ce tablou se alimentează fiecare consumator, pe ce cale de răcire stă fiecare echipament.",
        ],
      },
      {
        heading: "Tier I–IV: ce înseamnă de fapt certificarea Uptime",
        paragraphs: [
          "Clasificarea Uptime Institute măsoară disponibilitatea așteptată a centrului de date, și fiecare nivel cere o altă arhitectură a instalațiilor:",
        ],
        table: {
          head: [
            "Nivel",
            "Redundanță tipică",
            "Disponibilitate țintă",
            "Ce înseamnă pentru instalații",
          ],
          rows: [
            [
              "Tier I",
              "N",
              "99,671%",
              "O singură cale de alimentare și răcire; întreruperi planificate pentru mentenanță",
            ],
            [
              "Tier II",
              "N+1 parțial",
              "99,741%",
              "Componente redundante, dar cale unică de distribuție",
            ],
            [
              "Tier III",
              "N+1, mentenanță concurentă",
              "99,982%",
              "Orice componentă poate fi scoasă din funcțiune fără oprirea centrului",
            ],
            [
              "Tier IV",
              "2N, toleranță la defect",
              "99,995%",
              "Două căi complete independente; un singur defect oriunde nu întrerupe serviciul",
            ],
          ],
        },
      },
      {
        paragraphs: [
          "Diferența dintre 99,982% și 99,995% pare mică pe hârtie — înseamnă, de fapt, diferența dintre ~1,6 ore și ~26 de minute de indisponibilitate pe an. Iar costul instalațiilor crește exponențial cu fiecare nouă zecimală. De aceea proiectarea începe întotdeauna de la întrebarea corectă: ce disponibilitate cere business-ul, nu ce disponibilitate se poate construi.",
        ],
      },
      {
        heading: "Ce se vede în modelul BIM al unui data center",
        paragraphs: [
          "Modelarea BIM într-un centru de date nu este despre „desenat frumos”. Modelul devine instrumentul de coordonare și de operare:",
        ],
        list: [
          "Căile redundante modelate ca sisteme distincte, colorate și filtrate logic — verifici în model că 2N este cu adevărat 2N, nu doar pe schema unifilară.",
          "Răcirea de precizie: culoare reci/calde, containere de aer, trasee de agent sub pardoseală — toate coordonate 3D, pentru că spațiul dintre grinzi și tăvi este la fel de prețios ca serverele.",
          "Liste de cabluri, tăvi, echipamente generate direct din model — numărul de elemente dintr-un data center face desenarea manuală impracticabilă.",
          "„As-built” operabil: modelul predat devine harta digitală pe care echipa de operare urmărește mentenanța și modificările ulterioare.",
        ],
      },
      {
        heading: "Ce înseamnă asta pentru tine",
        paragraphs: [
          "Dacă proiectezi sau construiești spații tehnice — camere de servere, centre mici, spații cu cerințe de continuitate — principiile de mai sus se aplică scalate: redundanță corect dimensionată, căi separate, documentație care reflectă realitatea. Iar dacă vrei un model Revit MEP care să țină evidența acestor logici, acesta este exact tipul de lucrare pe care îl modelez.",
        ],
      },
    ],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}
