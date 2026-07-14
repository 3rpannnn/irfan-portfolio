import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getProjectBySlug,
  projects,
} from "@/data/portfolio";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Proyek Tidak Ditemukan",
    };
  }

  return {
    title: `${project.title} | Muhammad Irfan Aprianto`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="border-b border-slate-800 px-6 pb-20 pt-10 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/#proyek"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition hover:text-cyan-400"
          >
            <span aria-hidden="true">←</span>
            Kembali ke daftar proyek
          </Link>

          <div className="mt-16 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-300">
                {project.category}
              </span>

              <span className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300">
                {project.year}
              </span>
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
              {project.title}
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
              {project.description}
            </p>

            <div className="mt-10">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">
                Peran
              </p>

              <p className="mt-2 text-lg font-semibold text-cyan-300">
                {project.role}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <article>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Ringkasan
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Gambaran proyek
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-300">
                {project.overview}
              </p>
            </article>

            <article className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Kontribusi
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Pekerjaan yang dilakukan
              </h2>

              <ul className="mt-8 space-y-4">
                {project.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="flex gap-4 rounded-xl border border-slate-800 bg-slate-900/70 p-5 text-slate-300"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-400"
                    />

                    <span className="leading-7">{contribution}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="mt-16">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-cyan-400">
                Alur Sistem
              </p>

              <h2 className="mt-4 text-3xl font-bold tracking-tight">
                Tahapan pengembangan
              </h2>

              <div className="mt-8 space-y-4">
                {project.workflow.map((step, index) => (
                  <div
                    key={step}
                    className="flex gap-5 rounded-xl border border-slate-800 p-5"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-400 font-bold text-slate-950">
                      {index + 1}
                    </div>

                    <p className="pt-1.5 leading-7 text-slate-300">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </article>
          </div>

          <aside>
            <div className="sticky top-24 rounded-2xl border border-slate-800 bg-slate-900/70 p-7">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                Teknologi
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-300"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              <dl className="mt-8 space-y-6 border-t border-slate-800 pt-8">
                <div>
                  <dt className="text-sm text-slate-500">
                    Tahun
                  </dt>

                  <dd className="mt-1 font-semibold">
                    {project.year}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-500">
                    Bidang
                  </dt>

                  <dd className="mt-1 font-semibold">
                    {project.category}
                  </dd>
                </div>

                <div>
                  <dt className="text-sm text-slate-500">
                    Peran
                  </dt>

                  <dd className="mt-1 font-semibold">
                    {project.role}
                  </dd>
                </div>
              </dl>

              <Link
                href="/#kontak"
                className="mt-8 block rounded-lg bg-cyan-400 px-5 py-3 text-center font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Diskusikan Proyek
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}