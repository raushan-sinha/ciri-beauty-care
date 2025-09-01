import React from "react";
import "./SubscriptionPage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SubscriptionPage() {
    return (
        <>
            <Navbar />

            <div className="subscription-page">
                <header className="subscription-header">
                    <h1>Subscription & Membership Details</h1>
                    <p>Manage your membership, explore benefits, and upgrade your plan anytime!</p>
                </header>

                <main className="subscription-main">
                    {/* Current Plan Box */}
                    <div className="plan-box">
                        <h2>Current Plan</h2>
                        <p>Your current plan: <strong>Basic Membership</strong></p>
                        <p>Enjoy limited access to exclusive products, offers, and content tailored for you.</p>
                        <button className="action-btn">Manage Subscription</button>
                    </div>

                    {/* Benefits Box */}
                    <div className="benefits-box">
                        <h2>Membership Benefits</h2>
                        <ul>
                            <li>Exclusive discounts on beauty products</li>
                            <li>Early access to new arrivals</li>
                            <li>Personalized skincare and beauty recommendations</li>
                            <li>Invites to members-only events</li>
                            <li>Priority customer support</li>
                        </ul>
                    </div>

                    {/* Upgrade Plans Box */}
                    <div className="upgrade-box">
                        <h2>Upgrade Your Plan</h2>
                        <div className="plan-cards">
                            <div className="plan-card">
                                <h3>Premium Plan</h3>
                                <p>Get full access to all offers, products, and exclusive events.</p>
                                <button className="action-btn">Upgrade to Premium</button>
                            </div>
                            <div className="plan-card">
                                <h3>Elite Plan</h3>
                                <p>All Premium benefits + personalized beauty consultation every month.</p>
                                <button className="action-btn">Upgrade to Elite</button>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="subscription-footer">
                    <p>Need help? Contact our support team anytime for assistance with your membership.</p>
                </footer>
            </div>

            <Footer />
        </>
    );
}