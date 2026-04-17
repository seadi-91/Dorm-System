import React from 'react';

const ProctorDashboard = () => {
  // Mock data
  const blockOverview = { totalRooms: 100, occupied: 95, vacant: 5 };
  const checkInOutFeed = [
    { student: 'John Doe', action: 'Check-in', time: '08:00' },
    { student: 'Jane Smith', action: 'Check-out', time: '22:00' },
  ];
  const incidents = [
    { type: 'Noise Complaint', time: '21:30', details: 'Room 101' },
  ];

  return (
    <div className="bg-primary min-h-screen p-6">
      <h1 className="text-3xl font-bold text-primary mb-8">Proctor Dashboard</h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Live Block Overview */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">Live Block Overview</h3>
          <p className="text-slate-600">Total Rooms: {blockOverview.totalRooms}</p>
          <p className="text-slate-600">Occupied: {blockOverview.occupied}</p>
          <p className="text-slate-600">Vacant: {blockOverview.vacant}</p>
        </div>

        {/* Student Check-in/Check-out Feed */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">Check-in/Check-out Feed</h3>
          <ul className="text-slate-600">
            {checkInOutFeed.map((entry, index) => (
              <li key={index}>{entry.student} - {entry.action} at {entry.time}</li>
            ))}
          </ul>
        </div>

        {/* Incident Reporting */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">Incident Reporting</h3>
          <ul className="text-slate-600">
            {incidents.map((incident, index) => (
              <li key={index}>{incident.type} at {incident.time} - {incident.details}</li>
            ))}
          </ul>
          <button className="btn-primary mt-4">Report New Incident</button>
        </div>
      </div>
    </div>
  );
};

export default ProctorDashboard;