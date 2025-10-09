import { CheckCircle2 } from 'lucide-react'

function About() {
  const skills = [
    'Natural Language Processing (NLP)',
    'Computer Vision (CV)',
    'REST & GraphQL APIs',
    'Real-time Data Pipelines',
    'Modern Frontend (React, Next.js)',
    'Database & System Architecture',
  ]

  const hobbies = [
    { name: 'Basketball', icon: '🏀' },
    { name: 'Speed Cubing', icon: '🧩' },
    { name: 'Running', icon: '🏃' },
    { name: 'Golfing', icon: '⛳' },
  ]

  return (
    <section id="about" className="section">
      <div className="container">
        {/* Main About Section: Image + Text */}
        <div className="grid items-center gap-12 md:grid-cols-3">
          {/* Image */}
          <div className="md:col-span-1">
            <div className="mx-auto w-full max-w-[380px] aspect-[5/5] overflow-hidden rounded-lg ring-1 ring-neutral-800">
              <img
                src="/me1.jpeg"
                alt="Portrait of Vedant Sinha"
                className="h-full w-full object-cover object-top"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 80vw, 380px"
              />
            </div>
          </div>

          {/* Text and Skills */}
          <div className="md:col-span-2">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">About Me</h2>
            <p className="mt-4 text-neutral-300">
                I enjoy turning research and prototypes into reliable, user‑facing products. My recent work spans
              NLP tagging, computer vision, and realtime data flows. I care about clean architecture, measurable
              impact, and thoughtful UI.
            </p>
            {/* Skills List */}
            <ul className="mt-6 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center text-neutral-300 text-sm">
                  <CheckCircle2 className="h-4 w-4 mr-2 text-blue-400 flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hobbies Section */}
        <div className="mt-16">
          <h3 className="text-xl text-center font-semibold tracking-tight">Hobbies & Interests</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {hobbies.map((hobby) => (
              <div key={hobby.name} className="card p-4 text-center">
                <div className="text-3xl">{hobby.icon}</div>
                <div className="mt-2 text-sm text-neutral-200">{hobby.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About