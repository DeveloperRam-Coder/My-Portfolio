import React from 'react';
import { FaReact, FaNodeJs, FaAngular, FaEnvelope, FaLinkedin, FaTwitter, FaGithub, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTypescript, SiJavascript, SiCsharp, SiPostgresql } from 'react-icons/si';
import proimg from "./assets/pro.jpeg";
import ScrollIndicator from './components/ScrollIndicator'; // Import ScrollIndicator

const App = () => {
  return (
    <div className="container-sm py-5 text-dark ">
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
      <section id="about-me" className="my-2 py-2 text-dark border-bottom">
        <h2>About Me</h2>
        <p>I'm a passionate full-stack developer with extensive experience in creating dynamic web applications using cutting-edge technologies. I thrive on solving complex problems and delivering high-quality software solutions.</p>
        <p>My journey in web development started with a fascination for building intuitive user interfaces and has evolved into a deep interest in full-stack technologies. I enjoy both the creative aspects of frontend development and the logic-driven world of backend programming.</p>
      </section>

      {/* Professional Summary */}
      <section id="professional-summary" className="my-2 py-2 text-dark border-bottom">
        <h2>Professional Summary</h2>
        <p>Highly skilled Full Stack Developer with over X years of experience in MERN, MEAN, and .NET technologies. Expert in modern JavaScript frameworks, server-side programming, and database management. Adept at building scalable, secure, and high-performance applications. Proficient in Agile methodologies, DevOps practices, and continuous integration/deployment.</p>
        <p>My goal is to contribute to innovative projects that make a meaningful impact. I enjoy collaborating with cross-functional teams to deliver high-quality solutions that meet client needs and improve user experiences.</p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="my-2 py-2 text-dark border-bottom">
        <h2>Key Skills</h2>
        <div className="row">
          <div className="col-md-3 mb-4">
            <h5>Languages</h5>
            <ul className="list-unstyled">
              <li className='mt-3'><FaHtml5 className="me-2" style={{ color: '#E34F26', fontSize: '24px' }} /> HTML5</li>
              <li className='mt-3'><FaCss3 className="me-2" style={{ color: '#1572B6', fontSize: '24px' }} /> CSS3</li>
              <li className='mt-3'><SiJavascript className="me-2" style={{ color: '#F7DF1E', fontSize: '24px' }} /> JavaScript</li>
              <li className='mt-3'><SiTypescript className="me-2" style={{ color: '#007ACC', fontSize: '24px' }} /> TypeScript</li>
              <li className='mt-3'><SiCsharp className="me-2" style={{ color: '#9B5A1F', fontSize: '24px' }} /> C#</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Frontend</h5>
            <ul className="list-unstyled">
              <li className='mt-3'><FaBootstrap className="me-2" style={{ color: '#563D7C', fontSize: '24px' }} /> Bootstrap</li>
              <li className='mt-3'><FaReact className="me-2" style={{ color: '#61DBFB', fontSize: '24px' }} /> React</li>
              <li className='mt-3'><FaAngular className="me-2" style={{ color: '#DD0031', fontSize: '24px' }} /> Angular</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>Backend</h5>
            <ul className="list-unstyled">
              <li className='mt-3'><FaNodeJs className="me-2" style={{ color: '#68A063', fontSize: '24px' }} /> Node.js</li>
              <li className='mt-3'><SiExpress className="me-2" style={{ color: '#000000', fontSize: '24px' }} /> Express.js</li>
              <li className='mt-3'><SiPostgresql className="me-2" style={{ color: '#336791', fontSize: '24px' }} /> PostgreSQL</li>
              <li className='mt-3'><SiMongodb className="me-2" style={{ color: '#47A248', fontSize: '24px' }} /> MongoDB</li>
            </ul>
          </div>
          <div className="col-md-3 mb-4">
            <h5>DevOps & Tools</h5>
            <ul className="list-unstyled">
              <li className='mt-3'><FaGithub className="me-2" style={{ color: '#181717', fontSize: '24px' }} /> Git & Version Control</li>
              <li className='mt-3'><span className="me-2" style={{ fontSize: '24px' }}>🛠️</span> Docker</li>
              <li className='mt-3'><span className="me-2" style={{ fontSize: '24px' }}>⚙️</span> CI/CD (Jenkins, Travis CI)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="my-2 py-2 text-dark border-bottom">
        <h2>Projects</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="project-card p-3 border rounded" style={{ background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)' }}>
              <h5>Project One: Task Tracker</h5>
              <p>A web application built using React, Node.js, and MongoDB for managing daily tasks. Features include user authentication, task categorization, and progress tracking.</p>
              <a href="#" className="btn btn-primary">View Project</a>
              <FaReact className="mt-2" style={{ color: '#61DBFB', fontSize: '24px' }} />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="project-card p-3 border rounded" style={{ background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)' }}>
              <h5>Project Two: E-commerce Platform</h5>
              <p>An Angular application for an online store, allowing users to browse products, add to cart, and make purchases. Utilizes RESTful APIs for data management.</p>
              <a href="https://developerram-coder.github.io/Mood-Wear/" className="btn btn-primary">View Project</a>
              <FaAngular className="mt-2" style={{ color: '#DD0031', fontSize: '24px' }} />
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="project-card p-3 border rounded" style={{ background: 'linear-gradient(135deg, #f5f7fa, #c3cfe2)' }}>
              <h5>Project Three: Blogging Platform</h5>
              <p>A full-stack application using the MERN stack where users can create, read, update, and delete blog posts. Includes features for comments and user profiles.</p>
              <a href="#" className="btn btn-primary">View Project</a>
              <FaNodeJs className="mt-2" style={{ color: '#68A063', fontSize: '24px' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="my-2 py-2 text-dark border-bottom">
        <h2>Certifications</h2>
        <ul className="list-unstyled">
          <li className="mt-3">Certified JavaScript Developer - XYZ Institute</li>
          <li className="mt-3">Full Stack Development Certification - ABC Academy</li>
          <li className="mt-3">React Developer Certification - Online Course</li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact" className="my-2 py-2 text-dark border-bottom">
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, feel free to reach out through any of the platforms below:</p>
        <div className="d-flex justify-content-center">
          <a href="mailto:ramgopalbsr9@gmail.com" className="contact-icon mx-3"><FaEnvelope size={40} /></a>
          <a href="https://linkedin.com/in/yourprofile" className="contact-icon mx-3"><FaLinkedin size={40} /></a>
          <a href="https://twitter.com/yourprofile" className="contact-icon mx-3"><FaTwitter size={40} /></a>
          <a href="https://github.com/yourprofile" className="contact-icon mx-3"><FaGithub size={40} /></a>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-3">
        <p>&copy; {new Date().getFullYear()} Your Name. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;
