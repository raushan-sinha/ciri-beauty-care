import React from "react";
import "./PrivacyPolicy.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import privacyPolicy from "../data/privacyPolicyData";

export default function PrivacyPolicy() {
    return (
        <>
            <Navbar />

            <section className="privacy">
                {
                    privacyPolicy.map((info, idx) => (
                        <div className="container" key={idx}>
                            <h1>{info.heading}</h1>
                            <p className="intro">{info.content}</p>

                            {
                                info.subSections.map((item, i) => (
                                    <div className="policy-section">
                                        <h2>{item.title}</h2>
                                        <p>{item.text}</p>
                                    </div>
                                ))
                            }

                            <div className="policy-footer">
                                <p>{info.contactInfo}
                                    <a href={info.email}>{info.emailName}</a>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </section>

            <Footer />
        </>
    );
}