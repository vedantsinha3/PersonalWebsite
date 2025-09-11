function About() {
  return (
    <section id="about" className="section">
      <div className="container grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About</h2>
          <p className="mt-4 text-neutral-300">
            I enjoy turning research and prototypes into reliable, user‑facing products. My recent work spans
            NLP tagging, computer vision, and realtime data flows. I care about clean architecture, measurable
            impact, and thoughtful UI.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {['NLP', 'Computer Vision', 'APIs', 'Realtime', 'React UIs', 'Data Pipelines'].map((skill) => (
            <div key={skill} className="card p-4 text-center text-sm text-neutral-200">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

