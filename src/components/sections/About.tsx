import Image from "next/image";

import { profile, statistics } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="tentang"
      className="scroll-mt-20 bg-white px-6 py-24 text-slate-950 sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700">
              Tentang Saya
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Mengembangkan teknologi melalui integrasi sistem.
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Fokus saya mencakup pengembangan perangkat elektronika, sistem
              embedded, otomasi, robotika, dan penerapan kecerdasan buatan pada
              sistem teknik.
            </p>
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-700">
              Saya merupakan mahasiswa D4 Teknik Elektronika Universitas Negeri
              Yogyakarta. Bidang yang saya pelajari mencakup robotika, embedded
              system, sistem kendali, Internet of Things, computer vision, dan
              otomasi industri.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Saya memiliki pengalaman dalam pengembangan sistem mekanik UAV,
              integrasi perangkat keras dan perangkat lunak, telemetri, kontrol
              PID, logika fuzzy, Kalman Filter, mikrokontroler, dan pengolahan
              data berbasis kecerdasan buatan.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Saya juga aktif dalam kompetisi robotika nasional, penelitian
              institusional, publikasi ilmiah, dan pengembangan proyek teknik
              terapan. Dalam setiap proyek, saya menerapkan proses perancangan,
              integrasi, pengujian, dan evaluasi sistem secara terstruktur.
            </p>

            <div className="mt-10 flex flex-col gap-5 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center">
              <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
                <Image
                  src={profile.unyLogo}
                  alt="Logo Universitas Negeri Yogyakarta"
                  fill
                  sizes="80px"
                  className="object-contain p-3"
                />
              </div>

              <div>
                <p className="text-lg font-bold text-slate-950">
                  Universitas Negeri Yogyakarta
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  D4 Teknik Elektronika
                </p>

                <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                  <span className="font-medium text-slate-600">
                    2023 hingga sekarang
                  </span>

                  <span className="font-semibold text-cyan-700">
                    IPK 3,77 dari 4,00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {statistics.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
            >
              <p className="text-3xl font-bold tracking-tight text-slate-950">
                {item.value}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}