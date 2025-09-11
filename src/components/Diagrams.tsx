import { useScrollReveal } from '../hooks/useScrollReveal'

function DiagramCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="card p-6" data-reveal>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-4 overflow-x-auto">{children}</div>
    </div>
  )
}

function Node({ x, y, label }: { x: number; y: number; label: string }) {
  return (
    <g>
      <rect x={x} y={y} rx={10} ry={10} width={160} height={56} className="fill-white/5 stroke-white/20" />
      <text x={x + 80} y={y + 34} textAnchor="middle" className="fill-white text-[12px]">
        {label}
      </text>
    </g>
  )
}

function Arrow({ from, to }: { from: [number, number]; to: [number, number] }) {
  const [x1, y1] = from
  const [x2, y2] = to
  return <line x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-blue-400/70" markerEnd="url(#arrow)" />
}

function OwligatorDiagram() {
  return (
    <svg viewBox="0 0 700 260" className="w-full min-w-[560px]">
      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" className="fill-blue-400/70" />
        </marker>
      </defs>
      <Node x={20} y={30} label="Client (React)" />
      <Node x={220} y={30} label="Flask REST API" />
      <Node x={420} y={30} label="Inference (OpenCV + GPT‑4V)" />
      <Node x={420} y={150} label="Enhancement (Real‑ESRGAN)" />
      <Node x={220} y={150} label="Queue / Rate Limit" />
      <Node x={20} y={150} label="Storage / DB" />

      <Arrow from={[180, 58]} to={[220, 58]} />
      <Arrow from={[380, 58]} to={[420, 58]} />
      <Arrow from={[500, 86]} to={[500, 150]} />
      <Arrow from={[380, 178]} to={[260, 178]} />
      <Arrow from={[180, 178]} to={[100, 178]} />
      <Arrow from={[100, 150]} to={[100, 86]} />
    </svg>
  )
}

function AnchorDiagram() {
  return (
    <svg viewBox="0 0 640 220" className="w-full min-w-[520px]">
      <defs>
        <marker id="arrow2" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" className="fill-blue-400/70" />
        </marker>
      </defs>
      <g>
        <rect x={20} y={30} rx={10} ry={10} width={180} height={56} className="fill-white/5 stroke-white/20" />
        <text x={110} y={64} textAnchor="middle" className="fill-white text-[12px]">Tauri App (UI)</text>
      </g>
      <Node x={240} y={30} label="Vision API" />
      <Node x={240} y={130} label="Alerts (UI + Audio)" />
      <Node x={440} y={30} label="Local State" />
      <Node x={440} y={130} label="Background Service" />

      <line x1={200} y1={58} x2={240} y2={58} className="stroke-blue-400/70" markerEnd="url(#arrow2)" />
      <Arrow from={[320, 58]} to={[440, 58]} />
      <Arrow from={[320, 158]} to={[440, 158]} />
      <Arrow from={[110, 86]} to={[110, 130]} />
      <Arrow from={[110, 158]} to={[240, 158]} />
    </svg>
  )
}

function WordleDiagram() {
  return (
    <svg viewBox="0 0 640 200" className="w-full min-w-[520px]">
      <defs>
        <marker id="arrow3" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto">
          <path d="M0,0 L0,6 L9,3 z" className="fill-blue-400/70" />
        </marker>
      </defs>
      <Node x={20} y={30} label="React UI" />
      <Node x={240} y={30} label="Flask API (<100ms)" />
      <Node x={460} y={30} label="C++ Engine" />
      <Node x={240} y={120} label="Entropy Scorer" />
      <Node x={460} y={120} label="Cache" />

      <line x1={180} y1={58} x2={240} y2={58} className="stroke-blue-400/70" markerEnd="url(#arrow3)" />
      <Arrow from={[400, 58]} to={[460, 58]} />
      <Arrow from={[320, 58]} to={[320, 120]} />
      <Arrow from={[540, 58]} to={[540, 120]} />
    </svg>
  )
}

function Diagrams() {
  useScrollReveal()
  return (
    <section id="diagrams" className="section">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Architecture Diagrams</h2>
        <p className="mt-3 text-neutral-300" data-reveal>
          High‑level data flow and core components for selected projects.
        </p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <DiagramCard title="Owligator">
            <OwligatorDiagram />
          </DiagramCard>
          <DiagramCard title="Anchor">
            <AnchorDiagram />
          </DiagramCard>
          <DiagramCard title="Wordle Solver">
            <WordleDiagram />
          </DiagramCard>
        </div>
      </div>
    </section>
  )
}

export default Diagrams

