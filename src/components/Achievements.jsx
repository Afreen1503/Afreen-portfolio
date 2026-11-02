function Achievements() {
  const activities = [
    {
      number: "01",
      category: "LEADERSHIP · IEEE WIE",
      title: "Webmaster & Event Contributor",
      description:
        "Contributed to technical, creative, and event initiatives as Webmaster of the IEEE WIE Society, supporting digital presence, event promotions, and community activities.",
    },
    {
      number: "02",
      category: "EVENT HOSTING · CAS IEEE",
      title: "Quantum Ignite",
      description:
        "Hosted and volunteered at Quantum Ignite, a CAS IEEE event, contributing to event coordination, participant engagement, and the overall event experience.",
    },
    {
      number: "03",
      category: "VOLUNTEERING · EPOCH 2026",
      title: "College Hackathon Volunteer",
      description:
        "Volunteered at Epoch 2026, supporting hackathon activities, coordination, and smooth execution of the event alongside the organizing team.",
    },
    {
      number: "04",
      category: "HACKATHONS · PARTICIPATION",
      title: "Hackathons & Technical Events",
      description:
        "Participated in hackathons and technical events including the Bhasha Bandhu Hackathon and Advaya 2.0, collaborating with teams to explore ideas and build solutions.",
    },
    {
      number: "05",
      category: "CREATIVE · EVENT DESIGN",
      title: "Event Posters & Digital Creatives",
      description:
        "Designed promotional posters and digital creatives for multiple IEEE and college events, combining visual design with clear communication and event branding.",
    },
    {
      number: "06",
      category: "ACADEMIC",
      title: "7th Rank in PUC",
      description:
        "Secured 94.16% in PCMC and achieved 7th rank in the Pre-University examination.",
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <div className="section-heading">
        <p className="section-label">BEYOND THE CLASSROOM</p>
        <h2>Leadership & Activities</h2>
        <p className="section-description">
          Experiences that reflect my involvement in leadership, events,
          creative work, technical communities, and collaborative
          environments.
        </p>
      </div>

      <div className="achievements-list">
        {activities.map((activity) => (
          <article className="achievement-item" key={activity.number}>
            <div className="achievement-number">{activity.number}</div>

            <div className="achievement-content">
              <span>{activity.category}</span>
              <h3>{activity.title}</h3>
              <p>{activity.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Achievements;
