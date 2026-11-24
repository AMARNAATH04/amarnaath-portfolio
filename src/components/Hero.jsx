import React from 'react';
import { Download, Mail, ArrowRight, Eye, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { heroPolyBg } from '../assets';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: 'relative',
        minHeight: '100vh',
        backgroundColor: '#141519',
        backgroundImage: `url(${heroPolyBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '110px',
        paddingBottom: '80px',
        overflow: 'hidden',
        color: '#ffffff',
      }}
    >
      {/* Subtle ambient light overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(180deg, rgba(20,21,25,0.4) 0%, rgba(20,21,25,0.2) 60%, rgba(20,21,25,0.85) 100%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            alignItems: 'center',
            gap: '48px',
          }}
        >
          {/* Left Column: Portrait with white sticker outline border matching reference */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Ambient orange glow behind portrait */}
            <div
              style={{
                position: 'absolute',
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(255,82,50,0.28) 0%, rgba(255,82,50,0) 70%)',
                filter: 'blur(35px)',
                zIndex: 0,
              }}
            />

            {/* Portrait Frame with White Sticker Cutout effect */}
            <div
              className="animate-float"
              style={{
                position: 'relative',
                zIndex: 1,
                maxWidth: '380px',
                width: '100%',
              }}
            >
              {/* Profile Image Container with thick white outline & drop shadow matching reference template */}
              <div
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  padding: '6px',
                  background: '#ffffff',
                  boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.75), 0 0 0 1px rgba(255,255,255,0.8)',
                  overflow: 'hidden',
                  transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                }}
              >
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name}
                  style={{
                    width: '100%',
                    height: '440px',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: '18px',
                    display: 'block',
                    backgroundColor: '#0a0d14',
                  }}
                  onError={(e) => {
                    // Fallback placeholder if profile.jpg fails
                    e.currentTarget.src = '/profile.jpg';
                  }}
                />

                {/* Status Badge floating at bottom of card */}
                <div
                  style={{
                    position: 'absolute',
                    bottom: '18px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: 'rgba(15, 23, 42, 0.92)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 82, 50, 0.4)',
                    borderRadius: '30px',
                    padding: '8px 18px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    whiteSpace: 'nowrap',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.4)',
                  }}
                >
                  <span
                    style={{
                      width: '8px',
                      height: '8px',
                      borderRadius: '50%',
                      backgroundColor: '#10b981',
                      boxShadow: '0 0 8px #10b981',
                    }}
                  />
                  <span
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '0.08em',
                      color: '#ffffff',
                      textTransform: 'uppercase',
                    }}
                  >
                    Open for Internships
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Typography & CTAs matching reference template */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '6px 14px',
                background: 'rgba(255, 82, 50, 0.12)',
                border: '1px solid rgba(255, 82, 50, 0.35)',
                borderRadius: '30px',
                width: 'fit-content',
              }}
            >
              <Sparkles size={14} color="var(--primary-orange)" />
              <span
                style={{
                  fontSize: '11px',
                  fontWeight: '700',
                  color: 'var(--primary-orange)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                }}
              >
                V.S.B. Engineering College &bull; 2024–2028
              </span>
            </div>

            <h1
              style={{
                fontSize: 'clamp(36px, 5.5vw, 54px)',
                fontWeight: '900',
                lineHeight: '1.12',
                letterSpacing: '-0.03em',
                color: '#ffffff',
              }}
            >
              Hi! I'm <span style={{ color: 'var(--primary-orange)' }}>Amarnaath</span>,<br />
              <span style={{ fontWeight: '400', color: '#e2e8f0', fontSize: '0.88em' }}>
                Computer &amp; Comm. Engineer.
              </span>
            </h1>

            <p
              style={{
                fontSize: '16px',
                lineHeight: '1.75',
                color: 'rgba(255, 255, 255, 0.82)',
                maxWidth: '560px',
                fontFamily: 'var(--font-body)',
              }}
            >
              Enthusiastic and motivated engineering student with solid command of{' '}
              <strong style={{ color: '#ffffff', fontWeight: '600' }}>Java, Python, HTML, CSS, and MySQL</strong>.
              Passionate about software development, data structures, and intuitive web designing. Seeking an internship opportunity to build high-impact digital solutions.
            </p>

            {/* CTA Buttons Row matching template: "View More" and "Hire Me" + "Download Resume" */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '14px',
                paddingTop: '12px',
              }}
            >
              <a href="#contact" className="btn-primary" style={{ minWidth: '140px' }}>
                <Mail size={16} />
                Contact Me
              </a>

              <a href="#projects" className="btn-outline" style={{ minWidth: '140px' }}>
                <Eye size={16} />
                View Projects
              </a>

              <a
                href={personalInfo.resumeUrl}
                download="AMARNAATH_N_T_Resume.pdf"
                className="btn-outline"
                style={{
                  borderColor: 'rgba(255, 82, 50, 0.7)',
                  color: '#ffffff',
                }}
                title="Download AMARNAATH N T Resume"
              >
                <Download size={16} color="var(--primary-orange)" />
                Download Resume
              </a>
            </div>

            {/* Quick stats mini row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '28px',
                paddingTop: '24px',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                marginTop: '10px',
              }}
            >
              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '800', color: 'var(--primary-orange)' }}>
                  7.81
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Current CGPA
                </div>
              </div>

              <div style={{ width: '1px', height: '28px', background: 'rgba(255, 255, 255, 0.15)' }} />

              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '800', color: '#ffffff' }}>
                  6+
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  Certifications
                </div>
              </div>

              <div style={{ width: '1px', height: '28px', background: 'rgba(255, 255, 255, 0.15)' }} />

              <div>
                <div style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '800', color: '#ffffff' }}>
                  2nd
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  AI Quiz Prize
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Center Scroll Indicator matching template */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '45px',
            opacity: 0.8,
          }}
        >
          <a
            href="#about"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textDecoration: 'none',
              color: '#ffffff',
              gap: '6px',
            }}
          >
            {/* Outline mouse icon */}
            <div
              style={{
                width: '24px',
                height: '38px',
                border: '2px solid rgba(255, 255, 255, 0.6)',
                borderRadius: '14px',
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <span
                className="animate-mouse"
                style={{
                  width: '4px',
                  height: '7px',
                  backgroundColor: 'var(--primary-orange)',
                  borderRadius: '2px',
                  position: 'absolute',
                  top: '6px',
                }}
              />
            </div>
            <span
              style={{
                fontSize: '10px',
                fontWeight: '600',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255, 255, 255, 0.5)',
              }}
            >
              Scroll Down
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
