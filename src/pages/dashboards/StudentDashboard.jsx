import React from 'react';

const StudentDashboard = () => {
  // Mock data
  const roomStatus = { occupied: true, clean: true };
  const attendanceLog = [
    { date: '2023-10-01', status: 'Present' },
    { date: '2023-10-02', status: 'Late' },
  ];
  const lateNotifications = [
    { time: '2023-10-02 22:30', message: 'Late entry recorded' },
  ];

  return (
    <div className="bg-primary min-h-screen p-6">
      <h1 className="text-3xl font-bold text-primary mb-8">Student Dashboard</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Room Status */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">Room Status</h3>
          <p className="text-slate-600">Occupied: {roomStatus.occupied ? 'Yes' : 'No'}</p>
          <p className="text-slate-600">Clean: {roomStatus.clean ? 'Yes' : 'No'}</p>
        </div>

        {/* Attendance Log */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">Attendance Log</h3>
          <ul className="text-slate-600">
            {attendanceLog.map((entry, index) => (
              <li key={index}>{entry.date}: {entry.status}</li>
            ))}
          </ul>
        </div>

        {/* Late Entry Notifications */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">Late Entry Notifications</h3>
          <ul className="text-slate-600">
            {lateNotifications.map((notif, index) => (
              <li key={index}>{notif.time}: {notif.message}</li>
            ))}
          </ul>
        </div>

        {/* Submit Maintenance Request */}
        <div className="card flex flex-col justify-center items-center">
          <button className="btn-primary mb-4">Submit Maintenance Request</button>
          <p className="text-slate-600 text-center">Report issues in your room</p>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;