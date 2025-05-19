import image from "../assets/image.jpeg";
import ContactForm from "./ContactForm";
import { useEffect } from "react";
import DownloadButton from "./DownloadButton";

function Home() {
  return (
    <div className="bio-container">
      <div className="bio-content">
        <div className="text-container">
          <header>
            <h2>Katie Hardy</h2>
          </header>
          <DownloadButton />
        </div>

        <div className="image-container">
          <img
            className="image"
            src={image}
            alt="Woman looking up at a pink camellia"
          />
        </div>
      </div>

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

      {/* <header className="contact-me">
        <h3>Contact me 👇🏻</h3>
      </header>
      <section className="contact-form-section" id="contactForm">
        <div style={{ height: "300px" }}></div>
        <div className="form-wrapper">
          <ContactForm />
        </div>
      </section> */}
    </div>
  );
}
export default Home;
