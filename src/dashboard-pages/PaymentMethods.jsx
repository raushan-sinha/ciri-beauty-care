import React from 'react';
import Navbar from '../components/Navbar';
import './PaymentMethods.css';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import { paymentOptions } from '../data/paymentMethodsData';

export default function PaymentMethods() {

    return (
        <>
            <Navbar />

            <div className="payment-methods">
                <h1>Payment Methods</h1>
                <p className="subtitle">Choose your preferred payment option.</p>

                <div className="payment-grid">
                    {paymentOptions.map((method) => (
                        <div className="payment-card" key={method.id}>
                            <div className="payment-icon">{method.icon}</div>
                            <h3>{method.title}</h3>
                            <p>{method.desc}</p>
                            <button className="select-btn">Select</button>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}
