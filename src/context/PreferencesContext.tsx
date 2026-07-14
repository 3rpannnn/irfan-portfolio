"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type Language = "id" | "en";
export type Theme = "light" | "dark";

type PreferencesContextValue = {
  language: Language;
  theme: Theme;
  toggleLanguage: () => void;
  toggleTheme: () => void;
  t: (indonesian: string, english: string) => string;
};

const PreferencesContext =
  createContext<PreferencesContextValue | null>(null);

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const THEME_STORAGE_KEY = "portfolio-theme";

export function PreferencesProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [language, setLanguage] = useState<Language>("id");
  const [theme, setTheme] = useState<Theme>("dark");
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const savedLanguage = window.localStorage.getItem(
      LANGUAGE_STORAGE_KEY,
    );

    const savedTheme = window.localStorage.getItem(
      THEME_STORAGE_KEY,
    );

    const preferredLanguage: Language =
      savedLanguage === "en" ? "en" : "id";

    const preferredTheme: Theme =
      savedTheme === "light" || savedTheme === "dark"
        ? savedTheme
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";

    setLanguage(preferredLanguage);
    setTheme(preferredTheme);
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    document.documentElement.lang = language;

    window.localStorage.setItem(
      LANGUAGE_STORAGE_KEY,
      language,
    );
  }, [language, isReady]);

  useEffect(() => {
    if (!isReady) {
      return;
    }

    document.documentElement.classList.toggle(
      "dark",
      theme === "dark",
    );

    document.documentElement.style.colorScheme = theme;

    window.localStorage.setItem(
      THEME_STORAGE_KEY,
      theme,
    );
  }, [theme, isReady]);

  const toggleLanguage = useCallback(() => {
    setLanguage((currentLanguage) =>
      currentLanguage === "id" ? "en" : "id",
    );
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((currentTheme) =>
      currentTheme === "dark" ? "light" : "dark",
    );
  }, []);

  const value = useMemo<PreferencesContextValue>(
    () => ({
      language,
      theme,
      toggleLanguage,
      toggleTheme,
      t: (indonesian, english) =>
        language === "id" ? indonesian : english,
    }),
    [
      language,
      theme,
      toggleLanguage,
      toggleTheme,
    ],
  );

  return (
    <PreferencesContext.Provider value={value}>
      {children}
    </PreferencesContext.Provider>
  );
}

export function usePreferences() {
  const context = useContext(PreferencesContext);

  if (!context) {
    throw new Error(
      "usePreferences harus digunakan di dalam PreferencesProvider.",
    );
  }

  return context;
}