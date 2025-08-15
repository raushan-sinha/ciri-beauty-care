import React, { useState } from "react";
import "./Navbar.css";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    //todo: Logo
    const logo = 'CiriBeautyCare';

    //todo: Navbar Links
    const navLinks = [
        { href: "/", name: "Home" },
        { href: "/women", name: "Women" },
        { href: "/men", name: "Men" },
        { href: "/brands", name: "All Brands" },
        { href: "/more", name: "More" },
    ];

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    {/* Logo */}
                    <div className="logo">{logo}</div>

                    {/* Desktop Nav Links */}
                    <nav className="nav-links desktop-nav">
                        {navLinks.map((link, idx) => (
                            <a key={idx} href={link.href}>
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Desktop Search */}
                    <div className="search-bar desktop-search">
                        <SearchIcon className="search-icon" />
                        <input
                            type="text"
                            placeholder="Search for products, brands..."
                        />
                        <PhotoCameraIcon className="camera-icon" />
                    </div>

                    {/* Desktop Icons */}
                    <div className="icons desktop-icons">
                        <AccountCircleIcon />
                        <FavoriteBorderIcon />
                        <ShoppingCartIcon />
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="mobile-menu-icon" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                    </div>
                </div>

                {/* Mobile Menu (Only opens when clicked) */}
                {isMenuOpen && (
                    <nav className="mobile-nav">
                        <div className="search-bar mobile-search">
                            <SearchIcon className="search-icon" />
                            <input
                                type="text"
                                placeholder="Search for products, brands..."
                            />
                            <PhotoCameraIcon className="camera-icon" />
                        </div>
                        {navLinks.map((link, idx) => (
                            <a key={idx} href={link.href}>
                                {link.name}
                            </a>
                        ))}
                    </nav>
                )}
            </header>

            {/* Footer Navbar - Mobile/Tablet */}
            <div className="footer-navbar">
                <div>
                    <ShoppingCartIcon className="footer-icon" />
                    <span>Cart</span>
                </div>
                <div>
                    <FavoriteBorderIcon className="footer-icon" />
                    <span>Wishlist</span>
                </div>
                <div>
                    <AccountCircleIcon className="footer-icon" />
                    <span>Account</span>
                </div>
            </div>
        </>
    );
}
