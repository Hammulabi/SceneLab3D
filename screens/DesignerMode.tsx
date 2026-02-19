
import React from 'react';
import { Screen } from '../types';

interface DesignerModeProps {
  onNavigate: (screen: Screen) => void;
}

const DesignerMode: React.FC<DesignerModeProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col bg-[#101622] text-white overflow-hidden">
      {/* Top Bar */}
      <header className="flex items-center bg-[#101622] p-4 pb-2 justify-between border-b border-gray-800">
        <button onClick={() => onNavigate(Screen.DASHBOARD)} className="text-white flex size-10 shrink-0 items-center justify-center rounded-full hover:bg-gray-800">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <div className="flex flex-col items-center">
          <h2 className="text-sm font-bold">Designer Mode</h2>
          <p className="text-[9px] text-primary font-medium uppercase tracking-widest">Visual to Code</p>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-500 text-[10px] font-bold uppercase">Code</span>
          <div className="w-8 h-4 bg-primary rounded-full relative">
            <div className="absolute right-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>
      </header>

      {/* Viewport */}
      <div className="flex-1 relative bg-[#1a202c] overflow-hidden flex flex-col">
        <div className="flex-grow relative flex items-center justify-center" style={{ backgroundImage: 'linear-gradient(#1e293b 1px, transparent 1px), linear-gradient(90deg, #1e293b 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
          
          {/* Breadcrumbs */}
          <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 flex gap-2 items-center">
            <span className="material-symbols-outlined text-xs text-gray-400">home</span>
            <span className="text-[10px] text-gray-400">/</span>
            <span className="text-[10px] text-white font-medium">Scene</span>
            <span className="text-[10px] text-gray-400">/</span>
            <span className="text-[10px] text-primary font-bold">Box01</span>
          </div>

          {/* Gizmo Mesh */}
          <div className="relative w-32 h-32 bg-gray-700/50 border-2 border-primary rounded-lg flex items-center justify-center shadow-[0_0_30px_rgba(19,91,236,0.3)] cursor-move">
            <div className="absolute -top-12 h-12 w-0.5 bg-green-500">
              <div className="absolute -top-1 -left-[3px] w-2 h-2 bg-green-500 rotate-45"></div>
            </div>
            <div className="absolute -right-12 w-12 h-0.5 bg-red-500">
              <div className="absolute -top-[3px] -right-1 w-2 h-2 bg-red-500 rotate-45"></div>
            </div>
            <span className="material-symbols-outlined text-4xl text-white/20">view_in_ar</span>
            
            <div className="absolute -right-32 top-0 flex items-center gap-2 pointer-events-none">
              <div className="w-8 h-px border-t border-dashed border-primary"></div>
              <div className="bg-primary text-[8px] px-2 py-1 rounded-sm font-bold uppercase whitespace-nowrap">Dragging Updates Position</div>
            </div>
          </div>

          {/* Side Toolbar */}
          <div className="absolute left-4 top-1/2 -translate-y-1/2 flex flex-col gap-2 bg-black/40 backdrop-blur-md p-1.5 rounded-xl border border-white/10">
            {['near_me', 'open_with', 'sync_alt', 'filter_center_focus'].map((icon, i) => (
              <button key={icon} className={`p-2 rounded-lg transition-colors ${i === 0 ? 'bg-primary text-white' : 'text-gray-400 hover:bg-white/5'}`}>
                <span className="material-symbols-outlined text-sm">{icon}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Live Code Area */}
        <div className="h-2/5 bg-[#0b0f18] flex flex-col border-t border-gray-800">
          <div className="flex items-center justify-between px-4 py-2 bg-[#111722] border-b border-gray-800">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-xs text-primary font-bold">terminal</span>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Live R3F Code</span>
            </div>
            <div className="flex gap-2">
              <button className="px-2 py-1 bg-gray-800 text-[9px] rounded text-gray-300 uppercase font-bold">Copy</button>
              <button className="px-2 py-1 bg-primary/20 text-[9px] rounded text-primary uppercase font-bold">Synced</button>
            </div>
          </div>
          <div className="p-4 font-mono text-xs overflow-auto flex-1 text-blue-300">
            <div className="flex gap-4">
              <div className="text-gray-600 select-none text-right">1<br/>2<br/>3<br/>4</div>
              <div>
                &lt;<span className="text-pink-400">mesh</span><br/>
                &nbsp;&nbsp;<span className="text-orange-300">position</span>={'{'}<span className="bg-primary/20 px-1 rounded">[1.2, 0.5, 0]</span>{'}'}<br/>
                &nbsp;&nbsp;<span className="text-orange-300">rotation</span>={'{'}[0, 0, 0]{'}'}<br/>
                &gt;
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Footer */}
      <footer className="h-20 bg-[#111722] border-t border-gray-800 flex flex-col px-4 py-2 shrink-0">
        <div className="flex justify-between items-center mb-2">
          <div className="flex gap-4 text-gray-500">
            <span className="material-symbols-outlined cursor-pointer hover:text-white">skip_previous</span>
            <span className="material-symbols-outlined cursor-pointer text-primary">play_arrow</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white">skip_next</span>
          </div>
          <div className="text-[10px] text-gray-500 font-mono">00:00:12 / 00:05:00</div>
        </div>
        <div className="relative w-full h-4 bg-gray-900 rounded flex items-center">
          <div className="absolute left-1/4 top-0 bottom-0 w-0.5 bg-primary shadow-[0_0_10px_#135bec]">
            <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary rounded-full"></div>
          </div>
          <div className="absolute left-10 w-1.5 h-1.5 bg-white rotate-45 border border-primary"></div>
          <div className="absolute left-1/2 w-1.5 h-1.5 bg-white rotate-45 border border-primary"></div>
        </div>
      </footer>
    </div>
  );
};

export default DesignerMode;
