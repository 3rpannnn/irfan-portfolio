import { profile } from "@/data/portfolio";

const navigation = [
  { name: "Tentang", href: "#tentang" },
  { name: "Keahlian", href: "#keahlian" },
  { name: "Pengalaman", href: "#pengalaman" },
  { name: "Proyek", href: "#proyek" },
  { name: "Prestasi", href: "#prestasi" },
  { name: "Kontak", href: "#kontak" },
];

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label="Navigasi utama"
      >
        <a
          href="#beranda"
          className="text-lg font-bold tracking-tight text-white"
        >
          {profile.shortName}
          <span className="text-cyan-400">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-slate-300 transition hover:text-cyan-400"
            >
              {item.name}
            </a>
          ))}
        </div>

        <a
          href={profile.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-cyan-400/60 px-4 py-2 text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
        >
          Unduh CV
        </a>
      </nav>
    </header>
  );
}