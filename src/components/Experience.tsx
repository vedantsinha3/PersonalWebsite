type Role = {
  company: string
  title: string
  location: string
  period: string
  bullets: string[]
}

const roles: Role[] = [
  {
    company: '4L Data Intelligence',
    title: 'Machine Learning Engineer Intern',
    location: 'San Ramon, CA',
    period: 'May 2025 — Aug 2025',
    bullets: [
      'Built NLP tagging to auto‑classify 10,000+ enterprise documents; +15% processing efficiency',
      'Integrated Snowflake via snowflake‑connector‑python for scalable ingestion and querying',
      'Optimized ML pipelines with engineering teams, reducing model inference time by 25% for real‑time use',
    ],
  },
  {
    company: 'SAM Singapore Math',
    title: 'Math Teacher',
    location: 'Dublin, CA',
    period: 'July 2024 — Sep 2025',
    bullets: [
      'Taught math to students aged 6-18 years old; developed engaging curriculum',
      'Provided personalized feedback and guidance to help students achieve academic success',
      'Fostered a positive learning environment and helped students develop a love for math',
    ],
  },
  {
    company: 'TheCoderSchool',
    title: 'Coding Instructor',
    location: 'San Ramon, CA',
    period: 'Nov 2023 — Jun 2024',
    bullets: [
      'Guided students through hands‑on Python, C, and C++ projects; fostered logic‑building',
      'Developed tailored curriculum from games to apps aligned to learning goals',
      'Mentored fundamentals and problem‑solving habits for long‑term growth',
    ],
  },
  {
    company: 'Labcorp',
    title: 'Engineering Intern',
    location: 'Pleasanton, CA',
    period: 'May 2023 — Aug 2023',
    bullets: [
      'Automated data‑quality validation; reduced inconsistencies by 30% in compliance reporting',
      'Built centralized connectivity maps in Green Light Guru to trace 100+ product relationships',
      'Enhanced data quality in Green Light Guru (PLM) used by Sandstone stakeholders',
    ],
  },
]

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Experience</h2>
        <div className="mt-8 space-y-6">
          {roles.map((r) => (
            <article key={r.company} className="card p-6">
              <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                <div>
                  <h3 className="text-lg font-semibold">{r.title} · {r.company}</h3>
                  <p className="text-sm text-neutral-400">{r.location}</p>
                </div>
                <p className="text-sm text-neutral-300">{r.period}</p>
              </div>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-300">
                {r.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

