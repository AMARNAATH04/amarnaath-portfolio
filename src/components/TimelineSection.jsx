import React from 'react';
import { GraduationCap, Award, CheckCircle2, Trophy, Calendar, Sparkles, BookOpen } from 'lucide-react';
import { educationData, certificationsData, achievementsData } from '../data/portfolioData';

export default function TimelineSection() {
  return (
    <section
      id="timeline"
      style={{
        backgroundColor: '#ffffff',
        padding: '95px 0',
        color: '#121418',
        position: 'relative',
      }}
    >
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
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
            <GraduationCap size={14} />
            ACADEMIC &amp; CREDENTIALS TIMELINE
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              color: '#0f172a',
            }}
          >
            Education &amp; Professional Certifications
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
            A verified timeline of higher technical education, national certifications, and industry training.
          </p>
        </div>

        {/* Dual Column Layout: Education on Left, Certifications & Achievements on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '48px',
          }}
        >
          {/* Left Column: Education */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255,82,50,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <GraduationCap size={20} color="var(--primary-orange)" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>
                Education Timeline
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'relative' }}>
              {/* Vertical timeline rule */}
              <div
                style={{
                  position: 'absolute',
                  top: '12px',
                  bottom: '12px',
                  left: '19px',
                  width: '2px',
                  backgroundColor: '#e2e8f0',
                }}
              />

              {educationData.map((edu, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  {/* Timeline Dot */}
                  <div
                    style={{
                      width: '40px',
                      height: '40px',
                      minWidth: '40px',
                      borderRadius: '50%',
                      backgroundColor: idx === 0 ? 'var(--primary-orange)' : '#ffffff',
                      border: idx === 0 ? '4px solid #fed7aa' : '3px solid #cbd5e1',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                    }}
                  >
                    <Calendar size={14} color={idx === 0 ? '#ffffff' : '#64748b'} />
                  </div>

                  {/* Card Content */}
                  <div
                    style={{
                      backgroundColor: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '12px',
                      padding: '24px',
                      flex: 1,
                      boxShadow: '0 4px 15px rgba(0,0,0,0.02)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                      <span
                        style={{
                          fontSize: '11px',
                          fontWeight: '800',
                          color: 'var(--primary-orange)',
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                        }}
                      >
                        {edu.period} &bull; {edu.status}
                      </span>
                      <span
                        style={{
                          fontSize: '12px',
                          fontWeight: '700',
                          color: '#0f172a',
                          backgroundColor: '#ffffff',
                          padding: '3px 10px',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                        }}
                      >
                        {edu.grade}
                      </span>
                    </div>

                    <h4
                      style={{
                        fontSize: '17px',
                        fontWeight: '800',
                        color: '#0f172a',
                        marginTop: '8px',
                        lineHeight: '1.3',
                      }}
                    >
                      {edu.degree}
                    </h4>

                    <div style={{ fontSize: '13px', fontWeight: '600', color: '#64748b', marginTop: '4px' }}>
                      {edu.institution}, {edu.location}
                    </div>

                    <p style={{ fontSize: '13.5px', color: '#475569', marginTop: '10px', lineHeight: '1.6' }}>
                      {edu.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements Callout */}
            <div style={{ marginTop: '36px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '8px',
                    backgroundColor: 'rgba(255,82,50,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Trophy size={20} color="var(--primary-orange)" />
                </div>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>
                  Honors &amp; Hackathons
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {achievementsData.map((ach) => (
                  <div
                    key={ach.id}
                    style={{
                      backgroundColor: '#fff7ed',
                      border: '1px solid #ffedd5',
                      borderRadius: '12px',
                      padding: '20px',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '16px',
                    }}
                  >
                    <div
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '50%',
                        backgroundColor: 'var(--primary-orange)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minWidth: '32px',
                        marginTop: '2px',
                      }}
                    >
                      <Award size={16} color="#ffffff" />
                    </div>

                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                        <h4 style={{ fontSize: '15px', fontWeight: '800', color: '#9a3412' }}>
                          {ach.title}
                        </h4>
                        <span
                          style={{
                            fontSize: '11px',
                            fontWeight: '700',
                            backgroundColor: 'var(--primary-orange)',
                            color: '#ffffff',
                            padding: '2px 8px',
                            borderRadius: '10px',
                          }}
                        >
                          {ach.badge}
                        </span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#c2410c', fontWeight: '600', marginTop: '2px' }}>
                        {ach.event} &bull; {ach.year}
                      </div>
                      <p style={{ fontSize: '13px', color: '#7c2d12', marginTop: '6px', lineHeight: '1.5' }}>
                        {ach.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Certifications & Training */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '28px' }}>
              <div
                style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  backgroundColor: 'rgba(255,82,50,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <CheckCircle2 size={20} color="var(--primary-orange)" />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0f172a' }}>
                Certifications &amp; Training
              </h3>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {certificationsData.map((cert) => (
                <div
                  key={cert.id}
                  style={{
                    backgroundColor: '#ffffff',
                    border: '1px solid #e2e8f0',
                    borderRadius: '10px',
                    padding: '18px 20px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.03)',
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'var(--primary-orange)';
                    e.currentTarget.style.transform = 'translateX(4px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateX(0)';
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: '#64748b',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}
                    >
                      {cert.issuer}
                    </span>
                    <span
                      style={{
                        fontSize: '11px',
                        fontWeight: '700',
                        color: cert.badge.includes('76%') ? '#ffffff' : 'var(--primary-orange)',
                        backgroundColor: cert.badge.includes('76%') ? 'var(--primary-orange)' : 'rgba(255,82,50,0.1)',
                        padding: '2px 8px',
                        borderRadius: '4px',
                      }}
                    >
                      {cert.badge}
                    </span>
                  </div>

                  <h4
                    style={{
                      fontSize: '15px',
                      fontWeight: '800',
                      color: '#0f172a',
                      marginTop: '6px',
                      lineHeight: '1.3',
                    }}
                  >
                    {cert.title}
                  </h4>

                  <p style={{ fontSize: '12.5px', color: '#64748b', marginTop: '4px', lineHeight: '1.5' }}>
                    {cert.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
