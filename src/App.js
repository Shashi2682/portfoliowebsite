
import { useState } from 'react';
import './App.css';
import profileImage from './assets/shashikant-profile.png';

const stats = [
  { value: '1 yr', label: 'Software apprenticeship' },
  { value: '5', label: 'Featured projects' },
  { value: '2', label: 'Backend ecosystems' },
  { value: '7.8', label: 'B.Tech CGPA' },
];

const skillGroups = [
  {
    title: 'Backend Engineering',
    items: ['Java 21', 'Spring Boot', '.NET 8 Web API', 'ASP.NET Core', 'RESTful Services', 'OOP', 'Clean Architecture'],
  },
  {
    title: 'Frontend & UX',
    items: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Responsive Design', 'Component Architecture'],
  },
  {
    title: 'Databases & Cloud',
    items: ['PostgreSQL 14', 'MySQL', 'AWS S3', 'IAM', 'Lambda', 'Docker', 'Kubernetes'],
  },
  {
    title: 'DevOps & Delivery',
    items: ['Terraform (IaC)', 'CI/CD Pipelines', 'Git', 'GitHub', 'Azure Boards', 'VS Code', 'Visual Studio', 'Postman', 'Swagger/OpenAPI', 'GitHub Copilot', 'Claude Code'],
  },
  {
    title: 'Ways of Working',
    items: ['Agile', 'Cross-functional Collaboration', 'Technical Documentation', 'Problem-Solving'],
  },
];

const experience = [
  {
    role: 'Software Technical Apprentice',
    company: 'S&P Global Technology Resources',
    location: 'Hyderabad, India',
    period: 'June 2025 — June 2026',
    project: 'Global Trade Application',
    tags: ['.NET 8 Web API Core', 'PostgreSQL 14', 'AWS', 'Terraform'],
    points: [
      'Engineered .NET 8 Web API endpoints for CRUD operations with robust validation, error handling, PostgreSQL 14 database consistency checks, and unit testing.',
      'Built secure AWS S3 upload/download APIs using time-limited pre-signed URLs, state-machine metadata APIs, S3 client libraries, and PostgreSQL persistence, reducing response time from 5 minutes to 8–40 seconds.',
      'Developed scheduled AWS Lambda functions to invoke specific API endpoints and automate backend workflows; provisioned Lambda and related AWS infrastructure using Terraform.',
      'Configured dual database connection strings with appropriate read/write permissions for simultaneous multi-database connectivity.',
      'Worked on microservices-oriented API design by decoupling domain logic into independently deployable service modules with well-defined contracts.',
      'Architected OAuth2 authorization with IdP integration, RBAC, and token/refresh flows; followed SOLID, Clean Architecture, secure coding practices, and structured code reviews.',
      'Collaborated with Product, QA, and DevOps teams in Agile using Azure Boards; developed Azure DevOps CI/CD pipelines and provisioned secure AWS S3 resources with Terraform.',
    ],
  },
];

