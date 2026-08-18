function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-heading">
          <p>ABOUT ME</p>
          <h2>Building my skills one project at a time.</h2>
        </div>

        <div className="about-grid">
          <div className="about-text">
            <p>
              I'm Yasir, a beginner frontend developer who enjoys turning
              ideas into interactive web interfaces.
            </p>

            <p>
              My current focus is React development, responsive design,
              JavaScript, and building projects that are useful and easy to
              use.
            </p>

            <p>
              I'm continuously improving through practical projects and
              learning modern frontend development workflows.
            </p>
          </div>

          <div className="about-card">
            <div className="about-card-icon">{"</>"}</div>

            <h3>Frontend Development</h3>

            <p>
              React, JavaScript, HTML, CSS, responsive layouts, and modern UI
              development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;