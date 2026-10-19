import { useState } from "react";
import { CATEGORY_LABELS, PUBLICATIONS, SCHOLAR_URL, type PubCategory } from "@/data/publications";

const FILTERS: Array<"all" | PubCategory> = ["all", "twins", "crystal", "damage", "constitutive"];

export function PublicationsSection() {
  const [filter, setFilter] = useState<"all" | PubCategory>("all");
  const list = PUBLICATIONS.filter((p) => filter === "all" || p.category === filter);
  return (
    <section className="w-full bg-surface-canvas py-space-3xl" id="publications">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-xl">
          <div>
            <span className="font-code-notation text-code-notation text-accent-cobalt uppercase tracking-widest block mb-1">Scholarly Output</span>
            <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Selected Publications</h2>
          </div>
          <a href={SCHOLAR_URL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 font-label-md text-label-md text-accent-cobalt hover:underline">
            Full list on Google Scholar <span className="material-symbols-outlined text-[16px]">open_in_new</span>
          </a>
        </div>
        <div className="flex flex-wrap gap-space-xs mb-space-lg" role="group" aria-label="Filter publications">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`px-space-sm py-space-2xs rounded font-label-sm text-label-sm cursor-pointer shadow-sm transition-colors ${filter === f ? "bg-accent-navy text-on-primary" : "bg-surface-paper hover:bg-surface-container text-text-secondary"}`}
            >
              {f === "all" ? "All Disciplines" : CATEGORY_LABELS[f]}
            </button>
          ))}
        </div>
        <ul className="flex flex-col gap-space-sm" data-testid="pub-list">
          {list.map((p) => (
            <li key={p.doi} className="bg-surface-paper rounded shadow-sm p-space-md md:p-space-lg">
              <div className="flex flex-wrap items-center gap-space-xs mb-space-xs font-code-notation text-code-notation">
                <span className="px-space-xs py-0.5 rounded bg-accent-navy text-on-primary">{p.year}</span>
                <span className="px-space-xs py-0.5 rounded bg-badge-science-bg text-badge-science-text">{CATEGORY_LABELS[p.category]}</span>
                <span className="text-text-secondary italic">{p.journal}</span>
              </div>
              <h4 className="font-title-md text-title-md text-primary">
                <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer" className="hover:text-accent-cobalt">{p.title}</a>
              </h4>
              <p className="mt-1 font-body-sm text-body-sm text-text-secondary">{p.authors}</p>
              <div className="mt-space-xs flex flex-wrap items-center gap-x-space-sm gap-y-1 font-code-notation text-code-notation">
                <a href={`https://doi.org/${p.doi}`} target="_blank" rel="noreferrer" className="text-accent-cobalt hover:underline">DOI: {p.doi}</a>
                <a href={`https://api.crossref.org/works/${p.doi}/transform/application/x-bibtex`} target="_blank" rel="noreferrer" className="text-accent-cobalt hover:underline">BibTeX</a>
                <a href={`https://scholar.google.com/scholar?q=${encodeURIComponent(p.title)}`} target="_blank" rel="noreferrer" className="text-accent-cobalt hover:underline">Find PDF (Scholar)</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
