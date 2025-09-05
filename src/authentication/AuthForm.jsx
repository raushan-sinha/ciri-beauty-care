import React, { useState, useEffect } from "react";
import "./AuthForm.css";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { Link, useNavigate } from "react-router-dom";
import AlertPopup from "../components/AlertPopup";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function AuthForm() {
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

    const handleLoginSubmit = (e) => {
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
        <>
            <Navbar />
            <div className="auth-page">
                <div className="auth-container">

                    {/* Auth Box */}
                    <div className="auth-box">
                        <h2>Login for CiriBeautyCare</h2>

                        <form className="auth-form" onSubmit={handleLoginSubmit}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    autoComplete="email"
                                    name='email'
                                    id='email'
                                />
                            </div>

                            <div className="form-group">
                                <input
                                    type="password"
                                    placeholder="Password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="current-password"
                                    name='password'
                                    id='password'
                                />
                            </div>

                            <button type="submit" className="submit-btn login-btn">Login</button>
                        </form>

                        {/* Social Login */}
                        <div className="social-auth">
                            <button type="button" className="social-btn google-btn">
                                <GoogleIcon fontSize="medium" />
                            </button>
                            <button type="button" className="social-btn apple-btn">
                                <AppleIcon fontSize="medium" />
                            </button>
                        </div>

                        {/* Links */}
                        <div className="auth-links">
                            <span>
                                <Link to="/forgotPass">Forgot Password?</Link>
                            </span>
                            <span className="signup-link">
                                Don’t have an account? <Link to="/signup">Sign Up</Link>
                            </span>
                        </div>
                    </div>
                </div>

                {/* Alert Popup */}
                <AlertPopup
                    message={showAlertPopup}
                    onClose={() => setShowAlertPopup("")}
                />
            </div>
            <Footer />
        </>
    );
}
