import React from "react";
import "./NewsletterBox.css";

export default function NewsletterSignup() {
    return (
        <div className="newsletter-container">
            <h2 className="newsletter-title">Stay Updated</h2>
            <p className="newsletter-subtitle">Subscribe to get exclusive offers & beauty tips</p>
            <form className="newsletter-form">
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    id="email"
                    name="email"
                    autoComplete="email"
                />
                <button type="submit" className="newsletter-btn">Subscribe</button>
            </form>
        </div>
    );
}