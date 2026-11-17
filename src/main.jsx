import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDown, ArrowRight, ArrowUpRight, BrainCircuit, Code2, Github,
  Linkedin, Mail, MapPin, Menu, X, Sparkles, ExternalLink, Download,
  GraduationCap, Award, Languages, Terminal, Bot, ShieldCheck, Activity,
  CarFront, BusFront, ChevronRight
} from "lucide-react";
import profile from "./assets/profile.png";
import signature from "./assets/signature.jpg";
import "./style.css";

const projects = [
  {
    number: "01", type: "AI · Healthcare", title: "Pharynx AI",
    description: "A voice-analysis system exploring speech biomarkers and machine learning for early laryngeal-cancer risk screening. Designed to generate risk assessments and preliminary recommendations — not a medical diagnosis.",
    stack: ["Python", "Librosa", "Scikit-learn", "Flask"],
    icon: Activity, tone: "mint"
  },
  {
    number: "02", type: "AI · Cybersecurity", title: "SentinelCore",
    description: "An email-security concept combining a Flask service and browser extension to classify messages as malicious, suspicious or safe, helping users notice potentially harmful email content.",
    stack: ["Python", "Flask", "NLP", "Chrome Extension"],
    icon: ShieldCheck, tone: "lilac"
  },
  {
    number: "03", type: "Business application", title: "Warranty Claim Validation Cockpit",
    description: "A role-based warranty-claims workbench concept for reviewing exceptions, tracking financial exposure and monitoring ageing and service-level indicators across analyst and manager workflows.",
    stack: ["React", "Business workflows", "Dashboards", "AI-assisted insights"],
    icon: Code2, tone: "peach", link: "https://warranty-cockpit.vercel.app/"
  },
  {
    number: "04", type: "AI · Healthcare", title: "Healthcare Symptom Analysis Bot",
    description: "A web-based symptom analysis prototype that evaluates user-reported symptoms against a knowledge-driven framework covering 50 common conditions and provides preliminary guidance.",
    stack: ["Python", "Flask", "HTML", "CSS", "JSON"],
    icon: BrainCircuit, tone: "blue"
  },
  {
    number: "05", type: "IoT · Embedded systems", title: "Smart Automatic Car Parking",
    description: "An Arduino-based parking prototype using sensors to detect vehicle occupancy and display real-time parking availability, reducing the need for manual checking.",
    stack: ["Arduino", "Sensors", "C++", "Python"],
    icon: CarFront, tone: "peach"
  },
  {
    number: "06", type: "Computer vision", title: "Smart Bus Crowd Detection",
    description: "A computer-vision project exploring passenger-crowd detection and tracking to support bus occupancy monitoring and more informed transport operations.",
    stack: ["YOLOv8", "DeepSORT", "Firestore", "Python"],
    icon: BusFront, tone: "mint"
  }
];

