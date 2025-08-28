import React from "react";
import "./LoginForm.css";
import AppleIcon from "@mui/icons-material/Apple";
import GoogleIcon from "@mui/icons-material/Google";
import { Link } from "react-router-dom";

export default function LoginForm({ onClose }) {
    return (
        <div className="auth-modal">
            <div className="auth-box">
                {/* Close Button */}
                <button id="close-btn" onClick={onClose}>✖</button>

                <h2>Login for CiriBeautyCare</h2>

                <form
                    className="login-form"
                >
                    <div className="form-group">
                        <input
                            type="email"
                            id="loginEmail"
                            name="email"
                            placeholder="Email"
                            aria-label="Email"
                            autoComplete="email"
                            required
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
                            required
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
        </div>
    );
}