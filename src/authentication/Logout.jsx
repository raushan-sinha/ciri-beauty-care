import React from 'react'
import './Logout.css'

export default function Logout({ onCancel, onLogout }) {
    return (
        <>
            <div className="logout-overlay">
                <div className="logout-box">
                    <h2>Logout Account</h2>
                    <p>Are you sure you want to logout your account?</p>

                    <div className="logout-actions">
                        <button className="logout-btn" onClick={onLogout}>
                            Logout
                        </button>
                        <button className="cancel-btn" onClick={onCancel}>
                            Cancel
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}