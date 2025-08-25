import React, { useState } from "react";
import "./SupplierAccount.css";

export default function SupplierAccount({ onClose }) {

    return (
        <div className="supplier-container">
            <div className="supplier-box">
                {/* Close Icon */}
                <button className="close-btn" onClick={onClose}>
                    ✖
                </button>

                <h2>Create an Account for Supplier</h2>
                <p className="subtitle">
                    Register as a trusted supplier with CiriBeautyCare
                </p>

                <form className="supplier-form">
                    <div className="form-group">
                        <label>Company Name</label>
                        <input
                            type="text"
                            placeholder="Enter your company name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Contact Person</label>
                        <input
                            type="text"
                            placeholder="Enter contact person name"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder="Enter email" required />
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder="Enter phone number" required />
                    </div>
                    <div className="form-group">
                        <label>Business Category</label>
                        <select required>
                            <option value="">Select category</option>
                            <option>Skincare</option>
                            <option>Haircare</option>
                            <option>Cosmetics</option>
                            <option>Fragrances</option>
                            <option>Wellness</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Business License / GST No.</label>
                        <input
                            type="text"
                            placeholder="Enter registration number"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label>Business Address</label>
                        <textarea placeholder="Enter complete business address" required />
                    </div>
                    <button type="submit" className="btn">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}