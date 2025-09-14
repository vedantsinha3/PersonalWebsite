import {
  SiPython, SiCplusplus, SiJavascript, SiSwift, SiReact, SiFlask,
  SiFlutter, SiTauri, SiGit, SiDocker, SiLinux, SiOpencv, SiNumpy,
  SiPandas, SiPytorch, SiSqlite, SiC
} from 'react-icons/si'
import { AiOutlineFilePdf } from 'react-icons/ai'

const groups = [
  {
    name: 'Languages',
    items: [
      { name: 'Python', icon: <SiPython /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'C', icon: <SiC /> },
      { name: 'JavaScript', icon: <SiJavascript /> },
      { name: 'Swift', icon: <SiSwift /> },
      { name: 'SQL', icon: <SiSqlite /> },
    ],
  },
  {
    name: 'Frameworks & Libraries',
    items: [
      { name: 'React', icon: <SiReact /> },
      { name: 'Flask', icon: <SiFlask /> },
      { name: 'Flutter', icon: <SiFlutter /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
      { name: 'PyTorch', icon: <SiPytorch /> }, // Keras is now part of TF/PyTorch
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'PyMuPDF', icon: <AiOutlineFilePdf /> },
    ],
  },
  {
    name: 'Developer Tools',
    items: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Linux', icon: <SiLinux /> },
      { name: 'Tauri', icon: <SiTauri /> }, // Moved Tauri here as it's a toolchain/framework
    ],
  },
]

function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Technical Skills</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {groups.map((g) => (
            <div key={g.name} className="card p-6">
              <h3 className="text-base font-semibold text-white/90">{g.name}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item.name}
                    className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-xs text-neutral-300 transition-colors hover:bg-white/10"
                  >
                    {item.icon}
                    {item.name}
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