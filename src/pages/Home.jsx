import { useState } from 'react';
import Landing from '../components/Landing.jsx';
import Profile from '../components/Profile.jsx';
import { motion } from 'framer-motion';

function Home({ onEnterSystemChange }) {
  const [entered, setEntered] = useState(false);

  const handleEnter = () => {
    setEntered(true);
    onEnterSystemChange?.(true);
  };

  return (
    <main className="page-container">
      {!entered ? (
        <Landing onEnter={handleEnter} />
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Profile />
          <section className="blog-section">
            <h2>Featured Articles</h2>
            <p className="blog-description">Read my latest insights on systems, architecture, and real-time development</p>
            <a href="https://substack.com/@nxtbyte" target="_blank" rel="noreferrer" className="blog-link-cta">
              Visit Substack →
            </a>
          </section>
          
        </motion.div>
      )}
    </main>
  );
}

export default Home;
