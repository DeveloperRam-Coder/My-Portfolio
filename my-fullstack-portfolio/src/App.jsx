import React from 'react';
import { FaReact, FaNodeJs, FaAngular, FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiJavascript, SiCsharp, SiPostgresql } from 'react-icons/si';
import proimg from "./assets/pro.jpeg";
import ScrollIndicator from './components/ScrollIndicator'; // Import ScrollIndicator
import './App.css'; // Import custom CSS for styles

const App = () => {
  return (
    <div className="container-sm py-5 text-dark">
      <ScrollIndicator />

      {/* Header Section */}
      <header id="home" className="portfolio-header py-2 text-dark border-bottom">
        <div className="container d-flex align-items-center justify-content-between">
          <div className="text-section">
            <h1 className="display-4">Welcome to My Portfolio</h1>
            <p className="lead">Explore my work and achievements as a full-stack developer proficient in modern web technologies.</p>
            <h2 className="mt-4">I’m <span className="name-highlight">Ram </span></h2>
            <p>Bulandshahr, U.P, India | Phone: +91 9027587069 | Email: ramgopalbsr9@gmail.com</p>
          </div>
          <div className="image-section ms-auto border-bottom py-2">
            <img src={proimg} alt="Developer" className="developer-img rounded-circle border-5" style={{ width: '250px', height: '250px' }} />
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <Card title="About Me">
        <p>I'm a passionate full-stack developer with extensive experience in creating dynamic web applications using cutting-edge technologies. I thrive on solving complex problems and delivering high-quality software solutions.</p>
        <p>My journey in web development started with a fascination for building intuitive user interfaces and has evolved into a deep interest in full-stack technologies. I enjoy both the creative aspects of frontend development and the logic-driven world of backend programming.</p>
      </Card>

      {/* Professional Summary */}
      <Card title="Professional Summary">
        <p>Highly skilled Full Stack Developer with over X years of experience in MERN, MEAN, and .NET technologies. Expert in modern JavaScript frameworks, server-side programming, and database management. Adept at building scalable, secure, and high-performance applications. Proficient in Agile methodologies, DevOps practices, and continuous integration/deployment.</p>
        <p>My goal is to contribute to innovative projects that make a meaningful impact. I enjoy collaborating with cross-functional teams to deliver high-quality solutions that meet client needs and improve user experiences.</p>
      </Card>

      {/* Skills Section */}
      <Card title="Key Skills">
        <div className="row">
          <SkillColumn title="Languages" skills={[
            { icon: <FaHtml5 style={{ color: '#E34F26' }} />, text: 'HTML5' },
            { icon: <FaCss3 style={{ color: '#1572B6' }} />, text: 'CSS3' },
            { icon: <SiJavascript style={{ color: '#F7DF1E' }} />, text: 'JavaScript' },
            { icon: <SiTypescript style={{ color: '#007ACC' }} />, text: 'TypeScript' },
            { icon: <SiCsharp style={{ color: '#9B5A1F' }} />, text: 'C#' },
          ]} />
          <SkillColumn title="Frontend" skills={[
            { icon: <FaBootstrap style={{ color: '#563D7C' }} />, text: 'Bootstrap' },
            { icon: <FaReact style={{ color: '#61DBFB' }} />, text: 'React' },
            { icon: <FaAngular style={{ color: '#DD0031' }} />, text: 'Angular' },
          ]} />
          <SkillColumn title="Backend" skills={[
            { icon: <FaNodeJs style={{ color: '#68A063' }} />, text: 'Node.js' },
            { icon: <SiExpress style={{ color: '#000000' }} />, text: 'Express.js' },
            { icon: <SiPostgresql style={{ color: '#336791' }} />, text: 'PostgreSQL' },
            { icon: <SiMongodb style={{ color: '#47A248' }} />, text: 'MongoDB' },
          ]} />
          <SkillColumn title="DevOps & Tools" skills={[
            { icon: <FaGithub style={{ color: '#181717' }} />, text: 'Git & Version Control' },
            { icon: <span role="img" aria-label="tools" style={{ fontSize: '24px' }}>🛠️</span>, text: 'Docker' },
            { icon: <span role="img" aria-label="settings" style={{ fontSize: '24px' }}>⚙️</span>, text: 'CI/CD (Jenkins, Travis CI)' },
          ]} />
        </div>
      </Card>

      {/* Projects Section */}
      <Card title="Projects">
        <div className="row">
          <ProjectCard title="Project One: Task Tracker" description="A web application built using React, Node.js, and MongoDB for managing daily tasks. Features include user authentication, task categorization, and progress tracking." link="#" icon={<FaReact style={{ color: '#61DBFB' }} />} />
          <ProjectCard title="Project Two: E-commerce Platform" description="An Angular application for an online store, allowing users to browse products, add to cart, and make purchases. Utilizes RESTful APIs for data management." link="https://developerram-coder.github.io/Mood-Wear/" icon={<FaAngular style={{ color: '#DD0031' }} />} />
          <ProjectCard title="Project Three: Blogging Platform" description="A full-stack application using the MERN stack where users can create, read, update, and delete blog posts. Includes features for comments and user profiles." link="#" icon={<FaNodeJs style={{ color: '#68A063' }} />} />
        </div>
      </Card>

      {/* Certifications Section */}
      <Card title="Certifications">
        <ul className="list-unstyled">
          <li className="mt-3">Certified JavaScript Developer - XYZ Institute</li>
          <li className="mt-3">Full Stack Development Certification - ABC Academy</li>
          <li className="mt-3">React Developer Certification - Online Course</li>
        </ul>
      </Card>

      {/* Contact Section */}
      <Card title="Contact Me">
        <p>If you would like to get in touch, feel free to reach out through any of the platforms below:</p>
        <div className="d-flex justify-content-center">
          <a href="mailto:ramgopalbsr9@gmail.com" className="contact-icon mx-3"><FaEnvelope size={40} /></a>
          <a href="https://linkedin.com/in/yourprofile" className="contact-icon mx-3"><FaLinkedin size={40} /></a>
          <a href="https://twitter.com/yourprofile" className="contact-icon mx-3"><FaTwitter size={40} /></a>
          <a href="https://github.com/yourprofile" className="contact-icon mx-3"><FaGithub size={40} /></a>
        </div>
      </Card>

      {/* Footer */}
      <footer className="text-center py-3">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

// Card Component
const Card = ({ title, children }) => (
  <div className="card my-4" style={{ background: '#f9f9f9', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      {children}
    </div>
  </div>
);

// SkillColumn Component
const SkillColumn = ({ title, skills }) => (
  <div className="col-md-3 mb-4">
    <h5>{title}</h5>
    <ul className="list-unstyled">
      {skills.map((skill, index) => (
        <li key={index} className='mt-3'>
          {skill.icon}
          {skill.text}
        </li>
      ))}
    </ul>
  </div>
);

// ProjectCard Component
const ProjectCard = ({ title, description, link, icon }) => (
  <div className="col-md-4 mb-4">
    <div className="card" style={{ background: '#e9ecef' }}>
      <div className="card-body">
        <h5 className="card-title">{icon} {title}</h5>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary">View Project</a>
      </div>
    </div>
  </div>
);

export default App;
