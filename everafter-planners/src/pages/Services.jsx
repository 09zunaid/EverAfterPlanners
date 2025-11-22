import React from 'react';
import { Check } from 'lucide-react';
import Button from '../components/Button';

const Services = () => {
    const packages = [
        {
            title: "Full Service Planning",
            price: "Starting at $5,000",
            description: "For the couple who wants a stress-free engagement and a flawless wedding day. We handle every detail from start to finish.",
            features: [
                "Budget development & management",
                "Venue scouting & selection",
                "Vendor curation & contract negotiation",
                "Full design & styling concept",
                "Timeline creation & management",
                "Unlimited communication",
                "RSVP tracking",
                "Wedding rehearsal coordination",
                "Full wedding day coordination (10+ hours)"
            ],
            recommended: true
        },
        {
            title: "Partial Planning",
            price: "Starting at $3,500",
            description: "Perfect for couples who have started the process but need professional guidance to bring it all together.",
            features: [
                "Vendor recommendations",
                "Design consultation",
                "Monthly check-in meetings",
                "Timeline creation",
                "Vendor confirmation",
                "Wedding rehearsal coordination",
                "Wedding day coordination (8 hours)"
            ],
            recommended: false
        },
        {
            title: "Month-of Coordination",
            price: "Starting at $2,000",
            description: "You've planned it all, now let us execute it. We step in 6 weeks prior to ensure everything runs smoothly.",
            features: [
                "Vendor takeover 6 weeks out",
                "Detailed timeline creation",
                "Final venue walkthrough",
                "Wedding rehearsal coordination",
                "Wedding day coordination (8 hours)",
                "Setup & breakdown supervision"
            ],
            recommended: false
        }
    ];

    return (
        <div style={{ padding: '4rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <h1 style={{ marginBottom: '1rem' }}>Our Services</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        Whether you need us from the very beginning or just for the final stretch, we have a package designed to fit your needs.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {packages.map((pkg, index) => (
                        <div key={index} style={{
                            border: pkg.recommended ? '2px solid var(--color-navy)' : '1px solid #e0e0e0',
                            borderRadius: '8px',
                            padding: '2rem',
                            backgroundColor: pkg.recommended ? 'var(--color-ivory)' : 'var(--color-white)',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column'
                        }}>
                            {pkg.recommended && (
                                <span style={{
                                    position: 'absolute',
                                    top: '-12px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    backgroundColor: 'var(--color-navy)',
                                    color: 'var(--color-white)',
                                    padding: '4px 12px',
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.1em',
                                    borderRadius: '4px'
                                }}>
                                    Most Popular
                                </span>
                            )}
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>{pkg.title}</h3>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-navy)', fontWeight: 'bold', marginBottom: '1rem' }}>{pkg.price}</p>
                            <p style={{ marginBottom: '2rem', opacity: 0.8 }}>{pkg.description}</p>

                            <ul style={{ listStyle: 'none', marginBottom: '2rem', flex: 1 }}>
                                {pkg.features.map((feature, i) => (
                                    <li key={i} style={{ display: 'flex', gap: '0.8rem', marginBottom: '0.8rem', alignItems: 'start' }}>
                                        <Check size={18} color="var(--color-sage)" style={{ marginTop: '4px', flexShrink: 0 }} />
                                        <span style={{ fontSize: '0.95rem' }}>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Button to="/contact" variant={pkg.recommended ? 'primary' : 'secondary'} style={{ width: '100%', textAlign: 'center' }}>
                                Inquire Now
                            </Button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
