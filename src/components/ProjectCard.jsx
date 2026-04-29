import { Link } from 'react-router-dom';

function ProjectCard({ project }) {
  return (
    <article className="project-card glass-panel">
      <div className="project-card-top">
        <span className="project-badge">Project</span>
        <h3>{project.title}</h3>
      </div>
      <p className="project-description">{project.description}</p>
      <div className="project-tags">
        {project.tech.map((tool) => (
          <span key={tool} className="project-tag">
            {tool}
          </span>
        ))}
      </div>
      <Link to={`/projects/${project.id}`} className="project-link">
        Explore details
      </Link>
    </article>
  );
}

export default ProjectCard;
