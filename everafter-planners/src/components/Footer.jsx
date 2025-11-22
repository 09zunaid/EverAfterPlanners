import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Heart } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ backgroundColor: 'var(--color-navy)', color: 'var(--color-ivory)', padding: '4rem 0 2rem' }}>
            <div className="container">
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '3rem',
                    marginBottom: '3rem'
                }}>
                    {/* Brand */}
                    <div>
                        <h3 style={{ color: 'var(--color-blush)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Heart size={24} fill="var(--color-blush)" />
                            EverAfter Planners
                        </h3>
                        <p style={{ opacity: 0.9 }}>
                            Transforming your vision into a flawlessly executed celebration. Your love story, perfectly planned.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ color: 'var(--color-ivory)', marginBottom: '1.5rem' }}>Quick Links</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li style={{ marginBottom: '0.8rem' }}><Link to="/services">Our Services</Link></li>
                            <li style={{ marginBottom: '0.8rem' }}><Link to="/portfolio">Real Weddings</Link></li>
                            <li style={{ marginBottom: '0.8rem' }}><Link to="/about">About Us</Link></li>
                            <li style={{ marginBottom: '0.8rem' }}><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ color: 'var(--color-ivory)', marginBottom: '1.5rem' }}>Get in Touch</h4>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.8rem' }}>
                            <Mail size={18} /> hello@everafterplanners.com
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                            <a href="#" aria-label="Instagram"><Instagram color="var(--color-blush)" /></a>
                            <a href="#" aria-label="Facebook"><Facebook color="var(--color-blush)" /></a>
                        </div>
                    </div>
                </div>

                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    textAlign: 'center',
                    fontSize: '0.9rem',
                    opacity: 0.7
                }}>
                    &copy; {new Date().getFullYear()} EverAfter Planners. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
