
import React from 'react';
import { Screen } from '../types';

interface PublishProps {
  onNavigate: (screen: Screen) => void;
}

const Publish: React.FC<PublishProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col bg-background-light dark:bg-background-dark overflow-y-auto no-scrollbar">
      <header className="sticky top-0 z-10 flex items-center px-4 py-4 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <button onClick={() => onNavigate(Screen.DASHBOARD)} className="flex items-center justify-center p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h1 className="flex-1 text-center text-sm font-bold tracking-tight pr-10">Project Deployment</h1>
      </header>

      <div className="p-6 space-y-10 flex-1">
        {/* Gauge Section */}
        <section className="flex flex-col items-center">
          <h2 className="text-[10px] font-medium text-slate-500 uppercase tracking-widest mb-6">Performance Score</h2>
          <div className="relative flex items-center justify-center w-40 h-40 rounded-full border-[10px] border-slate-100 dark:border-slate-800">
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle 
                className="text-primary" 
                cx="80" cy="80" fill="transparent" r="70" 
                stroke="currentColor" 
                strokeDasharray="440" 
                strokeDashoffset="80" 
                strokeWidth="10" 
                strokeLinecap="round"
              />
            </svg>
            <div className="text-center">
              <span className="text-4xl font-bold">82</span>
              <span className="block text-[10px] font-semibold text-slate-500">/ 100</span>
            </div>
          </div>
          
          {/* Small Metrics */}
          <div className="grid grid-cols-4 gap-3 mt-8 w-full">
            {['FPS', 'DRAW', 'GEOM', 'TEX'].map((m, i) => (
              <div key={m} className="flex flex-col items-center gap-1">
                <div className="w-full bg-slate-100 dark:bg-slate-800 h-12 rounded-lg relative overflow-hidden flex items-end">
                  <div 
                    className="bg-primary/40 w-full rounded-t-sm" 
                    style={{ height: `${[90, 45, 30, 15][i]}%` }}
                  ></div>
                </div>
                <span className="text-[8px] font-bold text-slate-500">{m}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Optimization */}
        <section className="space-y-4">
          <h3 className="text-xs font-bold">Optimization Presets</h3>
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
            <button className="flex-1 py-2 text-xs font-bold rounded-lg bg-white dark:bg-slate-700 shadow-sm text-primary transition-all">Web</button>
            <button className="flex-1 py-2 text-xs font-bold text-slate-500 transition-all">Mobile</button>
          </div>
          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <span className="material-symbols-outlined text-amber-500 text-sm">lightbulb</span>
              <p className="text-[10px] leading-relaxed text-slate-500">Reduce texture resolution to 1024px for improved mobile loading speeds.</p>
            </div>
            <div className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800">
              <span className="material-symbols-outlined text-primary text-sm">info</span>
              <p className="text-[10px] leading-relaxed text-slate-500">Instance similar geometries to reduce draw calls from 124 to 42.</p>
            </div>
          </div>
        </section>

        {/* Preview */}
        <section className="space-y-3">
          <h3 className="text-xs font-bold">Project Preview</h3>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-400 to-slate-500 opacity-20 flex items-center justify-center">
              <span className="material-symbols-outlined text-4xl text-slate-400">view_in_ar</span>
            </div>
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/60 backdrop-blur-sm rounded text-[8px] text-white font-mono">v1.0.4-alpha</div>
          </div>
        </section>

        {/* Share Link */}
        <section className="space-y-3">
           <div className="relative">
            <div className="flex items-center bg-slate-100 dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-3">
              <span className="material-symbols-outlined text-xs text-slate-400 mr-2">link</span>
              <input 
                className="bg-transparent border-none p-0 focus:ring-0 text-[10px] font-mono text-slate-500 flex-1" 
                readOnly 
                value="threed.io/s/project-alpha" 
              />
              <button className="material-symbols-outlined text-sm text-slate-400 active:text-primary">content_copy</button>
            </div>
          </div>
        </section>

        {/* Publish Button */}
        <div className="pt-4 pb-12">
          <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 active:scale-95 transition-all flex items-center justify-center gap-2">
            <span className="material-symbols-outlined">publish</span>
            Publish to Web
          </button>
        </div>
      </div>
    </div>
  );
};

export default Publish;
