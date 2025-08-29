import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import './Profile.css'
import { accDashboard } from '../data/accDashboardData'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'


export default function Profile() {
    const [showEdit, setShowEdit] = useState(false)
    const [showUpgrade, setShowUpgrade] = useState(false)

    return (
        <>
            <Navbar />
            <div className="profile-page">
                <div className="profile-header">
                    <div className="profile-pic">
                        <img src="https://via.placeholder.com/120" alt="User" />
                        <label className="upload-btn">
                            Change
                            <input type="file" accept="image/*" hidden />
                        </label>
                    </div>
                    <div className="profile-info">
                        <h1>John Doe</h1>
                        <p>johndoe@example.com</p>
                        <div className="profile-btns">
                            <button className="btn" onClick={() => setShowEdit(true)}>
                                Edit Info
                            </button>
                            <button className="btn secondary" onClick={() => setShowUpgrade(true)}>
                                Upgrade Account
                            </button>
                        </div>
                    </div>
                </div>

                {showEdit && (
                    <div className="extra-box">
                        <button className="close-btn" onClick={() => setShowEdit(false)}>✖</button>
                        <h2>Edit Personal Info</h2>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone" />
                        <button className="btn">Save Changes</button>
                    </div>

                )}

                {showUpgrade && (
                    <div className="extra-box premium">
                        <button className="close-btn" onClick={() => setShowUpgrade(false)}>✖</button>
                        <h2>Upgrade to CiriBeautyCare Premium</h2>
                        <p>Get free shipping, exclusive discounts & early access to offers.</p>
                        <button className="btn">Upgrade Now</button>
                    </div>
                )}

                <h2 className="page-title">{accDashboard.title}</h2>
                <div className="profile-grid">
                    {
                        accDashboard.cardsInfo.map((card, idx) => (
                            <div className="profile-card" key={idx}>
                                <h3>{card.title}</h3>
                                <p>{card.para}</p>
                                <Link className="btn" to={card.src}>{card.btn}</Link>
                            </div>
                        ))
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}