import { useScrollReveal } from '../hooks/useScrollReveal'
import { ArrowUpRight } from 'lucide-react' // A nice icon for external links

// Enhanced Item type: summary is now an array for bullet points
type Item = {
  period: string
  title: string
  org: string
  summary: string[] // Changed from string to string[]
  href?: string
}

// Data is reordered (reverse chronological) and summaries are improved
const items: Item[] = [
  {
    period: 'Nov 2024 — Present',
    title: 'Anchor — Productivity App',
    org: 'Personal Project',
    summary: [
      'Engineered a desktop app using Tauri and React to minimize distractions and boost user productivity.',
      'Implemented real-time distraction detection by leveraging the Google Vision API.',
      'User studies showed an average of a 20% increase in measured focus time.',
    ],
  },
  {
    period: 'May 2025 — Aug 2025',
    title: 'Machine Learning Engineer Intern',
    org: '4L Data Intelligence',
    summary: [
      'Developed and fine-tuned NLP models to automatically tag and classify over 10,000 legal documents.',
      'Optimized model inference pipelines, achieving a 25% reduction in processing time.',
      'Built robust data ingestion workflows using Snowflake to streamline data availability.',
    ],
  },  
  {
    period: 'Jul 2025',
    title: 'Wordle Solver with Recommendations',
    org: 'Personal Project',
    summary: [
      'Created a high-performance Wordle solver using an entropy-based scoring algorithm.',
      'Exposed the logic via a sub-100ms Flask API and built a C++ fallback for a 40% speed increase.',
    ],
  },
  {
    period: 'Apr 2025',
    title: 'Owligator — Wine Collection Tracker',
    org: 'Personal Project',
    summary: [
      'Combined GPT-4V with OpenCV for intelligent wine label recognition from user photos.',
      'Improved image quality and recognition accuracy by 18% using Real-ESRGAN upscaling.',
    ],
  },
  {
    period: 'May 2023 — Aug 2023',
    title: 'Engineering Intern',
    org: 'Labcorp',
    summary: [
      'Designed and executed SQL scripts for data quality validation, reducing data inconsistencies by 30%.',
      'Generated over 100 network connectivity maps to visualize system architecture.',
    ],
  },
  {
    period: 'Expected May 2026',
    title: 'B.S. in Computer Science & Engineering',
    org: 'University of California, Merced',
    summary: ['Relevant Coursework: Data Structures, AI, Computer Vision, Algorithm Design, Object-Oriented Programming.'],
  },
]

// A wrapper component to make the card clickable if a link is provided
const CardWrapper = ({ item, children }: { item: Item; children: React.ReactNode }) => {
  return item.href ? (
    <a
      href={item.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block transition-transform hover:scale-[1.02] focus:scale-[1.02]"
    >
      {children}
    </a>
  ) : (
    <>{children}</>
  )
}

function Timeline() {
  useScrollReveal()
  return (
    <section id="timeline" className="section">
      <div className="container">
        <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Timeline</h2>
        <div className="relative mt-8">
          {/* The vertical line */}
          <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-1/2" aria-hidden />

          <ul className="space-y-12">
            {items.map((item, idx) => (
              <li key={idx} className="relative" data-reveal>
                {/* ✨ New Feature: Timeline Dot */}
                <div className="absolute left-4 top-3 h-2 w-2 -translate-x-1/2 rounded-full bg-white md:left-1/2" />

                <div className="md:grid md:grid-cols-2 md:gap-12">
                  {/* Empty div for spacing on one side */}
                  <div className={idx % 2 === 0 ? 'md:col-start-2' : ''} />

                  <div className={`p-1 ${idx % 2 === 0 ? '' : 'md:text-right'}`}>
                    <CardWrapper item={item}>
                      <div className="card p-5">
                        <div className="flex items-center justify-between">
                          <div className="text-xs uppercase tracking-wide text-neutral-400">{item.period}</div>
                          {/* ✨ New Feature: External link icon */}
                          {item.href && <ArrowUpRight className="h-4 w-4 text-neutral-400" />}
                        </div>
                        <div className="mt-1 text-sm text-neutral-300">{item.org}</div>
                        <h3 className="mt-2 text-base font-semibold">{item.title}</h3>

                        {/* ✨ New Feature: Bulleted list for summary */}
                        <ul className="mt-2 list-disc space-y-1 pl-4 text-left text-sm text-neutral-400">
                          {item.summary.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </CardWrapper>
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