const skillGroups = [
  { title: "Programming", icon: Terminal, items: ["Python", "SQL", "C", "JavaScript fundamentals"] },
  { title: "AI & intelligent systems", icon: BrainCircuit, items: ["Machine Learning", "Natural Language Processing", "Generative AI", "Prompt Engineering"] },
  { title: "Platforms & tools", icon: Code2, items: ["OpenAI APIs", "Google Cloud", "Git & GitHub", "Flask"] },
  { title: "Currently exploring", icon: Sparkles, items: ["React JS", "REST APIs", "AI Agents", "LLM workflows", "Automation"] }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const nav = [["About", "#about"], ["Skills", "#skills"], ["Projects", "#projects"], ["Journey", "#journey"], ["Contact", "#contact"]];

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">N.</span><span>Nidarsana<span className="brand-dot">.</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={closeMenu}>{label}</a>)}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>Let's connect <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot"/> OPEN TO LEARNING & OPPORTUNITIES</div>
            <p className="hero-kicker">Hello, I'm</p>
            <h1>Nidarsana <span>P.</span></h1>
            <h2>Computer Science Engineer <em>·</em> AI & ML Enthusiast</h2>
            <p className="hero-description">I enjoy turning ideas into useful technology — exploring artificial intelligence, building Python applications, and creating thoughtful solutions to real-world problems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17}/></a>
              <a className="button button-quiet" href="/Nidarsana-Resume.pdf" target="_blank" rel="noreferrer"><Download size={17}/> View resume</a>
            </div>
            <div className="social-row">
              <a href="https://github.com/Nidarsana07" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18}/><span>GitHub</span><ArrowUpRight size={13}/></a>
              <a href="https://www.linkedin.com/in/nidarsana-p-173955304/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18}/><span>LinkedIn</span><ArrowUpRight size={13}/></a>
              <a href="mailto:pnidarsana@gmail.com" aria-label="Email"><Mail size={18}/><span>Email</span><ArrowUpRight size={13}/></a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="photo-halo"></div>
            <div className="photo-frame"><img src={profile} alt="Portrait of Nidarsana" /></div>
            <div className="float-card card-ai"><span className="float-icon"><BrainCircuit size={18}/></span><span><b>AI / ML</b><small>Curiosity in action</small></span></div>
            <div className="float-card card-code"><span className="float-icon violet"><Code2 size={18}/></span><span><b>Build · Learn · Improve</b><small>One project at a time</small></span></div>
            <div className="visual-caption">PUDUCHERRY, INDIA <span>·</span> BUILDING WITH PURPOSE</div>
          </div>
          <a href="#about" className="scroll-cue"><span>SCROLL TO EXPLORE</span><ArrowDown size={15}/></a>
        </section>

        <section className="intro-strip">
          <div className="section-wrap strip-inner">
            <div><span className="strip-number">800+</span><span className="strip-label">Coding problems solved</span></div>
            <div><span className="strip-number">8.59</span><span className="strip-label">Undergraduate CGPA</span></div>
            <div><span className="strip-number">AI +</span><span className="strip-label">A curious builder's mindset</span></div>
          </div>
        </section>

        <section className="section-wrap content-section about-section" id="about">
          <div className="section-heading"><span className="section-index">01 / ABOUT</span><h2>A little about <span>me.</span></h2></div>
          <div className="about-grid">
            <div className="about-lead"><p className="large-copy">Technology interests me most when it moves beyond theory and becomes something people can actually use.</p><p>I'm a Computer Science Engineering undergraduate with a strong interest in Artificial Intelligence, Machine Learning, Python development and Generative AI. Through academic and independent projects, I've explored voice-based analysis, NLP, healthcare-focused prototypes, cybersecurity and connected systems.</p><p>I value continuous learning, clear communication and the process of improving an idea through experimentation.</p></div>
            <div className="about-note"><div className="note-top"><Sparkles size={19}/><span>MY APPROACH</span></div><h3>Stay curious.<br/>Build thoughtfully.<br/><i>Keep improving.</i></h3><p>From understanding a problem to testing a working solution, I like being involved in the complete journey.</p><div className="note-signature"><img src={signature} alt="Nidarsana's handwritten signature"/></div></div>
          </div>
        </section>

        <section className="skills-section" id="skills">
          <div className="section-wrap content-section">
            <div className="section-heading"><span className="section-index">02 / TOOLKIT</span><h2>Skills & <span>interests.</span></h2><p className="heading-note">A growing toolkit shaped by hands-on projects and continuous practice.</p></div>
            <div className="skill-grid">{skillGroups.map((group) => { const Icon = group.icon; return <article className="skill-card" key={group.title}><div className="skill-card-icon"><Icon size={20}/></div><h3>{group.title}</h3><div className="skill-pills">{group.items.map(item => <span key={item}>{item}</span>)}</div></article>; })}</div>
            <p className="learning-note"><span className="learning-spark">✳</span> React, APIs, agentic AI and automation are areas I'm actively learning and strengthening.</p>
          </div>
        </section>

        <section className="section-wrap content-section projects-section" id="projects">
          <div className="section-heading project-heading"><div><span className="section-index">03 / SELECTED WORK</span><h2>Things I've <span>built.</span></h2></div><p className="heading-note">A selection of academic and independent projects across AI, software and connected systems.</p></div>
          <div className="project-grid">{projects.map(project => { const Icon = project.icon; return <article className="project-card" key={project.number}><div className="project-top"><span className="project-number">{project.number}</span><span className={`project-icon ${project.tone}`}><Icon size={21}/></span></div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p className="project-description">{project.description}</p><div className="project-tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>{project.link && <a className="project-link" href={project.link} target="_blank" rel="noreferrer">Explore project <ExternalLink size={14}/></a>}</article>; })}</div>
        </section>

        <section className="journey-section" id="journey">
          <div className="section-wrap content-section">
            <div className="section-heading"><span className="section-index">04 / MY JOURNEY</span><h2>Learning, growing & <span>contributing.</span></h2></div>
            <div className="journey-grid">
              <article className="journey-card education-card"><div className="journey-icon"><GraduationCap size={22}/></div><span className="mini-label">EDUCATION</span><h3>B.Tech · Computer Science & Engineering</h3><p>Sri Manakula Vinayagar Engineering College, Puducherry</p><div className="result-line"><strong>8.59</strong><span>CGPA</span></div><div className="school-results"><span>HSC <b>95.17%</b></span><span>SSLC <b>100%</b></span></div></article>
              <article className="journey-card"><div className="journey-icon award"><Award size={22}/></div><span className="mini-label">RECOGNITION</span><h3>Achievements & recognition</h3><ul><li>First prize in a technical paper presentation for a voice-based laryngeal cancer detection system.</li><li>National-level finalist in the Unisys Innovation Program for an AI-driven cybersecurity framework.</li><li>Selected as a student ambassador with RabbitAI Association and other learning communities.</li></ul></article>
              <article className="journey-card"><div className="journey-icon language"><Languages size={22}/></div><span className="mini-label">BEYOND CODE</span><h3>More about me</h3><ul><li>First Class with Distinction in Junior and Senior Typewriting.</li><li>Completed a 12-month Diploma in Computer Teacher Training.</li><li>Languages: English, Tamil, Malayalam and French.</li><li>Interested in financial literacy, business strategy and lifelong learning.</li></ul></article>
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="section-wrap contact-inner">
            <div><span className="section-index">05 / GET IN TOUCH</span><h2>Have an idea?<br/><span>Let's talk.</span></h2><p>I'm always glad to connect with people who enjoy technology, learning and building meaningful solutions.</p><a className="button button-light" href="mailto:pnidarsana@gmail.com"> <Mail size={17}/> pnidarsana@gmail.com <ArrowUpRight size={16}/></a></div>
            <div className="contact-aside"><div className="contact-detail"><MapPin size={18}/><span>Puducherry, India</span></div><a className="contact-detail" href="https://github.com/Nidarsana07" target="_blank" rel="noreferrer"><Github size={18}/><span>github.com/Nidarsana07</span><ArrowUpRight size={14}/></a><a className="contact-detail" href="https://www.linkedin.com/in/nidarsana-p-173955304/" target="_blank" rel="noreferrer"><Linkedin size={18}/><span>LinkedIn profile</span><ArrowUpRight size={14}/></a><div className="contact-sign"><img src={signature} alt="Nidarsana signature"/></div></div>
          </div>
        </section>
      </main>

      <footer className="footer"><div className="section-wrap footer-inner"><a className="brand" href="#home"><span className="brand-mark">N.</span><span>Nidarsana<span className="brand-dot">.</span></span></a><span>Designed with curiosity and care · © {new Date().getFullYear()} Nidarsana P</span><a href="#home" className="back-top">Back to top ↑</a></div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);