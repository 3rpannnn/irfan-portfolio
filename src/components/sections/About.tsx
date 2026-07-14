import { statistics } from "@/data/portfolio";

export default function About() {
  return (
    <section
      id="tentang"
      className="bg-white px-6 py-24 text-slate-950 sm:py-32"
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
          </div>

          <div>
            <p className="text-lg leading-8 text-slate-700">
              Saya merupakan mahasiswa D4 Teknik Elektronika Universitas
              Negeri Yogyakarta. Fokus pengembangan saya mencakup robotika,
              embedded system, sistem kendali, Internet of Things, computer
              vision, dan otomasi industri.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Saya memiliki pengalaman dalam pengembangan sistem mekanik UAV,
              integrasi perangkat keras dan perangkat lunak, telemetri, kontrol
              PID, logika fuzzy, Kalman Filter, mikrokontroler, dan pengolahan
              data berbasis kecerdasan buatan. Saya juga aktif dalam kompetisi
              robotik, penelitian institusional, dan proyek teknik terapan.
            </p>

            <p className="mt-5 leading-8 text-slate-600">
              Dalam setiap proyek, saya berusaha memahami masalah secara
              sistematis, merancang solusi yang dapat diuji, dan mengevaluasi
              hasil berdasarkan fungsi sistem.
            </p>
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