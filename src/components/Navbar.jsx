import { Link } from "react-router-dom";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from '@mui/icons-material/MicNone';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./Navbar.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navLinks = [
        { href: "/", name: "Home" },
        { href: "/women", name: "Women" },
        { href: "/men", name: "Men" },
        { href: "/brands", name: "All Brands" },
        { href: "/more", name: "More" },
    ];

    const footerItems = [
        { icon: <ShoppingCartIcon className="footer-icon" />, label: "Cart" },
        { icon: <FavoriteBorderIcon className="footer-icon" />, label: "Wishlist" },
        { icon: <AccountCircleIcon className="footer-icon" />, label: "Account" }
    ];

    return (
        <>
            <header className="navbar">
                <div className="navbar-container">
                    <div className="logo">Ciri-BeautyCare</div>

                    {/* Desktop Nav Links */}
                    <nav className="nav-links desktop-nav">
                        {navLinks.map((link, idx) => (
                            <Link key={idx} to={link.href}>
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Search */}
                    <div className="search-bar desktop-search">
                        <SearchIcon className="search-icon" />

                        <input type="text" name="search" placeholder="Search for products, brands..." />

                        <MicNoneIcon className="camera-icon" />
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
                {isMenuOpen &&
                    <>
                        <nav className="mobile-nav">
                            <div className="search-bar">
                                <SearchIcon className="search-icon" />

                                <input type="text" name="search" placeholder="Search for products, brands..." />

                                <MicNoneIcon className="camera-icon" />
                            </div>

                            {navLinks.map((link, idx) => (
                                <a key={idx} href={link.href}>
                                    {link.name}
                                </a>
                            ))}
                        </nav>
                    </>
                }
            </header>

            {/* Footer Navbar - Mobile/Tablet */}
            <div className="footer-navbar">
                {footerItems.map((item, index) => (
                    <div key={index}>
                        {item.icon}

                        <span>{item.label}</span>
                    </div>
                ))}
            </div>
        </>
    );
}