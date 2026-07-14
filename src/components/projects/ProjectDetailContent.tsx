"use client";

import Link from "next/link";
import {
  FaCalendarDays,
  FaLayerGroup,
  FaUserGear,
} from "react-icons/fa6";

import ProjectHeader from "@/components/layout/ProjectHeader";
import { usePreferences } from "@/context/PreferencesContext";

type ProjectDetail = {
  slug: string;
  title: string;
  year: string;
  category: string;
  description: string;
  role: string;
  technologies: string[];
};

type ProjectDetailContentProps = {
  project: ProjectDetail;
};

export default function ProjectDetailContent({
  project,
}: ProjectDetailContentProps) {
  const { t } = usePreferences();

  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 transition-colors dark:bg-slate-950 dark:text-white">
      <ProjectHeader />

      <section className="border-b border-slate-200 px-6 pb-20 pt-36 dark:border-slate-800">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#proyek"
            className="inline-flex items-center text-sm font-semibold text-slate-500 transition hover:text-cyan-700 dark:hover:text-cyan-300 md:hidden"
          >
            ← {t("Kembali ke daftar proyek", "Back to project list")}
          </Link>

          <div className="mt-10 max-w-4xl md:mt-0">
            <div className="flex flex-wrap gap-3">
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                {project.category}
              </span>

              <span className="rounded-full border border-slate-300 px-4 py-2 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
                {project.year}
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <article>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400">
              {t("Gambaran Proyek", "Project Overview")}
            </p>

            <h2 className="mt-4 text-3xl font-bold tracking-tight">
              {t(
                "Implementasi dan ruang lingkup",
                "Implementation and scope",
              )}
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {project.description}
            </p>

            <p className="mt-5 leading-8 text-slate-500 dark:text-slate-400">
              {t(
                "Proyek ini dikembangkan melalui identifikasi kebutuhan, perancangan sistem, integrasi perangkat, pengujian fungsi, dan evaluasi hasil.",
                "This project was developed through requirement identification, system design, device integration, functional testing, and result evaluation.",
              )}
            </p>

            <div className="mt-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {t("Teknologi yang digunakan", "Technologies used")}
              </p>

              <div className="mt-5 flex flex-wrap gap-3">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-700 shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <aside>
            <div className="sticky top-28 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm dark:border-slate-800 dark:bg-slate-900/70">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-700 dark:text-cyan-400">
                {t("Informasi Proyek", "Project Information")}
              </p>

              <dl className="mt-7 space-y-6">
                <div className="flex gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
                  <FaCalendarDays className="mt-1 h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-300" />

                  <div>
                    <dt className="text-sm text-slate-500">
                      {t("Tahun", "Year")}
                    </dt>

                    <dd className="mt-1 font-bold">
                      {project.year}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4 border-b border-slate-200 pb-6 dark:border-slate-800">
                  <FaLayerGroup className="mt-1 h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-300" />

                  <div>
                    <dt className="text-sm text-slate-500">
                      {t("Bidang", "Category")}
                    </dt>

                    <dd className="mt-1 font-bold">
                      {project.category}
                    </dd>
                  </div>
                </div>

                <div className="flex gap-4">
                  <FaUserGear className="mt-1 h-5 w-5 shrink-0 text-cyan-700 dark:text-cyan-300" />

                  <div>
                    <dt className="text-sm text-slate-500">
                      {t("Peran", "Role")}
                    </dt>

                    <dd className="mt-1 font-bold">
                      {project.role}
                    </dd>
                  </div>
                </div>
              </dl>

              <Link
                href="/#proyek"
                className="mt-8 block rounded-xl bg-cyan-600 px-5 py-3 text-center font-bold text-white transition hover:bg-cyan-500 dark:bg-cyan-400 dark:text-slate-950 dark:hover:bg-cyan-300"
              >
                {t("Lihat Proyek Lain", "View Other Projects")}
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}