import DownloadButton from "./DownloadButton";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    if (window.GitHubCalendar) {
      GitHubCalendar(".calendar", "katmiah");
    }
  }, []);

  return (
    <div className="about-section">
      <header>
        <h4>About</h4>
      </header>
      <p>
        As an ambitious and motivated individual, I am eager to begin my career
        as a Software Developer. Through my training at Northcoders, I have
        gained hands-on experience in full-stack development, with a focus on
        JavaScript. My background in customer service has strengthened my
        communication and teamwork skills, allowing me to work effectively in
        collaborative environments. I am passionate about problem-solving and
        continuously improving my technical skills to contribute to impactful
        projects
      </p>
      <div className="skills-section">
        <header>
          <h4>Skills</h4>
        </header>
        <p>Javascript, HTML, CSS</p>
        <p>Test-driven-development, Jest, Supertest</p>
        <p>SQL, PSQL</p>
        <p>React, React Native</p>
        <p>
          Agile, SCRUM, pair programming, software development lifecycle (SDL),
          technical communication
        </p>
      </div>
      <div className="experience-section">
        <header>
          <h4>Experience</h4>
        </header>
        <h5>Junior Software Developer – Northcoders Bootcamp</h5>
        <h6>January 2025 – April 2025</h6>
        <p>
          I built dynamic full-stack web applications using JavaScript, React,
          Node.js, Express, and PostgreSQL, designing RESTful APIs for smooth
          front-to-back communication. I followed a strict test-driven
          development (TDD) approach with Jest, writing robust, well-tested code
          across the stack. Through real-world projects, I gained experience in
          designing scalable databases, building intuitive UIs, and handling API
          requests efficiently. I became confident in debugging and
          problem-solving using tools like Insomnia and console logs. Working in
          an agile environment, I collaborated through pair programming,
          stand-ups, and code reviews—sharpening my ability to write clean code
          and communicate effectively as part of a team.
        </p>
        <DownloadButton />
      </div>
      <div>
        <div className="calendar">Loading the data just for you.</div>
      </div>
    </div>
  );
}
export default About;
