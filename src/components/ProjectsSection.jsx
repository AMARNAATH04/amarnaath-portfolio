import React, { useState } from 'react';
import { Eye, ExternalLink, Sparkles, FolderGit2, ArrowRight } from 'lucide-react';
import { projectsData } from '../data/portfolioData';
import { projectBlueCarbon, projectHackathon, projectAiQuiz, projectDsa } from '../assets';
import ProjectModal from './ProjectModal';

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  // Map image assets to projects
  const enrichedProjects = projectsData.map((p) => {
    let img = projectBlueCarbon;
    if (p.id === 'sih-2025-prototype') img = projectHackathon;
    if (p.id === 'ai-quiz-knowledge-engine') img = projectAiQuiz;
    if (p.id === 'dsa-java-suite') img = projectDsa;
    return { ...p, image: img };
  });

  const categories = ['All', 'Web Development', 'Hackathon Project', 'AI & Algorithms', 'Software Development'];

  const filteredProjects =
    activeFilter === 'All'
      ? enrichedProjects
      : enrichedProjects.filter((p) => p.category === activeFilter);

  return (
    <section
      id="projects"
      style={{
        backgroundColor: '#f4f5f8',
        padding: '90px 0',
        color: '#121418',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '50px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: 'var(--primary-orange)',
              fontSize: '12px',
              fontWeight: '800',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '10px',
            }}
          >
            <FolderGit2 size={14} />
            PORTFOLIO &amp; SHOWCASE
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              color: '#0f172a',
            }}
          >
            Featured Engineering Projects
          </h2>

          <p
            style={{
              color: '#64748b',
              fontSize: '15px',
              maxWidth: '640px',
              margin: '12px auto 0',
              lineHeight: '1.6',
            }}
          >
            Explore interactive web interfaces, algorithmic architectures, and competition solutions built with modern technology.
          </p>

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '10px',
              marginTop: '32px',
            }}
          >
            {categories.map((cat) => {
              const isSelected = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: '8px 20px',
                    borderRadius: '24px',
                    fontSize: '13px',
                    fontWeight: isSelected ? '700' : '600',
                    backgroundColor: isSelected ? 'var(--primary-orange)' : '#ffffff',
                    color: isSelected ? '#ffffff' : '#475569',
                    border: isSelected ? '1px solid var(--primary-orange)' : '1px solid #e2e8f0',
                    boxShadow: isSelected ? '0 4px 15px rgba(255,82,50,0.3)' : '0 2px 6px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = 'var(--primary-orange)';
                      e.currentTarget.style.color = 'var(--primary-orange)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSelected) {
                      e.currentTarget.style.borderColor = '#e2e8f0';
                      e.currentTarget.style.color = '#475569';
                    }
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Mosaic Project Grid matching reference template */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
            gap: '28px',
          }}
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveModalProject(project)}
              className="project-card"
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                overflow: 'hidden',
                boxShadow: '0 6px 25px rgba(0, 0, 0, 0.06)',
                border: '1px solid #e5e7eb',
                cursor: 'pointer',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-6px)';
                e.currentTarget.style.boxShadow = '0 18px 40px rgba(0,0,0,0.12)';
                const overlay = e.currentTarget.querySelector('.project-hover-overlay');
                if (overlay) overlay.style.opacity = '1';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 0, 0, 0.06)';
                const overlay = e.currentTarget.querySelector('.project-hover-overlay');
                if (overlay) overlay.style.opacity = '0';
              }}
            >
              {/* Image Preview with Hover Eye Overlay matching template */}
              <div style={{ position: 'relative', height: '230px', overflow: 'hidden', backgroundColor: '#0f172a' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease',
                  }}
                />

                {/* Hover Eye Overlay matching template's large circular eye preview */}
                <div
                  className="project-hover-overlay"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(255, 82, 50, 0.92)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '12px',
                    opacity: 0,
                    transition: 'opacity 0.3s ease',
                    zIndex: 2,
                    color: '#ffffff',
                    padding: '20px',
                    textAlign: 'center',
                  }}
                >
                  {/* Glowing Eye Icon matching template */}
                  <div
                    style={{
                      width: '68px',
                      height: '68px',
                      borderRadius: '50%',
                      border: '2.5px solid #ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 0 20px rgba(255,255,255,0.4)',
                    }}
                  >
                    <Eye size={36} color="#ffffff" />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '13px',
                      fontWeight: '800',
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                    }}
                  >
                    Click to View Details
                  </span>
                </div>

                {/* Top Badge */}
                <div
                  style={{
                    position: 'absolute',
                    top: '14px',
                    left: '14px',
                    backgroundColor: 'rgba(15, 23, 42, 0.85)',
                    backdropFilter: 'blur(4px)',
                    color: '#ffffff',
                    padding: '4px 10px',
                    borderRadius: '4px',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.category}
                </div>
              </div>

              {/* Card Meta Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <h3
                    style={{
                      fontSize: '18px',
                      fontWeight: '800',
                      color: '#0f172a',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {project.title}
                  </h3>
                  <span style={{ fontSize: '12px', fontWeight: '600', color: '#94a3b8' }}>{project.year}</span>
                </div>

                <p
                  style={{
                    fontSize: '13.5px',
                    color: '#64748b',
                    lineHeight: '1.6',
                    marginBottom: '16px',
                    flex: 1,
                  }}
                >
                  {project.subtitle} &bull; {project.summary.slice(0, 110)}...
                </p>

                {/* Tag Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      style={{
                        fontSize: '11px',
                        fontWeight: '600',
                        color: '#475569',
                        backgroundColor: '#f1f5f9',
                        padding: '3px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingTop: '14px',
                    borderTop: '1px solid #f1f5f9',
                    fontSize: '12px',
                    fontWeight: '700',
                    color: 'var(--primary-orange)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  <span>Explore Case Study</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}

          {/* Integrated Project Counter Card matching template's "25 Projects / View All" box */}
          <div
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: '2px dashed #cbd5e1',
              padding: '36px 28px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              minHeight: '320px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.03)',
            }}
          >
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '64px',
                fontWeight: '300',
                color: '#1e293b',
                lineHeight: '1',
              }}
            >
              04+
            </div>
            <div
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '20px',
                fontWeight: '800',
                color: '#0f172a',
                marginTop: '10px',
                letterSpacing: '-0.02em',
              }}
            >
              Projects &amp; Solutions
            </div>
            <p style={{ color: '#64748b', fontSize: '13px', marginTop: '6px', maxWidth: '240px' }}>
              From ecological MRV systems to competitive AI algorithmic modules.
            </p>
            <button
              onClick={() => setActiveFilter('All')}
              style={{
                marginTop: '20px',
                fontSize: '13px',
                fontWeight: '700',
                color: 'var(--primary-orange)',
                background: 'transparent',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                borderBottom: '1.5px solid var(--primary-orange)',
                paddingBottom: '2px',
              }}
            >
              View All Showcase
            </button>
          </div>
        </div>
      </div>

      {/* Interactive Modal */}
      {activeModalProject && (
        <ProjectModal project={activeModalProject} onClose={() => setActiveModalProject(null)} />
      )}
    </section>
  );
}
