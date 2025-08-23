import React from "react";
import "./Supplier.css";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SupplierPage() {
    return (
        <>
            <Navbar />

            <div className="supplier-page">
                {/* Hero Section */}
                <section className="hero-section">
                    <h1>Become a CiriBeautyCare Seller</h1>
                    <p>Start selling your beauty and wellness products online with CiriBeautyCare</p>
                    <Link to="/signup" className="btn-primary">Create Account</Link>
                </section>

                {/* Seller Success Stories */}
                <section className="success-stories">
                    <h2>Seller Success Stories</h2>
                    <div className="stories-grid">
                        <div className="story-card">
                            <img src="https://via.placeholder.com/150" alt="Seller 1" />
                            <h3>Priya Sharma</h3>
                            <p>Transformed her local skincare business into a nationwide brand using CiriBeautyCare.</p>
                        </div>
                        <div className="story-card">
                            <img src="https://via.placeholder.com/150" alt="Seller 2" />
                            <h3>Ankit Verma</h3>
                            <p>Boosted sales by 4x by listing organic beauty products online.</p>
                        </div>
                        <div className="story-card">
                            <img src="https://via.placeholder.com/150" alt="Seller 3" />
                            <h3>Neha Gupta</h3>
                            <p>Expanded her wellness store across India with CiriBeautyCare logistics support.</p>
                        </div>
                    </div>
                </section>

                {/* Quick Steps */}
                <section className="quick-steps">
                    <h2>Getting Started</h2>
                    <div className="steps-grid">
                        <div className="step-card">
                            <h3>Create Account</h3>
                            <p>Sign up quickly with minimal documents and start selling your products.</p>
                        </div>
                        <div className="step-card">
                            <h3>List Products</h3>
                            <p>Add product images, description, pricing, and categories for online visibility.</p>
                        </div>
                        <div className="step-card">
                            <h3>Manage Inventory</h3>
                            <p>Easily manage stock and storage with our intuitive dashboard.</p>
                        </div>
                        <div className="step-card">
                            <h3>Receive Payments</h3>
                            <p>Get your earnings safely transferred to your bank account in just 7 days.</p>
                        </div>
                        <div className="step-card">
                            <h3>Grow Faster</h3>
                            <p>Promote your products with ads, deals, and curated campaigns on CiriBeautyCare.</p>
                        </div>
                        <div className="step-card">
                            <h3>Seller App</h3>
                            <p>Track orders, manage listings, and connect with customers on the go.</p>
                        </div>
                    </div>
                </section>

                {/* Help & Support */}
                <section className="help-support">
                    <h2>Help & Support</h2>
                    <p>
                        Our dedicated team is here to assist you every step of the way.
                        Download our step-by-step seller guide
                        <Link to="/help"> here</Link>.
                    </p>
                </section>

                {/* Popular Categories */}
                <section className="categories">
                    <h2>Popular Categories to Sell on CiriBeautyCare</h2>
                    <div className="categories-grid">
                        {[
                            "Skincare", "Haircare", "Makeup", "Wellness", "Fragrances", "Body Care",
                            "Men's Grooming", "Beauty Tools", "Organic Products", "Accessories"
                        ].map((category, idx) => (
                            <div key={idx} className="category-card">
                                {/* <img src="https://via.placeholder.com/100" alt={category} /> */}
                                <p>Sell {category} Online</p>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}