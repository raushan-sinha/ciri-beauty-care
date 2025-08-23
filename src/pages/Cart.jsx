import React from "react";
import "./Cart.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Cart() {
    return (
        <>
            <Navbar />

            <div className="cart-container">
                <div className="cart-box">
                    <h2>Missing Cart items?</h2>
                    <p>Login to see the items you added previously</p>
                    <button className="login-btn">Login</button>
                </div>
            </div>

            <Footer />
        </>
    );
}