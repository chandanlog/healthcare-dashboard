import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header = () => {
  return (
    <header className=" border-gray-200 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
        </div>
        <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
      </div>
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-cyan-500 rounded-[10px] flex items-center justify-center">
            <span className="text-white text-sm font-medium">DR</span>
          </div>
        </div>
        <button className="bg-cyan-500 text-white p-2 rounded-[10px] hover:bg-cyan-600">
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </header>
  );
};

export default Header;