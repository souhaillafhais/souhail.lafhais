import "./certif.css";

const certifications = {
  "Soft Skills": [
    { name: "Communication efficace", issuer: "Udemy", pdf: "/certifs/communication.pdf" },
    { name: "Gestion du temps", issuer: "Coursera", pdf: "/certifs/gestion-temps.pdf" },
  ],
  "Développement": [
    { name: "React Developer", issuer: "OpenClassrooms", pdf: "/certifs/react.pdf" },
    { name: "Full Stack Web", issuer: "Udemy", pdf: "/certifs/fullstack.pdf" },
    { name: "React", issuer: "Coursera", pdf: "/pdf/React.pdf" },
  ],
  "Cybersécurité & Réseau": [
    { name: "Introduction à la cybersécurité", issuer: "Cisco Networking Academy", pdf: "/certifs/cyber.pdf" },
    { name: "Network Fundamentals", issuer: "Cisco", pdf: "/certifs/network.pdf" },
  ],
  "DevOps": [
    { name: "Docker Essentials", issuer: "IBM", pdf: "/certifs/docker.pdf" },
    { name: "CI/CD Pipelines", issuer: "Coursera", pdf: "/certifs/cicd.pdf" },
  ],
};

const Certif = () => {
  return (
    <section className="certif-section">
      <h1 className="title">Mes certifications</h1>
      <div className="certif-categories">
        {Object.entries(certifications).map(([cat, certifs]) => (
          <div className="certif-category" key={cat}>
            <h2 className="category-title">{cat}</h2>
            <ul className="certif-list">
              {certifs.map((cert, idx) => (
                <li className="certif-item" key={idx}>
                  <span className="certif-name">{cert.name}</span>
                  <span className="certif-issuer">{cert.issuer}</span>
                  {cert.pdf && (
                    <iframe
                      src={cert.pdf}
                      title={cert.name}
                      width="100%"
                      height="400px"
                      className="certif-direct-pdf"
                      style={{ border: 0, marginTop: 12 }}
                      allow="autoplay"
                    ></iframe>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Certif;
