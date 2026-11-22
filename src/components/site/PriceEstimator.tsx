import { useId, useState } from "react";
import { hasWhatsapp, phoneDisplay, phoneHref, whatsappLink } from "@/lib/site-config";
import {
  estimateLabel,
  estimateWhatsappMessage,
  jobRates,
  packagePrice,
  quantityValueLabel,
  rateLabel,
  rateLabelEn,
  type JobType,
  type PricingLocale,
} from "@/lib/pricing";
import { trackConversion } from "@/lib/analytics";
import { PhoneLink } from "./PhoneLink";

const allJobTypes: JobType[] = ["redesenare", "corectare", "instalatii"];

/**
 * Estimator de preț orientativ. Prețul implicit este randat pe server;
 * fără JavaScript rămân vizibile tarifele și prețul pentru o planșă.
 */
export function PriceEstimator({
  defaultType = "redesenare",
  jobTypes = allJobTypes,
  locale = "ro",
  quoteHref = "#estimare",
}: {
  defaultType?: JobType;
  jobTypes?: readonly JobType[];
  locale?: PricingLocale;
  quoteHref?: string;
}) {
  const id = useId();
  const [type, setType] = useState<JobType>(defaultType);
  const availableJobTypes = jobTypes.length > 0 ? jobTypes : [defaultType];
  const selectedType = availableJobTypes.includes(type)
    ? type
    : (availableJobTypes[0] ?? defaultType);
  const [sheets, setSheets] = useState(1);
  const waHref = whatsappLink(estimateWhatsappMessage(selectedType, sheets, locale));
  const isEnglish = locale === "en";
  const text = isEnglish
    ? {
        singleService: "Priced service",
        multipleServices: "What do you need done?",
        estimate: "Indicative estimate",
        finalPrice:
          "The final price is confirmed in writing after the files have been reviewed and before work starts.",
        whatsapp: "Send an estimate request on WhatsApp",
        quote: "Request a written quote",
        or: "or",
        phone: (number: string) => `Call ${number}`,
        package: `${packagePrice.sheets} complete MEP drawing sheets`,
      }
    : {
        singleService: "Serviciu tarifat",
        multipleServices: "Ce fel de lucrare ai?",
        estimate: "Preț orientativ",
        finalPrice: "Prețul final îl primești în scris, după ce văd fișierele.",
        whatsapp: "Trimite cererea pe WhatsApp",
        quote: "Cere ofertă scrisă",
        or: "sau",
        phone: (number: string) => `Sună la ${number}`,
        package: `${packagePrice.sheets} planșe complete de instalații`,
      };

  return (
    <div>
      <form
        aria-labelledby={`${id}-title`}
        autoComplete="off"
        onSubmit={(e) => e.preventDefault()}
        className="grid border border-border-strong bg-background lg:grid-cols-[1.2fr_1fr]"
      >
        <div className="grid min-w-0 gap-8 p-5 md:p-9">
          <fieldset className="grid min-w-0 gap-2.5">
            <legend className="mb-3 font-medium">
              {availableJobTypes.length === 1 ? text.singleService : text.multipleServices}
            </legend>
            {availableJobTypes.map((jobType) => (
              <label
                key={jobType}
                className="grid cursor-pointer grid-cols-[auto_1fr] items-baseline gap-x-3 gap-y-1 rounded-sm border border-border bg-sheet px-3.5 py-3 transition-colors has-[:checked]:border-primary has-[:checked]:shadow-[inset_0_0_0_1px_var(--primary)] has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-primary min-[480px]:grid-cols-[auto_1fr_auto]"
              >
                <input
                  type="radio"
                  name={`${id}-type`}
                  value={jobType}
                  checked={selectedType === jobType}
                  onChange={() => setType(jobType)}
                  className="translate-y-px accent-primary outline-none"
                />
                <span className="min-w-0">
                  {isEnglish ? jobRates[jobType].enLabel : jobRates[jobType].label}
                </span>
                <span className="col-start-2 font-mono text-sm text-muted-foreground min-[480px]:col-start-3">
                  {isEnglish ? rateLabelEn(jobType) : rateLabel(jobType)}
                </span>
              </label>
            ))}
          </fieldset>

          <div>
            <div className="flex items-baseline justify-between gap-4">
              <label htmlFor={`${id}-quantity`} className="font-medium">
                {isEnglish
                  ? jobRates[selectedType].enQuantityLabel
                  : jobRates[selectedType].quantityLabel}
              </label>
              <span className="font-display text-2xl font-semibold tabular-nums" aria-hidden="true">
                {sheets}
              </span>
            </div>
            <input
              id={`${id}-quantity`}
              type="range"
              min={1}
              max={20}
              value={sheets}
              onChange={(e) => setSheets(Number(e.target.value))}
              aria-valuetext={quantityValueLabel(selectedType, sheets, locale)}
              className="mt-1 min-h-11 w-full accent-primary"
            />
            <div
              className="flex justify-between font-mono text-xs text-muted-foreground"
              aria-hidden="true"
            >
              <span>1</span>
              <span>20</span>
            </div>
          </div>
        </div>

        <div className="grid min-w-0 content-center justify-items-start gap-4 bg-graphite p-5 text-graphite-foreground md:p-9">
          <p id={`${id}-title`} className="tech-label text-graphite-foreground/65">
            {text.estimate}
          </p>
          <output
            htmlFor={`${id}-quantity`}
            className="max-w-full whitespace-normal font-display text-[clamp(1.75rem,7vw,3rem)] font-semibold leading-none tabular-nums [font-stretch:85%]"
          >
            {estimateLabel(selectedType, sheets, locale)}
          </output>
          <p className="max-w-sm text-sm leading-relaxed text-graphite-foreground/70">
            {(isEnglish ? jobRates[selectedType].enNote : jobRates[selectedType].note) +
              " " +
              text.finalPrice}
          </p>
          {hasWhatsapp ? (
            <a
              href={waHref}
              target="_blank"
              rel="noreferrer noopener"
              onClick={() => {
                trackConversion("whatsapp_click", { source: "estimator", job_type: selectedType });
              }}
              className="btn mt-2 max-w-full whitespace-normal border-graphite-foreground bg-graphite-foreground text-left text-graphite hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {text.whatsapp}
            </a>
          ) : (
            <a
              href={quoteHref}
              className="btn mt-2 max-w-full whitespace-normal border-graphite-foreground bg-graphite-foreground text-left text-graphite hover:border-primary hover:bg-primary hover:text-primary-foreground"
            >
              {text.quote}
            </a>
          )}
          {phoneHref && (
            <p className="text-sm text-graphite-foreground/70">
              {hasWhatsapp ? `${text.or} ` : ""}
              <PhoneLink
                source="estimator"
                className="inline-flex min-h-11 items-center font-medium text-graphite-foreground underline underline-offset-4"
              >
                {text.phone(phoneDisplay)}
              </PhoneLink>
            </p>
          )}
        </div>
      </form>

      <dl className="mt-6 grid gap-x-10 text-sm sm:grid-cols-2">
        {availableJobTypes.map((jobType) => (
          <div key={jobType} className="flex justify-between gap-4 border-b border-border py-3">
            <dt>{isEnglish ? jobRates[jobType].enLabel : jobRates[jobType].label}</dt>
            <dd className="text-right font-mono text-sm text-muted-foreground">
              {isEnglish ? rateLabelEn(jobType) : rateLabel(jobType)}
            </dd>
          </div>
        ))}
        {availableJobTypes.includes("instalatii") && (
          <div className="flex justify-between gap-4 border-b border-border py-3">
            <dt>{text.package}</dt>
            <dd className="text-right font-mono text-sm text-muted-foreground">
              {estimateLabel("instalatii", packagePrice.sheets, locale)}
            </dd>
          </div>
        )}
      </dl>
    </div>
  );
}
