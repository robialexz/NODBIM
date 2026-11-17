import type { ArticleSection } from "@/lib/blog";

export function ArticleSections({ sections }: { sections: ArticleSection[] }) {
  return (
    <div className="mt-8 space-y-8">
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
                  <a href={link.href} className="text-primary underline underline-offset-4">
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
