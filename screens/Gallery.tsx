
import React, { useState } from 'react';
import { Screen } from '../types';

interface GalleryProps {
  onNavigate: (screen: Screen) => void;
}

const Gallery: React.FC<GalleryProps> = ({ onNavigate }) => {
  const categories = ['All', 'Landing Pages', 'Shaders', 'Physics', 'Particles'];
  const [activeCategory, setActiveCategory] = useState('All');

  const templates = [
    { name: 'Scroll Controls', diff: 'Beginner', tech: 'Drei', ts: true, icon: 'view_in_ar' },
    { name: 'Custom Shader', diff: 'Advanced', tech: 'GLSL', ts: false, icon: 'blur_on' },
    { name: 'Physics World', diff: 'Intermediate', tech: 'Cannon', ts: false, icon: 'layers' },
    { name: 'Instanced Mesh', diff: 'Advanced', tech: 'Perf', ts: true, icon: 'dataset' },
    { name: 'Arch Viz Starter', diff: 'Easy', tech: 'Static', ts: false, icon: 'home', comingSoon: true }
  ];

  return (
    <div className="h-full flex flex-col bg-background-light dark:bg-background-dark overflow-hidden">
      <header className="flex items-center justify-between px-4 pt-6 pb-2 border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-primary text-2xl">deployed_code</span>
          <h1 className="text-xl font-bold tracking-tight">Gallery</h1>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">search</span>
          </button>
          <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800">
            <span className="material-symbols-outlined">filter_list</span>
          </button>
        </div>
      </header>

      {/* Categories Horizontal Scroll */}
      <div className="flex gap-2 p-4 overflow-x-auto no-scrollbar whitespace-nowrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`flex h-9 shrink-0 items-center justify-center rounded-full px-5 text-sm font-semibold transition-colors ${
              activeCategory === cat ? 'bg-primary text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <main className="flex-1 overflow-y-auto no-scrollbar px-4 pb-12">
        <div className="grid grid-cols-2 gap-4 py-2">
          {templates.map((temp, i) => (
            <div 
              key={i} 
              className={`flex flex-col gap-2 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-2 shadow-sm ${
                temp.comingSoon ? 'opacity-60' : ''
              }`}
            >
              <div className="relative aspect-video w-full rounded-lg bg-slate-100 dark:bg-slate-800 flex items-center justify-center overflow-hidden">
                <span className="material-symbols-outlined text-slate-700 dark:text-slate-600 text-4xl">{temp.icon}</span>
                {temp.ts && (
                  <div className="absolute top-2 right-2 bg-primary/20 text-primary text-[10px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wider">TS</div>
                )}
              </div>
              <div className="px-1 py-1">
                <h3 className="text-sm font-bold leading-tight line-clamp-1">{temp.name}</h3>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-[10px] text-slate-500 font-medium">{temp.diff}</span>
                  <span className="text-slate-400 text-[10px]">•</span>
                  <span className="text-[10px] text-slate-500 font-medium">{temp.tech}</span>
                </div>
              </div>
              <button 
                disabled={temp.comingSoon}
                onClick={() => onNavigate(Screen.EDITOR)}
                className={`w-full h-9 flex items-center justify-center gap-2 rounded-lg text-xs font-bold transition-all active:scale-95 ${
                  temp.comingSoon 
                    ? 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed' 
                    : 'bg-primary text-white hover:bg-primary/90'
                }`}
              >
                {!temp.comingSoon && <span className="material-symbols-outlined text-sm">code</span>}
                {temp.comingSoon ? 'Coming Soon' : 'View Code'}
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Gallery;
