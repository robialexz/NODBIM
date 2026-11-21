/** Singura sursă a prețurilor afișate pe site; moneda este explicită pentru fiecare serviciu. */
export type JobType = "redesenare" | "corectare" | "instalatii";

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
    note: string;
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
    note: "Depinde de complexitate și de cât de lizibil este originalul.",
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
    note: "Preț de pornire pe planșă, în funcție de volumul observațiilor.",
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
    note: "Modelare și documentare din soluția tehnică aprobată. Volumul modelului și reviziile incluse se stabilesc în ofertă.",
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

/** Separator de mii cu regex, nu toLocaleString: server și browser dau același text. */
export function formatLei(value: number): string {
  return String(value).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export function estimateLabel(type: JobType, sheets: number): string {
  const { min, max } = estimate(type, sheets);
  const currency = jobRates[type].currency;
  return max === null
    ? `de la ${formatLei(min)} ${currency}`
    : `${formatLei(min)} – ${formatLei(max)} ${currency}`;
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

/** Accessible quantity text that matches the selected work type. */
export function quantityValueLabel(type: JobType, sheets: number): string {
  const n = clampSheets(sheets);
  const unit = {
    redesenare: n === 1 ? "plan redesenat" : "planuri redesenate",
    corectare: n === 1 ? "planșă corectată" : "planșe corectate",
    instalatii: n === 1 ? "planșă completă" : "planșe complete",
  }[type];
  return `${n}${n === 20 ? " de" : ""} ${unit}`;
}

export function estimateWhatsappMessage(type: JobType, sheets: number): string {
  const n = clampSheets(sheets);
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
