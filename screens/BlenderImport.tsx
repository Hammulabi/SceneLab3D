
import React, { useState } from 'react';
import { Screen } from '../types';

interface BlenderImportProps {
  onNavigate: (screen: Screen) => void;
}

const BlenderImport: React.FC<BlenderImportProps> = ({ onNavigate }) => {
  const [switches, setSwitches] = useState({
    center: true,
    normalize: false,
    draco: true
  });

  return (
    <div className="h-full flex flex-col overflow-y-auto no-scrollbar">
      <header className="sticky top-0 z-10 flex items-center bg-white/5 dark:bg-slate-800/50 backdrop-blur-md p-4 border-b border-slate-200 dark:border-slate-800">
        <button 
          onClick={() => onNavigate(Screen.EDITOR)}
          className="flex size-10 shrink-0 items-center justify-center text-slate-600 dark:text-slate-400"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-lg font-bold flex-1 text-center">Blender Import</h2>
        <div className="flex size-10 items-center justify-end text-slate-600 dark:text-slate-400">
          <span className="material-symbols-outlined">help_outline</span>
        </div>
      </header>

      <div className="p-4 space-y-6 flex-1">
        {/* Drop Zone */}
        <div className="flex flex-col items-center gap-6 rounded-xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/40 px-6 py-12 transition-all active:scale-[0.98]">
          <div className="flex flex-col items-center gap-4">
            <div className="bg-slate-200 dark:bg-slate-800 p-4 rounded-full">
              <span className="material-symbols-outlined text-4xl text-slate-400 dark:text-slate-500">upload_file</span>
            </div>
            <div className="text-center space-y-1">
              <p className="text-lg font-bold leading-tight">Drop .glb or .gltf here</p>
              <p className="text-sm font-normal text-slate-500 dark:text-slate-400">Select your model for R3F optimization</p>
            </div>
          </div>
          <button className="flex min-w-[140px] items-center justify-center rounded-lg h-11 px-6 bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white text-sm font-bold active:bg-slate-300 transition-colors">
            Browse Files
          </button>
        </div>

        {/* Analysis */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-primary text-xl">analytics</span>
            <h3 className="text-sm font-bold tracking-tight">Model Analysis</h3>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-4 space-y-3">
            <div className="flex justify-between items-center py-1">
              <p className="text-slate-500 text-xs">Scale</p>
              <p className="font-mono text-xs bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded">1.0, 1.0, 1.0</p>
            </div>
            <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800 pt-3">
              <p className="text-slate-500 text-xs">Pivot Point</p>
              <p className="text-xs font-medium">Origin (0,0,0)</p>
            </div>
            <div className="flex justify-between items-center py-1 border-t border-slate-100 dark:border-slate-800 pt-3">
              <p className="text-slate-500 text-xs">Mesh Count</p>
              <p className="text-xs font-medium">12 Objects</p>
            </div>
          </div>
        </div>

        {/* Fixes */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 px-1">
            <span className="material-symbols-outlined text-primary text-xl">auto_fix_high</span>
            <h3 className="text-sm font-bold tracking-tight">Suggested Fixes</h3>
          </div>
          <div className="space-y-2">
            {[
              { id: 'center', label: 'Center Geometry', desc: 'Align all meshes to center' },
              { id: 'normalize', label: 'Normalize Scale', desc: 'Apply non-uniform scaling' },
              { id: 'draco', label: 'Draco Compression', desc: 'Reduce file size (gltf-pipeline)' }
            ].map((f) => (
              <div key={f.id} className="flex items-center justify-between p-4 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">{f.label}</span>
                  <span className="text-[10px] text-slate-500">{f.desc}</span>
                </div>
                <button 
                  onClick={() => setSwitches(prev => ({ ...prev, [f.id]: !prev[f.id as keyof typeof prev] }))}
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus:outline-none ${switches[f.id as keyof typeof switches] ? 'bg-primary' : 'bg-slate-300 dark:bg-slate-700'}`}
                >
                  <span className={`inline-block w-4 h-4 transform bg-white rounded-full transition-transform ${switches[f.id as keyof typeof switches] ? 'translate-x-6' : 'translate-x-1'}`} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="pt-4 pb-12">
          <button 
            onClick={() => onNavigate(Screen.EDITOR)}
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Process & Preview</span>
            <span className="material-symbols-outlined text-lg">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlenderImport;
