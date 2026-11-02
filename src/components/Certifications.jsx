function Certifications() {
  const certifications = [
    {
      title: "Developing Soft Skills and Personality",
      organization: "NPTEL",
      year: "2025",
      file: "/certificates/nptel cert.pdf",
    },
    {
      title: "Data Science Internship",
      organization: "Myntrn",
      year: "2024",
      file: "/certificates/ds cert.pdf",
    },
    {
      title: "Machine Learning Internship",
      organization: "Prinston Smart Engineers",
      year: "2025",
      file: "/certificates/ml cert.pdf",
    },
    {
      title: "Generative AI Certification",
      organization: "Certification",
      year: "2026",
      file: "/certificates/gen ai cert.pdf",
    },
    {
      title: "Mern Stack Development",
      organization: "Certification",
      year: "2026",
      file: "/certificates/msd cert.pdf",
    },
  ];

  return (
    <section className="certifications" id="certifications">
      <div className="section-heading">
        <p className="section-label">LEARNING & DEVELOPMENT</p>
        <h2>Certifications</h2>
        <p className="section-description">
          Certifications and learning experiences that have helped me build
          skills across technology, AI, data science, and professional development.
        </p>
      </div>

      <div className="certifications-grid">
        {certifications.map((certificate) => (
          <div className="certificate-card" key={certificate.title}>
            <div className="certificate-icon">✦</div>

            <div className="certificate-info">
              <h3>{certificate.title}</h3>

              <p>
                {certificate.organization} · {certificate.year}
              </p>
            </div>

            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              View Certificate ↗
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;