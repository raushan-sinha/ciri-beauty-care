import React, { useState } from "react";
import "./ForgotPassword.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ForgotPassword() {
    return (
        <>
            <Navbar />

            <div className="forgot-container">
                <div className="forgot-box">
                    <button id="close-btn" onClick={() => window.history.back()}>✖</button>
                    <h2>Forgot Password</h2>
                    <form>
                        <label>Mobile Number</label>
                        <input type="tel" placeholder="Enter mobile number" />
                        <button type="button" className="otp-btn">Send OTP</button>

                        <span className="or-text">OR</span>

                        <label>Email Address</label>
                        <input type="email" placeholder="Enter email address" />
                        <button type="button" className="verify-btn">Verify Email</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}
