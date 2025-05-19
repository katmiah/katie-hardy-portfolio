import image from "../assets/image.jpeg";
import ContactForm from "./ContactForm";
import DownloadButton from "./DownloadButton";

import About from "./About";

function Home() {
  return (
    <div className="bio-container">
      <div className="bio-content">
        <div className="text-container">
          <header>
            <h2>Katie Hardy</h2>
          </header>
          <p>Software Developer</p>
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
    </div>
  );
}
export default Home;
