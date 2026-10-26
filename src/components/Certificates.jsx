const certificates = [
  {
    title: 'ALX Professional Foundations Certificate',
    issuer: 'ALX Ethiopia',
    year: '2025',
    link: 'https://drive.google.com/file/d/1D9ObI8rRreZUktqyIO9w06MQPlmKMkkY/view',
    delay: '0ms',
  },
  {
    title: 'Africa Robotics Championship',
    issuer: 'Ethiorobo Robotics and MInT',
    year: '2025',
    link: 'https://drive.google.com/file/d/1TwbGeh6uPNGc-FnSpMhZATied_zUvaRD/view',
    delay: '100ms',
  },
  {
    title: 'Competitive Programming Certificate',
    issuer: 'ALX Ethiopia and Codeleague',
    year: '2025',
    link: 'https://drive.google.com/file/d/1_58LmE2P1Y9zqKpFTBrq8m_-XNLxudZ-/view',
    delay: '150ms',
  },
  {
    title: 'VEX Robotics Challenger',
    issuer: 'Addis Ababa University & AAU AI and Robotics',
    year: '2026',
    link: 'https://drive.google.com/file/d/1HAII_i6rL3mZgTx-_hRROcZXBDAPcpe4/view?usp=sharing',
    delay: '200ms',
  },
  {
    title: 'Biomedical Design Competition',
    issuer: 'Addis Ababa University & School Of Biomedical Engineering',
    year: '2026',
    link: 'https://drive.google.com/file/d/1S-_HajNprNnaTJKbJUL5Im4wDfTovPA4/view?usp=sharing',
    delay: '250ms',
  },
  {
    title: 'Stark hackathon Certificate', 
    issuer: 'Stark Hackathon',
    year: '2026',
    link: 'https://drive.google.com/file/d/1_pF5EYjStgv2kicgw1NQeSJDJgrgNVND/view?usp=sharing',
    delay:'300ms'
  }
];

export default function Certificates() {
  return (
    <section id="certificates" className="certificates hidden">
      <div className="section-header">
        <h2>Certificates</h2>
        <div className="header-line"></div>
      </div>

      <div className="certificates-grid">
        {certificates.map((cert, index) => (
          <div
            className="certificate-card hidden"
            key={index}
            style={{ transitionDelay: cert.delay }}
          >
            <div className="certificate-content">
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <div className="tags">
                  <span className="tag">Issued: {cert.year}</span>
                </div>
              </div>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="view-project-link"
              >
                View Credential <span>&rarr;</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
