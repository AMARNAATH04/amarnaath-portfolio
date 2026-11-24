import React from 'react';
import { ChevronUp, Mail, Phone, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        backgroundColor: '#0a0b0e',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        padding: '36px 0',
        color: 'rgba(255, 255, 255, 0.65)',
        fontSize: '13px',
      }}
    >
      <div
        className="container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}
      >
        {/* Social / Contact Links on Left matching template */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <a
            href={`mailto:${personalInfo.email}`}
            title="Email"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-orange)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
            }}
          >
            <Mail size={14} />
          </a>

          <a
            href={`tel:${personalInfo.phone}`}
            title="Call"
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255,255,255,0.06)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              transition: 'background-color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--primary-orange)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.06)';
            }}
          >
            <Phone size={14} />
          </a>

          <span style={{ fontSize: '12px', color: '#64748b' }}>
            {personalInfo.college} &bull; {personalInfo.degree}
          </span>
        </div>

        {/* Center / Copyright */}
        <div style={{ textAlign: 'center' }}>
          <span>
            &copy; {new Date().getFullYear()} <strong style={{ color: '#ffffff' }}>AMARNAATH N T</strong>. All Rights Reserved.
          </span>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          title="Back to Top"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '4px',
            backgroundColor: 'rgba(255, 255, 255, 0.08)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#ffffff',
            transition: 'all 0.2s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'var(--primary-orange)';
            e.currentTarget.style.borderColor = 'var(--primary-orange)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          }}
          aria-label="Back to top"
        >
          <ChevronUp size={18} />
        </button>
      </div>
    </footer>
  );
}
