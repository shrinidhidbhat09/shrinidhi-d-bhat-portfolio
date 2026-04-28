import { motion } from 'framer-motion';

function Profile() {
  return (
    <section className="profile-section">
      <motion.div
        className="profile-content"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="profile-image-container">
          <img
            src="/images/profile-photo.jpeg"
            alt="Shrinidhi D Bhat"
            className="profile-image"
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/300x300.png?text=Profile+Photo';
            }}
          />
        </div>

        <div className="profile-info">
          <h1 className="profile-name">Shrinidhi D Bhat</h1>
          <p className="profile-title">Systems Engineer & Flutter Developer</p>

          <div className="profile-overview">
            <p>
              Passionate about building scalable systems and real-time applications.
              Specializing in distributed systems, mobile development, and clean architecture.
              Experience in Flutter, Django, PostgreSQL, and system design.
            </p>

            <div className="profile-highlights">
              <div className="highlight-item">
                <span className="highlight-number">5+</span>
                <span className="highlight-label">Projects Completed</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-number">Real-time</span>
                <span className="highlight-label">Systems Focus</span>
              </div>
            </div>
          </div>

          <div className="profile-skills">
            <h3>Core Technologies</h3>
            <div className="skills-grid">
              <span className="skill-tag">Flutter</span>
              <span className="skill-tag">Dart</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Django</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">System Design</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Profile;
