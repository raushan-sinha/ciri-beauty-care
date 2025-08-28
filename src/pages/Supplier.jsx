import { Link } from "react-router-dom";
import "./Supplier.css"
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { heroSection, successStories, quickSteps, helpSupport, categories } from "../data/suppliersData";

export default function SupplierPage() {
    return (
        <>
            <Navbar />

            <div className="supplier-page">
                {/* Hero Section */}
                <section className="hero-section">
                    {
                        heroSection.map((item, idx) => (
                            <div className="hero-container" key={idx}>
                                <div className="hero-content">
                                    <h1 className="hero-title">{item.title}</h1>
                                    <p className="hero-description">{item.desc}</p>
                                    <Link className="hero-button" to="/supplierAccount">{item.btn}</Link>
                                </div>
                                <div className="hero-image-container">
                                    <img
                                        src={item.imgSrc}
                                        alt={item.alt}
                                        className="hero-image"
                                    />
                                </div>
                            </div>
                        ))
                    }
                </section>

                <div className="main-container">
                    {/* Seller Success Stories */}
                    {
                        successStories.map((story, idx) => (
                            <section className="success-stories" key={idx}>
                                <h2 className="section-title">{story.title}</h2>
                                <div className="stories-grid">
                                    {
                                        story.stories.map((item, i) => (
                                            <div className="story-card" key={i}>
                                                <h3 className="story-name">{item.name}</h3>
                                                <p className="story-text">{item.story}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </section>
                        ))
                    }

                    {/* Quick Steps */}
                    {
                        quickSteps.map((section, idx) => (
                            <section className="getting-started" key={idx}>
                                <h2 className="section-title">{section.heading}</h2>
                                <div className="steps-grid">
                                    {
                                        section.steps.map((step, i) => (
                                            <div className="step-card" key={i}>
                                                <div className="step-number">{i + 1}</div>
                                                <h3 className="step-title">{step.title}</h3>
                                                <p className="step-description">{step.desc}</p>
                                            </div>
                                        ))
                                    }
                                </div>
                            </section>
                        ))
                    }

                    {/* Help & Support */}
                    {
                        helpSupport.map((item, idx) => (
                            <section className="help-support" key={idx}>
                                <h2 className="section-title">{item.title}</h2>
                                <p className="help-text">
                                    {item.desc} {''}
                                    <Link to="/helpSupport" className="help-link">
                                        {item.linkName}
                                    </Link>
                                </p>
                            </section>
                        ))
                    }

                    {/* Popular Categories */}
                    {
                        categories.map((item, idx) => (
                            <section className="categories-section" key={idx}>
                                <h2 className="section-title">{item.title}</h2>
                                <div className="categories-grid">
                                    {
                                        item.categoriesList.map((category, i) => (
                                            <div className="category-card" key={i}>
                                                <div className="category-image-container">
                                                    <img src={category.imgSrc} alt={category.alt} className="category-image" />
                                                </div>
                                                <div className="category-content">
                                                    <p className="category-name">Sell {category.name} Online</p>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </section>
                        ))
                    }
                </div>
            </div>

            <Footer />
        </>
    )
}
