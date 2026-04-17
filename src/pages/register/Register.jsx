import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'student',
    dormitoryBlock: '',
    roomNumber: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle registration logic here
    console.log('Registration data:', formData);
  };

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="label block mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="mb-4">
            <label className="label block mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="mb-4">
            <label className="label block mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="input"
              required
            />
          </div>
          <div className="mb-4">
            <label className="label block mb-2">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="input"
            >
              <option value="student">Student</option>
              <option value="proctor">Proctor</option>
              <option value="admin">Admin</option>
              <option value="maintenance">Maintenance Staff</option>
            </select>
          </div>
          {formData.role === 'student' && (
            <>
              <div className="mb-4">
                <label className="label block mb-2">Dormitory Block</label>
                <input
                  type="text"
                  name="dormitoryBlock"
                  value={formData.dormitoryBlock}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="label block mb-2">Room Number</label>
                <input
                  type="text"
                  name="roomNumber"
                  value={formData.roomNumber}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>
            </>
          )}
          <button type="submit" className="btn-primary w-full">
            Register
          </button>
        </form>
        <p className="text-center mt-4 text-slate-600">
          Already have an account? <a href="/login" className="text-accent">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;