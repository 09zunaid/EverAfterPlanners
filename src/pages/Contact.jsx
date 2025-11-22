import React from 'react';
import Button from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div style={{ padding: '4rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ marginBottom: '1rem' }}>Let's Connect</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        We'd love to hear about your love story. Fill out the form below or schedule a consultation directly.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {/* Contact Info */}
                    <div>
                        <h2 style={{ marginBottom: '2rem' }}>Get in Touch</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Mail size={20} color="var(--color-navy)" />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>Email Us</p>
                                    <p>hello@everafterplanners.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Phone size={20} color="var(--color-navy)" />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>Call Us</p>
                                    <p>(555) 123-4567</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--color-blush)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <MapPin size={20} color="var(--color-navy)" />
                                </div>
                                <div>
                                    <p style={{ fontWeight: 'bold', marginBottom: '0.2rem' }}>Visit Us</p>
                                    <p>123 Wedding Lane, Love City, CA</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ padding: '2rem', backgroundColor: 'var(--color-ivory)', borderRadius: '8px' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Office Hours</h3>
                            <p style={{ marginBottom: '0.5rem' }}>Tuesday - Friday: 10am - 6pm</p>
                            <p>Saturday: By Appointment Only</p>
                            <p>Sunday - Monday: Closed</p>
                        </div>
                    </div>

                    {/* Form */}
                    <div style={{ backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0,0,0,0.05)' }}>
                        <h2 style={{ marginBottom: '2rem' }}>Send a Message</h2>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Name</label>
                                <input type="text" placeholder="Your Name" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit' }} />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Email</label>
                                <input type="email" placeholder="your@email.com" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit' }} />
                            </div>
                            <div style={{ marginBottom: '1.5rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Wedding Date</label>
                                <input type="date" style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit' }} />
                            </div>
                            <div style={{ marginBottom: '2rem' }}>
                                <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '500' }}>Message</label>
                                <textarea rows="5" placeholder="Tell us about your vision..." style={{ width: '100%', padding: '12px', borderRadius: '4px', border: '1px solid #ccc', fontFamily: 'inherit' }}></textarea>
                            </div>
                            <Button type="submit" variant="primary" style={{ width: '100%' }}>Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
