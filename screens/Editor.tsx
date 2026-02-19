
import React, { useState } from 'react';
import { Screen } from '../types';

interface EditorProps {
  onNavigate: (screen: Screen) => void;
}

const Editor: React.FC<EditorProps> = ({ onNavigate }) => {
  const [selectedNode, setSelectedNode] = useState('BoxMesh');

  return (
    <div className="h-full flex flex-col bg-background-dark overflow-hidden">
      {/* Top Panel Bar */}
      <header className="flex items-center justify-between px-4 py-2 bg-background-dark border-b border-border-dark shrink-0">
        <div className="flex items-center gap-2">
          <button onClick={() => onNavigate(Screen.DASHBOARD)}>
            <span className="material-symbols-outlined text-white text-xl">menu</span>
          </button>
          <div className="flex flex-col">
            <h1 className="text-white text-[10px] font-bold leading-tight uppercase tracking-widest">Main Scene Editor</h1>
            <p className="text-[10px] text-gray-500 font-mono">r3f-project-01.js</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-[#232f48] rounded-lg p-1">
            <button className="p-1 px-2 bg-primary rounded text-white text-[10px] font-bold flex items-center gap-1 active:scale-95 transition-transform">
              <span className="material-symbols-outlined text-sm">play_arrow</span> RUN
            </button>
          </div>
          <button className="p-1" onClick={() => onNavigate(Screen.IMPORT)}>
            <span className="material-symbols-outlined text-gray-500">publish</span>
          </button>
          <span className="material-symbols-outlined text-gray-500">more_vert</span>
        </div>
      </header>

      {/* Main Split Layout */}
      <div className="flex flex-1 overflow-hidden">
        {/* Hierarchy Aside */}
        <aside className="w-1/3 border-r border-border-dark bg-background-dark/50 flex flex-col">
          <div className="p-2 border-b border-border-dark flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-tight text-gray-400">Hierarchy</span>
            <span className="material-symbols-outlined text-xs text-gray-400">add</span>
          </div>
          <div className="flex-1 overflow-y-auto p-1 text-[11px] font-mono">
            <div className="flex items-center gap-1 p-1 text-gray-500">
              <span className="material-symbols-outlined text-sm">expand_more</span>
              <span className="material-symbols-outlined text-sm text-primary">deployed_code</span>
              <span>Scene</span>
            </div>
            {['Camera', 'Light', 'BoxMesh'].map(node => (
              <div 
                key={node}
                onClick={() => setSelectedNode(node)}
                className={`flex items-center gap-1 p-1 pl-4 rounded cursor-pointer transition-colors ${
                  selectedNode === node ? 'bg-primary/20 text-white' : 'hover:bg-primary/10 text-gray-400'
                }`}
              >
                <span className="material-symbols-outlined text-sm">
                  {node === 'Camera' ? 'videocam' : node === 'Light' ? 'light_mode' : 'square'}
                </span>
                <span>{node}</span>
                {selectedNode === node && <span className="ml-auto material-symbols-outlined text-xs">visibility</span>}
              </div>
            ))}
          </div>
        </aside>

        {/* Viewport & Code */}
        <main className="flex-1 flex flex-col relative">
          {/* Viewport */}
          <div className="flex-1 bg-black relative flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'linear-gradient(#324467 1px, transparent 1px), linear-gradient(90deg, #324467 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
            
            {/* Mesh Representation */}
            <div className="relative w-24 h-24 border-2 border-primary/60 flex items-center justify-center rotate-12 transition-transform cursor-pointer hover:scale-105">
              <div className="absolute inset-0 border border-primary/20 -translate-x-2 -translate-y-2"></div>
              <span className="text-[10px] text-primary/80 font-mono">Mesh</span>
            </div>

            {/* Gizmo */}
            <div className="absolute bottom-4 right-4 h-12 w-12 flex items-center justify-center pointer-events-none">
              <div className="relative h-8 w-8">
                <div className="absolute h-0.5 w-6 bg-red-500/50 rotate-0 left-4 top-4 origin-left"></div>
                <div className="absolute h-0.5 w-6 bg-green-500/50 -rotate-90 left-4 top-4 origin-left"></div>
                <div className="absolute h-0.5 w-6 bg-blue-500/50 rotate-135 left-4 top-4 origin-left"></div>
                <span className="absolute top-0 left-3 text-[7px] text-green-500">Y</span>
                <span className="absolute right-0 top-3 text-[7px] text-red-500">X</span>
              </div>
            </div>

            {/* Controls Overlay */}
            <div className="absolute top-2 left-2 flex flex-col gap-1">
              <div className="bg-background-dark/80 border border-border-dark rounded p-1 flex flex-col gap-2">
                <button className="material-symbols-outlined text-primary text-sm bg-primary/20 rounded p-0.5">open_with</button>
                <button className="material-symbols-outlined text-gray-500 text-sm p-0.5">cached</button>
                <button className="material-symbols-outlined text-gray-500 text-sm p-0.5">aspect_ratio</button>
              </div>
            </div>

            {/* Annotation */}
            <div className="absolute top-2 right-2 flex items-start gap-2">
              <div className="bg-white/5 border border-white/10 rounded px-2 py-1 text-[8px] text-white backdrop-blur-sm">
                <p>UX: Drag to rotate orbit</p>
              </div>
              <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse mt-1"></div>
            </div>
          </div>

          {/* Source Editor Panel */}
          <div className="h-40 border-t border-border-dark bg-background-dark flex flex-col">
            <div className="px-2 py-1 border-b border-border-dark flex items-center justify-between">
              <span className="text-[10px] font-bold uppercase tracking-tight text-gray-500">Source Editor</span>
              <span className="material-symbols-outlined text-sm text-gray-500">close_fullscreen</span>
            </div>
            <div className="flex-1 p-2 font-mono text-[10px] leading-relaxed overflow-y-auto">
              <div className="flex gap-2">
                <span className="text-gray-600">1</span>
                <p><span className="text-primary">function</span> <span className="text-white">Scene</span>() {'{'}</p>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">2</span>
                <p className="pl-2"><span className="text-primary">return</span> (</p>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">3</span>
                <p className="pl-4 text-white">&lt;<span className="text-primary">mesh</span> scale={'{'}1.5{'}'}&gt;</p>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">4</span>
                <p className="pl-6 text-white">&lt;<span className="text-primary">boxGeometry</span> /&gt;</p>
              </div>
              <div className="flex gap-2">
                <span className="text-gray-600">5</span>
                <p className="pl-4 text-white">&lt;/<span className="text-primary">mesh</span>&gt;</p>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Properties Panel Footer */}
      <div className="bg-background-dark border-t border-border-dark p-3 pb-4 shrink-0">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-white text-[10px] font-bold uppercase tracking-widest">Properties: {selectedNode}</h3>
          <span className="material-symbols-outlined text-sm text-gray-500">settings</span>
        </div>
        <div className="grid grid-cols-1 gap-2">
          {['POS', 'SCALE'].map(label => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-[8px] w-10 font-bold text-gray-500">{label}</span>
              <div className="flex-1 grid grid-cols-3 gap-1">
                {['X', 'Y', 'Z'].map((axis, idx) => (
                  <div key={axis} className="flex items-center bg-[#1a2335] border border-border-dark rounded p-1">
                    <span className={`text-[8px] pr-1 ${axis === 'X' ? 'text-red-500' : axis === 'Y' ? 'text-green-500' : 'text-blue-500'}`}>{axis}</span>
                    <input 
                      className="bg-transparent border-none p-0 text-[10px] text-white w-full focus:ring-0" 
                      type="text" 
                      defaultValue={label === 'SCALE' ? '1.00' : '0.00'} 
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Editor;
