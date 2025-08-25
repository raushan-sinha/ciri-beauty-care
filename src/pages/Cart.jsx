import React, { useState } from "react";
import "./Cart.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import LoginForm from "../authentication/LoginForm";

export default function Cart() {
    const [showLoginPage, setShowLoginPage] = useState(false);

    return (
        <>
            <Navbar />

            <div className="cart-container">
                <div className="cart-box">
                    <h2>Missing Cart items?</h2>
                    <p>Login to see the items you added previously</p>
                    <button className="login-btn" onClick={() => setShowLoginPage(true)} >Login</button>
                </div>
            </div>

            <Footer />

            {/* Show LoginForm modal if user clicks Login */}
            {showLoginPage && <LoginForm onClose={() => setShowLoginPage(false)} />}
        </>
    );
}