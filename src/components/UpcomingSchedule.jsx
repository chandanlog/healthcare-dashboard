import React from 'react';
import { upcomingAppointments } from '../data/appointmentsData';

const UpcomingSchedule = () => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">The Upcoming Schedule</h3>
      
      <div className="space-y-6">
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">On Thursday</h4>
            <div className="flex flex-wrap gap-4">
            {upcomingAppointments.thursday.map((appointment, index) => (
              <div key={index} className="p-3 rounded-[20px]" style={{ backgroundColor: appointment.color }}>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-gray-900">{appointment.title}</span>
                  <img src={appointment.image} alt={appointment.title} className="w-4 h-4" />
                 </div>
                <p className="text-xs text-gray-600">{appointment.time}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium text-gray-700 mb-3">On Saturday</h4>
          <div className="flex flex-wrap gap-4">
            {upcomingAppointments.saturday.map((appointment, index) => (
              <div key={index} className="p-3 rounded-[20px]" style={{ backgroundColor: appointment.color }}>
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-sm font-medium text-gray-900">{appointment.title}</span>
                  <img src={appointment.image} alt={appointment.title} className="w-4 h-4" />
                </div>
                <p className="text-xs text-gray-600">{appointment.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;