const projects = [
  {
    title: 'Dharvexa Global Trade',
    type: 'Freelance Frontend Developer',
    description:
      'Developed a production-ready, responsive e-commerce experience for an agricultural export business with reusable sections, category pages, and WhatsApp-driven enquiry workflows.',
    highlights: [
      'Built reusable React pages, sections, data models, and UI components with dynamic product routing through React Router.',
      'Implemented reusable enquiry modals that generate product-specific WhatsApp enquiries for direct business communication.',
      'Integrated Google Sheets webhooks with validation, loading states, success/error handling, and Vite environment configuration.',
      'Delivered responsive desktop, tablet, and mobile UI with CSS Grid, Flexbox, animations, transitions, backdrop filters, and reduced-motion support.',
    ],
    stack: ['React', 'Google Sheets Webhook', 'WhatsApp Integration', 'Claude Code'],
    link: 'https://dharvexa.com',
    linkLabel: 'Visit Website',
    source: 'Website',
  },
  {
    title: 'Exam & Question Paper Management System',
    type: 'Spring Boot REST API',
    description:
      'Created a full backend system for managing question papers and test questions with layered architecture, persistence, and secure user workflows.',
    highlights: [
      'Modeled one-to-many JPA relationships with cascade persistence and orphan removal.',
      'Implemented custom exception handling using @RestControllerAdvice and DTO-based response shaping.',
      'Designed clean controller-service-repository architecture for scalable APIs.',
    ],
    stack: ['Java 21', 'Spring Boot', 'PostgreSQL', 'JPA'],
    link: 'https://github.com/Shashi2682',
    linkLabel: 'View GitHub',
    source: 'GitHub',
  },
  {
    title: 'AI Habit Tracker',
    type: 'AI-Powered Habit Tracking Platform',
    description:
      'Built a full-stack habit tracking platform with dashboards, streaks, AI suggestions, and a polished React interface backed by Spring Boot APIs.',
    highlights: [
      'Implemented JWT auth, BCrypt hashing, protected routes, and centralized exception handling.',
      'Shipped dashboards and progress tracking with PostgreSQL-based data modeling for streaks and stats.',
      'Added productivity insights with AI-based recommendations and conversational analysis flows.',
    ],
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'JWT'],
    link: 'https://github.com/Shashi2682',
    linkLabel: 'View GitHub',
    source: 'GitHub',
  },
  {
    title: 'AI Resume Analyzer',
    type: 'AI-Powered Resume Evaluation System',
    description:
      'Architected a full-stack application for resume judgment, ATS scoring, and actionable improvement feedback powered by AI-driven processing.',
    highlights: [
      'Built backend CRUD APIs for resume metadata, file handling, and AI-generated insights.',
      'Created structured frontend upload flows for document processing and result review.',
      'Developed a scalable modular architecture with environment-based configuration and service separation.',
    ],
    stack: ['React', 'Spring Boot', 'PostgreSQL', 'AI Workflow'],
    link: 'https://github.com/Shashi2682',
    linkLabel: 'View GitHub',
    source: 'GitHub',
  },
  {
    title: 'Mechichs',
    type: 'Vehicle Service & Rental Platform',
    description:
      'Developed a responsive platform connecting customers with local mechanics, garages, vehicle repair services, and rental options.',
    highlights: [
      'Built interactive sections for repair services, garage listings, vehicle rentals, pricing, and service information.',
      'Implemented online appointment and vehicle-rental booking workflows through integrated forms.',
      'Designed mobile-friendly navigation, card layouts, vehicle galleries, and optimized desktop/mobile sections.',
    ],
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Web Design'],
    link: 'https://github.com/Shashi2682',
    linkLabel: 'View GitHub',
    source: 'GitHub',
  },
];

const education = [
  {
    title: 'Bachelor of Technology in Computer Science and Engineering',
    meta: 'Lovely Professional University, Punjab, India',
    period: 'Aug 2021 — Aug 2025',
    result: 'CGPA: 7.8',
  },
  {
    title: 'Intermediate (Class XII)',
    meta: 'Rashtriya Ucha Madhyamik Vidyalaya, Aurangabad, Maharashtra',
    period: 'Apr 2020 — Mar 2021',
    result: '84.50%',
  },
  {
    title: 'Matriculation (Class X)',
    meta: 'Gautam Public School, Kopargaon, Maharashtra',
    period: 'Apr 2018 — Mar 2019',
    result: '84.20%',
  },
];

