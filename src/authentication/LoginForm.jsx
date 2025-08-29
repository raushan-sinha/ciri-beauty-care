import React, { useState } from "react";
import "./LoginForm.css";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import AlertPopup from "../components/AlertPopup";

export default function LoginForm({ onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlertPopup, setShowAlertPopup] = useState('');
    const navigate = useNavigate();

    //TODO: Add form submission handler and validation logic -
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            setShowAlertPopup('Please fill in all fields.');
            return;
        }
        console.log('Logging in with:', { email, password });

        //TODO: Simulate successful login
        if (email.trim() && password.trim()) {
            navigate("/profile");
        } else {
            setShowAlertPopup('Invalid email or password.');
            return;
        }
    }

    return (
        <div className="auth-modal">
            <div className="auth-box">
                {/* Close Button */}
                <button id="close-btn" onClick={onClose}>✖</button>

                <h2>Login for CiriBeautyCare</h2>

                <form
                    className="login-form"
                    onSubmit={handleSubmit}
                >
                    <div className="form-group">
                        <input
                            type="email"
                            id="loginEmail"
                            name="email"
                            placeholder="Email"
                            aria-label="Email"
                            autoComplete="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            id="loginPassword"
                            name="password"
                            placeholder="Password"
                            aria-label="Password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="login-btn">Login</button>
                </form>

                {/* Social Login */}
                <div className="social-login">
                    <button type="button" id="google-btn">
                        <GoogleIcon fontSize="medium" />
                    </button>

                    <button type="button" id="apple-btn">
                        <AppleIcon fontSize="medium" />
                    </button>
                </div>

                {/* Links */}
                <div className="auth-links">
                    <span>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </span>
                    <span>
                        <Link to="/forgotPass">Forgot Password?</Link>
                    </span>
                </div>
            </div>

            {/* Alert Popup */}
            <AlertPopup message={showAlertPopup} onClose={() => setShowAlertPopup('')} />
        </div>
    );
}