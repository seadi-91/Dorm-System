import React, { useState } from 'react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login data:', formData);
  };

  return (
    <div className="bg-primary min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-md">
        <h2 className="text-2xl font-bold text-center text-primary mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
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
          <div className="mb-6">
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
          <button type="submit" className="btn-primary w-full">
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-slate-600">
          Don't have an account? <a href="/register" className="text-accent">Register</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;