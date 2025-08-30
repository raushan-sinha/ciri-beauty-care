import React from "react";
import "./Logout.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Logout() {
    return (
        <>
            <Navbar />

            <div className="logout-page">
                <div className="logout-box">
                    <h2>Confirm Logout</h2>
                    <p>You are about to log out from your CiriBeautyCare account. Make sure you've saved your work or any ongoing activity.</p>

                    <div className="logout-actions">
                        <button className="btn logout-btn">Logout</button>
                        <button className="btn cancel-btn" onClick={() => window.history.back()}>Cancel</button>
                    </div>

                    <div className="logout-info">
                        <h3>Why Logout?</h3>
                        <ul>
                            <li>Secures your account from unauthorized access.</li>
                            <li>Clears session data for better performance.</li>
                            <li>Ensures personal information stays private on shared devices.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}