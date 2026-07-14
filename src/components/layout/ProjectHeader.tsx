"use client";

import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";

import PreferencesControls from "@/components/layout/PreferencesControls";
import { usePreferences } from "@/context/PreferencesContext";
import { profile } from "@/data/portfolio";

export default function ProjectHeader() {
  const { t } = usePreferences();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/90">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-6 lg:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-3"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-600/30 bg-cyan-600/10 text-sm font-bold text-cyan-700 dark:border-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-300">
            MI
          </span>

          <span className="hidden sm:block">
            <span className="block text-sm font-bold text-slate-950 dark:text-white">
              Muhammad Irfan
            </span>

            <span className="mt-0.5 block text-xs text-slate-500">
              {t("Detail Proyek", "Project Detail")}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-2">
          <Link
            href="/#proyek"
            className="hidden items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-slate-600 transition hover:bg-slate-100 hover:text-cyan-700 dark:text-slate-300 dark:hover:bg-white/5 dark:hover:text-cyan-300 md:inline-flex"
          >
            <FaArrowLeft className="h-3.5 w-3.5" />

            {t("Kembali ke Proyek", "Back to Projects")}
          </Link>

          <PreferencesControls />

          <a
            href={profile.cv}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-lg border border-slate-300 px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300 lg:inline-flex"
          >
            {t("Unduh CV", "Download CV")}
          </a>
        </div>
      </nav>
    </header>
  );
}