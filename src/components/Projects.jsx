const projects = [
  {
    title: 'Machine Hysteresis Analyzer',
    image: '/images/Projects/hystersis.png',
    imageAlt: 'Machine Hysteresis Analyzer',
    delay: '100ms',
    description:
      'Ferromagnetic B-H Hysteresis & Core Loss Simulator simulating the behavior of ferromagnetic materials under magnetic fields. Web application using 3D plotting to visualize B-H loops for various materials.',
    tags: ['Python', 'Flask', 'TypeScript', 'React', 'NumPy', 'SciPy', 'Matplotlib'],
    link: 'https://github.com/Henok0728/hysteresis-loss-simulation',
  },
  ,
  {
    title: 'Face Recognition System',
    image: '/images/Projects/face-reco.png',
    imageAlt: 'Main page of face-recognition-attendance-system',
    delay: '150ms',
    description:
      'Web and embedded system application for face recognition and employee attendance management. Uses InsightFace for detection and marks attendance in real time with TFT display, ESP32, ESP32-CAM, and PIR sensor.',
    tags: [
      'Python',
      'Flask',
      'MongoDB',
      'InsightFace',
      'ArcFace',
      'C++',
      'ESP32',
      'ESP32 CAM',
    ],
    link: 'https://github.com/face-recognition-attendance-system1/class_attendance_system',
  },
  {
    title: 'Pharmaceutical Inventory Management System',
    image: '/images/Projects/inventory-management.png',
    imageAlt: 'Pharmaceutical Inventory Management system home page',
    delay: '200ms',
    description:
      'Hardware-integrated application for managing pharmaceutical product inventory, sales, purchases, warehouse operations, and employee payroll tracking.',
    tags: ['Java', 'Spring Boot', 'Maven', 'MySQL', 'C++', 'Arduino'],
    link: 'https://github.com/Henok0728/Pharmaceutal-inventory-management-system',
  },
  {
    title: 'Lodge Link',
    image: '/images/Projects/Lodge-link.jpg',
    imageAlt: 'Lodge-Link',
    delay: '250ms',
    imagePosition: 'center top',
    description:
      'A middleware booking and reservation platform connecting hotels and customers looking to discover and book hotel accommodations seamlessly.',
    tags: ['TypeScript', 'FastAPI', 'React', 'SQLAlchemy'],
    link: 'https://github.com/Henok0728/arada',
  },
  {
    title: 'Server Calculator',
    image: '/images/Projects/server.png',
    imageAlt: 'Server Calculator',
    delay: '300ms',
    description:
      'TCP socket and multithreading client-server system where a concurrent server processes and returns mathematical computations for connected clients.',
    tags: ['Java', 'TCP Sockets', 'Multithreading'],
    link: 'https://github.com/Henok0728/server-calculator',
  },
   {
    title: 'Viva-Booth',
    image: '/images/Projects/viva.png',
    imageAlt: 'Viva-Booth',
    delay: '350ms',
    description:
      'Research preparation platform for researchers and students to better preprare for the presentation or thesis defense',
    tags: ['Typescript','React', 'Next.js'],
    link: 'https://github.com/Henok0728/viva-booth',
  },
  {
    title: "Traffic light system",
    image: "/images/Projects/traffic.png",
    imageAlt: "Traffic light system",
    delay: "400ms",
    description: "Hardware and software prototype of a smart traffic light system that controls the flow of traffic based on the presence of vehicles.",
    tags: ["Arduino Uno", "C++"],
    link: "https://github.com/Henok0728/traffic-light",
  },
  {
    title: "4bit Signal Generator",
    image: "/images/Projects/signal.png",
    imageAlt: "4bit Signal Generator",
    delay: "450ms",
    description: "Hardware design of 4bit signal generator using Arduino nano that is capable of displaying and manipulating DC, triangular and square wave signal.",
    tags: ["Arduino Nano", "C++"],
    link: "https://github.com/Henok0728/4-bit-signal-generator",
  },
  {
    title: "Digital Arthimetic Logic Unit",
    image: "/images/Projects/verilog.png",
    imageAlt: "ALU",
    delay: "500ms",
    description: "General purpose ALU which is capable of performing various signed  arithmetic and logic operations.",
    tags: ["verilog"],
    link: "https://github.com/Henok0728/verilog-design/tree/e4f9f1736575d9a4bb46c90fe0dbc5495e868ccd/signed_alu_circuit",
  },
  {
    title: "Team 5k Bot High Stakes (2024-2025)",
    image: "/images/Projects/5k-bot.jpg",
    imageAlt: "Team 5k Bot High Stakes",
    delay: "550ms",
    imagePosition: 'center 20%',
    description: "A robot specifically designed for grappling and scoring of ring objects both autonomous and driver controlled, which led us to a first place in Robocup Ethiopia 2025",
    tags: ["python", "ROS"],
    link: "https://github.com/Henok0728/5K-bot",
  },
  {
    title: "Team Abyssinia Bot Push Back (2025-2026)",
    image: "/images/Projects/abyssinia.jpg",
    imageAlt: "Team Abyssinia Bot Push Back",
    delay: "600ms",
    imagePosition: 'center 30%',
    description: "A robot specifically designed for grappling and scoring of small hexagonal ball objects both autonomous and driver controlled.",
    tags: ["python", "C++", "ROS"],
    link: "",
  },
  
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="section-header hidden">
        <h2>Projects</h2>
        <div className="header-line"></div>
      </div>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div
            className="project-card hidden"
            key={index}
            style={{ transitionDelay: project.delay }}
          >
            <div className="card-image-wrapper">
              <img
                src={project.image}
                alt={project.imageAlt}
                className="card-image"
                loading="lazy"
                style={project.imagePosition ? { objectPosition: project.imagePosition } : undefined}
              />
            </div>
            <div className="card-content">
              <div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
              <div className="card-footer-info">
                <div className="tags">
                  {project.tags.map((tag, tagIndex) => (
                    <span className="tag" key={tagIndex}>
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-link"
                >
                  View Project <span>&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
