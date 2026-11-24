import React, { useState } from 'react';
import {
  Coffee,
  FileCode2,
  Layout,
  Database,
  Layers,
  GitBranch,
  Server,
  Palette,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { skillsData } from '../data/portfolioData';

export default function SkillsSection() {
  const [selectedSkill, setSelectedSkill] = useState(null);

  // Icon mapping
  const iconMap = {
    Coffee: <Coffee size={22} color="#ffffff" />,
    FileCode2: <FileCode2 size={22} color="#ffffff" />,
    Layout: <Layout size={22} color="#ffffff" />,
    Database: <Database size={22} color="#ffffff" />,
    Layers: <Layers size={22} color="#ffffff" />,
    GitBranch: <GitBranch size={22} color="#ffffff" />,
    Server: <Server size={22} color="#ffffff" />,
    Palette: <Palette size={22} color="#ffffff" />,
  };

  return (
    <section
      id="skills"
      style={{
        backgroundColor: '#1b1c20',
        padding: '90px 0',
        color: '#ffffff',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        borderBottom: '1px solid rgba(255,255,255,0.06)',
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
            <Sparkles size={14} />
            TECHNICAL PROFICIENCIES
          </div>

          <h2
            style={{
              fontSize: 'clamp(28px, 4vw, 38px)',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              color: '#ffffff',
            }}
          >
            Core Engineering &amp; Development Skills
          </h2>

          <p
            style={{
              color: '#94a3b8',
              fontSize: '15px',
              maxWidth: '640px',
              margin: '12px auto 0',
              lineHeight: '1.6',
            }}
          >
            Built upon solid theoretical foundations, industrial certifications, and hands-on project engineering.
          </p>
        </div>

        {/* 2 Rows x 4 Columns Feature Grid matching reference template */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '36px 28px',
          }}
        >
          {skillsData.map((skill) => (
            <div
              key={skill.id}
              onClick={() => setSelectedSkill(selectedSkill?.id === skill.id ? null : skill)}
              style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '18px',
                padding: '20px',
                borderRadius: '8px',
                background: selectedSkill?.id === skill.id ? 'rgba(255, 82, 50, 0.08)' : 'transparent',
                border: selectedSkill?.id === skill.id ? '1px solid rgba(255, 82, 50, 0.3)' : '1px solid transparent',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
              }}
              onMouseLeave={(e) => {
                if (selectedSkill?.id !== skill.id) {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {/* Vibrant Orange Circular Icon Badge matching template */}
              <div
                style={{
                  width: '52px',
                  height: '52px',
                  minWidth: '52px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--primary-orange)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 6px 18px rgba(255, 82, 50, 0.35)',
                  transition: 'transform 0.3s ease',
                }}
              >
                {iconMap[skill.icon] || <Coffee size={22} color="#ffffff" />}
              </div>

              {/* Skill Content */}
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <h3
                    style={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: '#ffffff',
                      marginBottom: '6px',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {skill.title}
                  </h3>
                  <span
                    style={{
                      fontSize: '11px',
                      fontWeight: '700',
                      color: 'var(--primary-orange)',
                      backgroundColor: 'rgba(255, 82, 50, 0.12)',
                      padding: '2px 8px',
                      borderRadius: '10px',
                    }}
                  >
                    {skill.level}
                  </span>
                </div>

                <p
                  style={{
                    fontSize: '13px',
                    color: '#94a3b8',
                    lineHeight: '1.5',
                    fontFamily: 'var(--font-body)',
                  }}
                >
                  {skill.shortDesc}
                </p>

                {/* Progress bar indicator */}
                <div
                  style={{
                    width: '100%',
                    height: '4px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderRadius: '2px',
                    marginTop: '10px',
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      width: skill.level,
                      height: '100%',
                      background: 'var(--primary-gradient)',
                      borderRadius: '2px',
                    }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Selected Skill Expand Detail Drawer */}
        {selectedSkill && (
          <div
            style={{
              marginTop: '40px',
              padding: '24px 30px',
              backgroundColor: 'rgba(255, 82, 50, 0.08)',
              border: '1px solid rgba(255, 82, 50, 0.25)',
              borderRadius: '12px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
              animation: 'fadeIn 0.3s ease',
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '6px' }}>
                <CheckCircle2 size={18} color="var(--primary-orange)" />
                <h4 style={{ fontSize: '16px', fontWeight: '800', color: '#ffffff' }}>
                  {selectedSkill.title} &mdash; Detailed Competency
                </h4>
                <span style={{ fontSize: '11px', color: '#cbd5e1', backgroundColor: '#334155', padding: '2px 8px', borderRadius: '4px' }}>
                  {selectedSkill.category}
                </span>
              </div>
              <p style={{ color: '#cbd5e1', fontSize: '14px', maxWidth: '850px', lineHeight: '1.6' }}>
                {selectedSkill.details}
              </p>
            </div>
            <button
              onClick={() => setSelectedSkill(null)}
              className="btn-outline"
              style={{ fontSize: '11px', padding: '6px 14px' }}
            >
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
