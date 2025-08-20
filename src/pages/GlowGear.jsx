import './GlowGear.css';
import glowGearProduct from '../data/glowGearProdsData.js';
import Navbar from '../components/Navbar.jsx';
import AddCartBtn from '../buttons/AddCartBtn.jsx';
import ShopBtn from '../buttons/ShopBtn.jsx';

export default function GlowGear() {
    return (
        <>
            <Navbar />

            {
                glowGearProduct.map((category, idx) => (
                    <div className="glowgear-page" key={idx}>
                        <h2 className="page-title">{category.title}</h2>
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
                                            <ShopBtn />
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </>
    );
}