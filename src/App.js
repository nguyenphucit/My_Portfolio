import { useState } from "react";
import { motion, MotionConfig } from "framer-motion";
import "./App.scss";
import { Parallax } from "./component/parallax";
import { ContactSection } from "./component/ContactSection";
const experience = [
  {
    company: "Mitek",
    role: "Fresher Backend Developer",
    date: "Jun — Jul 2025",
    tag: "DOCUMENT INTELLIGENCE",
    details: [
      "Built an internal document ingestion and retrieval prototype with LlamaIndex and Qdrant.",
      "Integrated local models through Ollama and explored embeddings, prompt design, and RAG under mentor guidance.",
    ],
    stack: ["Python", "LlamaIndex", "Qdrant", "Ollama"],
  },
  {
    company: "ATOM Solutions",
    role: "Backend Developer",
    date: "Feb — May 2025",
    tag: "APIs & ASYNC SYSTEMS",
    details: [
      "Built and maintained Starlette and SQLAlchemy APIs integrating third-party banking services and internal tools.",
      "Worked on Kafka message processing and Celery background tasks. Investigated and fixed Odoo module issues in banking staging environments.",
      "Collaborated with mentors on payment processing workflows.",
    ],
    stack: ["Starlette", "SQLAlchemy", "Kafka", "Celery", "Odoo"],
  },
  {
    company: "Concentrix Viet Nam",
    role: "Backend Intern",
    date: "Sep — Nov 2024",
    tag: "OCR & KYC",
    details: [
      "Collaborated with an AI team on Vietnamese ID card recognition using YOLO field detection and VietOCR text extraction.",
      "Developed and deployed Flask services for real-time OCR inference and structured data extraction.",
      "Contributed to model fine-tuning with more than 1,200 annotated samples and supported evaluation and dataset pipelines.",
    ],
    stack: ["Flask", "YOLO", "VietOCR", "Python"],
  },
];
const projects = [
  {
    title: "Mail Management Service",
    subtitle: "An inbox with a little more intelligence.",
    date: "Feb 2026 — Present",
    status: "In progress · Personal learning project",
    description:
      "Building a FastAPI backend for email synchronization and processing with Aurinko, Google, and Outlook OAuth integrations. Implemented LLM-based summaries and reply composition, while experimenting with AWS storage and background processing.",
    stack: ["FastAPI", "OAuth", "LLMs", "AWS RDS / S3 / SQS / Lambda"],
  },
  {
    title: "Social Media Network",
    subtitle: "Conversations, connections, and real-time interaction.",
    date: "May — Jul 2024",
    description:
      "Built a social platform with messaging, video calls, notifications, and media sharing. Implemented authentication and real-time chat with NestJS, PostgreSQL, and WebSocket, alongside a React frontend with Redux Toolkit and Tailwind CSS.",
    stack: ["NestJS", "PostgreSQL", "React", "WebSocket"],
    video: "/FacebookDemo.mp4",
    poster: "/facebookPoster.png",
    href: "https://github.com/nguyenphucit/facebookClone_BE",
  },
  {
    title: "Kahoot Clone",
    subtitle: "A little friendly competition. In real time.",
    date: "Dec 2023 — Jan 2024",
    description:
      "Developed a multiplayer quiz application with live rankings and email verification. Built quiz session logic, player state management, and real-time score calculation using Spring Boot and WebSocket, with a React and Material UI frontend.",
    stack: ["Java", "Spring Boot", "React", "WebSocket"],
    video: "/KahootDemo2.mp4",
    poster: "/kahootBG.jpg",
    href: "https://github.com/nguyenphucit/KahootClone_BE",
  },
];
const skills = [
  [
    "Backend development",
    "Python · FastAPI · Flask · Starlette · Odoo · SQLAlchemy · REST APIs · Celery",
  ],
  [
    "Data & messaging",
    "PostgreSQL · MySQL · SQL Server · MongoDB · Qdrant · Kafka · WebSocket",
  ],
  [
    "AI applications",
    "LlamaIndex · Ollama · RAG · Embeddings · Prompt design · YOLO · VietOCR",
  ],
  [
    "Cloud & tools",
    "Docker · Git · CI/CD · OAuth · JWT · AWS basics: RDS, S3, SQS, Lambda",
  ],
  [
    "Frontend & languages",
    "React · Redux Toolkit · Tailwind CSS · Material UI · HTML/CSS · Java · JavaScript · TypeScript",
  ],
  [
    "AI-assisted development",
    "OpenAI Codex · Google Antigravity — supporting coding, debugging, and technical learning",
  ],
];
const links = [
  ["Home", "Homepage"],
  ["Experience", "experience"],
  ["Projects", "FeatureWork"],
  ["Skills", "skills"],
  ["Contact", "Contact"],
];
const Tags = ({ items }) => (
  <div className="tags">
    {items.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
);
const Heading = ({ eyebrow, title, text }) => (
  <div className="section-heading">
    <p className="eyebrow">{eyebrow}</p>
    <h2>{title}</h2>
    {text && <p>{text}</p>}
  </div>
);
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [parallaxEnabled, setParallaxEnabled] = useState(true);
  return (
    <MotionConfig reducedMotion="user">
      <div className="App">
        <header className="site-header">
          <a className="wordmark" href="#Homepage">
            phuc<span>.</span>
            <small>BACKEND DEVELOPER</small>
          </a>
          <button
            className="menu-toggle"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "Close ✕" : "Menu ☰"}
          </button>
          <nav id="navigation" className={menuOpen ? "open" : ""}>
            {links.map(([label, id]) => (
              <a key={id} href={`#${id}`} onClick={() => setMenuOpen(false)}>
                {label}
              </a>
            ))}
            <a
              className="nav-resume"
              href="/NguyenThanhPhuc_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              Résumé ↗
            </a>
          </nav>
        </header>
        <main>
          <section id="Homepage" className="hero container">
            <div className="hero-inner">
              <motion.div
                className="hero-copy"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <p className="eyebrow">SOFTWARE ENGINEERING GRADUATE</p>
                <p className="hello">Hi, I'm Nguyen Thanh Phuc.</p>
                <h1>
                  Python Backend
                  <br />
                  <em>Developer.</em>
                </h1>
                <p className="hero-summary">
                  I’m a Python backend developer with experience building APIs,
                  integrating banking services, and working on OCR and document
                  retrieval applications.
                </p>
                <div className="actions">
                  <a className="button primary" href="#FeatureWork">
                    Explore my work ↗
                  </a>
                  <a
                    className="button secondary"
                    href="/NguyenThanhPhuc_Resume.pdf"
                    download
                  >
                    Download résumé ↓
                  </a>
                </div>
                <div className="hero-meta">
                  <span>Ho Chi Minh City, Vietnam</span>
                  <span>Software Engineering graduate</span>
                </div>
              </motion.div>
              <motion.div
                className="hero-art"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="orbit orbit-one" />
                <div className="orbit orbit-two" />
                <div className="portrait">
                  <img src="/myportrait.png" alt="Nguyen Thanh Phuc" />
                </div>
              </motion.div>
            </div>
            <a href="#experience" className="scroll-cue">
              SCROLL TO EXPLORE <span>↓</span>
            </a>
          </section>
          <section className="experience-section container" id="experience">
            <Heading
              eyebrow="THE JOURNEY"
              title="Learning by building."
              text="Hands-on backend experience, from banking integrations to AI-powered document workflows."
            />
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-card" key={item.company}>
                  <div className="experience-side">
                    <p className="eyebrow">{item.date}</p>
                    <h3>{item.company}</h3>
                    <p>Ho Chi Minh City</p>
                  </div>
                  <div className="experience-body">
                    <p className="micro-label">{item.tag}</p>
                    <h3>{item.role}</h3>
                    <ul>
                      {item.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                    <Tags items={item.stack} />
                  </div>
                </article>
              ))}
            </div>
          </section>
          <Parallax
            condition="Wedid"
            enabled={parallaxEnabled}
            onToggle={() => setParallaxEnabled((value) => !value)}
          />
          <section className="projects-section container" id="FeatureWork">
            <Heading
              eyebrow="SELECTED PROJECTS"
              title="Ideas turned into systems."
              text="Personal projects exploring backend architecture, real-time experiences, and intelligent workflows."
            />
            {projects.map((project) => (
              <article className="project-card" key={project.title}>
                <div
                  className={`project-visual ${project.video ? "" : "mail"}`}
                >
                  {project.video ? (
                    <video
                      controls
                      preload="none"
                      poster={project.poster}
                      aria-label={`${project.title} demonstration`}
                      src={project.video}
                    />
                  ) : (
                    <div className="mail-illustration" aria-hidden="true">
                      <div className="mail-toolbar">
                        <span />
                        <span />
                        <span />
                        <p>mail / workspace</p>
                      </div>
                      {[1, 2].map((i) => (
                        <div className="mail-line" key={i}>
                          <b>✉</b>
                          <div>
                            <span className="skeleton wide" />
                            <span className="skeleton" />
                          </div>
                          <small>SYNCED</small>
                        </div>
                      ))}
                      <div className="ai-note">
                        <span>✧</span>
                        <div>
                          <strong>A little clarity for your inbox.</strong>
                          <p>Summarize. Compose. Connect.</p>
                        </div>
                      </div>
                      <p className="visual-caption">
                        PROJECT CONCEPT · IMPLEMENTATION IN PROGRESS
                      </p>
                    </div>
                  )}
                </div>
                <div className="project-content">
                  <div className="project-topline">
                    <span>{project.date}</span>
                  </div>
                  {project.status && (
                    <p className="project-status">
                      <span className="status-dot" />
                      {project.status}
                    </p>
                  )}
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p>{project.description}</p>
                  <Tags items={project.stack} />
                  {project.href && (
                    <a
                      className="text-link"
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View backend source ↗
                    </a>
                  )}
                </div>
              </article>
            ))}
          </section>
          <Parallax
            condition="Wedo"
            enabled={parallaxEnabled}
            onToggle={() => setParallaxEnabled((value) => !value)}
          />
          <section className="skills-section container" id="skills">
            <Heading
              eyebrow="MY TOOLKIT"
              title="The tools behind the work."
              text="A Python-centered toolkit, with frontend experience to connect the whole picture."
            />
            <div className="skill-grid">
              {skills.map(([title, content]) => (
                <article className="skill-card" key={title}>
                  <h3>{title}</h3>
                  <p>{content}</p>
                </article>
              ))}
            </div>
          </section>
          <section className="education-section container" id="education">
            <Heading
              eyebrow="FOUNDATIONS"
              title="A foundation to build on."
            />
            <div className="education-grid">
              <article>
                <p className="eyebrow">EDUCATION · 2020 — 2024</p>
                <h3>Sai Gon University</h3>
                <p>B.S. in Software Engineering</p>
                <div className="credential">
                  <strong>
                    8.02<span>/10</span>
                  </strong>
                  <p>
                    GPA
                    <br />
                    Scholarship for Academic Excellence, 2023–2024
                  </p>
                </div>
              </article>
              <article>
                <p className="eyebrow">ENGLISH · IIG VIETNAM</p>
                <h3>Technical work, beyond language barriers.</h3>
                <div className="credential">
                  <strong>
                    940<span>/990</span>
                  </strong>
                  <p>TOEIC · Issued Dec 2023</p>
                </div>
                <p>
                  Strong listening and reading skills, including comprehension
                  of technical materials.
                </p>
              </article>
            </div>
          </section>
          <ContactSection />
        </main>
        <footer className="site-footer container">
          <a className="wordmark" href="#Homepage">
            phuc<span>.</span>
          </a>
          <p>Built with care. Always a work in progress.</p>
          <a href="#Homepage">Back to top ↑</a>
        </footer>
      </div>
    </MotionConfig>
  );
}
export default App;
