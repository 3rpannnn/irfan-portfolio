import { profile } from "@/data/portfolio";

const contactLinks = [
  {
    label: "WhatsApp",
    value: "Mulai percakapan",
    href: `https://wa.me/${profile.whatsapp}?text=${encodeURIComponent(
      "Halo Irfan, saya melihat website portofolio Anda dan ingin berdiskusi lebih lanjut.",
    )}`,
    external: true,
  },
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "Muhammad Irfan Aprianto",
    href: profile.linkedin,
    external: true,
  },
  {
    label: "GitHub",
    value: "3rpannnn",
    href: profile.github,
    external: true,
  },
];

export default function Contact() {
  return (
    <section
      id="kontak"
      className="scroll-mt-20 bg-slate-950 px-6 py-24 text-white sm:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
              Kontak
            </p>

            <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              Terbuka untuk diskusi proyek dan kolaborasi teknik.
            </h2>

            <p className="mt-6 max-w-xl leading-8 text-slate-400">
              Saya terbuka untuk diskusi mengenai robotika, embedded system,
              Internet of Things, sistem kendali, computer vision, penelitian,
              praktik industri, dan pengembangan proyek elektronika.
            </p>

            <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <p className="text-sm text-slate-500">Lokasi</p>

              <p className="mt-2 text-lg font-semibold">
                {profile.location}
              </p>

              <p className="mt-5 text-sm leading-6 text-slate-400">
                Komunikasi awal dapat dilakukan melalui WhatsApp, email,
                LinkedIn, atau GitHub.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {contactLinks.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target={contact.external ? "_blank" : undefined}
                rel={contact.external ? "noopener noreferrer" : undefined}
                className="group flex min-h-44 flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-slate-900"
              >
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-400">
                    {contact.label}
                  </p>

                  <p className="mt-4 break-words font-semibold leading-7 text-slate-200">
                    {contact.value}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm text-slate-500 transition group-hover:text-slate-300">
                    Buka kontak
                  </span>

                  <span
                    aria-hidden="true"
                    className="text-xl text-slate-500 transition group-hover:translate-x-1 group-hover:text-cyan-400"
                  >
                    ↗
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}