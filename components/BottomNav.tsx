
import React from 'react';
import { Screen } from '../types';

interface BottomNavProps {
  currentScreen: Screen;
  onNavigate: (screen: Screen) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentScreen, onNavigate }) => {
  const tabs = [
    { id: Screen.DASHBOARD, label: 'Home', icon: 'dashboard' },
    { id: Screen.GALLERY, label: 'Explore', icon: 'explore' },
    { id: Screen.EDITOR, label: 'New', icon: 'add', center: true },
    { id: Screen.TUTORIAL, label: 'Learn', icon: 'school' },
    { id: Screen.DESIGNER, label: 'Design', icon: 'edit' },
  ];

  return (
    <nav className="sticky bottom-0 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 px-6 py-3 pb-8 flex justify-between items-center z-50">
      {tabs.map((tab) => {
        const isActive = currentScreen === tab.id;
        
        if (tab.center) {
          return (
            <div key={tab.id} className="flex flex-col items-center gap-1 group">
              <button 
                onClick={() => onNavigate(tab.id)}
                className="size-10 -mt-10 bg-primary rounded-full flex items-center justify-center text-white shadow-lg border-4 border-background-light dark:border-background-dark active:scale-90 transition-transform"
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
              </button>
              <span className={`text-[10px] font-bold ${isActive ? 'text-primary' : 'text-slate-400'}`}>{tab.label}</span>
            </div>
          );
        }

        return (
          <button
            key={tab.id}
            onClick={() => onNavigate(tab.id)}
            className={`flex flex-col items-center gap-1 transition-colors ${
              isActive ? 'text-primary' : 'text-slate-400 hover:text-slate-500'
            }`}
          >
            <span className={`material-symbols-outlined ${isActive ? 'fill-[1]' : ''}`}>
              {tab.icon}
            </span>
            <span className="text-[10px] font-bold">{tab.label}</span>
          </button>
        );
      })}
    </nav>
  );
};

export default BottomNav;
