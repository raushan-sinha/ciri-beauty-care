import React from "react";
import "./MenPayCard.css";

export default function GlowGearPayCard({ product, onClose }) {

    const paymentMethods = [
        { id: "phonepe", label: "PhonePe", icon: "📱" },
        { id: "gpay", label: "Google Pay (GPay)", icon: "💳" },
        { id: "paypal", label: "PayPal", icon: "🅿️" },
        { id: "card", label: "Bank Debit Card", icon: "🏦" },
        { id: "cod", label: "Cash on Delivery", icon: "💵" },
    ];

    return (
        <div className="payment-overlay">
            <div className="payment-box">
                <button id="close-btn" onClick={onClose}>✖</button>
                <h2 className="payment-title">Complete Payment</h2>

                {/* Product Details */}
                <div className="product-info">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-img"
                    />
                    <div>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">{product.price}</p>
                    </div>
                </div>

                {/* Payment Options */}
                <form className="payment-form">
                    <h4>Select Payment Method</h4>
                    <div className="payment-options">
                        {paymentMethods.map((method) => (
                            <label key={method.id} className="payment-option">
                                <input type="radio" name="payment" value={method.id} required />
                                <span className="payment-icon">{method.icon}</span>
                                <span className="payment-label">{method.label}</span>
                            </label>
                        ))}
                    </div>

                    <button type="submit" className="pay-btn">Pay Now</button>
                </form>
            </div>
        </div>
    );
}