import { useState } from "react";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "SAAMI",
      subtitle: "Social Agentic AI Media Intern · Major Project",
      description:
        "An AI-driven platform built for social media trend analysis and automated content generation. It explores emerging trends, audience engagement, and high-performing content to help turn social media data into meaningful insights.",
      highlights: [
        "Keyword extraction and topic detection",
        "Social media trend and engagement analysis",
        "Identification of high-performing content",
        "Automated AI-powered content generation",
      ],
      technologies: ["Python", "NLP", "Machine Learning", "Data Analysis", "Web Development"],
      github: "#",
      demo: "#",
    },
    {
      number: "02",
      title: "Athera",
      subtitle: "Heart Disease Prediction · Mini Project",
      description:
        "An interactive machine learning web application that predicts the likelihood of heart disease from user-provided health parameters. The trained model is integrated into a simple interface to provide real-time predictions.",
      highlights: [
        "Health-data preprocessing",
        "Machine learning model training",
        "Real-time prediction workflow",
        "Interactive web interface",
      ],
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Streamlit"],
      github: "#",
      demo: "#",
    },
    {
      number: "03",
      title: "LegalEase",
      subtitle: "Bhasha Bandhu Hackathon",
      description:
        "A legal assistance platform designed to make legal information easier to access and understand. The application uses the Bhasha Bandhu API to translate legal documents into local languages, helping make complex legal information more accessible.",
      highlights: [
        "Local-language translation of legal documents",
        "Accessible legal rights and resources",
        "Personalized legal guidance",
        "Legal aid, consultations and downloadable forms",
      ],
      technologies: ["AI", "App Development", "UI/UX", "Bhasha Bandhu API"],
      github: "#",
      demo: "#",
    },
  ];

  const [activeProject, setActiveProject] = useState(0);

  const showPrevious = () => {
    setActiveProject((current) =>
      current === 0 ? projects.length - 1 : current - 1
    );
  };

  const showNext = () => {
    setActiveProject((current) =>
      current === projects.length - 1 ? 0 : current + 1
    );
  };

  const project = projects[activeProject];

  return (
    <section className="projects" id="projects">
      <div className="section-heading">
        <p className="section-label">WHAT I'VE BUILT</p>
        <h2>Featured Projects</h2>
        <p className="section-description">
          A selection of projects where I've explored technology,
          solved real-world problems, and turned ideas into working
          solutions.
        </p>
      </div>

      <div className="projects-carousel">
        <div className="projects-grid" aria-live="polite" aria-atomic="true">
          <article className="project-card" key={project.number}>
            <div className="project-image">
              <span>{project.number}</span>
              <div className="project-image-caption">
                <span>PROJECT</span>
                <strong>{project.title}</strong>
              </div>
            </div>

            <div className="project-content">
              <p className="project-subtitle">{project.subtitle}</p>
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-highlights">
                <h4>What I worked on</h4>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className="project-tech">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

            </div>
          </article>
        </div>

        <div className="project-carousel-controls">
          <button
            className="project-arrow"
            type="button"
            onClick={showPrevious}
            aria-label="Previous project"
          >
            &#8592;
          </button>

          <div className="project-pagination" aria-label="Choose a project">
            {projects.map((item, index) => (
              <button
                key={item.number}
                type="button"
                className={`project-dot ${index === activeProject ? "active" : ""}`}
                onClick={() => setActiveProject(index)}
                aria-label={`Show project ${index + 1}: ${item.title}`}
                aria-current={index === activeProject ? "true" : undefined}
              />
            ))}
          </div>

          <span className="project-count">
            {String(activeProject + 1).padStart(2, "0")}{" "}
            <span>/ {String(projects.length).padStart(2, "0")}</span>
          </span>

          <button
            className="project-arrow"
            type="button"
            onClick={showNext}
            aria-label="Next project"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
