import React from 'react';
import './AlertPopup.css';

export default function AlertPopup({ message, onClose }) {
    if (!message) return null;

    return (
        <>
            <div className="alert-overlay">
                <div className="alert-box">
                    <p>{message}</p>
                    <button onClick={onClose}>OK</button>
                </div>
            </div>
        </>
    );
}