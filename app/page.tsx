const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Python",
  "C++",
  "HTML & CSS",
  "Git & GitHub",
  "Prompt Engineering",
];

const projects = [
  {
    number: "01",
    name: "NEXORA",
    category: "AI WORKSPACE",
    description:
      "An AI-powered workspace designed to bring intelligent assistance, task execution, research, coding, and productivity into one unified experience.",
    stack: ["Next.js", "React", "TypeScript", "Supabase"],
    status: "In Development",
    link: "https://github.com/mirzazaheerbaig16/nexora",
  },
  {
    number: "02",
    name: "AI-Based Phishing & Scam Intelligence System",
    category: "CYBERSECURITY · AI",
    description:
      "A partially completed project focused on using AI-driven techniques to help identify and analyze potential phishing attempts and online scams.",
    stack: ["Python", "AI", "Cybersecurity"],
    status: "In Development",
    link: "https://github.com/mirzazaheerbaig16",
  },
];

function ArrowIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M7 17 17 7M7 7h10v10"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.56.1.76-.24.76-.54v-2.1c-3.1.68-3.76-1.32-3.76-1.32-.5-1.3-1.24-1.65-1.24-1.65-1.02-.7.08-.69.08-.69 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.61 1.23 3.25.94.1-.73.39-1.23.71-1.52-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.22 1.16-3-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.05 1.15a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.15 3.05-1.15.61 1.56.23 2.71.11 3 .72.78 1.16 1.78 1.16 3 0 4.29-2.62 5.24-5.11 5.51.4.35.76 1.02.76 2.06v3.13c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home" aria-label="Mirza home">
          <span className="brand-mark">M</span>
          <span>
            MIRZA<span className="brand-dot">.</span>
          </span>
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>

        <a className="nav-contact" href="mailto:mirzazaheerbaig16@gmail.com">
          Let&apos;s talk <ArrowIcon />
        </a>
      </nav>

      <section className="hero section-shell" id="home">
        <div className="hero-copy">
          <div className="availability">
            <span className="availability-dot" />
            COMPUTER SCIENCE STUDENT · CLASS OF 2027
          </div>

          <h1>
            Building ideas
            <br />
            into <span className="gradient-text">reality.</span>
          </h1>

          <p className="hero-description">
            Hey, I&apos;m <strong>Mirza Zaheer Baig.</strong> I&apos;m a
            Computer Science student exploring web development, AI, and
            intelligent software that solves real-world problems.
          </p>

          <div className="hero-actions">
            <a className="button-primary" href="#projects">
              Explore my work <ArrowIcon />
            </a>

            <a
              className="button-secondary"
              href="https://github.com/mirzazaheerbaig16"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> GitHub
            </a>
          </div>

          <div className="hero-meta">
            <span>BASED IN INDIA</span>
            <span className="meta-divider" />
            <span>WEB DEVELOPMENT · AI</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Developer profile graphic">
          <div className="visual-glow" />
          <div className="orbit orbit-one" />
          <div className="orbit orbit-two" />

          <div className="profile-card">
            <div className="profile-card-top">
              <span className="window-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="card-label">DEVELOPER PROFILE</span>
            </div>

            <div className="avatar">
              <span>M</span>
              <span className="avatar-star">✳</span>
            </div>

            <h2>Mirza Zaheer Baig</h2>
            <p className="profile-role">Aspiring Software Developer</p>

            <div className="profile-divider" />

            <div className="code-line">
              <span className="code-purple">const</span> developer ={" "}
              <span className="code-green">&quot;Mirza&quot;</span>;
            </div>
            <div className="code-line">
              <span className="code-purple">const</span> focus ={" "}
              <span className="code-green">&quot;AI + Web&quot;</span>;
            </div>
            <div className="code-line">
              <span className="code-purple">const</span> status ={" "}
              <span className="code-green">&quot;Building&quot;</span>;
            </div>

            <div className="profile-footer">
              <span className="availability-dot" />
              Always learning. Always building.
            </div>
          </div>

          <div className="floating-tag tag-top">
            <span className="tag-icon">{"</>"}</span>
            <span>
              <strong>Clean code</strong>
              <small>Built with purpose</small>
            </span>
          </div>

          <div className="floating-tag tag-bottom">
            <span className="tag-spark">✳</span>
            <span>
              <strong>AI enthusiast</strong>
              <small>Exploring what&apos;s next</small>
            </span>
          </div>
        </div>

        <a className="scroll-cue" href="#about">
          <span className="scroll-line" />
          SCROLL TO EXPLORE
        </a>
      </section>

      <section className="about-section section-shell" id="about">
        <div className="section-heading">
          <span className="eyebrow">01 / ABOUT ME</span>
          <h2>
            Curious by nature.
            <br />
            <span className="muted-heading">Developer by choice.</span>
          </h2>
        </div>

        <div className="about-content">
          <p>
            I&apos;m pursuing a Bachelor of Technology in Computer Science and
            Engineering, with an interest in building useful digital products.
            I enjoy turning ideas into working applications and learning how
            modern software systems fit together.
          </p>

          <p>
            Currently, I&apos;m developing NEXORA, an AI-powered workspace,
            while exploring AI and cybersecurity through personal projects.
            I believe consistent learning and practical experimentation are
            the best ways to grow as a developer.
          </p>

          <a className="text-link" href="#projects">
            Discover my projects <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="skills-section" id="skills">
        <div className="section-shell">
          <div className="section-heading">
            <span className="eyebrow">02 / MY TOOLKIT</span>
            <h2>
              Technologies I&apos;m
              <br />
              <span className="muted-heading">working with.</span>
            </h2>
          </div>

          <p className="section-intro">
            Tools and technologies I use or am actively learning through
            development and personal projects.
          </p>

          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div className="skill-card" key={skill}>
                <span className="skill-index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span>{skill}</span>
                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-section section-shell" id="projects">
        <div className="projects-heading">
          <div className="section-heading">
            <span className="eyebrow">03 / SELECTED WORK</span>
            <h2>
              Ideas in
              <br />
              <span className="muted-heading">progress.</span>
            </h2>
          </div>

          <p className="section-intro">
            A look at the projects I&apos;m building and the problems I&apos;m
            exploring.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-top">
                <span className="project-number">{project.number}</span>
                <a
                  className="project-link"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <ArrowIcon />
                </a>
              </div>

              <span className="project-category">{project.category}</span>
              <h3>{project.name}</h3>
              <p className="project-description">{project.description}</p>

              <div className="project-stack">
                {project.stack.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-bottom">
                <span className="project-status-dot" />
                {project.status}
              </div>
            </article>
          ))}
        </div>

        <a
          className="text-link all-projects"
          href="https://github.com/mirzazaheerbaig16"
          target="_blank"
          rel="noreferrer"
        >
          Explore GitHub <ArrowIcon />
        </a>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-glow" />

        <div className="section-shell contact-inner">
          <span className="eyebrow">04 / WHAT&apos;S NEXT?</span>

          <h2>
            Have an idea?
            <br />
            <span className="gradient-text">Let&apos;s connect.</span>
          </h2>

          <p>
            Interested in software, AI, or collaborating on an interesting
            project? I&apos;d love to hear from you.
          </p>

          <a
            className="button-primary"
            href="mailto:mirzazaheerbaig16@gmail.com"
          >
            Get in touch <ArrowIcon />
          </a>

          <div className="social-links">
            <a
              href="https://github.com/mirzazaheerbaig16"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon /> GitHub <ArrowIcon />
            </a>

            <a
              href="https://www.linkedin.com/in/mirzazaheerbaig/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn <ArrowIcon />
            </a>

            <a href="mailto:mirzazaheerbaig16@gmail.com">
              Email <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <footer className="footer section-shell">
        <a className="brand" href="#home">
          <span className="brand-mark">M</span>
          <span>
            MIRZA<span className="brand-dot">.</span>
          </span>
        </a>

        <p>Designed with curiosity. Built with code.</p>

        <a className="back-to-top" href="#home">
          BACK TO TOP ↑
        </a>
      </footer>
    </main>
  );
}