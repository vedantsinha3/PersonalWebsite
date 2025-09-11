// import { useScrollReveal } from '../hooks/useScrollReveal'
// // Import icons for visual clarity in the diagrams
// import { User, Database, Cpu, Share2, BotMessageSquare, ListTodo, TestTubeDiagonal } from 'lucide-react'
// import React from 'react'

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // 1. REUSABLE CORE COMPONENTS
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function DiagramCard({ title, children }: { title: string; children: React.ReactNode }) {
//   return (
//     <div className="card p-6" data-reveal>
//       <h3 className="text-lg font-semibold">{title}</h3>
//       <div className="mt-4 overflow-x-auto">{children}</div>
//     </div>
//   )
// }

// function Node({ x, y, label, icon }: { x: number; y: number; label: string; icon?: React.ReactNode }) {
//   return (
//     <g className="group cursor-pointer transition-transform hover:scale-105">
//       <rect
//         x={x}
//         y={y}
//         rx={10}
//         ry={10}
//         width={160}
//         height={56}
//         className="fill-white/5 stroke-white/20 transition-colors group-hover:stroke-blue-400/80"
//       />
//       <foreignObject x={x} y={y} width={160} height={56}>
//         <div className="flex h-full items-center justify-center gap-2 px-2">
//           {icon}
//           <span className="text-center text-[12px] text-white">{label}</span>
//         </div>
//       </foreignObject>
//     </g>
//   )
// }

// function Arrow({ from, to, animated }: { from: [number, number]; to: [number, number]; animated?: boolean }) {
//   const [x1, y1] = from
//   const [x2, y2] = to

//   // ✨ New Feature: Animated dash for data flow visualization
//   const animationClass = animated ? 'path-animate' : ''

//   return (
//     <line
//       x1={x1}
//       y1={y1}
//       x2={x2}
//       y2={y2}
//       className={`stroke-blue-400/70 ${animationClass}`}
//       strokeWidth="1.5"
//       markerEnd="url(#arrow)"
//     />
//   )
// }

// // ✨ New Feature: Generic Diagram component to remove boilerplate
// type NodeData = { x: number; y: number; label: string; icon?: React.ReactNode }
// type ArrowData = { from: [number, number]; to: [number, number]; animated?: boolean }

// function Diagram({ viewBox, nodes, arrows }: { viewBox: string; nodes: NodeData[]; arrows: ArrowData[] }) {
//   return (
//     <svg viewBox={viewBox} className="w-full min-w-[560px]">
//       <defs>
//         <marker id="arrow" markerWidth="10" markerHeight="10" refX="8" refY="3.5" orient="auto">
//           <path d="M0,0 L0,7 L10,3.5 z" className="fill-blue-400/70" />
//         </marker>
//         {/* ✨ New Feature: CSS for the animated arrow path */}
//         <style>
//           {`
//             @keyframes dash {
//               to {
//                 stroke-dashoffset: 0;
//               }
//             }
//             .path-animate {
//               stroke-dasharray: 20;
//               stroke-dashoffset: 400;
//               animation: dash 20s linear infinite;
//             }
//           `}
//         </style>
//       </defs>
//       {arrows.map((arrow, i) => (
//         <Arrow key={i} {...arrow} />
//       ))}
//       {nodes.map((node, i) => (
//         <Node key={i} {...node} />
//       ))}
//     </svg>
//   )
// }

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // 2. DATA FOR EACH DIAGRAM
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// const owligatorNodes: NodeData[] = [
//   { x: 20, y: 30, label: 'Client (React)', icon: <User size={16} /> },
//   { x: 270, y: 30, label: 'Flask REST API', icon: <Share2 size={16} /> },
//   { x: 520, y: 30, label: 'Inference (GPT‑4V)', icon: <BotMessageSquare size={16} /> },
//   { x: 520, y: 150, label: 'Enhancement (ESRGAN)', icon: <TestTubeDiagonal size={16} /> },
//   { x: 270, y: 150, label: 'Queue / Rate Limit', icon: <ListTodo size={16} /> },
//   { x: 20, y: 150, label: 'Storage / DB', icon: <Database size={16} /> },
// ]

// const owligatorArrows: ArrowData[] = [
//   { from: [180, 58], to: [270, 58], animated: true },
//   { from: [430, 58], to: [520, 58] },
//   { from: [600, 86], to: [600, 150] },
//   { from: [520, 178], to: [430, 178] },
//   { from: [270, 178], to: [180, 178] },
//   { from: [100, 150], to: [100, 86] },
// ]

// const anchorNodes: NodeData[] = [
//   { x: 20, y: 30, label: 'Tauri App (UI)', icon: <User size={16} /> },
//   { x: 240, y: 30, label: 'Vision API', icon: <BotMessageSquare size={16} /> },
//   { x: 240, y: 130, label: 'Alerts (UI + Audio)', icon: <ListTodo size={16} /> },
//   { x: 440, y: 30, label: 'Local State', icon: <Database size={16} /> },
//   { x: 440, y: 130, label: 'Background Service', icon: <Cpu size={16} /> },
// ]

// const anchorArrows: ArrowData[] = [
//   { from: [180, 58], to: [240, 58], animated: true },
//   { from: [400, 58], to: [440, 58] },
//   { from: [400, 158], to: [440, 158] },
//   { from: [110, 86], to: [110, 130] },
//   { from: [180, 158], to: [240, 158] },
// ]

// const wordleNodes: NodeData[] = [
//   { x: 20, y: 60, label: 'React UI', icon: <User size={16} /> },
//   { x: 240, y: 60, label: 'Flask API (<100ms)', icon: <Share2 size={16} /> },
//   { x: 460, y: 60, label: 'C++ Engine', icon: <Cpu size={16} /> },
// ]

// const wordleArrows: ArrowData[] = [
//   { from: [180, 88], to: [240, 88], animated: true },
//   { from: [400, 88], to: [460, 88] },
// ]

// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// // 3. MAIN DIAGRAMS SECTION
// // ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function Diagrams() {
//   useScrollReveal()
//   return (
//     <section id="diagrams" className="section">
//       <div className="container">
//         <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Architecture Diagrams</h2>
//         <p className="mt-3 text-neutral-300" data-reveal>
//           High‑level data flow and core components for selected projects.
//         </p>
//         {/* --- MODIFICATION HERE --- */}
//         <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//           <DiagramCard title="Owligator — Wine Collection Tracker">
//             <Diagram viewBox="0 0 700 260" nodes={owligatorNodes} arrows={owligatorArrows} />
//           </DiagramCard>

//           <DiagramCard title="Anchor — Productivity App">
//             <Diagram viewBox="0 0 640 220" nodes={anchorNodes} arrows={anchorArrows} />
//           </DiagramCard>

//           <DiagramCard title="Wordle Solver">
//             <Diagram viewBox="0 0 640 200" nodes={wordleNodes} arrows={wordleArrows} />
//           </DiagramCard>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default Diagrams