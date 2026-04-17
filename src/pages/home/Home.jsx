import React from 'react';

const Home = () => {
  return (
    <div className="bg-primary min-h-screen">
      {/* Hero Section */}
      <div className="bg-dark text-light py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Smart Proctor-Based Integrated Dormitory Management System
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Revolutionizing dormitory management with IoT, automation, and intelligent oversight.
          </p>
          <button className="btn-primary text-lg px-8 py-3">
            Get Started
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-6xl mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Key Features
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* IoT Monitoring */}
          <div className="card text-center">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-light" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">IoT Monitoring</h3>
            <p className="text-slate-600">
              Real-time monitoring of dormitory facilities and student activities through integrated IoT sensors.
            </p>
          </div>

          {/* Automated Attendance */}
          <div className="card text-center">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Automated Attendance</h3>
            <p className="text-slate-600">
              Seamless check-in/check-out tracking with automated attendance logging for all residents.
            </p>
          </div>

          {/* Maintenance Tracking */}
          <div className="card text-center">
            <div className="bg-accent w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-light" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-primary mb-2">Maintenance Tracking</h3>
            <p className="text-slate-600">
              Efficient maintenance request handling and tracking for optimal facility upkeep.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;