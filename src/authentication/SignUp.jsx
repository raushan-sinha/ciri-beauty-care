import React from "react";
import "./SignUp.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SignUp() {
    return (
        <>
            <Navbar />

            <div className="signup-wrapper">
                <div className="signup-box">
                    {/* Close button goes back to previous page */}
                    <button className="close-btn" onClick={() => window.history.back()}>
                        ✖
                    </button>

                    <h2>CiriBeautyCare Signup</h2>

                    {/* Social Signup */}
                    <div className="social-signup">
                        <button type="button" className="google-btn">
                            <GoogleIcon /> Sign up with Google
                        </button>
                        <button type="button" className="apple-btn">
                            <AppleIcon /> Sign up with Apple
                        </button>
                    </div>

                    <div className="divider">OR</div>

                    {/* Signup Form */}
                    <form
                        className="signup-form"
                        onSubmit={(e) => {
                            e.preventDefault();
                            // handle signup logic here
                        }}
                    >
                        <div className="form-group">
                            <label htmlFor="fullname">Full Name</label>
                            <input
                                type="text"
                                id="fullname"
                                name="fullname"
                                placeholder="Full Name"
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
                                autoComplete="new-password"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input
                                type="password"
                                id="confirm-password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
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