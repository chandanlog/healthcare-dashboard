import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const DashboardMainContent = () => {
  return (
    <main className="flex-1 p-6 bg-gray-50">
      <div className="grid grid-cols-12 gap-6">
        {/* Left Partition */}
        <div className="col-span-6 space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <h2 style= {{ color: '#0f114c' }} className="text-2xl font-bold text-gray-900">Dashboard</h2>
            <span className="text-sm text-gray-500">This Week</span>
          </div>

          {/* Anatomy & HealthStatus side by side */}
          <div className="grid grid-cols-2 gap-6">
            <AnatomySection />
            <HealthStatusCards />
          </div>

          {/* Activity Feed below */}
          <ActivityFeed />
        </div>

        {/* Right Partition */}
        <div className="col-span-6 space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;