import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Projects', to: '/projects' },
  { label: 'Certifications', to: '/certifications' },
  { label: 'Blogs', to: 'https://shrinidhibhat.substack.com/', external: true },
  { label: 'Contact', to: '/contact' }
];

function Navbar({ isEntered = false }) {
  return (
    <header className="navbar glass-panel">
      <div className="navbar-brand">
        <span className="brand-dot" />
        <Link to="/" className="brand-title">
          SYS • SHRINIDHI
        </Link>
      </div>
      <nav className="navbar-links">
        {navItems.map((item) =>
          item.external ? (
            <a
              key={item.label}
              href={isEntered ? item.to : '#'}
              target="_blank"
              rel="noreferrer"
              className={`nav-link ${!isEntered ? 'nav-disabled' : ''}`}
              onClick={(e) => !isEntered && e.preventDefault()}
            >
              {item.label}
            </a>
          ) : (
            <NavLink
              key={item.label}
              to={isEntered ? item.to : '#'}
              className={({ isActive }) =>
                `nav-link ${isActive ? 'nav-link-active' : ''} ${!isEntered ? 'nav-disabled' : ''}`
              }
              end
              onClick={(e) => !isEntered && e.preventDefault()}
            >
              {item.label}
            </NavLink>
          )
        )}
      </nav>
      <a
        className="nav-resume"
        href={`${import.meta.env.BASE_URL}documents/resume.pdf`}
        download="Shrinidhi_D_Bhat_Resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        Download Resume
      </a>
    </header>
  );
}

export default Navbar;
