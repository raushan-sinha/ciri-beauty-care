import { useState } from 'react';
import Navbar from '../components/Navbar';
import './WomenPage.css';
import womenProducts from '../data/womenProductsData';
import AddCartBtn from '../buttons/AddCartBtn';
import ShopBtn from '../buttons/ShopBtn';
import Footer from '../components/Footer';
import WomenPayCard from '../components/WomenPayCard';

export default function WomenPage() {
    const title = 'Women Beauty Care';

    // Payment box state
    const [selectedProduct, setSelectedProduct] = useState(null);

    return (
        <>
            <Navbar />

            <section className="beauty-section">
                <h1 className="page-title">{title}</h1>
                <div className="beauty-grid">
                    {womenProducts.map((product) => (
                        <div className="beauty-card" key={product.id}>
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
                                <ShopBtn onClick={() => setSelectedProduct(product)} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {selectedProduct && (
                <WomenPayCard
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            )}

            <Footer />
        </>
    );
}
