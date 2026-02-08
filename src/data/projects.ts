export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Cubemeter',
    link: 'https://cubetime-kappa.vercel.app/',
    description:
      'React 19 + TypeScript timer with Vite featuring spacebar/touch controls, WCA-style scramble generation, and localStorage persistence with migration for legacy data. Session management (create/rename/delete) with scrollable dropdown and session-scoped statistics. WCA-style stats (Ao5/12/50/100, best/worst/mean) and solve history with +2/DNF penalties; React Context for global state and custom hooks for timer and persistence.',
    tags: ['React', 'TypeScript', 'Vite'],
  },
  {
    title: 'WordleHelper',
    link: 'https://wordle-helper-sepia.vercel.app/',
    description:
      'Full-stack Wordle helper with React and Python Flask using entropy-based algorithms for guess suggestions. Deployed backend to Render and frontend to Vercel with environment-based API configuration. Information theory (Shannon entropy) and letter-frequency analysis to rank guesses against 2,300+ Wordle answers.',
    tags: ['Algorithms', 'Flask', 'React'],
  },
  {
    title: 'Owligator',
    description:
      'Production-grade computer vision pipeline using GPT-4 Vision and OpenCV to catalog 1,000+ wine bottles; +18% recognition accuracy via Real-ESRGAN. Low-latency Flask REST API supporting hundreds of concurrent image uploads with sub-200ms response times. React frontend for catalog management; shipped to pilot customer and validated under production use.',
    tags: ['GPT-4 Vision', 'OpenCV', 'Flask', 'React', 'Real-ESRGAN'],
  },
  {
    title: 'Student Enrollment Web App',
    description:
      'Flask + React/TS enrollment system with authenticated Student/Teacher/Admin dashboards. Role-based access control and REST APIs for course browsing, enrollment with capacity checks, and grade editing backed by normalized schema. Flask-Admin for rapid CRUD over users, courses, enrollments, and grades with seeded data.',
    tags: ['Flask', 'React', 'TypeScript'],
  },
]

