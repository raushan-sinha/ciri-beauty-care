import { Link } from "react-router-dom";
import { useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
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

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    //todo: Nav links -
    const navLinks = [
        { href: "/", name: "Home" },
        { href: "/women", name: "Women" },
        { href: "/men", name: "Men" },
        { href: "/brands", name: "All Brands" },
        { href: "/glowgear", name: "GlowGear" },
    ];

    //todo: Nav links for desktop icons -
    const desktopNavIcons = [
        { icon: <AccountCircleIcon /> },
        { icon: <ShoppingCartIcon /> },
        { icon: <StorefrontSharpIcon /> }
    ];

    //todo: Nav links for phone icons -
    const navLinkPhoneIcons = [
        { icon: <AccountCircleIcon className="navLink-icon" />, label: "Account" },
        { icon: <ShoppingCartIcon className="navLink-icon" />, label: "Cart" },
        { icon: <StorefrontSharpIcon className="navLink-icon" />, label: "Supplier" }
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
                    {
                        desktopNavIcons.map((icons, idx) => (
                            <div className="icons desktop-icons" key={idx}>
                                <Tooltip
                                    title="User Account"
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
                                    {icons.icon}
                                </Tooltip>
                            </div>
                        ))
                    }

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

                            <div className="navLink-icons">
                                {navLinkPhoneIcons.map((item, index) => (
                                    <div key={index}>
                                        {item.icon}
                                        <span>{item.label}</span>
                                    </div>
                                ))}
                            </div>
                        </nav>
                    </>
                }
            </header>
        </>
    );
}