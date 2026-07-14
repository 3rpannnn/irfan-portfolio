export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-white">
      <div className="max-w-3xl text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Personal Portfolio
        </p>

        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Muhammad Irfan Aprianto
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          Mahasiswa D4 Teknik Elektronika yang berfokus pada robotika,
          embedded system, Internet of Things, sistem kendali, dan computer
          vision.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/6281233148001"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
          >
            Hubungi melalui WhatsApp
          </a>

          <a
            href="https://linkedin.com/in/muhammadirfanaprianto"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-slate-600 px-6 py-3 font-semibold transition hover:border-cyan-400 hover:text-cyan-400"
          >
            Buka LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}