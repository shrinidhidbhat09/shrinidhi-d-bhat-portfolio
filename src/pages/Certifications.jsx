import { motion } from 'framer-motion';
import { useState } from 'react';

import aiImg from '../data/certificate_imgs/ai_for_all.png';
import awsImg from '../data/certificate_imgs/aws.png';
import dmImg from '../data/certificate_imgs/datamining.png';
import sbImg from '../data/certificate_imgs/springboot.png';
import sdImg from '../data/certificate_imgs/system_design.png';

function Certifications() {
  const certs = [
      {
        id: 'ai_for_all',
        title: 'AI for All — IUCEE (6 Weeks)',
        issuer: 'IUCEE',
        year: 2025,
        img: aiImg,
        focus: 'Foundations of Artificial Intelligence and its real-world applications',
        description: [
          'Learned core AI concepts including supervised vs unsupervised learning and real-world use cases.',
          'Explored how AI systems are applied across domains such as healthcare, automation, and data analysis.',
          'Built a conceptual understanding of how data drives intelligent decision-making systems.'
        ]
      },
      {
        id: 'aws',
        title: 'AWS Basics — AWS Skill Builder',
        issuer: 'AWS Skill Builder',
        year: 2026,
        img: awsImg,
        focus: 'Cloud fundamentals with hands-on exposure',
        description: [
          'Gained hands-on experience with core AWS services including EC2, S3,CloudFront etc.',
          'Understood cloud computing concepts such as scalability, storage, and distributed infrastructure.',
          'Performed practical labs involving instance setup, storage management, and content delivery.'
        ]
      },
      {
        id: 'datamining',
        title: 'Data Mining Fundamentals — NPTEL (8 Weeks)',
        issuer: 'NPTEL',
        year: 2026,
        img: dmImg,
        focus: 'Core machine learning and data analysis techniques',
        description: [
          'Studied fundamental algorithms including Decision Trees, Perceptron, and Artificial Neural Networks.',
          'Learned how to extract patterns and insights from structured datasets.',
          'Built a strong foundation in classification techniques and data-driven modeling.'
        ]
      },
      {
        id: 'springboot',
        title: 'Spring Boot Workshop (2 Days)',
        issuer: 'Workshop',
        year: 2025,
        img: sbImg,
        focus: 'Backend development using Java ecosystem',
        description: [
          'Developed a data-driven backend application using Java, Spring Boot, and PostgreSQL.',
          'Understood REST API design, database integration, and application layering.',
          'Gained practical exposure to building scalable backend services.'
        ]
      },
      {
        id: 'system_design',
        title: 'Mastering System Design — Udemy',
        issuer: 'Udemy',
        year: 2026,
        img: sdImg,
        focus: 'Scalable system architecture and design thinking',
        description: [
          'Learned core system design principles including scalability, load balancing, and fault tolerance.',
          'Studied real-world case studies such as distributed systems and high-traffic applications.',
          'Developed an understanding of designing systems under real-world constraints and trade-offs.'
        ]
      }
    ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedId, setExpandedId] = useState(null);

  const prev = () => {
    const ni = (activeIndex - 1 + certs.length) % certs.length;
    setActiveIndex(ni);
    setExpandedId(certs[ni].id);
  };

  const next = () => {
    const ni = (activeIndex + 1) % certs.length;
    setActiveIndex(ni);
    setExpandedId(certs[ni].id);
  };

  function toggleExpand(id) {
    setExpandedId((prevId) => (prevId === id ? null : id));
    const idx = certs.findIndex((c) => c.id === id);
    if (idx >= 0) setActiveIndex(idx);
  }

  return (
    <main className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <section className="certifications-section glass-panel cert-two-col">
          <div className="cert-left">
            <h2>Certifications</h2>
            <div className="cert-tiles">
              {certs.map((c, idx) => (
                <div
                  key={c.id}
                  className={`cert-tile ${expandedId === c.id ? 'expanded' : ''} ${activeIndex === idx ? 'active' : ''}`}
                  onClick={() => toggleExpand(c.id)}
                >
                  <div className="tile-title">{c.title}</div>
                  {expandedId === c.id && (
                    <div className="tile-details">
                      <p className="cert-meta">{c.issuer} • {c.year}</p>
                      <p className="cert-focus">{c.focus}</p>
                      {c.description.map((d, i) => (
                        <p key={i} className="cert-desc">{d}</p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="cert-right">
            <div className="viewer">
              <button className="viewer-arrow" onClick={prev} aria-label="Previous">◀</button>
              <div className="viewer-image-wrap">
                <img
                  src={certs[activeIndex].img}
                  alt={certs[activeIndex].title}
                  className="viewer-image clickable"
                  role="button"
                  onClick={() => {
                    const id = certs[activeIndex].id;
                    setExpandedId(id);
                  }}
                />
              </div>
              <button className="viewer-arrow" onClick={next} aria-label="Next">▶</button>
            </div>
            {/* Removed duplicated caption/description here. Descriptions appear only in the expanded left tile. */}
          </div>
        </section>
      </motion.div>
    </main>
  );
}

export default Certifications;
