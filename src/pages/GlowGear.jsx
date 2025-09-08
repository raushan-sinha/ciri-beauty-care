import React, { useState } from 'react';
import './GlowGear.css';
import glowGearProduct from '../data/glowGearProdsData.js';
import Navbar from '../components/Navbar.jsx';
import AddCartBtn from '../buttons/AddCartBtn.jsx';
import ShopBtn from '../buttons/ShopBtn.jsx';
import Footer from '../components/Footer';
import GlowGearPayCard from '../components/GlowGearPayCard.jsx';

export default function GlowGear() {
    const [showPaymentBox, setShowPaymentBox] = useState(null)

    return (
        <>
            <Navbar />

            {
                glowGearProduct.map((category, idx) => (
                    <div className="glowgear-page" key={idx}>
                        <div className="products-grid">
                            {
                                category.products.map((product, i) => (
                                    <div className="product-card" key={i}>
                                        <div className="image-container">
                                            <img
                                                src={product.src}
                                                alt={product.alt}
                                            />
                                        </div>
                                        <h3 className="product-name">{product.name}</h3>
                                        <p className="product-desc">{product.desc}</p>
                                        <p className="product-price">{product.price}</p>
                                        <div className="btn-group">
                                            <AddCartBtn />
                                            <ShopBtn onClick={() => setShowPaymentBox(product)} />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }

            <Footer />

            {
                showPaymentBox && (
                    <GlowGearPayCard
                        product={showPaymentBox}
                        onClose={() => setShowPaymentBox(null)}
                    />
                )
            }
        </>
    );
}