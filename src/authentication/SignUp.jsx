import React, { useState } from "react";
import "./SignUp.css";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ✅ Firebase imports
import { signInWithPopup, signOut } from "firebase/auth";
import { auth, provider } from "../firebase";

export default function SignUp() {
    const [user, setUser] = useState(null);

    // Google Signup Function
    const signInWithGoogle = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            console.log("User Info:", result.user);
            setUser(result.user); // ✅ Save logged-in user
            alert(`Welcome ${result.user.displayName}`);
        } catch (error) {
            console.error("Google Sign-in error:", error.code, error.message);
            alert("Google Sign-in failed: " + error.message);
        }
    };

    // Logout Function
    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            alert("Signed out successfully!");
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <>
            <Navbar />

            <div className="signup-wrapper">
                <div className="signup-box">
                    {/* Close button goes back to previous page */}
                    <div>
                        <button
                            className="close-btn"
                            onClick={() => window.history.back()}
                        >
                            ✖
                        </button>
                    </div>
                    <br />

                    <h2>CiriBeautyCare Signup</h2>

                    {/* Social Signup */}
                    <div className="social-signup">
                        {!user ? (
                            <>
                                <button
                                    type="button"
                                    className="google-btn"
                                    onClick={signInWithGoogle}
                                >
                                    <GoogleIcon /> Sign up with Google
                                </button>
                                <button type="button" className="apple-btn">
                                    <AppleIcon /> Sign up with Apple
                                </button>
                            </>
                        ) : (
                            <div className="user-info">
                                <img
                                    src={user.photoURL}
                                    alt="profile"
                                    className="user-avatar"
                                />
                                <p>{user.displayName}</p>
                                <p>{user.email}</p>
                                <button
                                    type="button"
                                    className="logout-btn"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>

                    <div className="divider">OR</div>

                    {/* Signup Form */}
                    {!user && (
                        <form
                            className="signup-form"
                            onSubmit={(e) => {
                                e.preventDefault();
                                // handle normal signup logic here
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
                                <label htmlFor="confirm-password">
                                    Confirm Password
                                </label>
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
                    )}
                </div>
            </div>

            <Footer />
        </>
    );
}
