import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import ContactPage from './pages/Contact.jsx';

function AnimatedRoutes({ isEntered, onEnterSystemChange }) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <Home onEnterSystemChange={onEnterSystemChange} />
            </motion.div>
          }
        />
        {isEntered && (
          <>
            <Route
              path="/projects"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <Projects />
                </motion.div>
              }
            />
            <Route
              path="/projects/:projectId"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <ProjectDetail />
                </motion.div>
              }
            />
            <Route
              path="/contact"
              element={
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <ContactPage />
                </motion.div>
              }
            />
          </>
        )}
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isEntered, setIsEntered] = useState(false);

  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar isEntered={isEntered} />
        <AnimatedRoutes isEntered={isEntered} onEnterSystemChange={setIsEntered} />
      </div>
    </HashRouter>
  );
}

export default App;
