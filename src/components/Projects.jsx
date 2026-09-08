import { useState, useEffect } from "react";

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
    screenshots: [
      "/projects/smartlearn-lms-1.png",
      "/projects/smartlearn-lms-2.png",
      "/projects/smartlearn-lms-3.png",
      "/projects/smartlearn-lms-4.png",
    ],
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
    screenshots: [
      "/projects/modern-calculator-1.png",
      "/projects/modern-calculator-2.png",
      "/projects/modern-calculator-3.png",
    ],
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
    screenshots: [
      "/projects/personal-portfolio-1.png",
    ],
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
    screenshots: [
      "/projects/weather-dashboard-1.png",
      "/projects/weather-dashboard-2.png",
      "/projects/weather-dashboard-3.png",
    ],
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
    screenshots: [
      "/projects/task-manager-1.png",
    ],
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
    screenshots: [
      "/projects/e-commerce-ui-1.png",
      "/projects/e-commerce-ui-2.png",
      "/projects/e-commerce-ui-3.png",
    ],
  },
  {
    id: 7,
    title: "Lonetex",
    category: "Web Application",
    description:
      "A modern web interface project focused on building a clean, responsive, and professional user experience.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    icon: "🌐",
    featured: false,
    github: "#",
    live: "#",
    screenshots: [
      "/projects/lonetex-1.png",
      "/projects/lonetex-2.png",
      "/projects/lonetex-3.png",
      "/projects/lonetex-4.png",
    ],
  },
  {
    id: 8,
    title: "Lonetex Inventory",
    category: "Inventory Management",
    description:
      "A professional inventory management interface designed for organizing products, inventory information, and business workflows.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    icon: "📦",
    featured: false,
    github: "#",
    live: "#",
    screenshots: [
      "/projects/lonetex-inventory-1.png",
      "/projects/lonetex-inventory-2.png",
      "/projects/lonetex-inventory-3.png",
    ],
  },
  {
    id: 9,
    title: "Sync-Space",
    category: "Web Application",
    description:
      "A modern web application interface focused on clean layouts, responsive design, and an organized user experience.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    icon: "💻",
    featured: false,
    github: "#",
    live: "#",
    screenshots: [
      "/projects/sync-space-1.png",
      "/projects/sync-space-2.png",
    ],
  },
  {
    id: 10,
    title: "Bite-Hub",
    category: "Food Web Application",
    description:
      "A modern food-focused web interface with a clean layout, responsive design, and user-friendly experience.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    icon: "🍽️",
    featured: false,
    github: "#",
    live: "#",
    screenshots: [
      "/projects/bite-hub-1.png",
      "/projects/bite-hub-2.png",
      "/projects/bite-hub-3.png",
    ],
  },
];

