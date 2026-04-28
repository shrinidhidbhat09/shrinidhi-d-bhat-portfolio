import Contact from '../components/Contact.jsx';
import { motion } from 'framer-motion';

function ContactPage() {
  return (
    <main className="page-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: 'easeOut' }}
      >
        <Contact />
      </motion.div>
    </main>
  );
}

export default ContactPage;