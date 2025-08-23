import React from "react";
import "./LoginForm.css";
import AppleIcon from '@mui/icons-material/Apple';
import GoogleIcon from '@mui/icons-material/Google';

export default function LoginForm({ onClose }) {
    return (
        <div className="auth-modal">
            <div className="auth-box">
                <button className="close-btn" onClick={onClose}>✖</button>
                <h2>Login</h2>

                <input type="email" placeholder="Email" name="email" />
                <input type="password" placeholder="Password" name="password" />
                <button className="login-btn">Login</button>

                <div className="social-login">
                    <button className="google-btn"><GoogleIcon fontSize="medium" /></button>
                    <button className="apple-btn"><AppleIcon fontSize="medium" /></button>
                </div>

                <div className="auth-links">
                    <span>Don't have an account? <a href="#">Sign Up</a></span>
                    <span><a href="#">Forgot?</a></span>
                </div>
            </div>
        </div>
    );
}