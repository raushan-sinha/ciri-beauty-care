import React from "react";
import "./ForgotPassword.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ForgotPassword() {
    return (
        <>
            <Navbar />

            <div className="forgot-container">
                <div className="forgot-box">
                    <button
                        id="close-btn"
                        type="button"
                        aria-label="Close"
                        onClick={() => window.history.back()}
                    >
                        ✖
                    </button>
                    <h2>Forgot Password</h2>

                    <form>
                        {/* Phone input */}
                        <label htmlFor="phone">Mobile Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            placeholder="Enter mobile number"
                            autoComplete="tel"   // ✅ fixed
                            required
                        />
                        <button type="submit" className="otp-btn">Send OTP</button>

                        <span className="or-text">OR</span>

                        {/* Email input */}
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Enter email address"
                            autoComplete="email"  // ✅ fixed
                            required
                        />
                        <button type="submit" className="verify-btn">Verify Email</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}