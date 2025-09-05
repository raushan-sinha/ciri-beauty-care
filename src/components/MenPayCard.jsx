import React from "react";
import "./PaymentCard.css";

export default function MenPayCard({ product, onClose }) {

    

    return (
        <div className="payment-overlay">
            <div className="payment-box">
                <button className="close-btn" onClick={onClose}>✖</button>
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

                    <button type="submit" className="pay-btn">Pay Now</button>
            </div>
        </div>
    );
}