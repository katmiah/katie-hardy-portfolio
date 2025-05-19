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
        <ul>
          <li>
            Built dynamic full-stack web applications using JavaScript, React,
            Node.js, Express, and PostgreSQL
          </li>
          <li>
            Followed a strict test-driven development (TDD) approach with Jest,
            writing robust, well-tested code across the stack.
          </li>
          <li>
            Gained experience in designing scalable databases, building
            intuitive UIs, and handling API requests
          </li>
          <li>
            Collaborated through pair programming, stand-ups, and code
            reviews—sharpening my ability to write clean code and communicate
            effectively as part of a team.
          </li>
        </ul>
      </div>
    </div>
  );
}
export default About;
