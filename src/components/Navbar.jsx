import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from '@mui/icons-material/MicNone';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import Tooltip from '@mui/material/Tooltip';
import "./Navbar.css";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsMenuOpen(false);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

    // Nav links
    const navLinks = [
        { href: "/", name: "Home" },
        { href: "/women", name: "Women" },
        { href: "/men", name: "Men" },
        { href: "/brands", name: "All Brands" },
        { href: "/glowgear", name: "GlowGear" },
    ];

    // Desktop Nav Icons with tooltips
    const desktopNavIcons = [
        { icon: <AccountCircleIcon className="navLink-icon" fontSize="large" />, title: "Account", link: "/authform" },
        { icon: <ShoppingCartIcon className="navLink-icon" fontSize="large" />, title: "Cart", link: "/cart" },
        { icon: <StorefrontSharpIcon className="navLink-icon" fontSize="large" />, title: "Supplier", link: "/supplier" }
    ];

    // Phone Nav Icons
    const navLinkPhoneIcons = [
        { icon: <AccountCircleIcon className="navLink-icon" fontSize="large" />, title: "Account", link: "/authform" },
        { icon: <ShoppingCartIcon className="navLink-icon" fontSize="large" />, title: "Cart", link: "/cart" },
        { icon: <StorefrontSharpIcon className="navLink-icon" fontSize="large" />, title: "Supplier", link: "/supplier" }
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
                        <input
                            type="text"
                            id="searchInput"
                            name="search"
                            placeholder="Search for products, brands..."
                            aria-label="Search for products or brands"
                            autoComplete="off"
                        />
                        <MicNoneIcon className="mic-icon" />
                    </div>

                    {/* Desktop Icons with Tooltips */}
                    <div className="icons desktop-icons">
                        {desktopNavIcons.map((item, idx) => (
                            <Tooltip
                                key={idx}
                                title={item.title}
                                arrow
                                slotProps={{
                                    tooltip: {
                                        sx: {
                                            backgroundColor: '#1e90ff',
                                            color: "#101923",
                                            fontSize: '14px',
                                            fontWeight: '600'
                                        },
                                    },
                                }}
                            >
                                {item.link ? (
                                    <Link to={item.link}>{item.icon}</Link>
                                ) : (
                                    <span onClick={() => setShowAuthBox(true)}>
                                        {item.icon}
                                    </span>
                                )}
                            </Tooltip>
                        ))}
                    </div>

                    {/* Mobile Hamburger */}
                    <div className="mobile-menu-icon" onClick={toggleMenu}>
                        {isMenuOpen ? <CloseIcon fontSize="large" /> : <MenuIcon fontSize="large" />}
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <nav className="mobile-nav">
                        <div className="search-bar">
                            <SearchIcon className="search-icon" />
                            <input type="text" name="search" placeholder="Search for products, brands..." />
                            <MicNoneIcon className="mic-icon" />
                        </div>

                        {navLinks.map((link, idx) => (
                            <Link key={idx} to={link.href}>
                                {link.name}
                            </Link>
                        ))}

                        <div className="navLink-icons">
                            {navLinkPhoneIcons.map((item, index) =>
                                item.link ? (
                                    <Link key={index} to={item.link}>
                                        {item.icon}
                                    </Link>
                                ) : (
                                    <div key={index} onClick={() => setShowAuthBox(true)}>
                                        {item.icon}
                                    </div>
                                )
                            )}
                        </div>
                    </nav>
                )}
            </header>
        </>
    );
}
