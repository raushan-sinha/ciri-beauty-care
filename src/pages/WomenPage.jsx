import Navbar from '../components/Navbar';
import './WomenPage.css';

export default function WomenPage() {
    const beautyProducts = [
        {
            id: 1,
            name: "Hydrating Facewash",
            price: "₹299",
            image: "https://via.placeholder.com/250x300.png?text=Facewash",
        },
        {
            id: 2,
            name: "Brightening Face Cream",
            price: "₹499",
            image: "https://via.placeholder.com/250x300.png?text=Face+Cream",
        },
        {
            id: 3,
            name: "SPF 50 Sunscreen",
            price: "₹399",
            image: "https://via.placeholder.com/250x300.png?text=Sunscreen",
        },
        {
            id: 4,
            name: "Aloe Vera Gel",
            price: "₹199",
            image: "https://via.placeholder.com/250x300.png?text=Aloe+Gel",
        },
        {
            id: 5,
            name: "Night Repair Cream",
            price: "₹699",
            image: "https://via.placeholder.com/250x300.png?text=Night+Cream",
        },
        {
            id: 6,
            name: "Vitamin C Serum",
            price: "₹899",
            image: "https://via.placeholder.com/250x300.png?text=Vitamin+C+Serum",
        },
    ];

    return (
        <>
            <Navbar />

            <section className="beauty-section">
                <h1 className="section-title">Women Beauty Care</h1>
                <div className="beauty-grid">
                    {beautyProducts.map((product) => (
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
                                <button className="btn-cart">Add to Cart</button>
                                <button className="btn-shop">Shop Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}