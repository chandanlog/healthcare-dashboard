import React from 'react';
import { Heart } from 'lucide-react';
import Scanner from './Scanner';

const AnatomySection = () => {
  return (
    <div style={{ backgroundColor: '#f6faff' }} className="bg-white rounded-[20px] p-6 shadow-sm border border-gray-100 relative z-10">
      <div className="flex items-center justify-center mb-4 relative">
        <div className="relative w-auto h-auto rounded-lg overflow-visible">
          <img
            src="./Human_Body_Anatomy_rmbg.png" // 🖼️ Update this path as needed
            alt="Human Body Anatomy"
            className="w-full h-[600px] object-cover relative"
          />

          {/* Scanner for Heart */}
          <Scanner className="top-32 left-40 w-20 h-20" />

          {/* Scanner for Leg */}
          <Scanner className="bottom-32 left-36 w-20 h-20" />

          {/* Healthy Heart indicator */}
          <div className="absolute top-36 left-64 bg-blue-600 border border-blue-600 text-white px-4 py-2 rounded-[10px] text-xs font-medium flex items-center shadow-lg z-30">
            <div className="bg-blue-600 p-1 rounded-full flex items-center justify-center mr-2">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <span>Healthy Heart</span>
          </div>

          {/* Healthy Leg indicator */}
          <div className="absolute bottom-36 left-4 bg-cyan-400 text-blue-600 px-4 py-2 rounded-[10px] text-xs font-medium shadow-lg z-30">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-cyan-600 rounded-full mr-2 flex items-center justify-center">
                <span className="text-white text-xs">🦵</span>
              </div>
              <span>Healthy Leg</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnatomySection;
