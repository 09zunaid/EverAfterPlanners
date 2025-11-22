import React, { useState } from 'react';
import { Filter } from 'lucide-react';

import p1 from '../assets/portfolio/p1.jpg';
import p2 from '../assets/portfolio/p2.jpg';
import p3 from '../assets/portfolio/p3.jpg';
import p4 from '../assets/portfolio/p4.jpg';
import p5 from '../assets/portfolio/p5.jpg';
import p6 from '../assets/portfolio/p6.jpg';

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', 'Spring', 'Summer', 'Fall', 'Winter', 'Bohemian', 'Classic', 'Modern'];

    // Real Unsplash images for a premium look
    const projects = [
        { id: 1, title: "Sarah & James", category: "Summer", style: "Classic", image: p1 },
        { id: 2, title: "Emily & Michael", category: "Fall", style: "Bohemian", image: p2 },
        { id: 3, title: "Jessica & David", category: "Winter", style: "Modern", image: p3 },
        { id: 4, title: "Amanda & Chris", category: "Spring", style: "Classic", image: p4 },
        { id: 5, title: "Olivia & Ryan", category: "Summer", style: "Modern", image: p5 },
        { id: 6, title: "Sophia & Ethan", category: "Fall", style: "Bohemian", image: p6 },
    ];

    const filteredProjects = filter === 'All'
        ? projects
        : projects.filter(p => p.category === filter || p.style === filter);

    return (
        <div style={{ padding: '4rem 0' }}>
            <div className="container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <h1 style={{ marginBottom: '1rem' }}>Real Weddings</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '1.1rem' }}>
                        A collection of love stories we've had the honor of telling.
                    </p>
                </div>

                {/* Filter */}
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
                    {categories.map(cat => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                padding: '8px 16px',
                                borderRadius: '20px',
                                border: filter === cat ? '1px solid var(--color-navy)' : '1px solid #e0e0e0',
                                backgroundColor: filter === cat ? 'var(--color-navy)' : 'transparent',
                                color: filter === cat ? 'var(--color-white)' : 'var(--color-charcoal)',
                                cursor: 'pointer',
                                fontFamily: 'var(--font-heading)',
                                fontSize: '1rem',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '2rem' }}>
                    {filteredProjects.map(project => (
                        <div key={project.id} className="animate-fade-in" style={{ cursor: 'pointer', group: 'hover' }}>
                            <div style={{ overflow: 'hidden', borderRadius: '4px', marginBottom: '1rem' }}>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    style={{
                                        width: '100%',
                                        height: '400px',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                />
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '0.2rem' }}>{project.title}</h3>
                            <p style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.05em', opacity: 0.7 }}>
                                {project.category} • {project.style}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
