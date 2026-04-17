import React from 'react';

const AdminDashboard = () => {
  // Mock data
  const blockAnalytics = { totalBlocks: 5, avgOccupancy: 92 };
  const userRoles = [
    { name: 'John Proctor', role: 'Proctor' },
    { name: 'Maintenance Team', role: 'Staff' },
  ];
  const systemLogs = [
    { time: '10:00', event: 'System backup completed' },
    { time: '11:30', event: 'New user registered' },
  ];

  return (
    <div className="bg-primary min-h-screen p-6">
      <h1 className="text-3xl font-bold text-primary mb-8">Admin Dashboard</h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Block Analytics */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">Block Analytics</h3>
          <p className="text-slate-600">Total Blocks: {blockAnalytics.totalBlocks}</p>
          <p className="text-slate-600">Average Occupancy: {blockAnalytics.avgOccupancy}%</p>
        </div>

        {/* User Role Management */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">User Role Management</h3>
          <ul className="text-slate-600">
            {userRoles.map((user, index) => (
              <li key={index}>{user.name} - {user.role}</li>
            ))}
          </ul>
          <button className="btn-primary mt-4">Manage Roles</button>
        </div>

        {/* System Logs */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">System Logs</h3>
          <ul className="text-slate-600">
            {systemLogs.map((log, index) => (
              <li key={index}>{log.time}: {log.event}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;