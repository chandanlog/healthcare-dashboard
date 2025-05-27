import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import DashboardMainContent from './components/DashboardMainContent';

const App = () => {
  return (
    <div className="min-h-screen flex">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Right side with header + content */}
      <div className="flex flex-col flex-1 min-h-screen bg-gray-50">
        {/* Header only on the right content area */}
        <Header />
        
        {/* Main content */}
        <main className="flex-1 p-6 overflow-auto">
          <DashboardMainContent />
        </main>
      </div>
    </div>
  );
};

export default App;
