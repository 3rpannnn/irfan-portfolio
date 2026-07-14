import { skillGroups } from "@/data/portfolio";

export default function Skills() {
  return (
    <section
      id="keahlian"
      className="bg-slate-100 px-6 py-24 text-slate-950 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Keahlian
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Kompetensi teknis dan pengembangan sistem
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Kompetensi berikut diperoleh melalui perkuliahan, penelitian,
            kompetisi robotika, pengembangan proyek, dan pengalaman teknis.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <article
              key={group.title}
              className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h3 className="text-xl font-bold tracking-tight">
                {group.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-600">
                {group.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}