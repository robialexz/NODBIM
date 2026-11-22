import { describe, expect, test } from "bun:test";

import {
  estimate,
  estimateLabel,
  estimateWhatsappMessage,
  formatLei,
  jobRates,
  offerSchema,
  packagePrice,
  quantityValueLabel,
  rateLabel,
  rateLabelEn,
  sheetsLabel,
} from "../src/lib/pricing";

test("tarifele din specificație", () => {
  expect(jobRates.redesenare).toMatchObject({
    min: 350,
    max: 800,
    currency: "RON",
    unit: "plan redesenat",
  });
  expect(jobRates.corectare).toMatchObject({
    min: 250,
    max: null,
    currency: "RON",
    unit: "planșă corectată",
  });
  expect(jobRates.instalatii).toMatchObject({
    min: 200,
    max: null,
    currency: "EUR",
    unit: "planșă completă",
  });
  expect(packagePrice).toEqual({ sheets: 5, min: 1000, currency: "EUR" });
});

describe("estimate", () => {
  test("interval și preț de pornire", () => {
    expect(estimate("redesenare", 1)).toEqual({ sheets: 1, min: 350, max: 800 });
    expect(estimate("redesenare", 3)).toEqual({ sheets: 3, min: 1050, max: 2400 });
    expect(estimate("instalatii", 5)).toEqual({ sheets: 5, min: 1000, max: null });
  });
  test("numărul de planșe e adus în 1–20, întreg", () => {
    for (const [input, want] of [
      [0, 1],
      [-3, 1],
      [21, 20],
      [2.5, 3],
      [2.6, 3],
      [Number.NaN, 1],
    ] as const) {
      expect(estimate("corectare", input).sheets).toBe(want);
    }
  });
});

test("estimateLabel", () => {
  expect(estimateLabel("redesenare", 1)).toBe("350 – 800 RON");
  expect(estimateLabel("redesenare", 20)).toBe("7.000 – 16.000 RON");
  expect(estimateLabel("corectare", 1)).toBe("de la 250 RON");
  expect(estimateLabel("instalatii", 1)).toBe("de la 200 EUR");
});

test("English estimate labels use English grouping and approved currencies", () => {
  expect(estimateLabel("redesenare", 1, "en")).toBe("350–800 RON");
  expect(estimateLabel("redesenare", 20, "en")).toBe("7,000–16,000 RON");
  expect(estimateLabel("corectare", 3, "en")).toBe("From 750 RON");
  expect(estimateLabel("instalatii", 5, "en")).toBe("From 1,000 EUR");
});

test("sheetsLabel și formatLei", () => {
  expect([1, 3, 20, 99].map(sheetsLabel)).toEqual([
    "1 planșă",
    "3 planșe",
    "20 de planșe",
    "20 de planșe",
  ]);
  expect(formatLei(packagePrice.min)).toBe("1.000");
});

test("quantityValueLabel uses the selected service unit", () => {
  expect(quantityValueLabel("redesenare", 1)).toBe("1 plan redesenat");
  expect(quantityValueLabel("corectare", 3)).toBe("3 planșe corectate");
  expect(quantityValueLabel("instalatii", 20)).toBe("20 de planșe complete");
});

test("English accessible quantity labels use the selected unit and clamp", () => {
  expect(quantityValueLabel("redesenare", 0, "en")).toBe("1 redrawn plan");
  expect(quantityValueLabel("instalatii", 21, "en")).toBe("20 complete MEP drawing sheets");
});

test("mesajul WhatsApp: acord și formulare", () => {
  expect(estimateWhatsappMessage("redesenare", 1)).toContain("1 plan de redesenat");
  expect(estimateWhatsappMessage("redesenare", 4)).toContain("4 planuri de redesenat");
  expect(estimateWhatsappMessage("redesenare", 20)).toContain("20 de planuri de redesenat");
  expect(estimateWhatsappMessage("instalatii", 3)).not.toContain("pentru planșe");
  expect(estimateWhatsappMessage("corectare", 2)).toContain("pe site");
});

test("English WhatsApp messages stay localized and include a written quote step", () => {
  expect(estimateWhatsappMessage("redesenare", 3, "en")).toContain(
    "3 plans to redraw from a PDF or scan",
  );
  expect(estimateWhatsappMessage("corectare", 2, "en")).toContain(
    "2 existing drawing sheets to update or correct",
  );
  expect(estimateWhatsappMessage("instalatii", 1, "en")).toContain(
    "1 complete MEP drawing sheet to prepare",
  );
  expect(estimateWhatsappMessage("instalatii", 1, "en")).toContain(
    "written quote before work starts",
  );
  expect(estimateWhatsappMessage("instalatii", 1, "en")).not.toMatch(/[ăâîșț]/i);
});

test("offerSchema", () => {
  expect(offerSchema("redesenare")).toEqual({
    "@type": "Offer",
    name: "Redesenare plan sau PDF în DWG",
    priceCurrency: "RON",
    priceSpecification: {
      "@type": "UnitPriceSpecification",
      priceCurrency: "RON",
      minPrice: 350,
      maxPrice: 800,
      unitText: "plan redesenat",
    },
  });
  expect(offerSchema("corectare")).not.toHaveProperty("priceSpecification.maxPrice");
});

test("rateLabel: interval, preț de pornire și separator", () => {
  expect(rateLabel("redesenare")).toBe("350–800 RON / plan redesenat");
  expect(rateLabel("redesenare", " pe ")).toBe("350–800 RON pe plan redesenat");
  expect(rateLabel("corectare", "/")).toBe("de la 250 RON/planșă corectată");
  expect(rateLabel("instalatii")).toBe("de la 200 EUR / planșă completă");
});

test("planșele complete păstrează pragul în euro în estimator și schema Google", () => {
  expect(estimateLabel("instalatii", 5)).toBe("de la 1.000 EUR");
  expect(offerSchema("instalatii")).toMatchObject({
    priceCurrency: "EUR",
    priceSpecification: {
      priceCurrency: "EUR",
      minPrice: 200,
      unitText: "planșă completă",
    },
  });
});

test("English Revit pricing stays in EUR and names the complete-sheet unit", () => {
  expect(rateLabelEn("instalatii")).toBe("From 200 EUR per complete MEP drawing sheet");
  expect(offerSchema("instalatii", "en")).toMatchObject({
    name: "Complete MEP drawing sheet (HVAC, heating and electrical)",
    priceCurrency: "EUR",
    priceSpecification: {
      priceCurrency: "EUR",
      minPrice: 200,
      unitText: "complete MEP drawing sheet",
    },
  });
});

test("English AutoCAD structured rates stay in RON", () => {
  expect(offerSchema("redesenare", "en")).toMatchObject({
    name: "Redrawing a plan or PDF into DWG",
    priceCurrency: "RON",
    priceSpecification: {
      priceCurrency: "RON",
      minPrice: 350,
      maxPrice: 800,
      unitText: "redrawn plan",
    },
  });
  expect(offerSchema("corectare", "en")).toMatchObject({
    priceCurrency: "RON",
    priceSpecification: {
      minPrice: 250,
      unitText: "corrected sheet",
    },
  });
});
