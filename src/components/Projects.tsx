import { projects } from '../data/projects'

function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Projects</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="card p-6">
              <h3 className="text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-neutral-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-5 flex gap-3">
                {p.link && (
                  <a href={p.link} target="_blank" className="text-sm text-white underline underline-offset-4">
                    Live
                  </a>
                )}
                {p.repo && (
                  <a href={p.repo} target="_blank" className="text-sm text-neutral-300 hover:text-white">
                    Code
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

