import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

const contactItems = [
  {
    icon: FaEnvelope,
    label: 'Email',
    value: 'shrinidhibhat290@gmail.com',
    href: 'mailto:shrinidhibhat290@gmail.com'
  },
  {
    icon: FaGithub,
    label: 'GitHub',
    value: 'shrinidhidbhat09',
    href: 'https://github.com/shrinidhidbhat09'
  },
  {
    icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'shrinidhi-d-bhat',
    href: 'https://www.linkedin.com/in/shrinidhi-d-bhat-356200283'
  }
];

function Contact() {
  return (
    <section id="contact" className="contact-section glass-panel">
      <h2>Contact</h2>
      <p>Reach out to discuss system architecture, Flutter apps, or backend engineering.</p>
      <div className="contact-list">
        {contactItems.map((item) => {
          const Icon = item.icon;
          return (
            <a key={item.label} href={item.href} target="_blank" rel="noreferrer" className="contact-card">
              <div className="contact-icon">
                <Icon />
              </div>
              <div>
                <h3>{item.label}</h3>
                <p>{item.value}</p>
              </div>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default Contact;
