import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from "./pages/LoginPage";//import ProcterDashboard from './ProcterDashboard';
//<Route path="/procter-dashboard" element={<ProcterDashboard />} />

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;