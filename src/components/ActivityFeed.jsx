import React from 'react';
import { activityData } from '../data/activityData';

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.map(d => d.value));
  
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100 max-w-2xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">Activity</h3>
        <span className="text-sm text-gray-400">3 appointments on this week</span>
      </div>
      
      <div className="flex items-end justify-between h-32 px-2">
        {activityData.map((dayData, dayIndex) => (
          <div key={dayIndex} className="flex flex-col items-center">
            <div className="flex items-end space-x-1 mb-3 h-24">
              {dayData.bars.map((bar, barIndex) => (
                <div
                  key={barIndex}
                  className={`w-2 rounded-sm transition-all duration-300 ${
                    bar.highlighted 
                      ? 'bg-cyan-400' 
                      : 'bg-gray-200'
                  }`}
                  style={{ 
                    height: `${bar.height}%`,
                    maxHeight: '96px'
                  }}
                ></div>
              ))}
            </div>
            <span className="text-xs text-gray-500 font-medium">{dayData.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;