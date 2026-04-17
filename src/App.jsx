import './App.css';
import Home from './pages/home/Home';
import LoginPage from './pages/login/LoginPage';
import Register from './pages/register/Register';
import StudentDashboard from './pages/dashboards/StudentDashboard';
import ProctorDashboard from './pages/dashboards/ProctorDashboard';
import AdminDashboard from './pages/dashboards/AdminDashboard';
import MaintenanceStaffDashboard from './pages/dashboards/MaintenanceStaffDashboard';

function App() {
    return (
        <div className="App">
            <Home />
            <LoginPage />
            <Register />
            <StudentDashboard />
            <ProctorDashboard />
            <AdminDashboard />
            <MaintenanceStaffDashboard />
        </div>
    );
}

export default App;