import { motion } from 'framer-motion';

function DeveloperCard({ onEnter }) {
  return (
    <motion.div
      className="developer-card"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      <div className="developer-info">
        <h1 className="developer-name">Shrinidhi D Bhat</h1>
        <p className="developer-tagline">Systems. Not just apps.</p>
      </div>

      <div className="developer-icon">👨‍💻</div>

      <button className="enter-system-button" onClick={onEnter}>
        Enter the System
      </button>
    </motion.div>
  );
}

export default DeveloperCard;