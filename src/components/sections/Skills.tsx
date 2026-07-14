"use client";

import type { IconType } from "react-icons";
import {
  FiActivity,
  FiCheckCircle,
  FiCode,
  FiCpu,
  FiEye,
  FiTool,
  FiUsers,
} from "react-icons/fi";

import { usePreferences } from "@/context/PreferencesContext";
import { skillGroups } from "@/data/portfolio";

type SkillMeta = {
  icon: IconType;
  titleId: string;
  descriptionEn: string;
  iconBoxClassName: string;
  accentBarClassName: string;
  checkClassName: string;
  hoverClassName: string;
};

const skillMeta: Record<string, SkillMeta> = {
  Programming: {
    icon: FiCode,
    titleId: "Pemrograman",
    descriptionEn:
      "Programming languages and software tools used for system development.",
    iconBoxClassName:
      "bg-blue-500/15 text-blue-600 ring-blue-500/25 dark:text-blue-400",
    accentBarClassName: "bg-blue-500",
    checkClassName: "text-blue-600 dark:text-blue-400",
    hoverClassName:
      "hover:border-blue-400 dark:hover:border-blue-500/70",
  },
  "Embedded & IoT": {
    icon: FiCpu,
    titleId: "Embedded & IoT",
    descriptionEn:
      "Development of microcontroller, sensor, actuator, and data communication systems.",
    iconBoxClassName:
      "bg-violet-500/15 text-violet-600 ring-violet-500/25 dark:text-violet-400",
    accentBarClassName: "bg-violet-500",
    checkClassName:
      "text-violet-600 dark:text-violet-400",
    hoverClassName:
      "hover:border-violet-400 dark:hover:border-violet-500/70",
  },
  "Control & Automation": {
    icon: FiActivity,
    titleId: "Kendali & Otomasi",
    descriptionEn:
      "Implementation of control and automation methods for electronic systems.",
    iconBoxClassName:
      "bg-orange-500/15 text-orange-600 ring-orange-500/25 dark:text-orange-400",
    accentBarClassName: "bg-orange-500",
    checkClassName:
      "text-orange-600 dark:text-orange-400",
    hoverClassName:
      "hover:border-orange-400 dark:hover:border-orange-500/70",
  },
  "Artificial Intelligence": {
    icon: FiEye,
    titleId: "Kecerdasan Buatan",
    descriptionEn:
      "Development of data processing, machine learning, and computer vision systems.",
    iconBoxClassName:
      "bg-rose-500/15 text-rose-600 ring-rose-500/25 dark:text-rose-400",
    accentBarClassName: "bg-rose-500",
    checkClassName: "text-rose-600 dark:text-rose-400",
    hoverClassName:
      "hover:border-rose-400 dark:hover:border-rose-500/70",
  },
  "Electronics Engineering": {
    icon: FiTool,
    titleId: "Teknik Elektronika",
    descriptionEn:
      "Design, testing, integration, and troubleshooting of electronic systems.",
    iconBoxClassName:
      "bg-emerald-500/15 text-emerald-600 ring-emerald-500/25 dark:text-emerald-400",
    accentBarClassName: "bg-emerald-500",
    checkClassName:
      "text-emerald-600 dark:text-emerald-400",
    hoverClassName:
      "hover:border-emerald-400 dark:hover:border-emerald-500/70",
  },
  "Professional Skills": {
    icon: FiUsers,
    titleId: "Keterampilan Profesional",
    descriptionEn:
      "Supporting capabilities for structured technical project execution.",
    iconBoxClassName:
      "bg-amber-500/15 text-amber-600 ring-amber-500/25 dark:text-amber-400",
    accentBarClassName: "bg-amber-500",
    checkClassName:
      "text-amber-600 dark:text-amber-400",
    hoverClassName:
      "hover:border-amber-400 dark:hover:border-amber-500/70",
  },
};

export default function Skills() {
  const { t } = usePreferences();

  return (
    <section
      id="keahlian"
      className="scroll-mt-20 bg-slate-100 px-6 py-24 text-slate-950 transition-colors sm:py-32 dark:bg-slate-900 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-700 dark:text-cyan-400">
            {t("Keahlian", "Skills")}
          </p>

          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">
            {t(
              "Kompetensi teknis dan pengembangan sistem",
              "Technical and system development capabilities",
            )}
          </h2>

          <p className="mt-6 leading-8 text-slate-600 dark:text-slate-400">
            {t(
              "Kompetensi berikut diperoleh melalui perkuliahan, penelitian, kompetisi robotika, pengembangan proyek, dan pengalaman teknis.",
              "These capabilities were developed through academic study, research, robotics competitions, technical projects, and practical experience.",
            )}
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => {
            const meta =
              skillMeta[group.title] ??
              skillMeta["Electronics Engineering"];

            const GroupIcon = meta.icon;

            return (
              <article
                key={group.title}
                className={`group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 dark:bg-slate-950/60 ${meta.hoverClassName}`}
              >
                <div
                  aria-hidden="true"
                  className={`absolute inset-x-0 top-0 h-1 ${meta.accentBarClassName}`}
                />

                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ring-1 ${meta.iconBoxClassName}`}
                  >
                    <GroupIcon className="h-7 w-7" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold tracking-tight">
                      {t(meta.titleId, group.title)}
                    </h3>

                    <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                      {t(
                        group.description,
                        meta.descriptionEn,
                      )}
                    </p>
                  </div>
                </div>

                <div className="mt-7 flex flex-wrap gap-2.5">
                  {group.items.map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-2 text-xs font-medium text-slate-700 transition hover:-translate-y-0.5 hover:bg-white hover:shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:bg-slate-800"
                    >
                      <FiCheckCircle
                        className={`h-4 w-4 shrink-0 ${meta.checkClassName}`}
                      />

                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}