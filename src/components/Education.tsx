function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Education</h2>
        <div className="mt-6 card p-6">
          <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
            <div>
              <h3 className="text-lg font-semibold">University of California, Merced</h3>
              <p className="text-sm text-neutral-300">B.S. in Computer Science and Engineering</p>
            </div>
            <p className="text-sm text-neutral-300">Merced, CA · May 2026</p>
          </div>
          <p className="mt-4 text-sm text-neutral-300">
            Relevant coursework: Data Structures & Algorithms, Assembly & Computer Org, Intro to AI,
            Algorithm Design, Computer Vision, Digital Processing, Object Oriented Programming
          </p>
        </div>
      </div>
    </section>
  )
}

export default Education

