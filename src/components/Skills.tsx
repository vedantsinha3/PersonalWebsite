const groups = [
  {
    name: 'Languages',
    items: ['Python', 'C++', 'C', 'JavaScript', 'Swift', 'SQL'],
  },
  {
    name: 'Frameworks',
    items: ['React', 'Flask', 'Flutter', 'Tauri'],
  },
  {
    name: 'Developer Tools',
    items: ['Git', 'Docker', 'Linux'],
  },
  {
    name: 'Libraries',
    items: ['OpenCV', 'NumPy', 'Pandas', 'Keras', 'BeautifulSoup', 'PyMuPDF'],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Technical Skills</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {groups.map((g) => (
            <div key={g.name} className="card p-6">
              <h3 className="text-sm font-semibold text-white/90">{g.name}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {g.items.map((i) => (
                  <span key={i} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-neutral-300">
                    {i}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills

