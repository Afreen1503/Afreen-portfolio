function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">AFREEN</div>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#achievements">Achievements</a>
        <a href="#certifications">Certifications</a>
        <a href="#contact">Contact</a>
      </div>

      <a
        href="/Afreen_Fathima_Resume.pdf"
        className="nav-resume"
        target="_blank"
        rel="noreferrer"
        download="Afreen_Fathima_Resume.pdf"
      >
        Resume
      </a>
    </nav>
  );
}

export default Navbar;