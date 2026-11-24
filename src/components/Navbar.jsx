import React, { useState, useEffect } from 'react';
import { Menu, X, Download, Mail, ExternalLink, Search } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Track active section
      const sections = ['home', 'about', 'skills', 'projects', 'timeline', 'contact'];
      const scrollPos = window.scrollY + 200;
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Features', href: '#skills', id: 'skills' },
    { name: 'Portfolio', href: '#projects', id: 'projects' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Timeline', href: '#timeline', id: 'timeline' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: 'all 0.35s ease',
          backgroundColor: isScrolled ? '#ffffff' : 'rgba(20, 21, 25, 0.92)',
          backdropFilter: 'blur(10px)',
          borderBottom: isScrolled ? '1px solid #ebebeb' : '1px solid rgba(255,255,255,0.06)',
          boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.08)' : 'none',
          padding: isScrolled ? '12px 0' : '20px 0',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          {/* Logo */}
          <a
            href="#home"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textDecoration: 'none',
            }}
          >
            {/* Orange Geometric Faceted Star Logo matching template */}
            <svg width="34" height="34" viewBox="0 0 100 100" style={{ filter: 'drop-shadow(0 2px 8px rgba(255,82,50,0.4))' }}>
              <defs>
                <linearGradient id="navStarGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#ff7b25" />
                  <stop offset="50%" stopColor="#ff5232" />
                  <stop offset="100%" stopColor="#e0280f" />
                </linearGradient>
              </defs>
              <polygon points="50,4 65,34 98,38 73,63 81,96 50,78 19,96 27,63 2,38 35,34" fill="url(#navStarGrad)" />
            </svg>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '20px',
                  fontWeight: '800',
                  letterSpacing: '0.08em',
                  color: isScrolled ? '#121418' : '#ffffff',
                  lineHeight: '1.1',
                  transition: 'color 0.3s ease',
                }}
              >
                AMARNAATH
              </span>
              <span
                style={{
                  fontSize: '9px',
                  fontWeight: '600',
                  letterSpacing: '0.2em',
                  color: 'var(--primary-orange)',
                  textTransform: 'uppercase',
                }}
              >
                ENGINEER &bull; DEVELOPER
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav
            style={{
              display: 'none',
              alignItems: 'center',
              gap: '32px',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '13px',
                    fontWeight: isActive ? '700' : '600',
                    letterSpacing: '0.04em',
                    color: isScrolled
                      ? isActive
                        ? 'var(--primary-orange)'
                        : '#475569'
                      : isActive
                      ? '#ffffff'
                      : 'rgba(255, 255, 255, 0.75)',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    padding: '6px 0',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = 'var(--primary-orange)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = isScrolled
                      ? isActive
                        ? 'var(--primary-orange)'
                        : '#475569'
                      : isActive
                      ? '#ffffff'
                      : 'rgba(255, 255, 255, 0.75)';
                  }}
                >
                  {link.name}
                  {isActive && (
                    <span
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '16px',
                        height: '2px',
                        backgroundColor: 'var(--primary-orange)',
                        borderRadius: '2px',
                      }}
                    />
                  )}
                </a>
              );
            })}

            {/* Quick Action Button */}
            <a
              href={personalInfo.resumeUrl}
              download="AMARNAATH_N_T_Resume.pdf"
              className={isScrolled ? 'btn-primary' : 'btn-outline'}
              style={{
                padding: '9px 18px',
                fontSize: '12px',
                gap: '6px',
              }}
              title="Download Resume PDF"
            >
              <Download size={14} />
              Resume
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="mobile-toggle" style={{ display: 'block' }}>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                background: 'transparent',
                color: isScrolled ? '#121418' : '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px',
                borderRadius: '6px',
              }}
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div
            style={{
              backgroundColor: '#ffffff',
              borderTop: '1px solid #ebebeb',
              padding: '20px 24px 28px',
              boxShadow: '0 20px 30px rgba(0,0,0,0.15)',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '15px',
                  fontWeight: '600',
                  color: activeSection === link.id ? 'var(--primary-orange)' : '#1e293b',
                  padding: '8px 0',
                  borderBottom: '1px solid #f1f5f9',
                }}
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download="AMARNAATH_N_T_Resume.pdf"
              className="btn-primary"
              style={{ width: '100%', marginTop: '8px' }}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Download size={16} />
              Download Resume (PDF)
            </a>
          </div>
        )}
      </header>

      {/* Responsive media query helper via inline style tag */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