function App() {
  const [sceneTilt, setSceneTilt] = useState({ x: 0, y: 0 });

  const handleSceneMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    setSceneTilt({ x: y * -12, y: x * 14 });
  };

  const resetScene = () => setSceneTilt({ x: 0, y: 0 });

  return (
    <div className="page-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <aside className="quick-contact" aria-label="Quick contact">
        <a
          className="quick-contact-button quick-contact-whatsapp"
          href="https://wa.me/919356716443?text=Hi%20Shashikant%2C%20I%20found%20your%20portfolio."
          target="_blank"
          rel="noreferrer"
          aria-label="Message Shashikant on WhatsApp"
          title="Message on WhatsApp"
        >
          <span className="contact-bubble">Message me</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M20.5 3.5A11.8 11.8 0 0 0 12.08 0C5.55 0 .24 5.3.24 11.84c0 2.08.54 4.1 1.57 5.88L.14 24l6.43-1.64a11.8 11.8 0 0 0 5.51 1.4h.01c6.53 0 11.84-5.31 11.84-11.84 0-3.17-1.23-6.15-3.43-8.42ZM12.09 21.7h-.01a9.82 9.82 0 0 1-5.01-1.37l-.36-.22-3.82.98 1.02-3.72-.23-.38a9.83 9.83 0 0 1-1.51-5.15C2.17 6.4 6.62 1.97 12.09 1.97c2.65 0 5.14 1.03 7.01 2.91a9.84 9.84 0 0 1 2.9 7.02c0 5.46-4.44 9.8-9.91 9.8Zm5.4-7.36c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.44-1.5-.9-.8-1.51-1.78-1.69-2.08-.18-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.72.23 1.38.2 1.9.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </a>
        <a
          className="quick-contact-button quick-contact-email"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=nshashikant919@gmail.com&su=Portfolio%20enquiry"
          target="_blank"
          rel="noreferrer"
          aria-label="Email Shashikant"
          title="Open Gmail"
        >
          <span className="contact-bubble">Email me</span>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path fill="#EA4335" d="M3 5.2A2.2 2.2 0 0 1 5.2 3h13.6A2.2 2.2 0 0 1 21 5.2v1.2l-9 6.8-9-6.8V5.2Z" />
            <path fill="#4285F4" d="M3 6.4v12.4A2.2 2.2 0 0 0 5.2 21H8V10.2L3 6.4Z" />
            <path fill="#34A853" d="M21 6.4v12.4a2.2 2.2 0 0 1-2.2 2.2H16V10.2l5-3.8Z" />
            <path fill="#FBBC04" d="m8 10.2 4 3 4-3V21H8V10.2Z" />
          </svg>
        </a>
      </aside>

      <header className="topbar">
        <nav className="navbar" aria-label="Main navigation">
          <a className="brand" href="#home" aria-label="Shashikant home">
            <span className="brand-mark">SK</span>
            <span>Shashikant</span>
          </a>

          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
          </div>

          <a className="nav-cta" href="mailto:nshashikant919@gmail.com">Contact Me</a>
        </nav>
      </header>

      <main className="main-shell" id="home">
        <section className="hero section">
          <div>
            <span className="eyebrow">Open to backend & full-stack roles</span>
            <h1>
              Shashikant Kiran <span className="gradient-text">Nalawade</span>
            </h1>
            <p className="hero-subtitle">
              Backend Developer | Java | .NET | React | AWS | PostgreSQL
            </p>
            <p className="hero-summary">
              Results-driven backend developer focused on secure, cloud-native enterprise applications and full-stack delivery.
              I build scalable REST APIs, automate infrastructure, and translate product requirements into resilient systems that perform in production.
            </p>

            <div className="cta-row">
              <a
                className="primary-btn"
                href="https://drive.google.com/uc?export=download&id=1DatoObiosmWHhpvrk2T9ggy78J3a69A2"
                target="_blank"
                rel="noreferrer"
              >
                Download Resume
              </a>
              <a
                className="secondary-btn"
                href="https://drive.google.com/file/d/1DatoObiosmWHhpvrk2T9ggy78J3a69A2/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View Resume
              </a>
              <a className="secondary-btn" href="#projects">
                View Projects
              </a>
            </div>

            <div className="profile-meta">
              <span className="pill">nshashikant919@gmail.com</span>
              <span className="pill">+91-9356716443</span>
              <span className="pill">Hyderabad, India</span>
            </div>
          </div>

          <div
            className="hero-visual"
            aria-label="Interactive 3D profile card"
            onMouseMove={handleSceneMove}
            onMouseLeave={resetScene}
            style={{ '--scene-x': `${sceneTilt.x}deg`, '--scene-y': `${sceneTilt.y}deg` }}
          >
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="identity-card">
              <div className="card-glare" />
              <div className="card-topline">
                <span className="status-dot" />
                <span>PORTFOLIO / 2026</span>
                <span className="card-index">SN-001</span>
              </div>
              <div className="identity-main">
                <div className="avatar-wrap">
                  <div className="avatar">
                    <img src={profileImage} alt="Shashikant Kiran Nalawade" />
                  </div>
                  <span className="portrait-ring" />
                </div>

                <div className="identity-copy">
                  <span className="identity-kicker">BACKEND DEVELOPER</span>
                  <h2>Shashikant<br /><strong>Nalawade</strong></h2>
                  <p>Java · .NET · React · AWS</p>
                  <span className="available"><i /> Available for opportunities</span>
                </div>
              </div>

              <div className="identity-divider" />
              <div className="identity-details">
                <div>
                  <span>FOCUS</span>
                  <strong>Cloud-native APIs</strong>
                </div>
                <div>
                  <span>BASED IN</span>
                  <strong>Hyderabad, IN</strong>
                </div>
                <div>
                  <span>STACK</span>
                  <strong>Spring / .NET</strong>
                </div>
              </div>
              <div className="card-footer">
                <span>SECURE SYSTEMS · CLEAN CODE</span>
                <span>↗</span>
              </div>
            </div>
            <div className="scene-shadow" />
          </div>
        </section>

        <section className="stat-grid" aria-label="Key profile stats">
          {stats.map((stat) => (
            <div className="stat-card" key={stat.label}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </section>

        <section className="section section-surface" id="about">
          <div className="section-heading" data-index="01">
            <h2>About Me</h2>
            <span>Profile</span>
          </div>

          <div className="about-grid">
            <div className="panel">
              <p>
                I am a backend-focused engineer with hands-on experience delivering scalable enterprise APIs and cloud-enabled systems.
                My work combines .NET and Java ecosystems with secure architecture, automation, and performance optimization for production workloads.
              </p>
              <p>
                I enjoy working across the stack, from database design and service contracts to frontend polish and deployment automation.
                The focus is always on reliability, maintainability, and business value.
              </p>
            </div>

            <div className="panel">
              <div className="feature-list">
                <div className="feature-item">
                  <div className="feature-badge">01</div>
                  <div>
                    <strong>Secure API Design</strong>
                    <span>OAuth2, RBAC, validation, and clean error handling.</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-badge">02</div>
                  <div>
                    <strong>Cloud-Native Delivery</strong>
                    <span>AWS, Terraform, Lambda, and CI/CD automation.</span>
                  </div>
                </div>
                <div className="feature-item">
                  <div className="feature-badge">03</div>
                  <div>
                    <strong>Product Mindset</strong>
                    <span>Full-stack thinking with a strong focus on user outcomes.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section section-surface" id="experience">
          <div className="section-heading" data-index="02">
            <h2>Experience</h2>
            <span>Career</span>
          </div>

          <div className="experience-grid">
            {experience.map((item) => (
              <article className="timeline-item" key={item.role}>
                <span className="timeline-marker">01</span>
                <div className="timeline-head">
                  <div>
                    <div className="timeline-role">{item.role}</div>
                    <div className="timeline-meta">
                      {item.company} | {item.location}
                    </div>
                    <div className="timeline-meta">Project: {item.project}</div>
                  </div>
                  <span className="timeline-badge">{item.period}</span>
                </div>

                <div className="skill-tags" style={{ marginTop: '1rem' }}>
                  {item.tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>

                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-surface" id="skills">
          <div className="section-heading" data-index="03">
            <h2>Skills</h2>
            <span>Tooling</span>
          </div>

          <div className="skill-grid">
            {skillGroups.map((group) => (
              <div className="skill-card" key={group.title}>
                <h3>{group.title}</h3>
                <div className="skill-tags">
                  {group.items.map((item) => (
                    <span className="tag" key={item}>{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading" data-index="04">
            <h2>Projects</h2>
            <span>Selected work</span>
          </div>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.title}>
                <span className="project-number">0{index + 1}</span>
                <div className="project-header">
                  <div>
                    <h3>{project.title}</h3>
                    <h4>{project.type}</h4>
                  </div>
                  <span className="timeline-badge">{project.source}</span>
                </div>

                <p>{project.description}</p>

                <ul className="project-list">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>

                <div className="project-tags">
                  {project.stack.map((tech) => (
                    <span className="tag" key={tech}>{tech}</span>
                  ))}
                </div>

                <div style={{ marginTop: '1rem' }}>
                  <a href={project.link} target="_blank" rel="noreferrer">
                    {project.linkLabel} →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section section-surface" id="education">
          <div className="section-heading" data-index="05">
            <h2>Education</h2>
            <span>Academic background</span>
          </div>

          <div className="education-grid">
            {education.map((item) => (
              <article className="education-card" key={item.title}>
                <div className="education-head">
                  <div>
                    <div className="education-title">{item.title}</div>
                    <div className="education-meta">{item.meta}</div>
                  </div>
                  <span className="timeline-badge">{item.period}</span>
                </div>
                <ul>
                  <li>{item.result}</li>
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="contact">
          <div className="contact-panel">
            <div>
              <h2>Let’s build something impactful.</h2>
              <p>Open to backend, full-stack, and cloud engineering opportunities.</p>
            </div>

            <div className="contact-actions">
              <a className="primary-btn" href="mailto:nshashikant919@gmail.com">Email Me</a>
              <a className="secondary-btn" href="https://github.com/Shashi2682" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </section>

        <div className="footer-note">© 2026 Shashikant Kiran Nalawade. Crafted for high-impact software engineering roles.</div>
      </main>
    </div>
  );
}

export default App;
