import Navbar from '../components/Navbar';
import './MenPage.css';
import menProducts from '../data/menProductsData';
import womenProducts from '../data/womenProductsData';
import AddCartBtn from '../buttons/AddCartBtn';
import ShopBtn from '../buttons/ShopBtn';
import Footer from '../components/Footer';

export default function BrandsPage() {
    //todo: Add a title for the Brands page -
    const pageTitle = "All Brands for CiriBeautyCare";

    return (
        <>
            <Navbar />

            <section className="beauty-section">
                <h1 className="section-title">{pageTitle}</h1>
                <div className="beauty-grid">
                    {womenProducts.map((product) => (
                        <div className="beauty-card" key={`women-${product.id}`}>
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
                                <ShopBtn />
                            </div>
                        </div>
                    ))}
                    {menProducts.map((product) => (
                        <div className="beauty-card" key={`men-${product.id}`}>
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
                                <ShopBtn />
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </>
    );
}