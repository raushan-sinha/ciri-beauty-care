import { useState } from 'react';
import Navbar from '../components/Navbar';
import './MenPage.css';
import menProducts from '../data/menProductsData';
import womenProducts from '../data/womenProductsData';
import AddCartBtn from '../buttons/AddCartBtn';
import ShopBtn from '../buttons/ShopBtn';
import Footer from '../components/Footer';
import BrandsPayCard from '../components/BrandsPayCard';

export default function BrandsPage() {
    //todo: State for the currently selected product for payment
    const [showPaymentBox, setShowPaymentBox] = useState(null);

    //todo: Combine women and men products in a single array
    const allProducts = [...womenProducts, ...menProducts];

    return (
        <>
            <Navbar />

            <section className="beauty-section">
                <div className="beauty-grid">
                    {allProducts.map((product, index) => (
                        <div className="beauty-card" key={`${product.id}-${index}`}>
                            <div className="image-wrapper">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="beauty-image"
                                />
                            </div>
                            <h3 className="beauty-name">{product.name}</h3>
                            <p className="beauty-price">{product.price}</p>
                            <div className="beauty-actions">
                                <AddCartBtn />
                                {/* Shop button opens payment modal for this product */}
                                <ShopBtn onClick={() => setShowPaymentBox(product)} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Payment Modal */}
            {showPaymentBox && (
                <BrandsPayCard
                    product={showPaymentBox}
                    onClose={() => setShowPaymentBox(null)}
                />
            )}

            <Footer />
        </>
    );
}
