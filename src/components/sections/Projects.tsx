import Link from "next/link";
import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="proyek"
      className="scroll-mt-20 bg-white px-6 py-24 text-slate-950 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Proyek Teknik
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Implementasi sistem elektronika dan kecerdasan buatan
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Proyek berikut mencakup robotika, Internet of Things, sistem
              kendali, embedded system, pengolahan audio, dan computer vision.
            </p>
          </div>

          <p className="max-w-sm text-sm leading-6 text-slate-500">
            Setiap proyek dikembangkan melalui proses identifikasi masalah,
            perancangan sistem, implementasi, pengujian, dan evaluasi.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block h-full"
            >
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300 group-hover:shadow-lg">
                <div className="relative flex min-h-48 items-end overflow-hidden bg-slate-950 p-6">
                  <div
                    aria-hidden="true"
                    className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-cyan-400/20 blur-3xl transition duration-500 group-hover:bg-cyan-400/30"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl"
                  />

                  <div className="relative">
                    <p className="text-sm font-semibold text-cyan-400">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <p className="mt-3 text-sm text-slate-400">
                      {project.category}
                    </p>

                    <h3 className="mt-2 text-xl font-bold leading-snug text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center justify-between gap-4">
                    <p className="text-sm font-semibold text-cyan-700">
                      {project.role}
                    </p>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                      {project.year}
                    </span>
                  </div>

                  <p className="mt-5 flex-1 text-sm leading-7 text-slate-600">
                    {project.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-700"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>

                  <div className="mt-7 flex items-center justify-between border-t border-slate-100 pt-5">
                    <span className="text-sm font-semibold text-slate-700 transition group-hover:text-cyan-700">
                      Lihat detail proyek
                    </span>

                    <span
                      aria-hidden="true"
                      className="text-xl text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-600"
                    >
                      →
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}