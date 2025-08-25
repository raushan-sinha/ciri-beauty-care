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
                <button className="close-btn" onClick={onClose}>✖</button>

                <h2>Login</h2>

                <form
                    className="login-form"
                >
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            autoComplete="current-password"
                            required
                        />
                    </div>

                    <button type="submit" className="login-btn">Login</button>
                </form>

                {/* Social Login */}
                <div className="social-login">
                    <button type="button" className="google-btn">
                        <GoogleIcon fontSize="medium" /> Google
                    </button>
                    <button type="button" className="apple-btn">
                        <AppleIcon fontSize="medium" /> Apple
                    </button>
                </div>

                {/* Links */}
                <div className="auth-links">
                    <span>
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </span>
                    <span>
                        <Link to="/forgot-password">Forgot Password?</Link>
                    </span>
                </div>
            </div>
        </div>
    );
}