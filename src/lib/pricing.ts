/** Rate cards by customer market; English pages use the approved international EUR rates. */
export type JobType = "redesenare" | "corectare" | "instalatii";
export type PricingLocale = "ro" | "en";

type MarketRate = {
  min: number;
  max: number | null;
  currency: "RON" | "EUR";
};

type JobDetails = {
  label: string;
  waName: string;
  unit: string;
  enLabel: string;
  enUnit: string;
  quantityLabel: string;
  enQuantityLabel: string;
  note: string;
  enNote: string;
  enWaName: string;
};

const jobDetails: Record<JobType, JobDetails> = {
  redesenare: {
    label: "Redesenare plan sau PDF în DWG",
    waName: "de redesenat (PDF în DWG)",
    unit: "plan redesenat",
    enLabel: "Redrawing a PDF or scan into DWG drawing sheets",
    enUnit: "drawing sheet",
    quantityLabel: "Câte planuri redesenezi?",
    enQuantityLabel: "How many drawing sheets should be redrawn?",
    note: "Depinde de complexitate și de cât de lizibil este originalul.",
    enNote:
      "Starting price per drawing sheet; final cost depends on drawing complexity and source clarity.",
    enWaName: "to redraw from a PDF or scan",
  },
  corectare: {
    label: "Modificare sau corectare planșă existentă",
    waName: "de modificat sau corectat",
    unit: "planșă corectată",
    enLabel: "Updating or correcting an existing drawing sheet",
    enUnit: "corrected sheet",
    quantityLabel: "Câte planșe corectezi?",
    enQuantityLabel: "How many existing drawing sheets need corrections?",
    note: "Preț de pornire pe planșă, în funcție de volumul observațiilor.",
    enNote: "Starting price per sheet; final cost depends on the number and extent of markups.",
    enWaName: "to update or correct",
  },
  instalatii: {
    label: "Planșă completă de instalații (HVAC, termice, electrice)",
    waName: "de instalații, de desenat",
    unit: "planșă completă",
    enLabel: "Complete MEP drawing sheet (HVAC, heating and electrical)",
    enUnit: "complete MEP drawing sheet",
    quantityLabel: "Câte planșe complete de instalații?",
    enQuantityLabel: "How many complete MEP drawing sheets?",
    note: "Modelare și documentare din soluția tehnică aprobată. Volumul modelului și reviziile incluse se stabilesc în ofertă.",
    enNote:
      "Modelling and documentation follow the approved technical design. Model scope and included revisions are confirmed in the quote.",
    enWaName: "to prepare",
  },
};

/** One approved rate source per market. A null max means a starting rate without a published cap. */
const marketRates: Record<PricingLocale, Record<JobType, MarketRate>> = {
  ro: {
    redesenare: { min: 350, max: 800, currency: "RON" },
    corectare: { min: 250, max: null, currency: "RON" },
    instalatii: { min: 200, max: null, currency: "EUR" },
  },
  en: {
    redesenare: { min: 200, max: null, currency: "EUR" },
    corectare: { min: 200, max: null, currency: "EUR" },
    instalatii: { min: 200, max: null, currency: "EUR" },
  },
};

type JobRate = JobDetails & MarketRate;

/** Romanian-compatible rate fields are retained for existing Romanian page consumers. */
export const jobRates: Record<JobType, JobRate> = {
  redesenare: { ...jobDetails.redesenare, ...marketRates.ro.redesenare },
  corectare: { ...jobDetails.corectare, ...marketRates.ro.corectare },
  instalatii: { ...jobDetails.instalatii, ...marketRates.ro.instalatii },
};

export const packagePrice = {
  sheets: 5,
  min: marketRates.ro.instalatii.min * 5,
  currency: marketRates.ro.instalatii.currency,
};

/** Numărul de planșe adus la un întreg între 1 și 20 (NaN devine 1). */
function clampSheets(sheets: number): number {
  return Number.isNaN(sheets) ? 1 : Math.min(20, Math.max(1, Math.round(sheets)));
}

export function estimate(
  type: JobType,
  sheets: number,
  locale: PricingLocale = "ro",
): { sheets: number; min: number; max: number | null } {
  const n = clampSheets(sheets);
  const { min, max } = marketRates[locale][type];
  return { sheets: n, min: min * n, max: max === null ? null : max * n };
}

