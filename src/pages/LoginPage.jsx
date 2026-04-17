import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (username === "procter" && password === "procter123") {
            //  navigate("/procter-dashboard");
            alert("valid username or password");
        } else {
            alert("Invalid username or password");
        }
    };

    return (
        <div className='container'>
            <form onSubmit={handleSubmit} className='login-form'>
                <h2>Login Page</h2>

                <input
                    type="text"
                    placeholder="Enter Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <button type="submit" className='Mybutton'>Login</button>
                <a href="#" className='gorgetpassword'>Forget Password?</a>
            </form>
        </div>
    );
}

export default LoginPage;