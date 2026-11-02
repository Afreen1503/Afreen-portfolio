function About() {
  const strengths = [
    {
      number: "01",
      title: "Communication",
      description:
        "Confident in presenting ideas, explaining concepts, and connecting with people.",
    },
    {
      number: "02",
      title: "Leadership",
      description:
        "Taking initiative, coordinating teams, and contributing to technical communities.",
    },
    {
      number: "03",
      title: "Creativity",
      description:
        "Combining technology with design, presentation, and creative problem-solving.",
    },
    {
      number: "04",
      title: "Collaboration",
      description:
        "Enjoying teamwork, hackathons, events, and turning ideas into practical outcomes.",
    },
  ];

  return (
    <section className="about" id="about">
      <div className="about-content">
        <p className="section-label">GET TO KNOW ME</p>

        <h2>About Me</h2>

        <p>
          I'm a Computer Science student with a strong interest in software
          development, Artificial Intelligence, Machine Learning, and
          emerging web technologies. I enjoy building projects that combine
          technology with practical problem-solving and meaningful user
          experiences.
        </p>

        <p>
          Beyond coding, I'm actively involved in IEEE activities, technical
          events, hackathons, and volunteering. As a Webmaster for IEEE WIE,
          I've had opportunities to work on event coordination, technical
          initiatives, design, and communication.
        </p>

        <p>
          I enjoy being involved from idea to execution — whether that's
          developing a project, designing an event, presenting an idea, or
          working with a team to bring something together.
        </p>
      </div>

      <div className="beyond-code">
        <div className="beyond-heading">
          <p className="section-label">MORE THAN JUST CODE</p>
          <h3>What I Bring</h3>
        </div>

        <div className="about-cards">
          {strengths.map((strength) => (
            <div className="about-card" key={strength.number}>
              <span className="about-number">{strength.number}</span>

              <div className="about-card-content">
                <h4>{strength.title}</h4>
                <p>{strength.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;