/** Separator de mii românesc, păstrând același text între server și browser. */
export function formatLei(value: number): string {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

/** English grouping uses commas, deterministically across server and browser. */
function formatEnglishNumber(value: number): string {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function estimateLabel(type: JobType, sheets: number, locale: PricingLocale = "ro"): string {
  const { min, max } = estimate(type, sheets, locale);
  const { currency } = marketRates[locale][type];
  const format = locale === "en" ? formatEnglishNumber : formatLei;
  const from = locale === "en" ? "From" : "de la";
  return max === null
    ? `${from} ${format(min)} ${currency}`
    : locale === "en"
      ? `${format(min)}–${format(max)} ${currency}`
      : `${format(min)} – ${format(max)} ${currency}`;
}

/** Tariful pe unitate pentru paginile românești, cu separator personalizabil. */
export function rateLabel(type: JobType, separator = " / "): string {
  const { min, max, unit, currency } = jobRates[type];
  return `${max === null ? `de la ${min}` : `${min}–${max}`} ${currency}${separator}${unit}`;
}

/** English per-unit tariff for the international market. */
export function rateLabelEn(type: JobType): string {
  const { min, max, currency } = marketRates.en[type];
  const amount = max === null ? `From ${min}` : `${min}–${max}`;
  return `${amount} ${currency} per ${jobDetails[type].enUnit}`;
}

/** „1 planșă”, „3 planșe”, „20 de planșe”. */
export function sheetsLabel(sheets: number): string {
  const n = clampSheets(sheets);
  return `${n} ${n === 1 ? "planșă" : n < 20 ? "planșe" : "de planșe"}`;
}

/** Accessible quantity text that matches the selected service and language. */
export function quantityValueLabel(
  type: JobType,
  sheets: number,
  locale: PricingLocale = "ro",
): string {
  const n = clampSheets(sheets);
  if (locale === "en") {
    const unit = {
      redesenare: n === 1 ? "redrawn drawing sheet" : "redrawn drawing sheets",
      corectare: n === 1 ? "corrected sheet" : "corrected sheets",
      instalatii: n === 1 ? "complete MEP drawing sheet" : "complete MEP drawing sheets",
    }[type];
    return `${n} ${unit}`;
  }

  const unit = {
    redesenare: n === 1 ? "plan redesenat" : "planuri redesenate",
    corectare: n === 1 ? "planșă corectată" : "planșe corectate",
    instalatii: n === 1 ? "planșă completă" : "planșe complete",
  }[type];
  return `${n}${n === 20 ? " de" : ""} ${unit}`;
}

export function estimateWhatsappMessage(
  type: JobType,
  sheets: number,
  locale: PricingLocale = "ro",
): string {
  const n = clampSheets(sheets);
  const indicativeEstimate = estimateLabel(type, n, locale);
  if (locale === "en") {
    const quantity = {
      redesenare: `${n} ${n === 1 ? "drawing sheet" : "drawing sheets"}`,
      corectare: `${n} ${n === 1 ? "existing drawing sheet" : "existing drawing sheets"}`,
      instalatii: `${n} ${n === 1 ? "complete MEP drawing sheet" : "complete MEP drawing sheets"}`,
    }[type];
    return `Hello, I found NOD BIM online. I need ${quantity} ${jobDetails[type].enWaName}. Indicative estimate: ${indicativeEstimate}. Could I send the files for a written quote before work starts?`;
  }

  const quantity =
    type === "redesenare"
      ? `${n}${n === 20 ? " de" : ""} ${n === 1 ? "plan" : "planuri"}`
      : sheetsLabel(n);
  return `Salut! Am găsit NOD BIM pe site. Am ${quantity} ${jobRates[type].waName}. Preț orientativ: ${indicativeEstimate}. Pot trimite fișierele pentru o ofertă?`;
}

/** Nod Offer pentru datele structurate; maxPrice apare doar când există. */
export function offerSchema(type: JobType, language: "ro" | "en" = "ro") {
  const rate = marketRates[language][type];
  const { label, enLabel, unit, enUnit } = jobDetails[type];
  return {
    "@type": "Offer",
    name: language === "en" ? enLabel : label,
    priceCurrency: rate.currency,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: rate.currency,
      minPrice: rate.min,
      ...(rate.max === null ? {} : { maxPrice: rate.max }),
      unitText: language === "en" ? enUnit : unit,
    },
  };
}
