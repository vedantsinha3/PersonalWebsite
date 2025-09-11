function Hero() {
  return (
    <section id="home" className="section">
      <div className="container grid items-center gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Vedant Sinha — ML & Full‑Stack Engineer
          </h1>
          <p className="mt-4 text-neutral-300 max-w-prose">
            I build intelligent, performant products across the stack: NLP/computer vision pipelines,
            scalable APIs, and polished React UIs. Recently at 4L Data Intelligence I automated classification
            of 10k+ documents and cut model inference time by 25%.
          </p>
          <div className="mt-8 flex gap-3">
            <a href="#projects" className="inline-flex items-center rounded-lg bg-white text-neutral-900 px-4 py-2 text-sm font-medium">
              View Projects
            </a>
            <a href="#experience" className="inline-flex items-center rounded-lg border border-white/20 px-4 py-2 text-sm font-medium text-white">
              Experience
            </a>
          </div>
        </div>
        <div className="md:col-span-5">
          <div className="card p-8">
            <ul className="text-sm text-neutral-300 space-y-2">
              <li><span className="text-white">B.S. Computer Science & Engineering</span> — UC Merced (May 2026)</li>
              <li>Python, C++, TypeScript, React, Flask, Tauri</li>
              <li>OpenCV, GPT‑4 Vision, Snowflake, Docker</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

