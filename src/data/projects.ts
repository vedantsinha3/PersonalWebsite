export type Project = {
  title: string
  description: string
  tags: string[]
  link?: string
  repo?: string
}

export const projects: Project[] = [
  {
    title: 'Owligator — Full‑Stack Wine Collection Tracker',
    description:
      'Cataloged 1,000+ bottles with GPT‑4 Vision + OpenCV; +18% accuracy using Real‑ESRGAN. Flask REST API supports hundreds of concurrent image requests with <200ms latency. React frontend for catalog management used by a pilot client.',
    tags: ['GPT‑4 Vision', 'OpenCV', 'Flask', 'React', 'Real‑ESRGAN'],
  },
  {
    title: 'Vain — Ecommerce Platform',
    description:
      'React-based e-commerce experience with product collections, denim archive, trending releases, and FAQs. Interactive shop-all filters, validated contact forms, and FAQ accordions. Responsive layouts and modern UI/UX with pages for new releases, shipping policies, and customer support.',
    tags: ['React', 'TypeScript', 'UI/UX', 'Ecommerce'],
  },
  {
    title: 'Wordle Solver with Recommendations',
    description:
      'Ranked 2,315 solutions via entropy scoring with <100ms Flask API response. React UI with real‑time probability breakdowns. C++ fallback engine boosted filtering speed by 40% under load.',
    tags: ['Algorithms', 'Flask', 'React', 'C++'],
  },
]

