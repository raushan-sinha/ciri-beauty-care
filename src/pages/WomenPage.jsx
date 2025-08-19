import Navbar from '../components/Navbar';
import './WomenPage.css';
import womenProducts from '../data/womenProductsData';
import AddCartBtn from '../buttons/AddCartBtn';
import ShopBtn from '../buttons/ShopBtn';

export default function WomenPage() {
    //todo: Page Title - 
    const title = 'Women Beauty Care';

    return (
        <>
            <Navbar />

            <section className="beauty-section">
                <h1 className="section-title">{title}</h1>
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
                                <ShopBtn />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}