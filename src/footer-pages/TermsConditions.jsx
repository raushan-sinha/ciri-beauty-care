import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './TermsConditions.css';

export default function TermsConditions() {
    return (
        <>
            <Navbar />

            <section className="terms-section">
                <div className="terms-container">
                    <h1 className="terms-title">Terms and Conditions</h1>
                    <p className="intro">
                        Welcome to CiriBeautyCare. By using our website, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
                    </p>

                    <div className="terms-content">
                        <h2>1. Use of Website</h2>
                        <p>You agree to use the website for lawful purposes only and not for any unauthorized or prohibited activities.</p>

                        <h2>2. Product Information</h2>
                        <p>We strive to provide accurate product information. Prices and availability are subject to change without notice.</p>

                        <h2>3. Orders & Payments</h2>
                        <p>All orders are subject to acceptance. Payments can be made via credit/debit cards, net banking, or UPI.</p>

                        <h2>4. Shipping & Delivery</h2>
                        <p>We deliver within India. Delivery times are estimated and not guaranteed. Tracking details will be shared after dispatch.</p>

                        <h2>5. Returns & Refunds</h2>
                        <p>Returns are accepted within 15 days of delivery if the product is unused and in original packaging. Refunds are processed after product inspection.</p>

                        <h2>6. Intellectual Property</h2>
                        <p>All content, logos, and designs are the property of CiriBeautyCare. Unauthorized use is prohibited.</p>

                        <h2>7. Limitation of Liability</h2>
                        <p>CiriBeautyCare is not liable for any indirect or consequential damages arising from the use of our products or website.</p>

                        <h2>8. Changes to Terms</h2>
                        <p>We may update our terms and conditions from time to time. Continued use of the website implies acceptance of changes.</p>

                        <h2>9. Contact</h2>
                        <p>For any questions regarding terms, please contact our support team at <a href="mailto:support@ciribeautycare.com">support@ciribeautycare.com</a>.</p>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
