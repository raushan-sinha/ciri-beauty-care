import React from "react";
import "./HelpSupport.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import WatchLaterIcon from "@mui/icons-material/WatchLater";

export default function HelpSupport() {
    return (
        <>
            <Navbar />

            <div className="help-support">
                {/* ===== Header ===== */}
                <header className="help-header">
                    <h1>Supplier Help & Support</h1>
                    <p>
                        At <span>CiriBeautyCare</span>, your satisfaction is our top
                        priority. Choose the most convenient way to reach us whenever you
                        need help.
                    </p>
                </header>

                {/* ===== Contact Options Grid ===== */}
                <div className="support-grid">
                    <div className="support-card">
                        <EmailIcon className="support-icon" />
                        <h2>Email Support</h2>
                        <p>
                            Write to us anytime, and our team will respond within 24 hours on
                            business days.
                        </p>
                        <a href="mailto:support@ciribeautycare.com" className="support-link">
                            support@ciribeautycare.com
                        </a>
                        <ul>
                            <li>Include your Full Name</li>
                            <li>Registered Email or Mobile Number</li>
                            <li>Order ID (if related to purchase)</li>
                            <li>Brief description of the issue</li>
                        </ul>
                    </div>

                    <div className="support-card">
                        <LocalPhoneIcon className="support-icon" />
                        <h2>Call Support</h2>
                        <p>
                            Speak directly with our representatives for quick assistance with
                            orders, products, or payments.
                        </p>
                        <p className="support-detail">+91-98765-43210</p>
                        <div className="support-time">
                            <WatchLaterIcon className="support-icon small" />
                            <span>Mon – Sat, 9:00 AM – 8:00 PM (IST)</span>
                        </div>
                    </div>
                </div>

                {/* ===== Supplier Support Section ===== */}
                <section className="support-section">
                    <h2>Supplier Help & Support</h2>
                    <p>
                        We highly value our partnerships with suppliers. If you are a
                        current or prospective supplier, we’re here to assist you with
                        onboarding, payments, product listings, and partnership queries.
                    </p>

                    <div className="support-grid">
                        <div className="support-card">
                            <EmailIcon className="support-icon" />
                            <h3>Supplier Email Support</h3>
                            <p>
                                Write to our supplier relations team, and we will respond
                                within 24–48 hours.
                            </p>
                            <a
                                href="mailto:suppliers@ciribeautycare.com"
                                className="support-link"
                            >
                                suppliers@ciribeautycare.com
                            </a>
                            <ul>
                                <li>Company/Business Name</li>
                                <li>Registered Contact Details</li>
                                <li>Supplier ID (if any)</li>
                                <li>Nature of Inquiry (Onboarding, Payment, etc.)</li>
                            </ul>
                        </div>

                        <div className="support-card">
                            <LocalPhoneIcon className="support-icon" />
                            <h3>Supplier Call Support</h3>
                            <p>
                                Reach out to our supplier assistance desk for quick answers to
                                your queries.
                            </p>
                            <p className="support-detail">+91-91234-56789</p>
                            <div className="support-time">
                                <WatchLaterIcon className="support-icon small" />
                                <span>Mon – Fri, 10:00 AM – 7:00 PM (IST)</span>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ===== Support Form ===== */}
                <section className="support-section">
                    <h2>Support Form</h2>
                    <p>
                        Fill out the form below, and our team will respond within 24–48
                        hours.
                    </p>
                    <form className="support-form">
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            aria-label="Full Name"
                            autoComplete="name"
                            id="fullName"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            aria-label="Email Address"
                            autoComplete="email"
                            id="email"
                            required
                        />
                        <input
                            type="tel"
                            name="mobile"
                            placeholder="Mobile Number"
                            aria-label="Mobile Number"
                            autoComplete="tel"
                            pattern="[0-9]{10}"
                            id="mobile"
                            required
                        />
                        <input
                            type="text"
                            name="orderId"
                            placeholder="Order ID (Optional)"
                            aria-label="Order ID"
                            autoComplete="off"
                            id="orderId"
                        />

                        {/* Added id and name */}
                        <select name="queryType" id="queryType" required>
                            <option value="">Select Query Type</option>
                            <option value="login">Login Issue</option>
                            <option value="payment">Payment</option>
                            <option value="product">Product Inquiry</option>
                            <option value="refund">Refund</option>
                            <option value="technical">Technical Support</option>
                            <option value="general">General Query</option>
                            <option value="supplier">Supplier Support</option>
                        </select>

                        <textarea
                            name="message"
                            id="message"
                            placeholder="Write your message here..."
                            required
                        ></textarea>

                        <button type="submit">Submit</button>
                    </form>

                </section>

                {/* ===== Commitment Section ===== */}
                <section className="support-section">
                    <h2>Our Commitment</h2>
                    <p>
                        We believe in offering{" "}
                        <strong>friendly, professional, and reliable</strong> customer
                        service. Your feedback is valuable and helps us improve our services
                        continuously. <span>CiriBeautyCare</span> is always by your side in
                        your beauty journey.
                    </p>
                </section>
            </div>

            <Footer />
        </>
    );
}
