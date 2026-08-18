function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="container hero-container">
        {/* LEFT CONTENT */}
        <div className="hero-content reveal">
          <div className="availability">
            <span></span>
            Available for learning & projects
          </div>

          <p className="hero-label">FRONTEND DEVELOPER</p>

          <h1>
            Building digital
            <span> experiences</span>
            with React.
          </h1>

          <p className="hero-description">
            I'm Yasir, a beginner frontend developer focused on React,
            JavaScript, responsive design, and building modern web
            applications.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View My Projects
              <span>↗</span>
            </a>

            <a
              href="https://github.com/khokharyasir749"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              GitHub
              <span>↗</span>
            </a>
          </div>

          <div className="hero-tech">
            <span>React</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>Git</span>
          </div>
        </div>

        {/* RIGHT PHOTO */}
        <div className="hero-visual reveal">
          <div className="hero-photo-glow"></div>

          <div className="profile-wrapper">
            <div className="profile-ring"></div>

            <div className="profile-image-container">
              <img
                src="/images/profile.jpg"
                alt="Yasir Shahzad"
                className="profile-image"
              />

              <div className="profile-overlay">
                <span>Frontend Developer</span>
              </div>
            </div>
          </div>

          {/* FLOATING CARDS */}
          <div className="floating-card floating-card-one">
            <span>⚛</span>
            React
          </div>

          <div className="floating-card floating-card-two">
            <span>&lt;/&gt;</span>
            Code
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;