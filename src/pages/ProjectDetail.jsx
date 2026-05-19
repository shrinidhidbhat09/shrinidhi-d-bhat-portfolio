import { Link, useParams } from 'react-router-dom';
import projects from '../data/projects.js';

function ProjectDetail() {
  const { projectId } = useParams();
  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="page-container">
        <div className="not-found-panel">
          <h2>Module not found</h2>
          <p>This system module does not exist or the link is incorrect.</p>
          <Link to="/projects" className="button-outline">
            Back to modules
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-container">
      <section className="project-detail-page">
        <div className="project-header">
          <span className="module-badge">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="project-meta">
            <div>
              <strong>Tech Stack</strong>
              <div className="project-tech-stack">
                {project.tech.map((tool) => (
                  <span key={tool} className="tech-tag">{tool}</span>
                ))}
              </div>
            </div>
            <div>
              <strong>Source</strong>
              <a href={project.github} target="_blank" rel="noreferrer" className="project-link-detail">
                View on GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="case-study">
          <div className="case-section">
            <h2>Problem</h2>
            <p>{project.problem}</p>
          </div>

          <div className="case-section">
            <h2>Approach</h2>
            <p>{project.approach}</p>
          </div>

          <div className="case-section">
            <h2>System Design</h2>
            <p>{project.systemDesign}</p>
          </div>
        </div>

        <div className="project-images-grid">
          <div className="project-image-panel">
            <h3>Architecture</h3>
            <img src={project.architecture} alt={`${project.title} architecture`} />
          </div>
        </div>

        <Link to="/projects" className="button-outline button-small">
          Back to modules
        </Link>
      </section>
    </main>
  );
}

export default ProjectDetail;
