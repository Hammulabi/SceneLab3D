
import React from 'react';
import { Screen } from '../types';

interface DashboardProps {
  onNavigate: (screen: Screen) => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="h-full flex flex-col overflow-y-auto no-scrollbar">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
        <div className="flex items-center justify-between p-4 pb-2">
          <button className="text-slate-900 dark:text-white flex size-10 items-center justify-center border border-slate-300 dark:border-slate-700 rounded-lg">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <h2 className="text-lg font-bold">Dashboard</h2>
          <button className="flex size-10 items-center justify-center border border-slate-300 dark:border-slate-700 rounded-lg">
            <span className="material-symbols-outlined">account_circle</span>
          </button>
        </div>
        
        {/* Navigation Tabs */}
        <div className="px-4 overflow-x-auto no-scrollbar">
          <div className="flex gap-6 min-w-max">
            {['Projects', 'Templates', 'Tutorials', 'Publish'].map((tab, idx) => (
              <button 
                key={tab}
                onClick={() => {
                  if (tab === 'Templates') onNavigate(Screen.GALLERY);
                  if (tab === 'Tutorials') onNavigate(Screen.TUTORIAL);
                  if (tab === 'Publish') onNavigate(Screen.PUBLISH);
                }}
                className={`flex flex-col items-center justify-center border-b-2 pb-3 pt-4 ${
                  idx === 0 ? 'border-primary text-primary' : 'border-transparent text-slate-500'
                }`}
              >
                <p className="text-sm font-bold">{tab}</p>
              </button>
            ))}
          </div>
        </div>
      </header>

      <div className="p-4 space-y-8 flex-1">
        {/* Hero CTA */}
        <section>
          <button 
            onClick={() => onNavigate(Screen.ASSISTANT)}
            className="w-full flex flex-col items-center justify-center gap-4 p-10 border-2 border-dashed border-primary/50 bg-primary/5 dark:bg-primary/10 rounded-xl group transition-all hover:bg-primary/20 active:scale-[0.98]"
          >
            <div className="size-14 rounded-full bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-3xl">add</span>
            </div>
            <div className="text-center">
              <h1 className="text-xl font-bold text-slate-900 dark:text-white">Create my first 3D scene</h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">Start with React Three Fiber</p>
            </div>
          </button>
        </section>

        {/* Learning Path Progress */}
        <section>
          <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900/50">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500">Learning Path</h3>
              <span className="text-primary font-bold text-sm">45% Complete</span>
            </div>
            <div className="w-full bg-slate-200 dark:bg-slate-800 h-3 rounded-full overflow-hidden">
              <div className="bg-primary h-full w-[45%] rounded-full"></div>
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-400">Next: Introduction to Shaders</p>
          </div>
        </section>

        {/* Recent Projects */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Recent Projects</h2>
            <button className="text-sm font-medium text-primary">View all</button>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2 cursor-pointer group" onClick={() => onNavigate(Screen.EDITOR)}>
              <div className="aspect-square rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 wireframe-x group-hover:border-primary transition-colors"></div>
              <div className="h-4 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-3 w-1/2 bg-slate-100 dark:bg-slate-900 rounded"></div>
            </div>
            <div className="flex flex-col gap-2 cursor-pointer group" onClick={() => onNavigate(Screen.EDITOR)}>
              <div className="aspect-square rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 wireframe-x group-hover:border-primary transition-colors"></div>
              <div className="h-4 w-2/3 bg-slate-200 dark:bg-slate-800 rounded"></div>
              <div className="h-3 w-1/3 bg-slate-100 dark:bg-slate-900 rounded"></div>
            </div>
          </div>
        </section>

        {/* Featured Templates */}
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold">Featured Templates</h2>
          </div>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 border border-slate-200 dark:border-slate-800 rounded-lg bg-white dark:bg-slate-900/30 hover:bg-primary/5 transition-colors cursor-pointer">
                <div className="size-16 rounded bg-slate-200 dark:bg-slate-800 shrink-0 wireframe-x"></div>
                <div className="flex-1 space-y-2">
                  <div className="h-4 w-1/2 bg-slate-300 dark:bg-slate-700 rounded"></div>
                  <div className="h-3 w-3/4 bg-slate-200 dark:bg-slate-800 rounded"></div>
                </div>
                <span className="material-symbols-outlined text-slate-400">chevron_right</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
