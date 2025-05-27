import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const CalendarView = () => {
  const days = [
    { day: 'Mon', date: 25, slots: ['10:00', '11:00', '12:00'] },
    { day: 'Tues', date: 26, slots: ['08:00', '09:00', '10:00'], selected: true },
    { day: 'Wed', date: 27, slots: ['12:00', '', '13:00'] },
    { day: 'Thurs', date: 28, slots: ['10:00', '11:00', ''] },
    { day: 'Fri', date: 29, slots: ['', '14:00', '16:00'] },
    { day: 'Sat', date: 30, slots: ['12:00', '14:00', '15:00'] },
    { day: 'Sun', date: 31, slots: ['09:00', '10:00', '11:00'], faded: true },
  ];

  const appointments = {
  '2021-10-26': [
    {
      title: 'Dentist',
      time: '09:00–11:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷',
      color: 'bg-[#3535cd] text-white',
    },
    {
      title: 'Physiotherapy Appointment',
      time: '11:00–12:00',
      doctor: 'Dr. Kevin Djones',
      icon: '💪',
      color: 'bg-[#dfeaff] text-[#3535cd]',
    },
  ],
  '2021-10-28': [
    {
      title: 'Dentist',
      time: '11:00–12:00',
      doctor: 'Dr. Cameron Williamson',
      icon: '🦷',
      color: 'bg-[#3535cd] text-white',
    },
  ],
  '2021-10-30': [
    {
      title: 'Physiotherapy Appointment',
      time: '12:00–13:00',
      doctor: 'Dr. Kevin Djones',
      icon: '💪',
      color: 'bg-[#dfeaff] text-[#3535cd]',
    },
  ],
  '2021-10-31': [
    {
      title: 'Physiotherapy Appointment',
      time: '12:00–13:00',
      doctor: 'Dr. Kevin Djones',
      icon: '💪',
      color: 'bg-[#dfeaff] text-[#3535cd]',
    },
  ],
};

  const selectedDate = '2021-10-26';

  return (
     <div className="bg-[#f8faff] rounded-lg p-6 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900">October 2021</h3>
        <div className="flex items-center space-x-2">
          <ChevronLeft className="w-5 h-5 text-[#7f8fa6] cursor-pointer" />
          <ChevronRight className="w-5 h-5 text-[#7f8fa6] cursor-pointer" />
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4 text-center text-sm mb-6">
        {days.map((d, idx) => {
          const dateKey = `2021-10-${d.date}`;
          return (
            <div
              key={idx}
              className={`flex flex-col items-center rounded-[10px] p-6 ${
                d.selected ? 'bg-[#eef5ff]' : ''
              } ${d.faded ? 'text-gray-400' : 'text-gray-700'}`}
            >
              <span className="font-medium text-xs">{d.day}</span>
              <span className="text-base font-semibold">{d.date}</span>
              <div className="flex flex-col mt-2 space-y-1 w-full items-center">
                {d.slots.map((slot, i) =>
                  slot ? (
                    <span
                      key={i}
                      className={`text-xs px-2 py-1 rounded-[10px] ${
                        d.selected && slot === '09:00'
                          ? 'bg-[#3535cd] text-white'
                          : 'bg-[#dfeaff] text-[#3535cd]'
                      }`}
                    >
                      {slot}
                    </span>
                  ) : (
                    <span key={i} className="text-xs text-gray-300">—</span>
                  )
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Appointment Cards */}
      <div className="flex flex-col md:flex-row gap-4">
        {(appointments[selectedDate] || []).map((app, idx) => (
          <div
            key={idx}
            className={`flex flex-col rounded-2xl px-4 py-3 ${app.color} w-full md:w-1/2 shadow-sm`}
          >
            <div className="flex justify-between items-center mb-1">
              <h4 className="text-sm font-semibold">{app.title}</h4>
              <span className="text-lg">{app.icon}</span>
            </div>
            <p className="text-xs">{app.time}</p>
            <p className="text-xs">{app.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
// export default CalendarView;