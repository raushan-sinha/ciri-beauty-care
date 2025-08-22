import './Support.css';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Support() {
    return (
        <>
            <Navbar />

            <section className="support-section">
                <div className="support-container">
                    <h1 className="support-title">Support - CiriBeautyCare</h1>
                    <p className="intro">
                        Our team is here to help you with any questions, issues, or guidance you need regarding CiriBeautyCare products and services.
                    </p>

                    <div className="support-grid">
                        <div className="support-card">
                            <h2>Customer Service</h2>
                            <p>Email: <a href="mailto:support@ciribeautycare.com">support@ciribeautycare.com</a></p>
                            <p>Phone: +91-9876543210</p>
                            <p>Available Mon-Fri, 9 AM to 6 PM IST</p>
                        </div>

                        <div className="support-card">
                            <h2>Order Issues</h2>
                            <p>Track your orders, report delays, or request assistance with delivery issues.</p>
                            <p>Email: <a href="mailto:orders@ciribeautycare.com">orders@ciribeautycare.com</a></p>
                        </div>

                        <div className="support-card">
                            <h2>Returns & Refunds</h2>
                            <p>Learn about our return policy, how to request refunds, and how to exchange products.</p>
                            <p>Email: <a href="mailto:returns@ciribeautycare.com">returns@ciribeautycare.com</a></p>
                        </div>

                        <div className="support-card">
                            <h2>Technical Support</h2>
                            <p>Facing website issues or app problems? Contact our technical support team for assistance.</p>
                            <p>Email: <a href="mailto:tech@ciribeautycare.com">tech@ciribeautycare.com</a></p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
