import React from 'react';
import { Mail, Phone, MapPin, GraduationCap, Award, BookOpen, ExternalLink, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { bokehBg, deskBg } from '../assets';

export default function AboutGrid() {
  return (
    <section id="about" style={{ backgroundColor: '#ffffff', padding: '0', color: 'var(--text-dark)' }}>
      {/* 2x2 Grid Container with seamless borders */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          width: '100%',
        }}
      >
        {/* Box 1 (Top-Left): ABOUT ME Details (White Background) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: 'clamp(40px, 6vw, 70px) clamp(30px, 5vw, 60px)',
            borderRight: '1px solid #eeeeee',
            borderBottom: '1px solid #eeeeee',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Subtle silhouette watermark matching template */}
          <div
            style={{
              position: 'absolute',
              right: '20px',
              top: '40px',
              opacity: 0.05,
              pointerEvents: 'none',
            }}
          >
            <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            {/* Orange sub-heading */}
            <div style={{ marginBottom: '24px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: '800',
                  color: 'var(--primary-orange)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  display: 'inline-block',
                  position: 'relative',
                  paddingBottom: '6px',
                }}
              >
                ABOUT ME
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '32px',
                    height: '2px',
                    backgroundColor: 'var(--primary-orange)',
                  }}
                />
              </span>
            </div>

            {/* Quick Profile Specs list */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '14px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px' }}>
                <span style={{ color: '#94a3b8', fontWeight: '500' }}>Name:</span>
                <strong style={{ color: '#0f172a', fontWeight: '700' }}>{personalInfo.name}</strong>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px' }}>
                <span style={{ color: '#94a3b8', fontWeight: '500' }}>Education:</span>
                <span style={{ color: '#1e293b' }}>
                  {personalInfo.degree}, {personalInfo.college}
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px' }}>
                <span style={{ color: '#94a3b8', fontWeight: '500' }}>Academic Year:</span>
                <span style={{ color: '#1e293b' }}>
                  {personalInfo.batch} ({personalInfo.currentYear})
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px' }}>
                <span style={{ color: '#94a3b8', fontWeight: '500' }}>CGPA:</span>
                <span style={{ color: 'var(--primary-orange)', fontWeight: '700' }}>
                  {personalInfo.cgpa} / 10 (CCE)
                </span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px' }}>
                <span style={{ color: '#94a3b8', fontWeight: '500' }}>Location:</span>
                <span style={{ color: '#1e293b' }}>{personalInfo.location}</span>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '12px' }}>
                <span style={{ color: '#94a3b8', fontWeight: '500' }}>Focus:</span>
                <span style={{ color: '#1e293b' }}>Software Development, Web Designing, DSA</span>
              </div>
            </div>

            {/* Social Icons matching template */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                marginTop: '28px',
                paddingTop: '20px',
                borderTop: '1px solid #f1f5f9',
              }}
            >
              <a
                href={`mailto:${personalInfo.email}`}
                title="Send Email"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-orange)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.color = '#475569';
                }}
              >
                <Mail size={16} />
              </a>

              <a
                href={`tel:${personalInfo.phone}`}
                title="Phone Call"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-orange)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.color = '#475569';
                }}
              >
                <Phone size={16} />
              </a>

              <a
                href="#timeline"
                title="Academic Qualifications"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-orange)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.color = '#475569';
                }}
              >
                <GraduationCap size={16} />
              </a>

              <a
                href="#projects"
                title="Engineering Projects"
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  background: '#f8fafc',
                  border: '1px solid #e2e8f0',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#475569',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'var(--primary-orange)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#f8fafc';
                  e.currentTarget.style.color = '#475569';
                }}
              >
                <Code2 size={16} />
              </a>
            </div>
          </div>
        </div>

        {/* Box 2 (Top-Right): Dark Photographic Big Stat Card (Speedometer / Bokeh Background) */}
        <div
          style={{
            backgroundImage: `url(${bokehBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 'clamp(40px, 6vw, 70px) clamp(30px, 5vw, 60px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#ffffff',
            position: 'relative',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            minHeight: '340px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(54px, 7.5vw, 88px)',
              fontWeight: '900',
              lineHeight: '1',
              color: '#ffffff',
              letterSpacing: '-0.03em',
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
            }}
          >
            {personalInfo.cgpa}
          </div>

          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(18px, 2.5vw, 24px)',
              fontWeight: '800',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
              marginTop: '8px',
            }}
          >
            CGPA IN ENGINEERING
          </div>

          <div
            style={{
              fontSize: '13px',
              fontWeight: '600',
              color: 'var(--primary-orange)',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              marginTop: '6px',
            }}
          >
            V.S.B. ENGINEERING COLLEGE
          </div>
        </div>

        {/* Box 3 (Bottom-Left): Dark Photographic Card (Desk / Notebook / Pen Background) */}
        <div
          style={{
            backgroundImage: `url(${deskBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            padding: 'clamp(40px, 6vw, 70px) clamp(30px, 5vw, 60px)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: '#ffffff',
            position: 'relative',
            borderRight: '1px solid rgba(255,255,255,0.08)',
            minHeight: '340px',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(20px, 3vw, 28px)',
              fontWeight: '800',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: '#ffffff',
              lineHeight: '1.3',
            }}
          >
            BUILDING SMART SOFTWARE
            <br />
            &amp; WEB SOLUTIONS
          </div>

          <div
            style={{
              fontSize: '12px',
              fontWeight: '700',
              color: 'var(--primary-orange)',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              marginTop: '12px',
            }}
          >
            {personalInfo.email}
          </div>

          <a
            href="#projects"
            style={{
              marginTop: '20px',
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 0.75)',
              textDecoration: 'none',
              borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
              paddingBottom: '2px',
              letterSpacing: '0.08em',
              transition: 'all 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--primary-orange)';
              e.currentTarget.style.borderColor = 'var(--primary-orange)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'rgba(255, 255, 255, 0.75)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.3)';
            }}
          >
            EXPLORE BLUE CARBON MRV SYSTEM →
          </a>
        </div>

        {/* Box 4 (Bottom-Right): MY STORY (White Background with speech outline watermark) */}
        <div
          style={{
            backgroundColor: '#ffffff',
            padding: 'clamp(40px, 6vw, 70px) clamp(30px, 5vw, 60px)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          {/* Subtle speech bubble watermark matching reference template */}
          <div
            style={{
              position: 'absolute',
              right: '20px',
              top: '40px',
              opacity: 0.04,
              pointerEvents: 'none',
            }}
          >
            <svg width="220" height="220" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="1">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div style={{ marginBottom: '20px' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: '800',
                  color: 'var(--primary-orange)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  display: 'inline-block',
                  position: 'relative',
                  paddingBottom: '6px',
                }}
              >
                MY STORY
                <span
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '32px',
                    height: '2px',
                    backgroundColor: 'var(--primary-orange)',
                  }}
                />
              </span>
            </div>

            <p
              style={{
                fontSize: '14.5px',
                lineHeight: '1.8',
                color: '#475569',
                fontFamily: 'var(--font-body)',
                marginBottom: '16px',
              }}
            >
              I am an aspiring software engineer and tech enthusiast currently pursuing B.E. in Computer and
              Communication Engineering at V.S.B. Engineering College with a CGPA of <strong>7.81/10</strong>. My passion
              lies at the intersection of robust backend systems, data structures, and intuitive web design.
            </p>

            <p
              style={{
                fontSize: '14.5px',
                lineHeight: '1.8',
                color: '#475569',
                fontFamily: 'var(--font-body)',
                marginBottom: '24px',
              }}
            >
              Over my academic tenure, I have earned 6+ certifications across Java, Python, DBMS, and DSA from Infosys
              Springboard and NPTEL. I engineered the Blue Carbon MRV web interface, competed in SIH 2025, and won 2nd
              place in an inter-college AI competition.
            </p>

            <a
              href="#timeline"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '13px',
                fontWeight: '700',
                color: 'var(--primary-orange)',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                transition: 'gap 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.gap = '12px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.gap = '8px';
              }}
            >
              View Education &amp; Certifications →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
