"use client";

import { usePreferences } from "@/context/PreferencesContext";

export default function PreferencesControls() {
  const {
    language,
    theme,
    toggleLanguage,
    toggleTheme,
  } = usePreferences();

  const languageLabel =
    language === "id"
      ? "Switch to English"
      : "Ganti ke Bahasa Indonesia";

  const themeLabel =
    theme === "dark"
      ? language === "id"
        ? "Gunakan mode terang"
        : "Use light mode"
      : language === "id"
        ? "Gunakan mode gelap"
        : "Use dark mode";

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={toggleLanguage}
        aria-label={languageLabel}
        title={languageLabel}
        className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 text-sm font-bold text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="h-4 w-4"
        >
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18" />
          <path d="M12 3c2.3 2.4 3.5 5.4 3.5 9S14.3 18.6 12 21" />
          <path d="M12 3C9.7 5.4 8.5 8.4 8.5 12S9.7 18.6 12 21" />
        </svg>

        <span>{language.toUpperCase()}</span>
      </button>

      <button
        type="button"
        onClick={toggleTheme}
        aria-label={themeLabel}
        title={themeLabel}
        className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700 transition hover:border-cyan-500 hover:text-cyan-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
      >
        {theme === "dark" ? (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2" />
            <path d="M12 20v2" />
            <path d="m4.93 4.93 1.42 1.42" />
            <path d="m17.65 17.65 1.42 1.42" />
            <path d="M2 12h2" />
            <path d="M20 12h2" />
            <path d="m6.35 17.65-1.42 1.42" />
            <path d="m19.07 4.93-1.42 1.42" />
          </svg>
        ) : (
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            className="h-5 w-5"
          >
            <path d="M20.8 15.3A9 9 0 0 1 8.7 3.2 9 9 0 1 0 20.8 15.3Z" />
          </svg>
        )}
      </button>
    </div>
  );
}