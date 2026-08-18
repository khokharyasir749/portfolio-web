const projects = [
  {
    id: 1,
    title: "SmartLearn LMS",
    category: "Featured Project",
    description:
      "A modern Learning Management System frontend with courses, filters, course details, login, dashboard, and responsive UI.",
    tech: ["React", "Vite", "JavaScript", "CSS", "React Router"],
    icon: "🎓",
    featured: true,
    github: "https://github.com/khokharyasir749/smartlearn-lms",
    live: "#",
  },

  {
    id: 2,
    title: "Modern Calculator",
    category: "Web Application",
    description:
      "A responsive calculator application with a clean interface, modern themes, smooth animations, and interactive controls.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    icon: "🧮",
    featured: false,
    github: "https://github.com/khokharyasir749/calculator",
    live: "#",
  },

  {
    id: 3,
    title: "Personal Portfolio",
    category: "Portfolio",
    description:
      "A professional developer portfolio built to showcase projects, skills, education, services, and contact information.",
    tech: ["React", "Vite", "JavaScript", "CSS"],
    icon: "💼",
    featured: false,
    github: "https://github.com/khokharyasir749",
    live: "#",
  },

  {
    id: 4,
    title: "Weather Dashboard",
    category: "Web Application",
    description:
      "A clean weather dashboard interface designed to display weather information with a responsive and user-friendly layout.",
    tech: ["React", "JavaScript", "CSS", "API"],
    icon: "☁️",
    featured: false,
    github: "#",
    live: "#",
  },

  {
    id: 5,
    title: "Task Manager",
    category: "Productivity App",
    description:
      "A simple task management interface for creating, organizing, completing, and tracking daily tasks.",
    tech: ["React", "JavaScript", "CSS", "LocalStorage"],
    icon: "✅",
    featured: false,
    github: "#",
    live: "#",
  },

  {
    id: 6,
    title: "E-Commerce UI",
    category: "Frontend Project",
    description:
      "A modern e-commerce frontend concept with product cards, categories, shopping interface, responsive design, and clean navigation.",
    tech: ["React", "JavaScript", "CSS", "React Router"],
    icon: "🛒",
    featured: false,
    github: "#",
    live: "#",
  },
];

function Projects() {
  return (
    <section className="section section-alt" id="projects">
      <div className="container">
        <div className="section-heading">
          <p>MY WORK</p>

          <h2>
            Projects I have
            <br />
            built.
          </h2>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article
              className={`project-card ${
                project.featured ? "project-featured" : ""
              }`}
              key={project.id}
            >
              {/* PROJECT VISUAL */}
              <div className="project-image">
                <div className="project-icon">{project.icon}</div>

                <div className="project-window">
                  <div className="window-top">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>

                  <div className="window-content">
                    <div className="window-line large"></div>
                    <div className="window-line"></div>
                    <div className="window-line short"></div>

                    <div className="window-boxes">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                </div>

                {project.featured && (
                  <div className="featured-badge">
                    ⭐ Featured
                  </div>
                )}
              </div>

              {/* PROJECT CONTENT */}
              <div className="project-content">
                <span className="project-tag">
                  {project.category}
                </span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* TECHNOLOGIES */}
                <div className="tech-stack">
                  {project.tech.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="project-links">
                  {project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="coming-soon">
                      GitHub coming soon
                    </span>
                  )}

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GITHUB CTA */}
        <div className="projects-cta">
          <p>
            More projects are being built as I continue learning
            and improving my frontend development skills.
          </p>

          <a
            href="https://github.com/khokharyasir749"
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary"
          >
            Visit My GitHub
            <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Projects;