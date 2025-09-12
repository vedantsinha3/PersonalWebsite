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

import { useScrollReveal } from '../hooks/useScrollReveal'
import { User, Database, Cpu, Share2, BotMessageSquare, ListTodo, TestTubeDiagonal } from 'lucide-react'
import React from 'react'

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 1. REUSABLE CORE COMPONENTS
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~

function DiagramCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-slate-700/50 backdrop-blur-sm shadow-2xl hover:shadow-blue-500/10 transition-all duration-500" data-reveal>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative p-6">
        <h3 className="text-lg font-semibold text-white mb-1">{title}</h3>
        <div className="h-px bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-transparent mb-6" />
        <div className="overflow-x-auto">{children}</div>
      </div>
    </div>
  )
}

function Node({ x, y, label, icon, type = 'default' }: { 
  x: number; 
  y: number; 
  label: string; 
  icon?: React.ReactNode;
  type?: 'client' | 'api' | 'service' | 'database' | 'default'
}) {
  const getNodeStyles = (type: string) => {
    switch (type) {
      case 'client':
        return {
          fill: 'fill-blue-500/10',
          stroke: 'stroke-blue-400/60',
          hoverStroke: 'group-hover:stroke-blue-400',
          shadow: 'filter-[drop-shadow(0_4px_8px_rgba(59,130,246,0.15))]'
        }
      case 'api':
        return {
          fill: 'fill-green-500/10',
          stroke: 'stroke-green-400/60',
          hoverStroke: 'group-hover:stroke-green-400',
          shadow: 'filter-[drop-shadow(0_4px_8px_rgba(34,197,94,0.15))]'
        }
      case 'service':
        return {
          fill: 'fill-purple-500/10',
          stroke: 'stroke-purple-400/60',
          hoverStroke: 'group-hover:stroke-purple-400',
          shadow: 'filter-[drop-shadow(0_4px_8px_rgba(168,85,247,0.15))]'
        }
      case 'database':
        return {
          fill: 'fill-orange-500/10',
          stroke: 'stroke-orange-400/60',
          hoverStroke: 'group-hover:stroke-orange-400',
          shadow: 'filter-[drop-shadow(0_4px_8px_rgba(251,146,60,0.15))]'
        }
      default:
        return {
          fill: 'fill-slate-500/10',
          stroke: 'stroke-slate-400/60',
          hoverStroke: 'group-hover:stroke-slate-300',
          shadow: 'filter-[drop-shadow(0_4px_8px_rgba(148,163,184,0.15))]'
        }
    }
  }

  const styles = getNodeStyles(type)

  return (
    <g className="group cursor-pointer transition-all duration-300 hover:scale-105">
      <rect
        x={x}
        y={y}
        rx={12}
        ry={12}
        width={170}
        height={60}
        className={`${styles.fill} ${styles.stroke} ${styles.hoverStroke} ${styles.shadow} stroke-2 transition-all duration-300`}
      />
      <foreignObject x={x + 5} y={y + 5} width={160} height={50}>
        <div className="flex h-full items-center justify-center gap-2.5 px-3">
          <div className="flex-shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
            {icon}
          </div>
          <span className="text-center text-sm font-medium text-white/90 group-hover:text-white transition-colors duration-300 leading-tight">
            {label}
          </span>
        </div>
      </foreignObject>
    </g>
  )
}

function Arrow({ from, to, animated, color = 'blue' }: { 
  from: [number, number]; 
  to: [number, number]; 
  animated?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'orange'
}) {
  const [x1, y1] = from
  const [x2, y2] = to

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'green': return 'stroke-green-400/70'
      case 'purple': return 'stroke-purple-400/70'
      case 'orange': return 'stroke-orange-400/70'
      default: return 'stroke-blue-400/70'
    }
  }

  const animationClass = animated ? 'path-animate' : ''
  const colorClass = getColorClasses(color)

  return (
    <line
      x1={x1}
      y1={y1}
      x2={x2}
      y2={y2}
      className={`${colorClass} ${animationClass} hover:stroke-opacity-100 transition-all duration-300`}
      strokeWidth="2"
      markerEnd={`url(#arrow-${color})`}
    />
  )
}

// Enhanced Diagram component with better markers and styling
type NodeData = { 
  x: number; 
  y: number; 
  label: string; 
  icon?: React.ReactNode;
  type?: 'client' | 'api' | 'service' | 'database' | 'default'
}
type ArrowData = { 
  from: [number, number]; 
  to: [number, number]; 
  animated?: boolean;
  color?: 'blue' | 'green' | 'purple' | 'orange'
}

