import React from 'react';
import { navigationItems } from '../data/navigationData';

const Sidebar = () => {
  // Split items
  const generalItems = navigationItems.slice(0, 5); 
  const toolsItems = navigationItems.slice(5, 7);
  const settingItem = navigationItems[7];

  return (
    <aside className="bg-white border-r border-gray-200 w-64 h-screen flex flex-col justify-between p-6">
      <div>
        {/* Title */}
        <h1 className="text-2xl font-bold text-cyan-500 mb-8">
          Health<span className="text-gray-800">care.</span>
        </h1>

        {/* General Section */}
        <div className="mb-6">
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">General</h3>
          <nav className="space-y-2">
            {generalItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    item.active
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Tools Section */}
        <div>
          <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Tools</h3>
          <nav className="space-y-2">
            {toolsItems.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
                    item.active
                      ? 'bg-gray-100 text-gray-900'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <IconComponent className="w-5 h-5" />
                  <span className="font-medium">{item.label}</span>
                </div>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Setting at Bottom */}
      <div>
        <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-3">Settings</h3>
        <div
          className={`flex items-center space-x-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
            settingItem.active
              ? 'bg-gray-100 text-gray-900'
              : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
          }`}
        >
          <settingItem.icon className="w-5 h-5" />
          <span className="font-medium">{settingItem.label}</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
