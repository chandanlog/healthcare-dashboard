# 🏥 Healthcare Dashboard

A pixel-perfect, responsive healthcare dashboard built with **React** and **Vite**, designed to provide a clean and organized interface for managing health-related data. This project replicates a detailed UI layout, emphasizing component-based architecture and meticulous styling.

## 🚀 Live Demo

Experience the dashboard live: [https://healthcare-dashboard-fawn.vercel.app](https://healthcare-dashboard-fawn.vercel.app)

## 🧰 Tech Stack

- **Framework**: [React](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Font Awesome](https://fontawesome.com/) / [Lucide](https://lucide.dev/)
- **Package Manager**: [npm](https://www.npmjs.com/)

## 📁 Project Structure

```bash
healthcare-dashboard/
├── public/
├── src/
│   ├── assets/            # Images and icons
│   ├── components/        # Reusable components
│   │   ├── Header/
│   │   ├── Sidebar/
│   │   ├── DashboardMainContent/
│   │   │   ├── AnatomySection/
│   │   │   ├── HealthStatusCards/
│   │   │   ├── CalendarView/
│   │   │   ├── UpcomingSchedule/
│   │   │   ├── ActivityFeed/
│   │   │   └── SimpleAppointmentCard/
│   ├── data/              # Static mock data
│   │   ├── appointments.js
│   │   ├── healthData.js
│   │   └── navigationLinks.js
│   ├── styles/            # Global and component-specific styles
│   ├── App.js
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
