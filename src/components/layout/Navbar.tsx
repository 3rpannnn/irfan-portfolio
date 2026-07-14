"use client";

import { useState } from "react";

import PreferencesControls from "@/components/layout/PreferencesControls";
import { usePreferences } from "@/context/PreferencesContext";
import { profile } from "@/data/portfolio";

const navigation = [
  {
    href: "#tentang",
    id: "Tentang",
    en: "About",
  },
  {
    href: "#keahlian",
    id: "Keahlian",
    en: "Skills",
  },
  {
    href: "#pengalaman",
    id: "Pengalaman",
    en: "Experience",
  },
  {
    href: "#proyek",
    id: "Proyek",
    en: "Projects",
  },
  {
    href: "#prestasi",
    id: "Prestasi",
    en: "Achievements",
  },
  {
    href: "#kontak",
    id: "Kontak",
    en: "Contact",
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t } = usePreferences();

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-slate-950/90">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8"
        aria-label={t(
          "Navigasi utama",
          "Main navigation",
        )}
      >
        <a
          href="#beranda"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label={t(
            "Kembali ke beranda",
            "Return to homepage",
          )}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-600/30 bg-cyan-600/10 text-sm font-bold text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300">
            MI
          </span>

          <span className="hidden sm:block">
            <span className="block text-sm font-bold tracking-tight text-slate-950 dark:text-white">
              Muhammad Irfan
            </span>

            <span className="mt-0.5 block text-xs text-slate-500">
              {t(
                "Teknik Elektronika",
                "Electronics Engineering",
              )}
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
            >
              {t(item.id, item.en)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <PreferencesControls />

          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300 xl:inline-flex"
          >
            {t("Unduh CV", "Download CV")}
          </a>

          <button
            type="button"
            onClick={() =>
              setIsMenuOpen((current) => !current)
            }
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300 lg:hidden"
            aria-label={
              isMenuOpen
                ? t(
                    "Tutup menu navigasi",
                    "Close navigation menu",
                  )
                : t(
                    "Buka menu navigasi",
                    "Open navigation menu",
                  )
            }
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
          >
            <span
              className="flex w-5 flex-col gap-1.5"
              aria-hidden="true"
            >
              <span
                className={`h-0.5 w-full bg-current transition ${
                  isMenuOpen
                    ? "translate-y-2 rotate-45"
                    : ""
                }`}
              />

              <span
                className={`h-0.5 w-full bg-current transition ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />

              <span
                className={`h-0.5 w-full bg-current transition ${
                  isMenuOpen
                    ? "-translate-y-2 -rotate-45"
                    : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {isMenuOpen ? (
        <div
          id="mobile-navigation"
          className="border-t border-slate-200 bg-white px-6 pb-6 pt-4 dark:border-white/10 dark:bg-slate-950 lg:hidden"
        >
          <div className="mx-auto grid max-w-7xl gap-1">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="rounded-xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-300"
              >
                {t(item.id, item.en)}
              </a>
            ))}

            <a
              href={profile.cv}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenu}
              className="mt-3 rounded-xl bg-cyan-600 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-cyan-500 xl:hidden"
            >
              {t("Unduh CV", "Download CV")}
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}