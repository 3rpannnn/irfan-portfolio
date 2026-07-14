import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section
      id="pengalaman"
      className="scroll-mt-16 bg-slate-950 px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
            Pengalaman
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Pengalaman organisasi, kompetisi, dan praktik teknis
          </h2>

          <p className="mt-6 leading-8 text-slate-400">
            Pengalaman berikut mencakup pengembangan robot, sistem UAV,
            integrasi mekanik-elektronik, troubleshooting perangkat, dan
            instalasi jaringan.
          </p>
        </div>

        <div className="relative mt-16">
          <div
            aria-hidden="true"
            className="absolute bottom-0 left-3 top-0 hidden w-px bg-slate-800 md:block"
          />

          <div className="space-y-8">
            {experiences.map((experience) => (
              <article
                key={`${experience.organization}-${experience.role}`}
                className="relative md:pl-12"
              >
                <div
                  aria-hidden="true"
                  className="absolute left-0 top-8 hidden h-6 w-6 rounded-full border-4 border-slate-950 bg-cyan-400 md:block"
                />

                <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition hover:border-cyan-400/50 sm:p-8">
                  <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-cyan-400">
                        {experience.organization}
                      </p>

                      <h3 className="mt-2 text-xl font-bold tracking-tight sm:text-2xl">
                        {experience.role}
                      </h3>

                      <p className="mt-2 text-sm text-slate-400">
                        {experience.location}
                      </p>
                    </div>

                    <span className="w-fit rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm font-medium text-slate-300">
                      {experience.period}
                    </span>
                  </div>

                  <p className="mt-6 leading-7 text-slate-300">
                    {experience.description}
                  </p>

                  <ul className="mt-6 space-y-3">
                    {experience.responsibilities.map((responsibility) => (
                      <li
                        key={responsibility}
                        className="flex gap-3 text-sm leading-6 text-slate-400"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-400"
                        />

                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1.5 text-xs font-medium text-slate-300"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}