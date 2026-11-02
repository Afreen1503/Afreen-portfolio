function Hero() {
  const scrollToProjects = (e) => {
    e.preventDefault();

    const projectsSection = document.getElementById("projects");

    if (projectsSection) {
      projectsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero" id="home">
      <p className="hero-intro">Hi, I'm</p>

      <h1>Afreen Fathima</h1>

      <h2>Aspiring Software Developer</h2>

      <p className="hero-tagline">
        Building technology with creativity, communication, and purpose.
      </p>

      <p className="hero-description">
        I enjoy creating software solutions, exploring AI and web technologies,
        and turning ideas into meaningful digital experiences.
      </p>

      <div className="hero-buttons">
        <a
          href="#projects"
          className="btn btn-primary"
          onClick={scrollToProjects}
        >
          View My Work →
        </a>

        <a
          href="/Afreen_Fathima_Resume.pdf"
          className="btn btn-secondary"
          target="_blank"
          rel="noreferrer"
          download="Afreen_Fathima_Resume.pdf"
        >
          Download Resume ↓
        </a>
      </div>

      <div className="hero-socials">
        <a
          href="https://github.com/Afreen1503"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/afreen-fathima-aa7b9b304"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>

        <a href="mailto:afreen.fathima0315@gmail.com">
          Email
        </a>
      </div>
    </section>
  );
}

export default Hero;