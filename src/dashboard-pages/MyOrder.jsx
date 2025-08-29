import React from "react";
import "./MyOrder.css";
import Navbar from "../components/Navbar";
import { orders } from "../data/myOrdersData";
import Footer from "../components/Footer";

export default function MyOrder() {
    return (
        <>
            <Navbar />

            <div className="my-orders">
                <h1>My Orders</h1>
                <p className="subtitle">Check your orders and track deliveries.</p>

                <div className="orders-grid">
                    {orders.map((order) => (
                        <div className="order-card" key={order.id}>
                            <div className="order-img">
                                <img src={order.img} alt={order.name} />
                            </div>
                            <div className="order-details">
                                <h3>{order.name}</h3>
                                <p className="price">{order.price}</p>
                                <p className="delivery">{order.delivery}</p>
                                <p className="location">📍 {order.location}</p>
                                <button className="track-btn">Track Order</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}