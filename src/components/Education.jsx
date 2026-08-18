function Education() {
  return (
    <section className="section section-alt" id="education">
      <div className="container">
        <div className="section-heading">
          <p>EDUCATION</p>
          <h2>My learning journey.</h2>
        </div>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>Current Learning</span>
              <h3>Frontend Development</h3>
              <p>
                Learning React, JavaScript, responsive web development,
                Git, GitHub, and modern frontend practices through practical
                projects.
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <span>Practice</span>
              <h3>Project-Based Learning</h3>
              <p>
                Building applications to strengthen programming logic,
                interface development, and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;