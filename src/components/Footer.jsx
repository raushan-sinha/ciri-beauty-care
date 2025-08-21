import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';
import EmailIcon from '@mui/icons-material/Email';
import "./Footer.css";
import { href } from 'react-router-dom';

export default function Footer() {
    //todo: Footer - About
    const about = [
        {
            title: 'CiriBeautyCare',
            para: 'CiriBeautyCare – Your ultimate destination for premium beauty & care products.Enhance your glow with trusted brands & exclusive deals.'
        }
    ];

    //todo: Quick links
    const quickLinks = [
        {
            title: 'Quick Links',
            links: [
                { href: '/', title: 'Home' },
                { href: '/women', title: 'Women' },
                { href: '/men', title: 'Men' },
                { href: '/brands', title: 'Brands' },
                { href: '/glowgear', title: 'GlowGear' }
            ]
        }
    ];

    //todo: Other links
    const otherLinks = [
        {
            title: 'Other Links',
            links: [
                { href: '/about', title: 'About Us' },
                { href: '/privacy', title: 'Privacy Policy' },
                { href: '/terms', title: 'Terms & Conditions' },
                { href: '/faq', title: 'FAQs' },
                { href: '/support', title: 'Support' }
            ]
        }
    ];

    //todo: Social Links
    const socialLinks = [
        {
            title: 'Follow Us',
            links: [
                { href: '#', icon: <FacebookIcon /> },
                { href: '#', icon: <InstagramIcon /> },
                { href: '#', icon: <XIcon /> },
                { href: '#', icon: <EmailIcon /> }
            ]
        }
    ];

    //todo: Copyright
    const copyRight = `© ${new Date().getFullYear()} CiriBeautyCare. All Rights Reserved.`;


    return (
        <footer className="footer">
            <div className="footer-container">

                {/* Brand / About */}
                {
                    about.map((info, idx) => (
                        <div className="footer-column brand" key={idx}>
                            <h2 className="footer-logo">{info.title}</h2>
                            <p className="footer-about">{info.para}</p>
                        </div>
                    ))
                }

                {/* Navbar Links */}
                {
                    quickLinks.map((link, idx) => (
                        <div className="footer-column" key={idx}>
                            <h4 className="footer-title">{link.title}</h4>
                            {
                                link.links.map((item, i) => (
                                    <ul className="footer-links" key={i}>
                                        <li><a href={item.href}>{item.title}</a></li>
                                    </ul>
                                ))
                            }
                        </div>
                    ))
                }

                {/* Other Links */}
                {
                    otherLinks.map((link, idx) => (
                        <div className="footer-column" key={idx}>
                            <h4 className="footer-title">{link.title}</h4>
                            {
                                link.links.map((item, i) => (
                                    <ul className="footer-links" key={i}>
                                        <li><a href={item.href}>{item.title}</a></li>
                                    </ul>
                                ))
                            }
                        </div>
                    ))
                }

                {/* Social Icons */}
                {
                    socialLinks.map((item, idx) => (
                        <div className="footer-column social" key={idx}>
                            <h4 className="footer-title">{item.title}</h4>
                            <div className="social-icons">
                                {item.links.map((link, i) => (
                                    <a key={i} href={link.href} target="_blank" rel="noopener noreferrer">
                                        {link.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))
                }

            </div>

            <div className="footer-bottom">
                <p>{copyRight}</p>
            </div>
        </footer>
    );
}