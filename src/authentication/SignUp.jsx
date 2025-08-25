import React from "react";
import "./SignUp.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

export default function SignUp() {
    return (
        <div className="signup-wrapper">
            <div className="signup-box">
                <button className="close-btn" onClick={() => window.history.back()}>✖</button>
                <h2>CiriBeautyCare Signup</h2>

                <div className="social-signup">
                    <button className="google-btn"><GoogleIcon /> Sign up with Google</button>
                    <button className="apple-btn"><AppleIcon /> Sign up with Apple</button>
                </div>

                <div>OR</div>

                <form className="signup-form">
                    <input type="text" placeholder="Full Name" required />
                    <input type="email" placeholder="Email Address" required />
                    <input type="tel" placeholder="Phone Number" required />
                    <input type="password" placeholder="Password" required />
                    <input type="password" placeholder="Confirm Password" required />
                    <button type="submit" className="create-btn">Create Account</button>
                </form>
            </div>
        </div>
    );
}
