import type { ArticleImage, ArticleSection } from "@/lib/blog";
import { useLocation } from "@tanstack/react-router";
import { trackArticleInternalLinkClick } from "@/lib/analytics";

export function ArticleSections({
  sections,
  image,
}: {
  sections: ArticleSection[];
  image?: ArticleImage;
}) {
  const pathname = useLocation().pathname;

  return (
    <div className="mt-8 space-y-8">
      {image && (
        <figure
          data-ui="article-evidence"
          className="overflow-hidden border border-border-strong bg-sheet"
        >
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="block h-auto w-full bg-white"
          />
          <figcaption className="flex flex-col gap-2 border-t border-border px-4 py-3 text-sm leading-relaxed text-muted-foreground md:flex-row md:items-center md:justify-between md:px-5">
            <span>{image.caption}</span>
            {image.fullSizeLabel && (
              <a
                href={image.src}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-11 shrink-0 items-center text-primary underline underline-offset-4"
              >
                {image.fullSizeLabel}
              </a>
            )}
          </figcaption>
        </figure>
      )}
      {sections.map((section, sectionIndex) => (
        <section key={sectionIndex}>
          {section.heading && <h2 className="text-2xl md:text-3xl">{section.heading}</h2>}
          {section.paragraphs?.map((paragraph, paragraphIndex) => (
            <p key={paragraphIndex} className="mt-4 text-base leading-relaxed text-foreground/85">
              {paragraph}
            </p>
          ))}
          {section.list && (
            <ul className="mt-4 space-y-2.5">
              {section.list.map((item, itemIndex) => (
                <li
                  key={itemIndex}
                  className="flex gap-3 text-base leading-relaxed text-foreground/85"
                >
                  <span className="tech-label mt-1 shrink-0 text-muted-foreground">
                    0{itemIndex + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
          {section.table && (
            <div className="sheet-frame mt-5 overflow-x-auto">
              <table className="w-full min-w-[480px] text-left text-sm">
                <thead>
                  <tr className="border-b border-border-strong">
                    {section.table.head.map((heading) => (
                      <th key={heading} className="tech-label px-4 py-3 text-muted-foreground">
                        {heading}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.table.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-b border-border last:border-0">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="px-4 py-3 align-top leading-relaxed">
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {section.note && (
            <p className="mt-5 border-l-2 border-primary bg-accent px-4 py-3 text-sm leading-relaxed text-accent-foreground">
              {section.note}
            </p>
          )}
          {section.links && (
            <ul className="mt-4 space-y-2">
              {section.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-primary underline underline-offset-4"
                    onClick={() =>
                      trackArticleInternalLinkClick(
                        link.href,
                        pathname,
                        link.label,
                        section.heading,
                      )
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </div>
  );
}
