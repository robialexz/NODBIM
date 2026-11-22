/** Singura sursă a prețurilor afișate pe site; moneda este explicită pentru fiecare serviciu. */
export type JobType = "redesenare" | "corectare" | "instalatii";
export type PricingLocale = "ro" | "en";

export const jobRates: Record<
  JobType,
  {
    label: string;
    waName: string;
    min: number;
    max: number | null;
    currency: "RON" | "EUR";
    unit: string;
    enLabel: string;
    enUnit: string;
    quantityLabel: string;
    enQuantityLabel: string;
    note: string;
    enNote: string;
    enWaName: string;
  }
> = {
  redesenare: {
    label: "Redesenare plan sau PDF în DWG",
    waName: "de redesenat (PDF în DWG)",
    currency: "RON",
    min: 350,
    max: 800,
    unit: "plan redesenat",
    enLabel: "Redrawing a plan or PDF into DWG",
    enUnit: "redrawn plan",
    quantityLabel: "Câte planuri redesenezi?",
    enQuantityLabel: "How many plans should be redrawn?",
    note: "Depinde de complexitate și de cât de lizibil este originalul.",
    enNote: "Price depends on drawing complexity and the clarity of the source file.",
    enWaName: "to redraw from a PDF or scan",
  },
  corectare: {
    label: "Modificare sau corectare planșă existentă",
    waName: "de modificat sau corectat",
    currency: "RON",
    min: 250,
    max: null,
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
    currency: "EUR",
    min: 200,
    max: null,
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

export const packagePrice = {
  sheets: 5,
  min: jobRates.instalatii.min * 5,
  currency: jobRates.instalatii.currency,
};

/** Numărul de planșe adus la un întreg între 1 și 20 (NaN devine 1). */
function clampSheets(sheets: number): number {
  return Number.isNaN(sheets) ? 1 : Math.min(20, Math.max(1, Math.round(sheets)));
}

export function estimate(
  type: JobType,
  sheets: number,
): { sheets: number; min: number; max: number | null } {
  const n = clampSheets(sheets);
  const { min, max } = jobRates[type];
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
  const { min, max } = estimate(type, sheets);
  const { currency } = jobRates[type];
  const format = locale === "en" ? formatEnglishNumber : formatLei;
  const from = locale === "en" ? "From" : "de la";
  return max === null
    ? `${from} ${format(min)} ${currency}`
    : locale === "en"
      ? `${format(min)}–${format(max)} ${currency}`
      : `${format(min)} – ${format(max)} ${currency}`;
}

/** Tariful pe unitate, cu moneda și unitatea de lucru explicite. */
export function rateLabel(type: JobType, separator = " / "): string {
  const { min, max, unit, currency } = jobRates[type];
  return `${max === null ? `de la ${min}` : `${min}–${max}`} ${currency}${separator}${unit}`;
}

/** English tariff label for localized pages; amounts always come from the approved rate table. */
export function rateLabelEn(type: JobType): string {
  const { min, max, enUnit, currency } = jobRates[type];
  const amount = max === null ? `From ${min}` : `${min}–${max}`;
  return `${amount} ${currency} per ${enUnit}`;
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
      redesenare: n === 1 ? "redrawn plan" : "redrawn plans",
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
  if (locale === "en") {
    const quantity = {
      redesenare: `${n} ${n === 1 ? "plan" : "plans"}`,
      corectare: `${n} ${n === 1 ? "existing drawing sheet" : "existing drawing sheets"}`,
      instalatii: `${n} ${n === 1 ? "complete MEP drawing sheet" : "complete MEP drawing sheets"}`,
    }[type];
    return `Hello, I found NOD BIM online. I need ${quantity} ${jobRates[type].enWaName}. Could I send the files for a written quote before work starts?`;
  }

  const quantity =
    type === "redesenare"
      ? `${n}${n === 20 ? " de" : ""} ${n === 1 ? "plan" : "planuri"}`
      : sheetsLabel(n);
  return `Salut! Am găsit NOD BIM pe site. Am ${quantity} ${jobRates[type].waName}. Pot trimite fișierele pentru o ofertă?`;
}

/** Nod Offer pentru datele structurate; maxPrice apare doar când există. */
export function offerSchema(type: JobType, language: "ro" | "en" = "ro") {
  const { label, enLabel, min, max, unit, enUnit, currency } = jobRates[type];
  return {
    "@type": "Offer",
    name: language === "en" ? enLabel : label,
    priceCurrency: currency,
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: currency,
      minPrice: min,
      ...(max === null ? {} : { maxPrice: max }),
      unitText: language === "en" ? enUnit : unit,
    },
  };
}
