import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { PreferencesProvider } from "@/context/PreferencesContext";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const preferenceScript = `
  (function () {
    try {
      var savedTheme = localStorage.getItem("portfolio-theme");
      var savedLanguage = localStorage.getItem("portfolio-language");

      var isDark =
        savedTheme === "dark" ||
        (!savedTheme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      document.documentElement.classList.toggle("dark", isDark);
      document.documentElement.style.colorScheme =
        isDark ? "dark" : "light";

      document.documentElement.lang =
        savedLanguage === "en" ? "en" : "id";
    } catch (error) {
      document.documentElement.classList.add("dark");
      document.documentElement.lang = "id";
    }
  })();
`;

export const metadata: Metadata = {
  title: {
    default:
      "Muhammad Irfan Aprianto | Electronics Engineering Portfolio",
    template: "%s | Muhammad Irfan Aprianto",
  },
  description:
    "Portofolio Muhammad Irfan Aprianto dalam bidang robotika, embedded system, Internet of Things, sistem kendali, computer vision, dan otomasi industri.",
  authors: [
    {
      name: "Muhammad Irfan Aprianto",
    },
  ],
  creator: "Muhammad Irfan Aprianto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: preferenceScript,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-50 font-sans text-slate-950 antialiased transition-colors dark:bg-slate-950 dark:text-slate-50`}
      >
        <PreferencesProvider>
          {children}
        </PreferencesProvider>
      </body>
    </html>
  );
}