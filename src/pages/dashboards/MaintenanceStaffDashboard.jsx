import React from 'react';

const MaintenanceStaffDashboard = () => {
  // Mock data
  const pendingTickets = [
    { id: 1, issue: 'Broken light', room: '101', urgency: 'High' },
    { id: 2, issue: 'Leaky faucet', room: '205', urgency: 'Medium' },
  ].sort((a, b) => (a.urgency === 'High' ? -1 : 1)); // Sort by urgency

  const completedTasks = [
    { id: 3, issue: 'Fixed door', room: '102', completedAt: '2023-10-01' },
  ];

  const inventoryStatus = { bulbs: 50, pipes: 20, tools: 10 };

  return (
    <div className="bg-primary min-h-screen p-6">
      <h1 className="text-3xl font-bold text-primary mb-8">Maintenance Staff Dashboard</h1>
      <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Pending Repair Tickets */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">Pending Repair Tickets</h3>
          <ul className="text-slate-600">
            {pendingTickets.map((ticket) => (
              <li key={ticket.id} className="mb-2">
                <strong>{ticket.issue}</strong> - Room {ticket.room} ({ticket.urgency})
              </li>
            ))}
          </ul>
        </div>

        {/* Completed Tasks */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">Completed Tasks</h3>
          <ul className="text-slate-600">
            {completedTasks.map((task) => (
              <li key={task.id} className="mb-2">
                {task.issue} - Room {task.room} (Completed: {task.completedAt})
              </li>
            ))}
          </ul>
        </div>

        {/* Inventory Status */}
        <div className="card">
          <h3 className="text-xl font-semibold text-primary mb-4">Inventory Status</h3>
          <p className="text-slate-600">Bulbs: {inventoryStatus.bulbs}</p>
          <p className="text-slate-600">Pipes: {inventoryStatus.pipes}</p>
          <p className="text-slate-600">Tools: {inventoryStatus.tools}</p>
          <button className="btn-primary mt-4">Update Inventory</button>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceStaffDashboard;