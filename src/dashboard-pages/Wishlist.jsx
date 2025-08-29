import React from "react";
import "./Wishlist.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { wishlistItems } from "../data/wishlistData";

export default function Wishlist() {
    return (
        <>
            <Navbar />

            <div className="wishlist">
                <h1>Wishlists</h1>
                <p className="subtitle">See your saved products here.</p>

                <div className="wishlist-grid">
                    {wishlistItems.map((item) => (
                        <div className="wishlist-card" key={item.id}>
                            <div className="wishlist-img">
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className="wishlist-details">
                                <h3>{item.name}</h3>
                                <p className="price">{item.price}</p>
                                <p className="added">{item.added}</p>
                                <div className="wishlist-actions">
                                    <button className="move-btn">Move to Cart</button>
                                    <button className="remove-btn">Remove</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}