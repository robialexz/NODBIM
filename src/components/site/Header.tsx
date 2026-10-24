import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import { enHomePath, localeForPath } from "@/lib/i18n";
import { site } from "@/lib/site-config";
import { PhoneLink } from "@/components/site/PhoneLink";

type ServiceCategory = {
  title: string;
  items: {
    label: string;
    description: string;
    href: string;
  }[];
};

const copy = {
  ro: {
    home: "/",
    skip: "Sari la conținut",
    services: "Servicii",
    serviceCategories: [
      {
        title: "Revit MEP & Instalații",
        items: [
          {
            label: "Modelare Revit MEP",
            description: "Model 3D și planșe pentru birouri de proiectare",
            href: "/revit-mep",
          },
          {
            label: "Instalații HVAC",
            description: "Planșe și tubulaturi de ventilare/climatizare",
            href: "/hvac",
          },
          {
            label: "Instalații termice",
            description: "Centrale, distribuitoare, conducte și radiatoare",
            href: "/instalatii-termice",
          },
          {
            label: "Instalații electrice",
            description: "Circuite, tablouri, iluminat și prize",
            href: "/instalatii-electrice",
          },
        ],
      },
      {
        title: "AutoCAD & Planșe",
        items: [
          {
            label: "Desenare AutoCAD",
            description: "Planuri scanate, schițe, corecturi pe layere",
            href: "/autocad-dwg",
          },
          {
            label: "PDF în DWG",
            description: "Plan PDF sau scanat, redesenat manual la scară",
            href: "/pdf-in-dwg",
          },
        ],
      },
      {
        title: "Cursuri & Automatizări",
        items: [
          {
            label: "Cursuri Revit de la zero",
            description: "Sesiuni live pentru începători, până la planșă",
            href: "/cursuri-revit",
          },
          {
            label: "Automatizări Dynamo",
            description: "Fluxuri repetitive automatizate la cerere",
            href: "/cursuri-revit#automatizari-dynamo",
          },
        ],
      },
    ] as ServiceCategory[],
    links: [
      { label: "Exemple", href: "/portofoliu" },
      { label: "Prețuri", href: "/#preturi" },
      { label: "Cursuri Revit", href: "/cursuri-revit" },
      { label: "Despre", href: "/despre" },
    ],
    cta: "Cere ofertă",
    ctaHref: "/#estimare",
    call: "Sună",
    menu: "Meniu",
    mainNav: "Navigație principală",
    mobileNav: "Navigație mobilă",
  },
  en: {
    home: enHomePath,
    skip: "Skip to content",
    services: "",
    serviceCategories: [] as ServiceCategory[],
    links: [
      { label: "Revit MEP", href: enHomePath },
      { label: "AutoCAD", href: "/en/autocad-drafting" },
      { label: "About", href: "/en/about" },
    ],
    cta: "Get a quote",
    ctaHref: `${enHomePath}#estimate`,
    call: "Call",
    menu: "Menu",
    mainNav: "Main navigation",
    mobileNav: "Mobile navigation",
  },
};

const linkClass = "whitespace-nowrap hover:text-primary";

function NavLink({ href, label, onClick }: { href: string; label: string; onClick?: () => void }) {
  const handleClick = onClick ? { onClick } : {};
  return href.includes("#") ? (
    <a href={href} className={linkClass} {...handleClick}>
      {label}
    </a>
  ) : (
    <Link
      to={href}
      className={linkClass}
      activeProps={{ className: "text-primary" }}
      {...handleClick}
    >
      {label}
    </Link>
  );
}