function Diagram({ viewBox, nodes, arrows }: { viewBox: string; nodes: NodeData[]; arrows: ArrowData[] }) {
  return (
    <div className="relative">
      <svg viewBox={viewBox} className="w-full min-w-[600px] h-auto">
        <defs>
          {/* Multiple colored arrow markers */}
          <marker id="arrow-blue" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
            <path d="M0,0 L0,8 L12,4 z" className="fill-blue-400/80" />
          </marker>
          <marker id="arrow-green" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
            <path d="M0,0 L0,8 L12,4 z" className="fill-green-400/80" />
          </marker>
          <marker id="arrow-purple" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
            <path d="M0,0 L0,8 L12,4 z" className="fill-purple-400/80" />
          </marker>
          <marker id="arrow-orange" markerWidth="12" markerHeight="12" refX="10" refY="4" orient="auto">
            <path d="M0,0 L0,8 L12,4 z" className="fill-orange-400/80" />
          </marker>
          
          {/* Enhanced animation styles */}
          <style>
            {`
              @keyframes dash {
                0% {
                  stroke-dashoffset: 40;
                }
                100% {
                  stroke-dashoffset: 0;
                }
              }
              .path-animate {
                stroke-dasharray: 8 4;
                stroke-dashoffset: 40;
                animation: dash 3s linear infinite;
                stroke-width: 2.5;
              }
            `}
          </style>
          
          {/* Subtle background pattern */}
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgb(148 163 184 / 0.03)" strokeWidth="1"/>
          </pattern>
        </defs>
        
        {/* Background grid */}
        <rect width="100%" height="100%" fill="url(#grid)" />
        
        {/* Render arrows first so they appear behind nodes */}
        {arrows.map((arrow, i) => (
          <Arrow key={i} {...arrow} />
        ))}
        
        {/* Render nodes on top */}
        {nodes.map((node, i) => (
          <Node key={i} {...node} />
        ))}
      </svg>
    </div>
  )
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 2. ENHANCED DATA FOR EACH DIAGRAM
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const owligatorNodes: NodeData[] = [
  { x: 20, y: 30, label: 'React Client', icon: <User size={18} />, type: 'client' },
  { x: 250, y: 30, label: 'Flask REST API', icon: <Share2 size={18} />, type: 'api' },
  { x: 480, y: 30, label: 'GPT-4V Inference', icon: <BotMessageSquare size={18} />, type: 'service' },
  { x: 480, y: 150, label: 'ESRGAN Enhancement', icon: <TestTubeDiagonal size={18} />, type: 'service' },
  { x: 250, y: 150, label: 'Queue Manager', icon: <ListTodo size={18} />, type: 'service' },
  { x: 20, y: 150, label: 'Database Storage', icon: <Database size={18} />, type: 'database' },
]

const owligatorArrows: ArrowData[] = [
  { from: [190, 60], to: [250, 60], animated: true, color: 'blue' },
  { from: [420, 60], to: [480, 60], color: 'green' },
  { from: [565, 90], to: [565, 150], color: 'purple' },
  { from: [480, 180], to: [420, 180], color: 'purple' },
  { from: [250, 180], to: [190, 180], color: 'orange' },
  { from: [105, 150], to: [105, 90], color: 'orange' },
]

const anchorNodes: NodeData[] = [
  { x: 20, y: 30, label: 'Tauri Desktop App', icon: <User size={18} />, type: 'client' },
  { x: 230, y: 30, label: 'Vision API', icon: <BotMessageSquare size={18} />, type: 'api' },
  { x: 230, y: 130, label: 'Alert System', icon: <ListTodo size={18} />, type: 'service' },
  { x: 440, y: 30, label: 'Local Storage', icon: <Database size={18} />, type: 'database' },
  { x: 440, y: 130, label: 'Background Service', icon: <Cpu size={18} />, type: 'service' },
]

const anchorArrows: ArrowData[] = [
  { from: [190, 60], to: [230, 60], animated: true, color: 'blue' },
  { from: [400, 60], to: [440, 60], color: 'green' },
  { from: [400, 160], to: [440, 160], color: 'purple' },
  { from: [105, 90], to: [105, 130], color: 'orange' },
  { from: [190, 160], to: [230, 160], color: 'purple' },
]

const wordleNodes: NodeData[] = [
  { x: 50, y: 70, label: 'React Frontend', icon: <User size={18} />, type: 'client' },
  { x: 280, y: 70, label: 'Flask API', icon: <Share2 size={18} />, type: 'api' },
  { x: 510, y: 70, label: 'C++ Solver Engine', icon: <Cpu size={18} />, type: 'service' },
]

const wordleArrows: ArrowData[] = [
  { from: [220, 100], to: [280, 100], animated: true, color: 'blue' },
  { from: [450, 100], to: [510, 100], color: 'green' },
]

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// 3. MAIN DIAGRAMS SECTION
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

function Diagrams() {
  useScrollReveal()
  return (
    <section id="diagrams" className="section bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl mb-4">
            System Architecture
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto" data-reveal>
            Interactive diagrams showcasing the technical architecture and data flow 
            patterns across key projects in my portfolio.
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
          <DiagramCard title="Owligator — Wine Collection Tracker">
            <Diagram viewBox="0 0 720 280" nodes={owligatorNodes} arrows={owligatorArrows} />
          </DiagramCard>

          <DiagramCard title="Anchor — Productivity Desktop App">
            <Diagram viewBox="0 0 660 240" nodes={anchorNodes} arrows={anchorArrows} />
          </DiagramCard>

          <DiagramCard title="Wordle Solver — Algorithm Optimization">
            <Diagram viewBox="0 0 730 220" nodes={wordleNodes} arrows={wordleArrows} />
          </DiagramCard>
        </div>
      </div>
    </section>
  )
}

export default Diagrams