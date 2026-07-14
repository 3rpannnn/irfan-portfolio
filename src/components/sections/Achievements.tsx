import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section
      id="prestasi"
      className="scroll-mt-20 bg-slate-100 px-6 py-24 text-slate-950 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
            Prestasi dan Publikasi
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Capaian dalam penelitian, publikasi, dan kompetisi
          </h2>

          <p className="mt-6 leading-8 text-slate-600">
            Capaian berikut menunjukkan pengalaman dalam kepemimpinan
            penelitian, publikasi ilmiah, kompetisi robotika, dan pengembangan
            prestasi akademik.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {achievements.map((achievement, index) => (
            <article
              key={`${achievement.year}-${achievement.title}`}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg sm:p-8"
            >
              <div
                aria-hidden="true"
                className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition group-hover:bg-cyan-400/20"
              />

              <div className="relative">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-cyan-700">
                      {achievement.type}
                    </p>

                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      Capaian {String(index + 1).padStart(2, "0")}
                    </p>
                  </div>

                  <span className="rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white">
                    {achievement.year}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold leading-snug tracking-tight sm:text-2xl">
                  {achievement.title}
                </h3>

                <p className="mt-3 font-semibold text-slate-500">
                  {achievement.organization}
                </p>

                <p className="mt-5 text-sm leading-7 text-slate-600">
                  {achievement.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}