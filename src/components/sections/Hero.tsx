import { profile } from "@/data/portfolio";

export default function Hero() {
  const whatsappMessage = encodeURIComponent(
    "Halo Irfan, saya melihat website portofolio Anda dan ingin berdiskusi lebih lanjut.",
  );

  return (
    <section
      id="beranda"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-950 px-6 pb-20 pt-28 text-white"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-cyan-400">
            Personal Portfolio
          </p>

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Muhammad Irfan
            <span className="block text-slate-400">Aprianto</span>
          </h1>

          <p className="mt-6 max-w-3xl text-lg font-medium leading-8 text-slate-300 sm:text-xl">
            {profile.headline}
          </p>

          <p className="mt-5 max-w-3xl leading-7 text-slate-400">
            {profile.description}
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#proyek"
              className="rounded-lg bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300"
            >
              Lihat Proyek
            </a>

            <a
              href={`https://wa.me/${profile.whatsapp}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-slate-700 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-300"
            >
              Hubungi Saya
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-400">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              LinkedIn
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-cyan-300"
            >
              GitHub
            </a>

            <a
              href={`mailto:${profile.email}`}
              className="transition hover:text-cyan-300"
            >
              Email
            </a>

            <span>{profile.location}</span>
          </div>
        </div>
      </div>
    </section>
  );
}