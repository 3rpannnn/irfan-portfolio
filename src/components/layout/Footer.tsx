import { profile } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-semibold text-white">
            {profile.name}
          </p>

          <p className="mt-1 text-sm">
            Electronics Engineering Portfolio
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm">
          <a
            href="#beranda"
            className="transition hover:text-cyan-400"
          >
            Kembali ke atas
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            LinkedIn
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-cyan-400"
          >
            GitHub
          </a>
        </div>

        <p className="text-sm">
          © {new Date().getFullYear()} {profile.shortName}
        </p>
      </div>
    </footer>
  );
}