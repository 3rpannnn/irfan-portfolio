"use client";

import type { IconType } from "react-icons";
import { FaLinkedinIn } from "react-icons/fa6";
import {
  FiArrowUpRight,
  FiMapPin,
} from "react-icons/fi";
import {
  SiGithub,
  SiGmail,
  SiWhatsapp,
} from "react-icons/si";

import { usePreferences } from "@/context/PreferencesContext";
import { profile } from "@/data/portfolio";

type ContactItem = {
  label: string;
  value: string;
  description: string;
  href: string;
  external: boolean;
  icon: IconType;
  iconClassName: string;
  hoverClassName: string;
};

export default function Contact() {
  const { t } = usePreferences();

  const whatsappMessage = encodeURIComponent(
    t(
      "Halo Irfan, saya melihat website portofolio Anda dan ingin berdiskusi lebih lanjut.",
      "Hello Irfan, I visited your portfolio website and would like to discuss something further.",
    ),
  );

  const contactItems: ContactItem[] = [
    {
      label: "WhatsApp",
      value: t(
        "Mulai percakapan langsung",
        "Start a direct conversation",
      ),
      description: t(
        "Untuk komunikasi cepat mengenai proyek, kolaborasi, atau kesempatan profesional.",
        "For quick communication about projects, collaboration, or professional opportunities.",
      ),
      href: `https://wa.me/${profile.whatsapp}?text=${whatsappMessage}`,
      external: true,
      icon: SiWhatsapp,
      iconClassName:
        "bg-[#25D366]/15 text-[#25D366] ring-[#25D366]/30",
      hoverClassName:
        "hover:bg-[#25D366]/5 dark:hover:bg-[#25D366]/5",
    },
    {
      label: "Email",
      value: profile.email,
      description: t(
        "Untuk proposal, undangan, dokumen, atau pembahasan yang lebih formal.",
        "For proposals, invitations, documents, or more formal discussions.",
      ),
      href: `mailto:${profile.email}`,
      external: false,
      icon: SiGmail,
      iconClassName:
        "bg-[#EA4335]/15 text-[#EA4335] ring-[#EA4335]/30",
      hoverClassName:
        "hover:bg-[#EA4335]/5 dark:hover:bg-[#EA4335]/5",
    },
    {
      label: "LinkedIn",
      value: "Muhammad Irfan Aprianto",
      description: t(
        "Lihat pengalaman, aktivitas, dan profil profesional saya.",
        "View my professional experience, activities, and profile.",
      ),
      href: profile.linkedin,
      external: true,
      icon: FaLinkedinIn,
      iconClassName:
        "bg-[#0A66C2]/15 text-[#0A66C2] ring-[#0A66C2]/30",
      hoverClassName:
        "hover:bg-[#0A66C2]/5 dark:hover:bg-[#0A66C2]/5",
    },
    {
      label: "GitHub",
      value: "3rpannnn",
      description: t(
        "Lihat repository, kode, dan pengembangan proyek saya.",
        "Explore my repositories, source code, and project development.",
      ),
      href: profile.github,
      external: true,
      icon: SiGithub,
      iconClassName:
        "bg-[#181717] text-white ring-slate-400/30 dark:bg-white dark:text-[#181717]",
      hoverClassName:
        "hover:bg-slate-100 dark:hover:bg-white/5",
    },
  ];

  return (
    <section
      id="kontak"
      className="scroll-mt-20 bg-slate-50 px-6 py-24 text-slate-950 transition-colors sm:py-32 dark:bg-slate-950 dark:text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-400">
              {t("Kontak", "Contact")}
            </p>

            <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              {t(
                "Terbuka untuk diskusi proyek dan kolaborasi teknik.",
                "Open to technical projects and collaboration.",
              )}
            </h2>

            <p className="mt-7 max-w-xl leading-8 text-slate-600 dark:text-slate-400">
              {t(
                "Saya terbuka untuk diskusi mengenai robotika, embedded system, Internet of Things, sistem kendali, computer vision, penelitian, praktik industri, dan pengembangan proyek elektronika.",
                "I am open to discussions involving robotics, embedded systems, the Internet of Things, control systems, computer vision, research, industrial placements, and electronics projects.",
              )}
            </p>

            <div className="mt-10 flex items-start gap-4 border-t border-slate-200 pt-7 dark:border-slate-800">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-cyan-600/10 text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-300">
                <FiMapPin className="h-5 w-5" />
              </div>

              <div>
                <p className="text-sm font-medium text-slate-500">
                  {t("Lokasi", "Location")}
                </p>

                <p className="mt-1 text-lg font-bold">
                  {profile.location}
                </p>

                <p className="mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-slate-400">
                  {t(
                    "Komunikasi awal dapat dilakukan melalui salah satu kanal di samping.",
                    "Initial communication is available through one of the listed channels.",
                  )}
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <div className="border-b border-slate-200 px-6 py-5 dark:border-slate-800 sm:px-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                {t(
                  "Pilih kanal komunikasi",
                  "Choose a communication channel",
                )}
              </p>
            </div>

            <div className="divide-y divide-slate-200 dark:divide-slate-800">
              {contactItems.map((contact) => {
                const Icon = contact.icon;

                return (
                  <a
                    key={contact.label}
                    href={contact.href}
                    target={contact.external ? "_blank" : undefined}
                    rel={
                      contact.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className={`group flex items-center gap-4 px-5 py-5 transition duration-300 sm:gap-5 sm:px-8 sm:py-6 ${contact.hoverClassName}`}
                  >
                    <div
                      className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ring-1 ${contact.iconClassName}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <p className="font-bold text-slate-950 dark:text-white">
                          {contact.label}
                        </p>

                        <span className="text-xs font-medium text-slate-400">
                          {t("Buka kontak", "Open contact")}
                        </span>
                      </div>

                      <p
                        className={`mt-1 font-semibold leading-6 text-slate-700 dark:text-slate-200 ${
                          contact.label === "Email"
                            ? "break-words text-sm [overflow-wrap:anywhere] sm:text-base"
                            : ""
                        }`}
                      >
                        {contact.value}
                      </p>

                      <p className="mt-2 hidden max-w-xl text-sm leading-6 text-slate-500 sm:block dark:text-slate-400">
                        {contact.description}
                      </p>
                    </div>

                    <FiArrowUpRight className="h-5 w-5 shrink-0 text-slate-400 transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-cyan-600 dark:group-hover:text-cyan-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}