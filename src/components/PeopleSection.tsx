import { useState } from "react";

import { PI, MEMBERS, type Member } from "@/data/people";

function MemberCard({ m }: { m: Member }) {
  const [open, setOpen] = useState(true);
  const long = false;
  return (
    <article className="flex flex-col bg-surface-paper rounded shadow-sm p-space-lg">
      <div className="flex items-start gap-space-md">
        <img
          src={m.image}
          alt={`${m.name}, ${m.role}`}
          loading="lazy"
          className="w-20 h-20 shrink-0 rounded object-cover bg-surface-subtle"
        />
        <div className="min-w-0">
          <h4 className="font-headline-sm text-headline-sm text-primary">{m.name}</h4>
          <p className="font-body-sm text-body-sm text-text-secondary">{m.role}</p>
          <p className="mt-1 font-code-notation text-code-notation text-text-muted">Joined: {m.joined}</p>
        </div>
      </div>
      <div className={`mt-space-md space-y-space-sm overflow-hidden ${!open && long ? "max-h-40 [mask-image:linear-gradient(to_bottom,black_60%,transparent)]" : ""}`}>
        {m.bio.map((p, i) => (
          <p key={i} className="font-body-sm text-body-sm text-text-primary leading-relaxed">{p}</p>
        ))}
      </div>
      {long && (
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          className="mt-space-xs self-start font-label-md text-label-md text-accent-cobalt hover:underline cursor-pointer"
        >
          {open ? "Show less" : "Read full bio"}
        </button>
      )}
      <div className="mt-auto pt-space-md flex flex-wrap items-center justify-between gap-space-xs border-t border-border-hairline mt-space-md">
        <span className="font-code-notation text-code-notation text-text-secondary break-all select-all">{m.email}</span>
        <a
          href={m.profile}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 font-label-md text-label-md text-primary hover:text-accent-cobalt"
        >
          Profile <span className="material-symbols-outlined text-[14px]">open_in_new</span>
        </a>
      </div>
    </article>
  );
}

export function PeopleSection() {
  return (
    <section className="w-full bg-surface-canvas py-space-3xl" id="people">
      <div className="max-w-[1240px] mx-auto px-gutter-mobile md:px-gutter">
        <div className="mb-space-xl">
          <span className="font-code-notation text-code-notation text-accent-cobalt uppercase tracking-widest block mb-1">Group Directory</span>
          <h2 className="font-headline-lg text-headline-lg text-primary tracking-tight">Principal Investigator &amp; Members</h2>
        </div>

        <div className="mb-space-2xl bg-surface-paper rounded shadow-sm p-space-md md:p-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-4 lg:col-span-3 flex flex-col gap-space-sm">
              <img src={PI.image} alt={`${PI.name}, Principal Investigator`} className="w-full aspect-square rounded object-cover bg-surface-subtle" />
              <div className="space-y-space-2xs font-code-notation text-code-notation text-text-secondary">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-sm text-accent-cobalt">verified</span>
                  <span>Joined: {PI.joined}</span>
                </div>
                <div className="flex items-start gap-space-xs">
                  <span className="material-symbols-outlined text-sm text-accent-cobalt">mail</span>
                  <span className="select-all break-all min-w-0">{PI.email}</span>
                </div>
              </div>
              <a className="inline-flex items-center justify-center gap-space-xs px-space-md py-space-xs bg-surface-container hover:bg-surface-container-high text-primary font-label-md text-label-md rounded transition-colors" href={PI.profile} rel="noreferrer" target="_blank">
                <span>Institutional Faculty Profile</span>
                <span className="material-symbols-outlined text-xs">open_in_new</span>
              </a>
            </div>
            <div className="md:col-span-8 lg:col-span-9 flex flex-col gap-space-sm">
              <div className="flex flex-wrap items-start justify-between gap-space-xs">
                <div>
                  <h3 className="font-headline-lg text-headline-lg text-primary tracking-tight">{PI.name}</h3>
                  <span className="font-body-md text-body-md text-text-secondary font-medium">{PI.role}</span>
                </div>
                <span className="px-space-xs py-0.5 rounded bg-badge-science-bg text-badge-science-text font-label-sm text-label-sm uppercase tracking-wider">Principal Investigator</span>
              </div>
              {PI.bio.map((p, i) => (
                <p key={i} className="font-body-md text-body-md text-text-primary leading-relaxed">{p}</p>
              ))}
            </div>
          </div>
        </div>

        <h3 className="font-headline-md text-headline-md text-primary tracking-tight mb-space-lg">Current Members</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
          {MEMBERS.map((m) => (
            <MemberCard key={m.name} m={m} />
          ))}
        </div>
      </div>
    </section>
  );
}
