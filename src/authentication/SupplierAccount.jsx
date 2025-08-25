import React from "react";
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

                <form
                    className="supplier-form"
                >
                    <div className="form-group">
                        <label htmlFor="company-name">Company Name</label>
                        <input
                            type="text"
                            id="company-name"
                            placeholder="Enter your company name"
                            name="company-name"
                            autoComplete="organization"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="username">Contact Person</label>
                        <input
                            type="text"
                            id="username"
                            placeholder="Enter contact person name"
                            name="username"
                            autoComplete="name"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter email"
                            name="email"
                            autoComplete="email"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Enter phone number"
                            name="phone"
                            autoComplete="tel"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Business Category</label>
                        <select
                            id="category"
                            name="category"
                            autoComplete="off"
                            required
                        >
                            <option value="">Select category</option>
                            <option>Skincare</option>
                            <option>Haircare</option>
                            <option>Cosmetics</option>
                            <option>Fragrances</option>
                            <option>Wellness</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="license">Business License / GST No.</label>
                        <input
                            type="text"
                            id="license"
                            placeholder="Enter registration number"
                            name="license"
                            autoComplete="off"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="address">Business Address</label>
                        <textarea
                            id="address"
                            placeholder="Enter complete business address"
                            name="address"
                            autoComplete="street-address"
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="btn">
                        Create Account
                    </button>
                </form>
            </div>
        </div>
    );
}