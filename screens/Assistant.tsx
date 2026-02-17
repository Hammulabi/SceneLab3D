
import React, { useState } from 'react';
import { Screen } from '../types';

interface AssistantProps {
  onNavigate: (screen: Screen) => void;
}

const Assistant: React.FC<AssistantProps> = ({ onNavigate }) => {
  const [step, setStep] = useState(2);

  return (
    <div className="h-full flex flex-col bg-[#0a0f18] relative overflow-hidden">
      {/* 3D Backdrop Simulation */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#324467 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-white/5 rounded-xl flex items-center justify-center">
          <span className="material-symbols-outlined text-white/5 text-9xl">deployed_code</span>
        </div>
      </div>

      {/* Interface */}
      <div className="relative z-10 flex flex-col h-full">
        {/* App Bar */}
        <header className="flex items-center bg-background-dark/80 backdrop-blur-md p-4 justify-between border-b border-white/5">
          <button 
            onClick={() => onNavigate(Screen.DASHBOARD)}
            className="text-white flex size-10 items-center justify-center rounded-full hover:bg-white/10"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="flex flex-col items-center">
            <h2 className="text-white text-sm font-bold tracking-tight">Scene Assistant</h2>
            <span className="text-[9px] text-primary font-bold uppercase tracking-widest">R3F Onboarding</span>
          </div>
          <button className="flex size-10 items-center justify-end text-white">
            <span className="material-symbols-outlined">help</span>
          </button>
        </header>

        {/* Progress Bar */}
        <div className="bg-background-dark/80 backdrop-blur-md px-4 py-3 flex flex-col gap-2 border-b border-white/5">
          <div className="flex justify-between items-center text-[10px]">
            <p className="text-white/60 font-medium uppercase tracking-wider">Setup Progress</p>
            <p className="text-primary font-bold">{step} of 3 Steps</p>
          </div>
          <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary rounded-full transition-all duration-500" 
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-4 flex flex-col gap-6">
          {/* Checklist Card */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-sm">
            <h3 className="text-white text-xs font-semibold mb-3">Wizard Checklist</h3>
            <div className="space-y-1">
              {[
                { label: 'Camera setup', completed: true },
                { label: 'Light setup', completed: step >= 2 },
                { label: 'Base object', completed: step >= 3 }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-center gap-3 py-2 px-1 rounded-lg transition-all ${
                    item.completed ? 'bg-primary/10 border border-primary/20 text-white' : 'opacity-40 text-white'
                  }`}
                >
                  <div className={`flex items-center justify-center size-5 rounded-full ${item.completed ? 'bg-primary' : 'border border-white/30'}`}>
                    {item.completed && <span className="material-symbols-outlined text-xs">check</span>}
                  </div>
                  <p className="text-xs font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Step Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-primary/20 text-primary px-2 py-0.5 rounded text-[10px] font-bold">ACTIVE</span>
              <h3 className="text-white text-lg font-bold tracking-tight">Step 2: Light Setup</h3>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed">
              Lighting is crucial for React Three Fiber scenes. Choose a suggestion or customize manually.
            </p>

            <div className="grid grid-cols-1 gap-3">
              {[
                { name: 'Studio Neutral', desc: 'Perfect for product visualization.', icon: 'wb_sunny' },
                { name: 'Cinematic Dark', desc: 'High contrast with rim lights.', icon: 'nightlight' }
              ].map((sug, i) => (
                <button 
                  key={i}
                  className="flex flex-col items-start gap-1 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-primary/50 transition-all text-left group"
                >
                  <div className="flex w-full justify-between items-center">
                    <span className="text-white font-medium text-xs flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">{sug.icon}</span>
                      {sug.name}
                    </span>
                    <span className="material-symbols-outlined text-white/20 group-hover:text-primary transition-colors">bolt</span>
                  </div>
                  <p className="text-[10px] text-slate-500">{sug.desc}</p>
                  <div className={`mt-3 w-full py-2 rounded-lg text-center text-[10px] font-bold text-white transition-colors ${i === 0 ? 'bg-primary' : 'bg-white/10 group-hover:bg-primary/20'}`}>
                    Apply Suggestion
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <footer className="p-6 bg-background-dark border-t border-white/10 flex gap-3">
          <button 
            onClick={() => setStep(prev => Math.max(1, prev - 1))}
            className="flex-1 h-12 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <span className="material-symbols-outlined text-sm">chevron_left</span>
            Back
          </button>
          <button 
            onClick={() => step < 3 ? setStep(prev => prev + 1) : onNavigate(Screen.DESIGNER)}
            className="flex-[2] h-12 rounded-xl bg-primary text-white font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-primary/20 active:scale-95 transition-transform"
          >
            {step < 3 ? 'Next Step' : 'Finish Setup'}
            <span className="material-symbols-outlined text-sm">chevron_right</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Assistant;
