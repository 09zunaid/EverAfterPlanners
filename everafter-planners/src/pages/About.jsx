import React from 'react';

const About = () => {
    return (
        <div style={{ padding: '4rem 0' }}>
            <div className="container">
                {/* Intro */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '6rem' }}>
                    <h1 style={{ marginBottom: '2rem' }}>Meet the Team</h1>
                    <p style={{ maxWidth: '700px', fontSize: '1.2rem', lineHeight: '1.8' }}>
                        We are a team of hopeless romantics, organizational wizards, and design enthusiasts.
                        Our mission is to create weddings that are as unique as the love stories they celebrate.
                    </p>
                </div>

                {/* Founder */}
                <div style={{ display: 'flex', flexDirection: 'column', md: { flexDirection: 'row' }, gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
                    <div style={{ flex: 1 }}>
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Jane Doe - Lead Planner"
                            style={{ borderRadius: '8px', width: '100%', objectFit: 'cover', height: '500px' }}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                        <h2 style={{ marginBottom: '0.5rem' }}>Jane Doe</h2>
                        <p style={{ color: 'var(--color-navy)', fontWeight: 'bold', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Founder & Lead Planner</p>
                        <p style={{ marginBottom: '1rem' }}>
                            With over 10 years of experience in the event industry, Jane brings a calm presence and a keen eye for detail to every wedding she plans.
                        </p>
                        <p>
                            "I believe that the best weddings are the ones that feel effortless. My goal is to take on the stress so you can soak in every moment."
                        </p>
                    </div>
                </div>

                {/* Philosophy */}
                <div style={{ backgroundColor: 'var(--color-ivory)', padding: '4rem', borderRadius: '8px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Our Philosophy</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>
                        <div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Authenticity</h3>
                            <p>We don't do cookie-cutter. Your wedding should feel like YOU.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Transparency</h3>
                            <p>No hidden fees, no surprises. Just honest communication.</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>Excellence</h3>
                            <p>We hold ourselves and our vendors to the highest standards.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
