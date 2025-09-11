import { useScrollReveal } from '../hooks/useScrollReveal'

type Item = {
  period: string
  title: string
  org: string
  summary: string
  href?: string
}

const items: Item[] = [
  {
    period: 'May 2025 — Aug 2025',
    title: 'Machine Learning Engineer Intern',
    org: '4L Data Intelligence',
    summary: 'NLP tagging for 10k+ docs; 25% faster inference; Snowflake ingestion',
  },
  {
    period: 'Nov 2024 — Present',
    title: 'Anchor — Productivity App',
    org: 'Side Project',
    summary: 'Vision API distraction detection; +20% focus time; Tauri desktop app',
  },
  {
    period: 'Apr 2025',
    title: 'Owligator — Wine Collection Tracker',
    org: 'Side Project',
    summary: 'GPT‑4V + OpenCV; <200ms API; +18% accuracy with Real‑ESRGAN',
  },
  {
    period: 'Jul 2025',
    title: 'Wordle Solver with Recommendations',
    org: 'Side Project',
    summary: 'Entropy scoring; <100ms Flask API; 40% faster C++ fallback',
  },
  {
    period: 'May 2023 — Aug 2023',
    title: 'Engineering Intern',
    org: 'Labcorp',
    summary: 'Data quality validation; −30% inconsistencies; connectivity maps (100+)',
  },
  {
    period: 'May 2026',
    title: 'B.S. CSE',
    org: 'UC Merced',
    summary: 'DSA, AI, CV, Algorithm Design, Digital Processing, OOP',
  },
]

function Timeline() {
  useScrollReveal()
  return (
    <section id="timeline" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Timeline</h2>
        <div className="mt-8 relative">
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" aria-hidden />
          <ul className="space-y-8">
            {items.map((item, idx) => (
              <li key={idx} className="relative" data-reveal>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                  <div className={`md:col-span-1 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                    <div className="card p-5">
                      <div className="text-xs uppercase tracking-wide text-neutral-400">{item.period}</div>
                      <div className="mt-1 text-sm text-neutral-300">{item.org}</div>
                      <h3 className="mt-2 text-base font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm text-neutral-300">{item.summary}</p>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Timeline