function Projects() {
  const [activeGallery, setActiveGallery] = useState(null);

  const openGallery = (project, index = 0) => {
    setActiveGallery({
      project,
      currentIndex: index,
    });
  };

  const closeGallery = () => {
    setActiveGallery(null);
  };

  const nextImage = () => {
    if (!activeGallery) return;
    const total = activeGallery.project.screenshots.length;
    setActiveGallery((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % total,
    }));
  };

  const prevImage = () => {
    if (!activeGallery) return;
    const total = activeGallery.project.screenshots.length;
    setActiveGallery((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + total) % total,
    }));
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!activeGallery) return;
      if (e.key === "Escape") {
        closeGallery();
      } else if (e.key === "ArrowRight") {
        nextImage();
      } else if (e.key === "ArrowLeft") {
        prevImage();
      }
    };

    if (activeGallery) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeGallery]);

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

                {project.screenshots && project.screenshots.length > 0 ? (
                  <div
                    className="project-window project-img-window"
                    onClick={() => openGallery(project, 0)}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        openGallery(project, 0);
                      }
                    }}
                    aria-label={`View screenshots for ${project.title}`}
                  >
                    <div className="window-top">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span className="window-title-tag">
                        {project.title}
                      </span>
                    </div>

                    <div className="window-preview-wrapper">
                      <img
                        src={project.screenshots[0]}
                        alt={`${project.title} Preview`}
                        className="project-preview-img"
                        loading="lazy"
                      />
                      <div className="project-img-overlay">
                        <span className="view-badge">
                          🔍 View Screenshots ({project.screenshots.length})
                        </span>
                      </div>
                    </div>
                  </div>
                ) : (
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
                )}

                {project.featured && (
                  <div className="featured-badge">⭐ Featured</div>
                )}

                {project.screenshots && project.screenshots.length > 0 && (
                  <div className="screenshots-count-pill">
                    📸 {project.screenshots.length} Screens
                  </div>
                )}
              </div>

              {/* PROJECT CONTENT */}
              <div className="project-content">
                <span className="project-tag">{project.category}</span>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                {/* TECHNOLOGIES */}
                <div className="tech-stack">
                  {project.tech.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                {/* LINKS */}
                <div className="project-links">
                  {project.github && project.github !== "#" ? (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                    >
                      GitHub ↗
                    </a>
                  ) : (
                    <span className="coming-soon">GitHub coming soon</span>
                  )}

                  {project.live && project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live Demo ↗
                    </a>
                  ) : (
                    <span className="coming-soon">Demo coming soon</span>
                  )}

                  {project.screenshots && project.screenshots.length > 0 && (
                    <button
                      type="button"
                      className="btn-view-gallery"
                      onClick={() => openGallery(project, 0)}
                    >
                      Screenshots ({project.screenshots.length}) ↗
                    </button>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* GITHUB CTA */}
        <div className="projects-cta">
          <p>
            More projects are being built as I continue learning and
            improving my frontend development skills.
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

      {/* SCREENSHOT LIGHTBOX MODAL */}
      {activeGallery && (
        <div
          className="gallery-modal-backdrop"
          onClick={closeGallery}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeGallery.project.title} Screenshots`}
        >
          <div
            className="gallery-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="gallery-modal-header">
              <div className="gallery-modal-title">
                <span className="gallery-category">
                  {activeGallery.project.category}
                </span>
                <h3>{activeGallery.project.title}</h3>
              </div>

              <div className="gallery-modal-actions">
                <span className="gallery-counter">
                  {activeGallery.currentIndex + 1} /{" "}
                  {activeGallery.project.screenshots.length}
                </span>
                <button
                  type="button"
                  className="gallery-close-btn"
                  onClick={closeGallery}
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>
            </div>

            <div className="gallery-modal-body">
              {activeGallery.project.screenshots.length > 1 && (
                <button
                  type="button"
                  className="gallery-nav-btn gallery-prev-btn"
                  onClick={prevImage}
                  aria-label="Previous screenshot"
                >
                  ‹
                </button>
              )}

              <div className="gallery-image-container">
                <img
                  src={
                    activeGallery.project.screenshots[
                      activeGallery.currentIndex
                    ]
                  }
                  alt={`${activeGallery.project.title} Screenshot ${
                    activeGallery.currentIndex + 1
                  }`}
                  className="gallery-main-img"
                />
              </div>

              {activeGallery.project.screenshots.length > 1 && (
                <button
                  type="button"
                  className="gallery-nav-btn gallery-next-btn"
                  onClick={nextImage}
                  aria-label="Next screenshot"
                >
                  ›
                </button>
              )}
            </div>

            {activeGallery.project.screenshots.length > 1 && (
              <div className="gallery-modal-footer">
                <div className="gallery-thumbs">
                  {activeGallery.project.screenshots.map((src, idx) => (
                    <button
                      type="button"
                      key={src}
                      className={`gallery-thumb-btn ${
                        idx === activeGallery.currentIndex ? "active" : ""
                      }`}
                      onClick={() => openGallery(activeGallery.project, idx)}
                      aria-label={`Thumbnail ${idx + 1}`}
                    >
                      <img
                        src={src}
                        alt={`Thumb ${idx + 1}`}
                        className="gallery-thumb-img"
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;