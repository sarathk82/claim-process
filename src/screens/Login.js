import React, { useState } from 'react';
import '../App.css';

const Login = () => {
    // State to handle form fields
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform login logic using email and password
        // Example: Call an API to authenticate the user
        console.log('Login with:', email, password);
    };

    return (
        <div className="login-container">
            <div className="centered-form">
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit">Login</button>
                </form>
                <div className="forgot-password">
                    <a href="/forgot-password">Forgot password?</a>
                </div>
                <div className="signup-link">
                    <p>New user? <a href="/signup">Sign up</a></p>
                </div>
            </div>
        </div>
    );
};

export default Login;
