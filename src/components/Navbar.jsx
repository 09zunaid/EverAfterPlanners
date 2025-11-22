import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import Button from './Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className="navbar" style={{
            padding: '1.5rem 0',
            backgroundColor: 'var(--color-ivory)',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Logo */}
                <Link to="/" style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.8rem',
                    color: 'var(--color-navy)',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <Heart size={24} fill="var(--color-blush)" color="var(--color-blush)" />
                    EverAfter Planners
                </Link>

                {/* Desktop Menu */}
                <div className="desktop-menu" style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.1rem',
                                color: isActive(link.path) ? 'var(--color-navy)' : 'var(--color-charcoal)',
                                borderBottom: isActive(link.path) ? '1px solid var(--color-navy)' : 'none',
                                paddingBottom: '2px'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button to="/contact" variant="primary" style={{ padding: '8px 24px', fontSize: '1rem' }}>
                        Book Consultation
                    </Button>
                </div>

                {/* Mobile Menu Toggle */}
                <button onClick={toggleMenu} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'block' }} className="mobile-toggle">
                    {isOpen ? <X size={28} color="var(--color-navy)" /> : <Menu size={28} color="var(--color-navy)" />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    width: '100%',
                    backgroundColor: 'var(--color-ivory)',
                    padding: '2rem',
                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    textAlign: 'center'
                }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            onClick={() => setIsOpen(false)}
                            style={{
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1.2rem',
                                color: 'var(--color-navy)'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button to="/contact" variant="primary" onClick={() => setIsOpen(false)}>
                        Book Consultation
                    </Button>
                </div>
            )}

            <style>{`
        @media (min-width: 768px) {
          .desktop-menu { display: flex !important; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
