import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import DeveloperCard from './DeveloperCard.jsx';

const systemLogs = [
  '[BOOT] Initializing system...',
   '[LOAD] Developer profile: Shrinidhi D Bhat',
  '[INFO] Flutter Developer | Backend Systems',
  '[INFO] Building real-time and distributed systems',
  '[STATUS] Clean Architecture → Enabled',
  '[STATUS] Real-time Processing → Active',
  '[STATUS] Problem Solving → Continuous'
];

function Landing({ onEnter }) {
  const [currentLogIndex, setCurrentLogIndex] = useState(0);
  const [logsComplete, setLogsComplete] = useState(false);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    if (currentLogIndex >= systemLogs.length) {
      setTimeout(() => {
        setLogsComplete(true);
        setTimeout(() => setShowCard(true), 800);
      }, 1000);
      return;
    }

    const timer = setTimeout(() => {
      setCurrentLogIndex((prev) => prev + 1);
    }, 600);

    return () => clearTimeout(timer);
  }, [currentLogIndex]);

  return (
    <section className="landing-section">
      <div className="landing-content">
        <div className="system-logs-container">
          <AnimatePresence>
            {systemLogs.slice(0, currentLogIndex).map((log, index) => (
              <motion.div
                key={index}
                className="system-log"
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0
                }}
                exit={{ opacity: 0, y: -40 }}
                transition={{
                  duration: 0.6,
                  delay: logsComplete ? index * 0.1 : 0
                }}
              >
                {log}
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <AnimatePresence>
          {showCard && (
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="developer-card-container"
            >
              <DeveloperCard onEnter={onEnter} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Landing;
