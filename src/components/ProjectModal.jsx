import React from 'react';
import { X, ExternalLink, Check, Calendar, Tag, Layers, Monitor, Award } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(10, 11, 14, 0.82)',
        backdropFilter: 'blur(8px)',
        zIndex: 2000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        animation: 'fadeIn 0.25s ease',
      }}
      onClick={onClose}
    >
      <div
        style={{
          backgroundColor: '#1b1d24',
          border: '1px solid rgba(255, 82, 50, 0.3)',
          borderRadius: '16px',
          maxWidth: '850px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px rgba(0,0,0,0.7)',
          color: '#ffffff',
          position: 'relative',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '24px 28px',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div>
            <span
              style={{
                fontSize: '11px',
                fontWeight: '700',
                color: 'var(--primary-orange)',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
              }}
            >
              {project.category} &bull; {project.year}
            </span>
            <h3
              style={{
                fontSize: '24px',
                fontWeight: '800',
                color: '#ffffff',
                marginTop: '4px',
                letterSpacing: '-0.02em',
              }}
            >
              {project.title}
            </h3>
            <p style={{ color: '#94a3b8', fontSize: '13px', marginTop: '2px' }}>{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.08)',
              border: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-orange)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)';
            }}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        {/* Modal Body */}
        <div style={{ padding: '28px' }}>
          {/* Main Visual Preview */}
          <div
            style={{
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.1)',
              marginBottom: '24px',
              background: '#0e1014',
            }}
          >
            <img
              src={project.image}
              alt={project.title}
              style={{
                width: '100%',
                maxHeight: '380px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* Overview summary */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--primary-orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>
              Project Summary
            </h4>
            <p style={{ color: '#cbd5e1', fontSize: '14.5px', lineHeight: '1.7' }}>
              {project.summary}
            </p>
          </div>

          {/* Key Contributions & Engineering Highlights */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: 'var(--primary-orange)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
              Key Features &amp; Technical Highlights
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <div
                    style={{
                      width: '20px',
                      height: '20px',
                      minWidth: '20px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255, 82, 50, 0.15)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginTop: '2px',
                    }}
                  >
                    <Check size={12} color="var(--primary-orange)" />
                  </div>
                  <span style={{ fontSize: '14px', color: '#e2e8f0', lineHeight: '1.5' }}>
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '15px', fontWeight: '700', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>
              Technologies &amp; Tools
            </h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontSize: '12px',
                    fontWeight: '600',
                    color: '#ffffff',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.15)',
                    padding: '5px 12px',
                    borderRadius: '6px',
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Metric Stats Cards */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '14px',
              padding: '18px',
              backgroundColor: 'rgba(0,0,0,0.3)',
              borderRadius: '10px',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            {Object.entries(project.stats).map(([k, v]) => (
              <div key={k}>
                <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  {k}
                </div>
                <div style={{ fontSize: '15px', fontWeight: '700', color: 'var(--primary-orange)', marginTop: '2px' }}>
                  {v}
                </div>
              </div>
            ))}
          </div>

          {/* Action Footer */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '14px',
              marginTop: '28px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <button onClick={onClose} className="btn-outline" style={{ fontSize: '12px', padding: '10px 20px' }}>
              Close Preview
            </button>
            <a href="#contact" onClick={onClose} className="btn-primary" style={{ fontSize: '12px', padding: '10px 22px' }}>
              Discuss This Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
