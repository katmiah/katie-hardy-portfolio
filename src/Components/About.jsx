import DownloadButton from "./DownloadButton";
import { useEffect } from "react";

function About() {
  useEffect(() => {
    if (window.GitHubCalendar) {
      GitHubCalendar(".calendar", "katmiah");
    }
  }, []);

  return (
    <section id="about">
      <div className="about-section">
        <div className="skills-section">
          <header>
            <h4> My Skills</h4>
          </header>
          <div className="skills-grid">
            <div className="skill-box-container">
              <div className="skill-group">
                <h5>Programming languages</h5>
                <div className="skill-box" data-tooltip="JavaScript">
                  <p>Javascript</p>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                </div>
              </div>
            </div>

            <div className="skill-group">
              <h5>Front-end</h5>
              <div className="skill-box-container">
                <div className="skill-box">
                  <p>Bootstrap</p>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap"
                  />
                </div>
                <div className="skill-box">
                  <p>CSS</p>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
                    alt="CSS"
                  />
                </div>
                <div className="skill-box">
                  <p>HTML</p>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
                    alt="HTML"
                  />
                </div>
                <div className="skill-box">
                  <p>React</p>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    alt="React"
                  />
                </div>
                <div className="skill-box">
                  <p>React Native</p>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
                    alt="React Native"
                  />
                </div>
              </div>
            </div>

            <div className="skill-group">
              <h5>Back-end</h5>
              <div className="skill-box-container">
                <div className="skill-box">
                  <p>Node.js</p>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                  />
                </div>
                <div className="skill-box">
                  <p>SQL</p>
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqldeveloper/sqldeveloper-original.svg"
                    alt="SQL"
                  />
                </div>
              </div>
            </div>
          </div>
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
              Followed a strict test-driven development (TDD) approach with
              Jest, writing robust, well-tested code across the stack.
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
    </section>
  );
}
export default About;
