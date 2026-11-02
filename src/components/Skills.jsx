function Skills() {
  const skillGroups = [
    {
      title: "Programming",
      skills: ["Python", "Java", "C++", "C", "SQL"],
    },
    {
      title: "AI & Machine Learning",
      skills: [
        "Machine Learning",
        "Artificial Intelligence",
        "NLP",
        "Scikit-learn",
      ],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript", "Streamlit"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "AI Tools"],
    },
  ];

  return (
    <section className="skills" id="skills">
      <div className="section-heading">
        <p className="section-label">WHAT I WORK WITH</p>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div className="skill-group" key={group.title}>
            <h3>{group.title}</h3>

            <div className="skill-list">
              {group.skills.map((skill) => (
                <span className="skill-pill" key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;