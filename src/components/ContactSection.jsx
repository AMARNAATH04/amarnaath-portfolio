import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { cityBg } from '../assets';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Please provide your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errs.subject = 'Please specify a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitting(true);

    // Simulate sending message
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  return (
    <section
      id="contact"
      style={{
        position: 'relative',
        backgroundColor: '#0d0e12',
        backgroundImage: `url(${cityBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '100px 0',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header matching template */}
        <div style={{ marginBottom: '50px' }}>
          <h2
            style={{
              fontSize: 'clamp(32px, 4.5vw, 44px)',
              fontWeight: '800',
              letterSpacing: '-0.02em',
              color: '#ffffff',
            }}
          >
            Contact us
          </h2>
          <p
            style={{
              color: 'rgba(255, 255, 255, 0.75)',
              fontSize: '15px',
              marginTop: '6px',
            }}
          >
            Please don't hesitate to reach out for internship opportunities, collaborations, or project inquiries.
          </p>
        </div>

        {/* 2-Column Layout matching reference template: "LEAVE A REPLY" Form on Left, Contact Cards on Right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
          }}
        >
          {/* Left Column: Contact Form */}
          <div>
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: '800',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#ffffff',
                marginBottom: '24px',
              }}
            >
              LEAVE A REPLY
            </h3>

            {submitted ? (
              <div
                style={{
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  border: '1px solid #10b981',
                  borderRadius: '8px',
                  padding: '28px',
                  textAlign: 'center',
                }}
              >
                <CheckCircle size={40} color="#10b981" style={{ margin: '0 auto 12px' }} />
                <h4 style={{ fontSize: '18px', fontWeight: '800', color: '#ffffff' }}>
                  Thank you for your message!
                </h4>
                <p style={{ color: '#cbd5e1', fontSize: '14px', marginTop: '6px' }}>
                  I have received your inquiry and will reply to your email promptly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline"
                  style={{ marginTop: '18px', fontSize: '12px', padding: '8px 18px' }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {/* Name */}
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: errors.name ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.18)',
                      borderRadius: '4px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => {
                      if (!errors.name) e.target.style.borderColor = 'var(--primary-orange)';
                    }}
                    onBlur={(e) => {
                      if (!errors.name) e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    }}
                  />
                  {errors.name && (
                    <span style={{ fontSize: '12px', color: '#f87171', marginTop: '4px', display: 'block' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email *"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: errors.email ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.18)',
                      borderRadius: '4px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => {
                      if (!errors.email) e.target.style.borderColor = 'var(--primary-orange)';
                    }}
                    onBlur={(e) => {
                      if (!errors.email) e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    }}
                  />
                  {errors.email && (
                    <span style={{ fontSize: '12px', color: '#f87171', marginTop: '4px', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject *"
                    value={formData.subject}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: errors.subject ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.18)',
                      borderRadius: '4px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.2s ease',
                    }}
                    onFocus={(e) => {
                      if (!errors.subject) e.target.style.borderColor = 'var(--primary-orange)';
                    }}
                    onBlur={(e) => {
                      if (!errors.subject) e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    }}
                  />
                  {errors.subject && (
                    <span style={{ fontSize: '12px', color: '#f87171', marginTop: '4px', display: 'block' }}>
                      {errors.subject}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '14px 18px',
                      backgroundColor: 'rgba(255, 255, 255, 0.06)',
                      border: errors.message ? '1px solid #ef4444' : '1px solid rgba(255, 255, 255, 0.18)',
                      borderRadius: '4px',
                      color: '#ffffff',
                      fontSize: '14px',
                      outline: 'none',
                      resize: 'vertical',
                      transition: 'border-color 0.2s ease',
                      fontFamily: 'inherit',
                    }}
                    onFocus={(e) => {
                      if (!errors.message) e.target.style.borderColor = 'var(--primary-orange)';
                    }}
                    onBlur={(e) => {
                      if (!errors.message) e.target.style.borderColor = 'rgba(255, 255, 255, 0.18)';
                    }}
                  />
                  {errors.message && (
                    <span style={{ fontSize: '12px', color: '#f87171', marginTop: '4px', display: 'block' }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit Button matching orange Send in template */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary"
                  style={{
                    alignSelf: 'flex-start',
                    minWidth: '150px',
                    opacity: submitting ? 0.7 : 1,
                  }}
                >
                  <Send size={15} />
                  {submitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Contact Cards matching CONTACT INFO 1 & 2 in template */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '24px 28px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--primary-orange)',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <MapPin size={16} />
                CONTACT INFO 1 &bull; DIRECT CONTACT
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                <div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '12px' }}>Location:</span>
                  <strong style={{ color: '#ffffff' }}>Karur, Tamil Nadu, India</strong>
                </div>

                <div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '12px' }}>Institution:</span>
                  <span style={{ color: '#e2e8f0' }}>V.S.B. Engineering College</span>
                </div>

                <div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '12px' }}>Phone:</span>
                  <a href={`tel:${personalInfo.phone}`} style={{ color: 'var(--primary-orange)', fontWeight: '700' }}>
                    {personalInfo.phone}
                  </a>
                </div>

                <div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '12px' }}>Email:</span>
                  <a href={`mailto:${personalInfo.email}`} style={{ color: '#ffffff', textDecoration: 'underline' }}>
                    {personalInfo.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '8px',
                padding: '24px 28px',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'var(--primary-orange)',
                  marginBottom: '16px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Clock size={16} />
                CONTACT INFO 2 &bull; AVAILABILITY
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '14px' }}>
                <div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '12px' }}>Status:</span>
                  <strong style={{ color: '#10b981' }}>Available for Internships &amp; Projects</strong>
                </div>

                <div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '12px' }}>Preferred Roles:</span>
                  <span style={{ color: '#e2e8f0' }}>Software Development, Web Designing, Frontend / Java</span>
                </div>

                <div>
                  <span style={{ color: 'rgba(255,255,255,0.5)', display: 'block', fontSize: '12px' }}>Response Time:</span>
                  <span style={{ color: '#e2e8f0' }}>Within 24 Hours</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
