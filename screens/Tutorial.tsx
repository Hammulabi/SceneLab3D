
import React from 'react';
import { Screen } from '../types';

interface TutorialProps {
  onNavigate: (screen: Screen) => void;
}

const Tutorial: React.FC<TutorialProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      <header className="sticky top-0 z-10 bg-background-light dark:bg-background-dark border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center p-4 pb-2 justify-between">
          <button onClick={() => onNavigate(Screen.DASHBOARD)} className="text-slate-900 dark:text-white flex size-10 shrink-0 items-center justify-center">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h2 className="text-lg font-bold flex-1 text-center">Mastering R3F</h2>
          <div className="flex w-10 items-center justify-end">
            <span className="material-symbols-outlined text-slate-400">help</span>
          </div>
        </div>
        <div className="px-4 py-2 space-y-2">
          <div className="flex justify-between items-end text-[10px]">
            <p className="text-slate-500 uppercase tracking-widest">Tutorial Progress</p>
            <p className="text-primary font-bold">3/8 Quests</p>
          </div>
          <div className="h-1.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <div className="h-full bg-primary transition-all duration-700" style={{ width: '37.5%' }}></div>
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar p-4 py-6 space-y-8">
        {/* Step Intro */}
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="bg-primary/20 text-primary text-[10px] font-bold px-2 py-0.5 rounded uppercase">Step 4</span>
            <h1 className="text-xl font-bold">Add a Point Light</h1>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            To illuminate your scene, you need to add a light source. The <code className="bg-primary/10 px-1 rounded text-primary">PointLight</code> emits light from a single point in all directions.
          </p>
          
          {/* Code Block */}
          <div className="bg-slate-900 rounded-xl p-4 font-mono text-[10px] border border-slate-800 overflow-x-auto text-slate-300">
            <div className="flex justify-between mb-3 text-slate-500 border-b border-slate-800 pb-2">
              <span>App.js</span>
              <span className="material-symbols-outlined text-xs">content_copy</span>
            </div>
            <pre><code>
<span className="text-primary">import</span> {'{'} Canvas {'}'} <span className="text-primary">from</span> <span className="text-emerald-500">'@react-three/fiber'</span><br/>
<br/>
<span className="text-primary">function</span> <span className="text-amber-400">Scene</span>() {'{'}<br/>
&nbsp;&nbsp;<span className="text-primary">return</span> (<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;Canvas&gt;<br/>
<span className="bg-primary/10 border-l-2 border-primary -mx-4 px-4 block">
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;pointLight position={[<span className="text-orange-400">10, 10, 10</span>]} /&gt;
</span>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&lt;mesh&gt;...&lt;/mesh&gt;<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&lt;/Canvas&gt;<br/>
&nbsp;&nbsp;)<br/>
{'}'}
            </code></pre>
          </div>
        </section>

        {/* Path List */}
        <section className="space-y-3">
          <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Your Path</h3>
          <div className="space-y-2">
            {[
              { label: 'Initialize Scene', status: 'COMPLETED', icon: 'check', color: 'bg-emerald-500', active: false },
              { label: 'Add a Point Light', status: 'CURRENT STEP', icon: 'play_circle', color: 'text-primary', active: true },
              { label: 'Create a Material', status: 'LOCKED', icon: 'lock', color: 'text-slate-400', active: false, locked: true }
            ].map((q, idx) => (
              <div 
                key={idx} 
                className={`flex items-center gap-4 p-4 rounded-xl border transition-all ${
                  q.active ? 'bg-primary/5 border-primary border-2' : 'border-slate-200 dark:border-slate-800 opacity-60'
                } ${q.locked ? 'border-dashed' : ''}`}
              >
                <div className={`size-6 rounded-full flex items-center justify-center ${q.color} ${q.active ? 'border-2 border-primary text-primary' : 'text-white'}`}>
                  <span className="material-symbols-outlined text-xs">{q.icon}</span>
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold">{q.label}</h4>
                  <p className="text-[9px] font-bold tracking-tight opacity-70">{q.status}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="sticky bottom-0 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md p-6 flex gap-3 z-50">
        <button className="flex-1 h-12 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-500 font-bold text-xs">SKIP</button>
        <button className="flex-[2] h-12 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform">
          NEXT STEP
          <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </button>
      </footer>
    </div>
  );
};

export default Tutorial;
