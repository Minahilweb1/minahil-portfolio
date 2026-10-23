
import "./App.css";

const projects = [
  {
    number: "01",
    title: "Baroque Inspired Store",
    category: "E-Commerce Website",
    description:
      "A multi-page fashion store featuring product collections, search, category filters, product details, and shopping cart functionality.",
    technologies: ["React", "JavaScript", "CSS", "Vite"],
    link: "https://minahilweb1.github.io/baroque-store-live/",
  },
  {
    number: "02",
    title: "Cafe Website",
    category: "Restaurant Website",
    description:
      "A responsive cafe website featuring menu categories, food and drink sections, and a reservation interface.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://minahilweb1.github.io/cafe-website-1/",
  },
  {
    number: "03",
    title: "Car Rental Website",
    category: "Booking Website",
    description:
      "A car rental project with vehicle selection, booking details, and booking confirmation functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://minahilweb1.github.io/car-rental-website/",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React.js",
  "Bootstrap",
  "Node.js",
  "MongoDB",
  "Git & GitHub",
  "AI Fundamentals",
  "Microsoft Word",
  "Microsoft Excel",
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="section-heading">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  return (
    <>
      <header className="navbar">
        <div className="nav-inner">
          <a
            className="logo"
            href="#home"
            aria-label="Minahil Ghouri home"
          >
            MG<span>.</span>
          </a>

          <nav className="nav-links" aria-label="Main navigation">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#certifications">Training</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-grid">
            <div className="hero-content">
              <p className="hero-eyebrow">
                WELCOME TO MY PORTFOLIO
              </p>

              <h1>
                Hello, I'm <span>Minahil Ghouri.</span>
              </h1>

              <h2 className="hero-role">
                Full Stack Web Developer
              </h2>

              <p className="hero-description">
                I build responsive, user-friendly websites and
                web experiences using modern web technologies.
                I enjoy turning ideas into clean and practical
                digital solutions.
              </p>

             
<div className="hero-buttons">
  <a className="btn btn-primary" href="#projects">
    Explore My Work
  </a>

  <a className="btn btn-secondary" href="#contact">
    Contact Me
  </a>

  <a
    className="btn btn-secondary"
    href={`${import.meta.env.BASE_URL}Minahil-Ghouri-CV.pdf`}
    download="Minahil-Ghouri-CV.pdf"
  >
    Download Resume ↓
  </a>
</div>


              <div className="hero-socials">
                <a
                  href="https://github.com/Minahilweb1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub ↗
                </a>
                <a href="mailto:minahilghouri79@gmail.com">
                  Email ↗
                </a>
              </div>
            </div>

            <div className="hero-card">
              <div className="hero-card-top">
                <span>PORTFOLIO</span>
                <span>2026</span>
              </div>

              <div className="hero-monogram">MG</div>

              <div className="hero-card-bottom">
                <p>MINAHIL GHOURI</p>
                <span>FULL STACK WEB DEVELOPER</span>
              </div>
            </div>
          </div>

          <a className="scroll-link" href="#about">
            DISCOVER MORE ↓
          </a>
        </section>

        <section className="section about-section" id="about">
          <SectionHeading
            eyebrow="A LITTLE ABOUT ME"
            title="Building the Web, One Project at a Time"
            description="A little about my background, interests, and development journey."
          />

          <div className="about-grid">
            <div className="about-card">
              <span className="about-card-label">ABOUT ME</span>
              <div className="about-monogram">MG</div>
              <h3>Curious Mind. Creative Builder.</h3>
              <p>
                Computer Science graduate with experience in
                teaching and a growing portfolio of web
                development projects.
              </p>
            </div>

            <div className="about-text">
              <p>
                I am a Computer Science graduate with a strong
                interest in web development and technology.
                My goal is to create attractive, accessible,
                and responsive websites that provide a smooth
                user experience.
              </p>

              <p>
                My background as a Computer Science Instructor
                has helped me develop communication, problem-solving,
                and organizational skills. I continue to build
                my technical skills through practical projects
                and professional training.
              </p>

              <div className="about-details">
                <div>
                  <span>NAME</span>
                  <strong>Minahil Ghouri</strong>
                </div>
                <div>
                  <span>DEGREE</span>
                  <strong>BS Computer Science</strong>
                </div>
                <div>
                  <span>LOCATION</span>
                  <strong>Lahore, Pakistan</strong>
                </div>
                <div>
                  <span>CAREER GOAL</span>
                  <strong>Full Stack Web Developer</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <SectionHeading
            eyebrow="WHAT I WORK WITH"
            title="Skills & Technologies"
            description="Technologies and tools I have studied and used in my learning and projects."
          />

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-number">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section projects-section" id="projects">
          <SectionHeading
            eyebrow="SELECTED WORK"
            title="Projects I've Built"
            description="A selection of my website projects. Open a live project to explore it."
          />

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-card-top">
                  <span>{project.number}</span>
                  <span>{project.category}</span>
                </div>

                <div className="project-art">
                  <span className="project-art-monogram">
                    {project.number}
                  </span>
                  <span className="project-art-label">
                    SELECTED PROJECT
                  </span>
                </div>

                <div className="project-card-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="project-tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    className="project-link"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Project ↗
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="section experience-section"
          id="experience"
        >
          <SectionHeading
            eyebrow="MY JOURNEY"
            title="Experience & Education"
            description="My professional experience and academic background."
          />

          <div className="timeline">
            <article className="timeline-card">
              <span className="timeline-date">2023 — 2025</span>
              <div>
                <h3>Computer Science Instructor</h3>
                <p className="timeline-subtitle">
                  Teaching Experience
                </p>
                <p>
                  Taught O-Level and Matric Computer Science,
                  supported practical lab sessions, prepared
                  lesson plans and assessments, and helped
                  students understand programming fundamentals
                  and HTML/CSS basics. Also maintained records
                  and coordinated class activities.
                </p>
              </div>
            </article>

            <article className="timeline-card">
              <span className="timeline-date">2017 — 2021</span>
              <div>
                <h3>BS Computer Science</h3>
                <p className="timeline-subtitle">
                  Lahore College for Women University
                </p>
                <p>
                  Completed a four-year undergraduate degree
                  in Computer Science.
                </p>
              </div>
            </article>

            <article className="timeline-card">
              <span className="timeline-date">2015 — 2017</span>
              <div>
                <h3>Intermediate — ICS</h3>
                <p className="timeline-subtitle">
                  Graduate College for Women, Samanabad
                </p>
                <p>
                  Studied Computer Science, Mathematics,
                  and Physics.
                </p>
              </div>
            </article>

            <article className="timeline-card">
              <span className="timeline-date">2013 — 2015</span>
              <div>
                <h3>Matriculation — Computer Science</h3>
                <p className="timeline-subtitle">
                  Himayat-e-Islam School, Lahore
                </p>
                <p>
                  Completed secondary education with Computer
                  Science as a subject.
                </p>
              </div>
            </article>
          </div>
        </section>

        <section
          className="section certifications-section"
          id="certifications"
        >
          <SectionHeading
            eyebrow="CONTINUOUS LEARNING"
            title="Training & Internship"
            description="Professional training and practical learning that support my development journey."
          />

          <div className="certifications-grid">
            <article className="certification-card">
              <div className="certification-icon">01</div>
              <h3>Full Stack Web Development</h3>
              <p className="certification-provider">
                Arfa Ideoversity
              </p>
              <p>
                Training in web development concepts and
                technologies for building modern websites
                and web applications.
              </p>
            </article>

            <article className="certification-card">
              <div className="certification-icon">02</div>
              <h3>Artificial Intelligence (AI) Internship</h3>
              <p className="certification-provider">NAVTTC</p>
              <p>
                Completed a three-month internship focused on
                Artificial Intelligence concepts and practical
                learning.
              </p>
              <span className="certification-duration">
                Duration: 3 Months
              </span>
            </article>

            <article className="certification-card">
              <div className="certification-icon">03</div>
              <h3>Microsoft Certified: Azure AI Fundamentals</h3>
              <p className="certification-provider">Microsoft</p>
              <p>
                Earned the Microsoft Azure AI Fundamentals
                certification, demonstrating foundational knowledge
                of artificial intelligence and Azure AI services.
              </p>
              <span className="certification-duration">
                Earned: July 16, 2026
              </span>
            </article>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div className="contact-panel">
            <div className="contact-copy">
              <p className="section-eyebrow">LET'S CONNECT</p>
              <h2>Have a project in mind?</h2>
              <p>
                I would love to connect about web development
                opportunities, projects, and collaborations.
              </p>
            </div>

            <div className="contact-links">
              <a href="mailto:minahilghouri79@gmail.com">
                <span>Email</span>
                <strong>minahilghouri79@gmail.com ↗</strong>
              </a>

              <a href="tel:+923159257218">
                <span>Phone</span>
                <strong>0315-9257218 ↗</strong>
              </a>

              <a
                href="https://github.com/Minahilweb1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>GitHub</span>
                <strong>github.com/Minahilweb1 ↗</strong>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="logo" href="#home">
          MG<span>.</span>
        </a>
        <p>Designed & developed by Minahil Ghouri</p>
        <p>© {new Date().getFullYear()} All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
