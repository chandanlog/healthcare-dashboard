import React from 'react';
import { Activity, Heart, Stethoscope } from 'lucide-react';
import { healthData } from '../data/healthData';

const HealthStatusCards = () => {
  return (
    <div className="space-y-6">
      {healthData.map((item, index) => (
        <div key={index} style={{ backgroundColor: '#f6faff' }} className="rounded-lg p-4 shadow-sm border border-gray-100">
          <div className="flex items-center space-x-5 mb-6">
            {item.type === 'Lungs' && <img src="./lungs.png" alt="Lungs" className="w-11 h-11" />}
            {item.type === 'Teeth' && <img src="./tooth.png" alt="Tooth" className="w-11 h-11" />}
            {item.type === 'Bone' && <img src="./bone.png" alt="Bone" className="w-11 h-11" />}
            <div>
              <h4 className="font-medium text-gray-900">{item.type}</h4>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full" 
              style={{ 
                width: `${item.progress}%`, 
                backgroundColor: item.color 
              }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;