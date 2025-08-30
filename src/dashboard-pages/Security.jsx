import React from "react";
import "./Security.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { security, securityForm, twoFactorData, btn, securityTips } from "../data/securityData";

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
                            <label htmlFor={twoFactorData.htmlFor}>{twoFactorData.label}</label>
                            <select id={twoFactorData.id} name={twoFactorData.name} autoComplete={twoFactorData.autoComplete}>
                                {
                                    twoFactorData.options.map((item, idx) => (
                                        <option value={item.value} key={idx}>{item.text}</option>
                                    ))
                                }
                            </select>
                        </div>

                        <button type="submit" className="btn">{btn}</button>
                    </form>

                    <div className="security-tips">
                        <h3>{securityTips.title}</h3>
                        <ul>
                            {
                                securityTips.lists.map((item, idx) => (
                                    <li key={idx}>{item.list}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}