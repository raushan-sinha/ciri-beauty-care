import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import './Faq.css';

export default function Faq() {
    //todo: FAQs
    const faqs = [
        { question: "What is CiriBeautyCare?", answer: "CiriBeautyCare is a premium beauty and skincare brand offering products for women, men, and GlowGear equipment." },
        { question: "How do I place an order?", answer: "You can browse our products, add them to the cart, and complete your purchase through the checkout process." },
        { question: "What payment methods are accepted?", answer: "We accept all major credit/debit cards, net banking, and UPI payments." },
        { question: "Do you deliver internationally?", answer: "Currently, we deliver within India. International shipping will be available soon." },
        { question: "Can I return a product?", answer: "Yes, returns are accepted within 15 days of delivery, provided the product is unused and in original packaging." },
        { question: "How do I track my order?", answer: "After placing an order, you will receive a tracking number via email or SMS to track your shipment." },
        { question: "Are the products safe for sensitive skin?", answer: "Yes, all our products are dermatologically tested and suitable for sensitive skin." }
    ];

    return (
        <>
            <Navbar />

            <section className="faq-section">
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <div className="faq-grid">
                    {faqs.map((faq, idx) => (
                        <div className="faq-card" key={idx}>
                            <h2 className="faq-question">{faq.question}</h2>
                            <p className="faq-answer">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}
