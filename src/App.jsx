import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import ContactForm from "./Components/ContactForm";
import Work from "./Components/Work";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
