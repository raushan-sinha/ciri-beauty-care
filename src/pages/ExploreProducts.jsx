import React from "react";
import "./ExploreProducts.css";
import { exploreData } from "../data/exploresData";

export default function ExploreProducts() {
    return (
        <section className="explore-section">
            <h2 className="explore-heading">Exploring Products in CiriBeautyCare</h2>

            <div className="explore-boxes">
                {/* Women Beauty Products */}
                <div className="explore-box">
                    <h3 className="box-heading">Women Beauty Products</h3>
                    <div className="image-grid">
                        {exploreData.women.map((item) => (
                            <img
                                key={item.id}
                                src={item.img}
                                alt={item.alt}
                                className="explore-img"
                            />
                        ))}
                    </div>
                    <button className="explore-btn">Explore Women Beauty Products</button>
                </div>

                {/* Men Beauty Products */}
                <div className="explore-box">
                    <h3 className="box-heading">Men Beauty Products</h3>
                    <div className="image-grid">
                        {exploreData.men.map((item) => (
                            <img
                                key={item.id}
                                src={item.img}
                                alt={item.alt}
                                className="explore-img"
                            />
                        ))}
                    </div>
                    <button className="explore-btn">Explore Men Beauty Products</button>
                </div>
            </div>
        </section>
    );
}