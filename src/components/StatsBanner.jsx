import React from 'react';
import { Award, CheckCircle2, Trophy, Users, Smile, ThumbsUp } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    {
      icon: <Award size={36} color="#ffffff" strokeWidth={1.75} />,
      value: '7.81',
      label: 'Academic CGPA',
      sub: 'B.E. Computer & Comm. Engg',
    },
    {
      icon: <CheckCircle2 size={36} color="#ffffff" strokeWidth={1.75} />,
      value: '06+',
      label: 'Certifications',
      sub: 'Infosys & NPTEL 76%',
    },
    {
      icon: <Trophy size={36} color="#ffffff" strokeWidth={1.75} />,
      value: '2nd',
      label: 'AI Quiz Trophy',
      sub: 'Inter-College Competition',
    },
    {
      icon: <Users size={36} color="#ffffff" strokeWidth={1.75} />,
      value: 'SIH 2025',
      label: 'Hackathon Finalist',
      sub: 'Smart India Hackathon',
    },
  ];

  return (
    <section
      style={{
        backgroundColor: 'var(--primary-orange)',
        backgroundImage: 'linear-gradient(135deg, #ff5e3a 0%, #ff5232 50%, #e03f1f 100%)',
        padding: '65px 0',
        color: '#ffffff',
        position: 'relative',
        boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '36px',
            textAlign: 'center',
          }}
        >
          {stats.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '2px',
                  opacity: 0.95,
                }}
              >
                {item.icon}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(36px, 4.5vw, 48px)',
                  fontWeight: '800',
                  lineHeight: '1',
                  letterSpacing: '-0.02em',
                  color: '#ffffff',
                }}
              >
                {item.value}
              </div>

              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: '700',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                {item.label}
              </div>

              <div
                style={{
                  fontSize: '12px',
                  color: 'rgba(255, 255, 255, 0.85)',
                  fontWeight: '500',
                }}
              >
                {item.sub}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
