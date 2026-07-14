"use client";

import Image from "next/image";

import { usePreferences } from "@/context/PreferencesContext";
import { profile } from "@/data/portfolio";

export default function Hero() {
  const { t } = usePreferences();

  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-slate-50 px-6 pb-20 pt-32 text-slate-950 transition-colors dark:bg-slate-950 dark:text-white"
    >
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-500/5 blur-3xl dark:bg-blue-500/10"
      />

      <div className="relative mx-auto grid min-h-[calc(100vh-8rem)] max-w-7xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
        <div>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Muhammad Irfan

            <span className="block text-slate-500 dark:text-slate-400">
              Aprianto
            </span>
          </h1>

          <p className="mt-8 max-w-3xl text-lg font-medium leading-8 text-slate-700 sm:text-xl dark:text-slate-300">
            {t(
              "Robotika, Sistem Embedded, Internet of Things, Sistem Kendali, dan Computer Vision",
              "Robotics, Embedded Systems, Internet of Things, Control Systems, and Computer Vision",
            )}
          </p>

          <p className="mt-5 max-w-3xl leading-7 text-slate-600 dark:text-slate-400">
            {t(
              "Mahasiswa D4 Teknik Elektronika Universitas Negeri Yogyakarta dengan minat pada robotika, embedded system, sistem kendali, Internet of Things, computer vision, dan otomasi industri.",
              "An Electronics Engineering student at Universitas Negeri Yogyakarta with interests in robotics, embedded systems, control systems, the Internet of Things, computer vision, and industrial automation.",
            )}
          </p>
        </div>

        <div className="mx-auto w-full max-w-sm lg:max-w-md">
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/40 transition-colors dark:border-slate-800 dark:bg-slate-900 dark:shadow-cyan-950/30">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[1.5rem] bg-slate-100 dark:bg-slate-800">
              <Image
                src={profile.image}
                alt="Muhammad Irfan Aprianto"
                fill
                priority
                sizes="(max-width: 1024px) 384px, 448px"
                className="object-cover object-top"
              />
            </div>

            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/30 bg-white/85 p-4 text-slate-950 shadow-lg backdrop-blur-md dark:border-white/10 dark:bg-slate-950/80 dark:text-white">
              <p className="font-semibold">
                {t(
                  "Mahasiswa D4 Teknik Elektronika",
                  "Electronics Engineering Student",
                )}
              </p>

              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">
                Universitas Negeri Yogyakarta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}