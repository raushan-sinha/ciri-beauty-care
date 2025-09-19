import React, { useState } from "react";
import "./SignUp.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { auth, provider } from "../firebase"; // import firebase config
import { signInWithPopup } from "firebase/auth";

export default function SignUp() {
    const [googleUser, setGoogleUser] = useState(null);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: "",
    });

    // Google signup
    const handleGoogleSignup = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const user = result.user;
            setGoogleUser(user);

            // Autofill form with Google data
            setFormData((prev) => ({
                ...prev,
                fullname: user.displayName || "",
                email: user.email || "",
            }));
        } catch (error) {
            console.error("Google Sign-In Error:", error.message);
        }
    };

    // Handle form input
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Form submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Signup Data:", formData);
        // Add your signup logic here
    };

    return (
        <>
            <Navbar />

            <div className="signup-wrapper">
                <div className="signup-box">
                    {/* Close button */}
                    <div>
                        <button className="close-btn" onClick={() => window.history.back()}>
                            ✖
                        </button>
                    </div>
                    <br />

                    <h2>CiriBeautyCare Signup</h2>

                    {/* Social Signup */}
                    <div className="social-signup">
                        <button type="button" className="google-btn" onClick={handleGoogleSignup}>
                            <GoogleIcon /> Sign up with Google
                        </button>
                        <button type="button" className="apple-btn">
                            <AppleIcon /> Sign up with Apple
                        </button>
                    </div>

                    <div className="divider">OR</div>

                    {/* Signup Form */}
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Full Name"
                                value={formData.fullname}
                                onChange={handleChange}
                                autoComplete="name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                autoComplete="email"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                autoComplete="tel"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                autoComplete="new-password"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                autoComplete="new-password"
                                required
                            />
                        </div>

                        <button type="submit" className="create-btn">
                            Create Account
                        </button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    );
}
