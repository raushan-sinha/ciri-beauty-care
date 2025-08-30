import React from "react";
import "./Security.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { security, securityForm } from "../data/securityData";

export default function Security() {
    return (
        <>
            <Navbar />

            <div className="security-page">
                <h2>{security.title}</h2>
                <p>{security.para}</p>

                <div className="security-content">
                    <form className="security-form" autoComplete="on">
                        <input
                            type="text"
                            name="username"
                            autoComplete="username"
                            style={{ display: "none" }}
                        />

                        {
                            Object.values(securityForm).map((item, idx) => (
                                <div className="form-group" key={idx}>
                                    <label htmlFor={item.id}>{item.label}</label>
                                    <input
                                        type={item.type}
                                        id={item.id}
                                        name={item.name}
                                        placeholder={item.placeholder}
                                        autoComplete={item.autoComplete}
                                        required
                                    />
                                </div>
                            ))
                        }

                        <div className="form-group">
                            <label htmlFor="twoFactor">Enable Two-Factor Authentication (2FA)</label>
                            <select id="twoFactor" name="twoFactor" autoComplete="off">
                                <option value="off">Disabled</option>
                                <option value="sms">SMS Verification</option>
                                <option value="app">Authenticator App</option>
                            </select>
                        </div>

                        <button type="submit" className="btn">Update Security</button>
                    </form>

                    <div className="security-tips">
                        <h3>Security Tips</h3>
                        <ul>
                            <li>Use a strong password with at least 12 characters, mixing uppercase, lowercase, numbers, and symbols.</li>
                            <li>Do not reuse passwords across multiple accounts.</li>
                            <li>Enable Two-Factor Authentication (2FA) for stronger protection.</li>
                            <li>Update your password every 3–6 months.</li>
                            <li>Be cautious of phishing emails or suspicious links.</li>
                            <li>Log out from shared or public devices after use.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}