export function Header({ ctaHref }: { ctaHref?: string }) {
  const { pathname, hash } = useRouterState({ select: (st) => st.location });
  const locale = localeForPath(pathname);
  const t = copy[locale];
  const cta = ctaHref ?? t.ctaHref;
  const [servicesOpen, setServicesOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const servicesRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

  const closeAll = () => {
    setServicesOpen(false);
    setMenuOpen(false);
  };

  // Schimbarea căii sau a ancorei închide ambele meniuri.
  useEffect(() => {
    setServicesOpen(false);
    setMenuOpen(false);
  }, [pathname, hash]);

  // Escape închide meniul deschis și readuce focusul pe declanșatorul lui;
  // clicul în afara meniului „Servicii” îl închide.
  useEffect(() => {
    if (!servicesOpen && !menuOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      if (servicesOpen) {
        setServicesOpen(false);
        summaryRef.current?.focus();
      }
      if (menuOpen) {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    const onPointerDown = (e: PointerEvent) => {
      if (servicesOpen && e.target instanceof Node && !servicesRef.current?.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [servicesOpen, menuOpen]);

  return (
    <>
      <a
        href="#continut"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:bg-background focus:px-4 focus:py-3 focus:text-sm focus:font-medium"
      >
        {t.skip}
      </a>
      <header className="sticky top-0 z-50 border-b border-border bg-background">
        <div className="mx-auto flex max-w-[1200px] items-center gap-4 px-5 py-3 md:px-8">
          <a
            href={t.home}
            className="flex items-center gap-2.5 whitespace-nowrap font-display text-xl font-semibold tracking-tight"
          >
            <img src="/favicon.svg" alt="" width={30} height={30} className="h-[30px] w-[30px]" />
            {site.businessName}
          </a>

          <nav
            className="ml-auto hidden items-center gap-7 text-[0.95rem] lg:flex"
            aria-label={t.mainNav}
          >
            {t.serviceCategories.length >= 3 &&
              (() => {
                const [mepCategory, cadCategory, trainingCategory] = t.serviceCategories;
                if (!mepCategory || !cadCategory || !trainingCategory) return null;

                return (
                  <details
                    ref={servicesRef}
                    open={servicesOpen}
                    onToggle={(e) => setServicesOpen(e.currentTarget.open)}
                    onBlur={(e) => {
                      if (
                        e.relatedTarget instanceof Node &&
                        !e.currentTarget.contains(e.relatedTarget)
                      ) {
                        setServicesOpen(false);
                      }
                    }}
                    className="relative"
                  >
                    <summary
                      ref={summaryRef}
                      className="flex cursor-pointer list-none items-center gap-1.5 whitespace-nowrap hover:text-primary [&::-webkit-details-marker]:hidden"
                    >
                      {t.services}
                      <span
                        aria-hidden="true"
                        className={`h-1.5 w-1.5 border-b-[1.5px] border-r-[1.5px] border-current transition-transform ${
                          servicesOpen
                            ? "-translate-y-px -rotate-[135deg]"
                            : "-translate-y-0.5 rotate-45"
                        }`}
                      />
                    </summary>
                    <div className="absolute left-[-2rem] top-[calc(100%+0.9rem)] w-[36rem] border border-border-strong bg-card p-4 shadow-xl">
                      <div className="grid grid-cols-2 gap-4">
                        {/* Coloana 1: Revit MEP & Instalații */}
                        <div>
                          <p className="tech-label px-3 py-1 text-xs uppercase tracking-wider text-primary">
                            {mepCategory.title}
                          </p>
                          <ul className="mt-1 space-y-0.5">
                            {mepCategory.items.map((s) => (
                              <li key={s.href}>
                                <Link
                                  to={s.href}
                                  onClick={closeAll}
                                  className="grid gap-0.5 px-3 py-2 transition-colors hover:bg-background"
                                >
                                  <span className="text-sm font-medium">{s.label}</span>
                                  <small className="text-[0.78rem] text-muted-foreground">
                                    {s.description}
                                  </small>
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Coloana 2: AutoCAD & Planșe + Cursuri & Automatizări */}
                        <div className="flex flex-col justify-between">
                          <div>
                            <p className="tech-label px-3 py-1 text-xs uppercase tracking-wider text-primary">
                              {cadCategory.title}
                            </p>
                            <ul className="mt-1 space-y-0.5">
                              {cadCategory.items.map((s) => (
                                <li key={s.href}>
                                  <Link
                                    to={s.href}
                                    onClick={closeAll}
                                    className="grid gap-0.5 px-3 py-2 transition-colors hover:bg-background"
                                  >
                                    <span className="text-sm font-medium">{s.label}</span>
                                    <small className="text-[0.78rem] text-muted-foreground">
                                      {s.description}
                                    </small>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div className="mt-3 border-t border-border pt-3">
                            <p className="tech-label px-3 py-1 text-xs uppercase tracking-wider text-primary">
                              {trainingCategory.title}
                            </p>
                            <ul className="mt-1 space-y-0.5">
                              {trainingCategory.items.map((s) => (
                                <li key={s.href}>
                                  {s.href.includes("#") ? (
                                    <a
                                      href={s.href}
                                      onClick={closeAll}
                                      className="grid gap-0.5 px-3 py-2 transition-colors hover:bg-background"
                                    >
                                      <span className="text-sm font-medium">{s.label}</span>
                                      <small className="text-[0.78rem] text-muted-foreground">
                                        {s.description}
                                      </small>
                                    </a>
                                  ) : (
                                    <Link
                                      to={s.href}
                                      onClick={closeAll}
                                      className="grid gap-0.5 px-3 py-2 transition-colors hover:bg-background"
                                    >
                                      <span className="text-sm font-medium">{s.label}</span>
                                      <small className="text-[0.78rem] text-muted-foreground">
                                        {s.description}
                                      </small>
                                    </Link>
                                  )}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </details>
                );
              })()}
            {t.links.map((l) => (
              <NavLink key={l.href} href={l.href} label={l.label} />
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <PhoneLink
              source="header"
              className="whitespace-nowrap font-mono text-sm font-medium text-muted-foreground hover:text-primary"
            />
            <a href={cta} className="btn btn-primary">
              {t.cta}
            </a>
          </div>

          <div className="ml-auto flex items-center gap-2 lg:hidden">
            <PhoneLink
              source="header_mobile"
              className="inline-flex min-h-11 min-w-11 items-center justify-center gap-1.5 whitespace-nowrap border border-foreground px-3 text-sm font-medium"
            >
              <Phone size={16} aria-hidden="true" />
              {t.call}
            </PhoneLink>
            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-expanded={menuOpen}
              aria-controls="meniu-mobil"
              className="inline-flex min-h-11 min-w-11 items-center justify-center whitespace-nowrap border border-foreground px-3 text-sm font-medium"
            >
              {t.menu}
            </button>
          </div>
        </div>

        <nav
          id="meniu-mobil"
          hidden={!menuOpen}
          aria-label={t.mobileNav}
          className="absolute inset-x-0 top-full max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-border bg-background px-5 pb-5 lg:hidden"
        >
          <ul>
            {t.serviceCategories.map((cat) => (
              <li key={cat.title} className="border-t border-border pt-3 pb-1">
                <p className="tech-label px-3 text-xs uppercase tracking-wider text-primary">
                  {cat.title}
                </p>
                <ul className="mt-1.5 space-y-0.5">
                  {cat.items.map((s) => (
                    <li key={s.href}>
                      {s.href.includes("#") ? (
                        <a
                          href={s.href}
                          onClick={closeAll}
                          className="grid min-h-11 gap-0.5 px-3 py-2"
                        >
                          <span className="text-sm font-medium">{s.label}</span>
                          <small className="text-[0.82rem] text-muted-foreground">
                            {s.description}
                          </small>
                        </a>
                      ) : (
                        <Link
                          to={s.href}
                          onClick={closeAll}
                          className="grid min-h-11 gap-0.5 px-3 py-2"
                        >
                          <span className="text-sm font-medium">{s.label}</span>
                          <small className="text-[0.82rem] text-muted-foreground">
                            {s.description}
                          </small>
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            {t.links.map((l) => (
              <li key={l.href} className="border-t border-border">
                <div className="flex min-h-11 items-center px-3 py-2">
                  <NavLink href={l.href} label={l.label} onClick={closeAll} />
                </div>
              </li>
            ))}
          </ul>
          <a href={cta} onClick={closeAll} className="btn btn-primary mt-4 w-full">
            {t.cta}
          </a>
        </nav>
      </header>
    </>
  );
}
