
import React, { useState } from 'react';
import { Screen } from './types';
import Dashboard from './screens/Dashboard';
import Editor from './screens/Editor';
import Assistant from './screens/Assistant';
import Gallery from './screens/Gallery';
import BlenderImport from './screens/BlenderImport';
import DesignerMode from './screens/DesignerMode';
import Tutorial from './screens/Tutorial';
import Publish from './screens/Publish';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>(Screen.DASHBOARD);

  const renderScreen = () => {
    switch (currentScreen) {
      case Screen.DASHBOARD:
        return <Dashboard onNavigate={setCurrentScreen} />;
      case Screen.EDITOR:
        return <Editor onNavigate={setCurrentScreen} />;
      case Screen.ASSISTANT:
        return <Assistant onNavigate={setCurrentScreen} />;
      case Screen.GALLERY:
        return <Gallery onNavigate={setCurrentScreen} />;
      case Screen.IMPORT:
        return <BlenderImport onNavigate={setCurrentScreen} />;
      case Screen.DESIGNER:
        return <DesignerMode onNavigate={setCurrentScreen} />;
      case Screen.TUTORIAL:
        return <Tutorial onNavigate={setCurrentScreen} />;
      case Screen.PUBLISH:
        return <Publish onNavigate={setCurrentScreen} />;
      default:
        return <Dashboard onNavigate={setCurrentScreen} />;
    }
  };

  return (
    <div className="flex h-full w-full flex-col bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 overflow-hidden">
      <main className="flex-1 relative overflow-hidden">
        {renderScreen()}
      </main>
      
      {/* Universal Bottom Navigation */}
      <BottomNav currentScreen={currentScreen} onNavigate={setCurrentScreen} />
      
      {/* iOS Home Indicator */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full z-[100] opacity-50"></div>
    </div>
  );
};

export default App;
