import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import AlertPopup from "../components/AlertPopup";

export default function LoginForm({ onClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showAlertPopup, setShowAlertPopup] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedUserEmail = localStorage.getItem("userEmail");
        if (loggedUserEmail) {
            setIsLoggedIn(true);
            navigate("/profile");
        }
    }, [navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim()) {
            setShowAlertPopup("Please fill in all fields.");
            return;
        }
        localStorage.setItem("userEmail", email);
        setIsLoggedIn(true);
        navigate("/profile");
    };

    if (isLoggedIn) return null;

    return (
        <div className="auth-modal">
            <div className="auth-box">
                {/* Close Button */}
                <button id="close-btn" onClick={onClose}>✖</button>

                <h2>Login for CiriBeautyCare</h2>

                <form className="login-form" onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                    </div>
                    <button type="submit" className="login-btn" disabled={!email.trim() || !password.trim()}>Login</button>
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
                        Don’t have an account? <Link to="/signup">Sign Up</Link>
                    </span>
                    <span>
                        <Link to="/forgotPass">Forgot Password?</Link>
                    </span>
                </div>
            </div>

            {/* Alert Popup */}
            <AlertPopup
                message={showAlertPopup}
                onClose={() => setShowAlertPopup("")}
            />
        </div>
    );
}
