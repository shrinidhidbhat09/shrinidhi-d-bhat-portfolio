import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects.js';

function Projects() {
  const groupedProjects = useMemo(() => {
    return projects.reduce((acc, project) => {
      if (!acc[project.category]) {
        acc[project.category] = [];
      }
      acc[project.category].push(project);
      return acc;
    }, {});
  }, []);

  return (
    <main className="page-container">
      <section className="projects-page">
        <div className="section-header">
          <h2>System Modules</h2>
          <p>
            Core system components organized by domain. Each module represents a different aspect of system engineering.
          </p>
        </div>

        <div className="system-modules">
          {Object.entries(groupedProjects).map(([category, categoryProjects]) => (
            <div key={category} className="module-group">
              <h3 className="module-category">{category}</h3>
              <div className="module-projects">
                {categoryProjects.map((project) => (
                  <Link
                    key={project.id}
                    to={`/projects/${project.id}`}
                    className="module-card"
                  >
                    <div className="module-header">
                      <span className="module-badge">Module</span>
                      <h4>{project.title}</h4>
                    </div>
                    <p className="module-description">{project.description}</p>
                    <div className="module-tech">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span key={tech} className="tech-tag">{tech}</span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="tech-tag">+{project.tech.length - 3}</span>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Projects;
