import React from "react";
import "./AboutUs.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutData from "../data/aboutUsData";

export default function AboutUs() {
    return (
        <>
            <Navbar />

            {
                aboutData.map((data, idx) => (
                    <section className="about-section" key={idx}>
                        {/* Hero Section */}
                        <div className="about-hero">
                            <h1>{data.heading}</h1>
                            <p>{data.headingPara}</p>
                        </div>

                        {/* Mission & Vision */}
                        <div className="about-grid">
                            <div className="about-card">
                                <h2>{data.missionTitle}</h2>
                                <p>{data.missionPara}</p>
                            </div>

                            <div className="about-card">
                                <h2>{data.visionTitle}</h2>
                                <p>{data.visionPara}</p>
                            </div>
                        </div>

                        {/* Core Values */}
                        <div className="about-values">
                            <h2>{data.coreValuesTitle}</h2>
                            <div className="values-grid">
                                {
                                    data.coreValues.map((value, i) => (
                                        <div className="value-card" key={i}>{value}</div>
                                    ))
                                }
                            </div>
                        </div>

                        {/* Journey Section */}
                        <div className="about-journey">
                            <h2>{data.journeyTitle}</h2>
                            <p>{data.journeyPara}</p>
                        </div>

                        {/* Commitment */}
                        <div className="about-commitment">
                            <h2>{data.commitmentTitle}</h2>
                            <p>{data.commitmentPara}</p>
                        </div>
                    </section>
                ))
            }

            <Footer />
        </>
    );
}