import React from "react";
import "./HelpSupport.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function HelpSupport() {
    const channels = [
        { id: 1, icon: "💬", title: "Live Chat", desc: "Instant replies from our 24/7 team.", cta: "Start Chat" },
        { id: 2, icon: "📞", title: "Call Us", desc: "Talk to a specialist anytime.", cta: "+91 00000 00000" },
        { id: 3, icon: "📧", title: "Email", desc: "Detailed support within a few hours.", cta: "support@ciribeautycare.com" },
        { id: 4, icon: "📚", title: "Help Center", desc: "Guides, FAQs, and how-tos.", cta: "Browse Articles" }
    ];

    const faqs = [
        { q: "How do I track my order?", a: "Go to My Orders → select your order → Track. You’ll see live courier updates and ETA." },
        { q: "What if my payment fails?", a: "Your money is safe. Try another method or contact us with the Transaction ID for quick assistance." },
        { q: "How do I start a return?", a: "Open My Orders → select the item → Request Return. Follow on-screen steps for pickup and refund." },
        { q: "How can I enable 2FA?", a: "Account Settings → Security → Enable Two-Factor Authentication. Choose SMS, Email, or Authenticator App." }
    ];

    return (
        <>
            <Navbar />

            <div className="hs">
                <header className="hs-hero">
                    <h1>Help & Support</h1>
                    <p>Get 24/7 help from our support team.</p>
                    <div className="hs-badges">
                        <span className="hs-badge">24/7 Available</span>
                        <span className="hs-badge">Avg. response: under 5 min</span>
                        <span className="hs-badge">Multilingual</span>
                    </div>
                </header>

                <section className="hs-grid">
                    {channels.map((c) => (
                        <article className="hs-card" key={c.id}>
                            <div className="hs-icon">{c.icon}</div>
                            <h3>{c.title}</h3>
                            <p>{c.desc}</p>
                            <button className="hs-btn" type="button">{c.cta}</button>
                        </article>
                    ))}
                </section>

                <section className="hs-flex">
                    <div className="hs-form-wrap">
                        <h2>Create a Support Ticket</h2>
                        <p>Share a few details and we’ll get back right away.</p>
                        <form className="hs-form" autoComplete="on">
                            <div className="hs-row">
                                <div className="hs-field">
                                    <label htmlFor="name">Full Name</label>
                                    <input id="name" name="name" type="text" placeholder="Your name" autoComplete="name" required />
                                </div>
                                <div className="hs-field">
                                    <label htmlFor="email">Email</label>
                                    <input id="email" name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
                                </div>
                            </div>
                            <div className="hs-row">
                                <div className="hs-field">
                                    <label htmlFor="phone">Phone</label>
                                    <input id="phone" name="phone" type="tel" placeholder="+91" autoComplete="tel" />
                                </div>
                                <div className="hs-field">
                                    <label htmlFor="orderId">Order ID</label>
                                    <input id="orderId" name="orderId" type="text" placeholder="e.g., CIRI-123456" autoComplete="off" />
                                </div>
                            </div>
                            <div className="hs-field">
                                <label htmlFor="topic">Topic</label>
                                <select id="topic" name="topic" defaultValue="order">
                                    <option value="order">Order & Delivery</option>
                                    <option value="payment">Payment & Refund</option>
                                    <option value="account">Account & Security</option>
                                    <option value="product">Product Query</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                            <div className="hs-field">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Tell us what happened…" required />
                            </div>
                            <button className="hs-btn primary" type="submit">Submit Ticket</button>
                        </form>
                        <p className="hs-note">By submitting, you agree to be contacted via email/phone for support follow-ups.</p>
                    </div>

                    <div className="hs-faq">
                        <h2>Quick FAQs</h2>
                        <div className="hs-accordion">
                            {faqs.map((f, i) => (
                                <details key={i} className="hs-item">
                                    <summary>{f.q}</summary>
                                    <p>{f.a}</p>
                                </details>
                            ))}
                        </div>

                        <div className="hs-quick">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><a href="/orders">Track an Order</a></li>
                                <li><a href="/returns">Start a Return</a></li>
                                <li><a href="/security">Update Password & 2FA</a></li>
                                <li><a href="/payments">Payment Methods</a></li>
                                <li><a href="/contact">Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}