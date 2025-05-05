import image from "../assets/image.jpeg";
import ContactForm from "./ContactForm";
import { useEffect } from "react";

function Home() {
  return (
    <div className="bio-container">
      <div className="bio-content">
        <div className="text-container">
          <header>
            <h2>Katie Hardy</h2>
          </header>
          <p>
            Hi, I’m a full-stack developer who loves turning ideas into awesome
            web experiences. I’m always exploring new tech and enjoy building
            apps that are fast, fun, and great to use—both behind the scenes and
            on the screen.
          </p>
        </div>

        <div className="image-container">
          <img
            className="image"
            src={image}
            alt="Woman looking up at a pink camellia"
          />
        </div>
      </div>
      <header className="contact-me">
        <h5>Contact me 👇🏻</h5>
      </header>
      <section style={{ minHeight: "400px" }}></section>
      <div className="App">
        <ContactForm />
      </div>
    </div>
  );
}
export default Home;
