import Image from "next/image";

import { achievements } from "@/data/portfolio";

export default function Achievements() {
  return (
    <section
      id="prestasi"
      className="scroll-mt-20 bg-white px-6 py-24 text-slate-950 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-slate-300 pb-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Prestasi dan Publikasi
            </p>
          </div>

          <div>
            <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Rekam jejak dalam penelitian, publikasi, dan kompetisi teknik.
            </h2>

            <p className="mt-6 max-w-3xl leading-8 text-slate-600">
              Bagian ini memuat capaian yang dapat diverifikasi melalui
              publikasi, sertifikat, dokumentasi kompetisi, dan kegiatan
              penelitian.
            </p>
          </div>
        </div>

        <div>
          {achievements.map((achievement, index) => (
            <article
              key={`${achievement.year}-${achievement.title}`}
              className="grid gap-8 border-b border-slate-200 py-12 lg:grid-cols-[0.35fr_1fr] lg:gap-16"
            >
              <div>
                <p className="text-4xl font-bold tracking-tight text-slate-300">
                  {achievement.year}
                </p>

                <p className="mt-4 text-sm font-semibold uppercase tracking-[0.18em] text-cyan-700">
                  {achievement.type}
                </p>

                <p className="mt-3 text-sm text-slate-400">
                  {String(index + 1).padStart(2, "0")}
                </p>
              </div>

              <div>
                <h3 className="max-w-4xl text-2xl font-bold leading-snug tracking-tight sm:text-3xl">
                  {achievement.title}
                </h3>

                <p className="mt-3 font-semibold text-slate-500">
                  {achievement.organization}
                </p>

                <p className="mt-6 max-w-3xl leading-8 text-slate-600">
                  {achievement.description}
                </p>

                {achievement.image ? (
                  <a
                    href={achievement.image}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-8 block max-w-4xl"
                    aria-label={`Buka dokumentasi ${achievement.title}`}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                      <Image
                        src={achievement.image}
                        alt={achievement.imageAlt ?? achievement.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 896px"
                        className="object-contain p-3 transition duration-300 group-hover:scale-[1.01]"
                      />
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4">
                      <p className="text-sm font-semibold text-slate-700">
                        Lihat dokumentasi
                      </p>

                      <span
                        aria-hidden="true"
                        className="text-lg text-slate-400 transition group-hover:translate-x-1 group-hover:text-cyan-700"
                      >
                        ↗
                      </span>
                    </div>
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}