import React, { useState, useEffect } from 'react';
import './Home.css';
import Navbar from '../components/Navbar';
import { homeProduct, bannerImages, bannerContent, featuredCategories, newArrivals } from '../data/homeProductsData';
import Footer from '../components/Footer';
import OffersButton from '../buttons/OffersButton';

export default function Home() {
    const [currentIndex, setCurrentIndex] = useState(0)

    //todo: banner image slider -
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === bannerImages.length - 1 ? 0 : prevIndex + 1
            );
        }, 2000);

        return () => clearInterval(interval);
    }, [])

    return (
        <>
            <Navbar />

            <div className="banner">
                {bannerContent.map((content, idx) => (
                    <div className="banner-content" key={idx}>
                        <p className="banner-subtitle">{content.subtitle}</p>
                        <div className="offer-box">
                            <p>{content.offerDate}</p>
                            <p>{content.offerTitle}</p>
                        </div>
                    </div>
                ))}
                <div className="banner-images">
                    <div className="product">
                        <img
                            src={bannerImages[currentIndex].src}
                            alt={bannerImages[currentIndex].alt}
                            className="product-image"
                        />
                    </div>
                </div>
            </div>

            {/* Featured Categories Section */}
            <section className="featured-section">
                <h2 className="featured-title">Featured Categories</h2>
                <div className="featured-grid">
                    {featuredCategories.map((cat, idx) => (
                        <div className="featured-card" key={idx}>
                            <img src={cat.img} alt={cat.name} className="featured-img" />
                            <h3 className="featured-name">{cat.name}</h3>
                            <p className="featured-desc">{cat.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Beauty Care Products Section */}
            {homeProduct.map((item, idx) => (
                <section className="products-section" key={idx}>
                    <h2 className="products-title">{item.title}</h2>
                    <div className="home-products-grid">
                        {item.products.map((product, i) => (
                            <div className="home-product-card" key={i}>
                                <img src={product.src} alt={product.alt} className="product-card-image" />
                                <p className="product-card-name">{product.name}</p>
                            </div>
                        ))}
                    </div>
                </section>
            ))}

            {/* ✅ New Arrivals Section (Moved Below Products) */}
            <section className="newarrivals-section">
                <h2 className="newarrivals-title">New Arrivals – Fresh Picks Just for You</h2>
                <p className="newarrivals-intro">
                    Stay ahead in style & beauty with our latest launches. Explore what’s new at CiriBeautyCare!
                </p>
                <div className="newarrivals-grid">
                    {newArrivals.map((item, idx) => (
                        <div className="newarrivals-card" key={idx}>
                            <img src={item.img} alt={item.name} className="newarrivals-img" />
                            <h3 className="newarrivals-name">{item.name}</h3>
                            <p className="newarrivals-desc">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />

            <OffersButton />
        </>
    );
}