import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import Button from '../components/Button';

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section style={{
                height: '90vh',
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("https://images.unsplash.com/photo-1519225421980-715cb0202128?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                color: 'var(--color-white)',
                padding: '0 1rem'
            }}>
                <div className="animate-fade-in">
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        marginBottom: '1rem',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)',
                        color: 'var(--color-white)'
                    }}>
                        Your Love Story, <br /> Perfectly Planned.
                    </h1>
                    <p style={{
                        fontSize: '1.25rem',
                        marginBottom: '2rem',
                        maxWidth: '600px',
                        margin: '0 auto 2rem',
                        textShadow: '0 1px 2px rgba(0,0,0,0.3)'
                    }}>
                        We transform your vision into a flawlessly executed celebration, allowing you to be fully present in every magical moment.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <Button to="/contact" variant="primary">Start Your Journey</Button>
                        <Button to="/portfolio" variant="secondary" style={{ borderColor: 'var(--color-white)', color: 'var(--color-white)' }}>
                            View Our Work
                        </Button>
                    </div>
                </div>
            </section>

            {/* Introduction */}
            <section style={{ padding: '6rem 0', textAlign: 'center' }}>
                <div className="container">
                    <span style={{
                        color: 'var(--color-navy)',
                        textTransform: 'uppercase',
                        letterSpacing: '0.1em',
                        fontSize: '0.9rem',
                        display: 'block',
                        marginBottom: '1rem'
                    }}>
                        Welcome to EverAfter Planners
                    </span>
                    <h2 style={{ maxWidth: '800px', margin: '0 auto 2rem' }}>
                        Planning a wedding should be as joyful as the celebration itself.
                    </h2>
                    <p style={{ maxWidth: '700px', margin: '0 auto 3rem', fontSize: '1.1rem' }}>
                        We believe that every couple deserves a wedding that feels authentically them. From the first consultation to the final dance, we are your partners, your advocates, and your peace of mind. Let us handle the logistics while you focus on the love.
                    </p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
                        <div style={{ padding: '2rem', backgroundColor: 'var(--color-ivory)', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '1.5rem' }}>Bespoke Design</h3>
                            <p>Every detail curated to reflect your unique style and story.</p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: 'var(--color-ivory)', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '1.5rem' }}>Flawless Execution</h3>
                            <p>Seamless coordination ensuring a stress-free experience.</p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: 'var(--color-ivory)', borderRadius: '8px' }}>
                            <h3 style={{ fontSize: '1.5rem' }}>Trusted Partners</h3>
                            <p>Access to our network of the finest vendors in the industry.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Teaser */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-sage)' }}>
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', marginBottom: '3rem' }}>
                        <h2 style={{ marginBottom: 0, color: 'var(--color-navy)' }}>Curated Packages</h2>
                        <Link to="/services" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
                            View All Services <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Full Planning', desc: 'From "Yes" to "I Do", we handle absolutely everything.' },
                            { title: 'Partial Planning', desc: 'For the couple who has a vision but needs guidance bringing it to life.' },
                            { title: 'Month-of Coordination', desc: 'Ensure your hard work pays off with professional execution on the big day.' }
                        ].map((service, index) => (
                            <div key={index} style={{
                                backgroundColor: 'var(--color-white)',
                                padding: '3rem 2rem',
                                borderRadius: '4px',
                                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                transition: 'transform 0.3s ease'
                            }}>
                                <h3 style={{ color: 'var(--color-navy)' }}>{service.title}</h3>
                                <p style={{ marginBottom: '2rem' }}>{service.desc}</p>
                                <Link to="/services" style={{ color: 'var(--color-navy)', textDecoration: 'underline', fontFamily: 'var(--font-heading)', fontSize: '1.1rem' }}>
                                    Learn More
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-blush)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'var(--color-navy)' }}>Love Notes</h2>
                    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
                        <div style={{ fontSize: '2rem', color: 'var(--color-navy)', marginBottom: '1rem' }}>"</div>
                        <p style={{ fontSize: '1.4rem', fontStyle: 'italic', fontFamily: 'var(--font-heading)', marginBottom: '2rem' }}>
                            Hiring EverAfter Planners was the best decision we made. They understood our vision perfectly and made the entire process so enjoyable. Our wedding day was absolute magic!
                        </p>
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                            {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} fill="var(--color-navy)" color="var(--color-navy)" />)}
                        </div>
                        <p style={{ fontWeight: 'bold', letterSpacing: '0.1em' }}>SARAH & JAMES</p>
                        <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Married June 2024</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section style={{ padding: '6rem 0', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Ready to start planning?</h2>
                    <p style={{ marginBottom: '2rem', fontSize: '1.2rem' }}>Let's chat about your dream wedding over a cup of coffee (or champagne!).</p>
                    <Button to="/contact" variant="primary">Schedule Consultation</Button>
                </div>
            </section>
        </div>
    );
};

export default Home;
