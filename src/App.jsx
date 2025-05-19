import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Work from "./Components/Work";
import "./App.css";
import { useInView } from "react-intersection-observer";

function App() {
  const { ref: aboutRef, inView: aboutInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const { ref: workRef, inView: workInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  console.log("About section in view:", aboutInView);
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <div ref={aboutRef} className={aboutInView ? "fade-in" : ""}>
        {aboutInView && <About />}
      </div>
      <div ref={workRef}>{workInView && <Work />}</div>
      <ContactForm />
    </div>
  );
}

export default App;
