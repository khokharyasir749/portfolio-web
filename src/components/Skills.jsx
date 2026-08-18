const skills = [
  { name: "HTML", level: "90%" },
  { name: "CSS", level: "85%" },
  { name: "JavaScript", level: "75%" },
  { name: "React", level: "75%" },
  { name: "Git & GitHub", level: "70%" },
  { name: "Responsive Design", level: "85%" },
];

function Skills() {
  return (
    <section className="section section-alt" id="skills">
      <div className="container">
        <div className="section-heading">
          <p>MY SKILLS</p>
          <h2>Technologies I work with.</h2>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-header">
                <h3>{skill.name}</h3>
                <span>{skill.level}</span>
              </div>

              <div className="skill-bar">
                <div
                  className="skill-progress"
                  style={{ width: skill.level }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;