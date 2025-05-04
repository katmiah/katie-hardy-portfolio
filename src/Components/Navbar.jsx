import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="nav">
        <h1>Katie Hardy</h1>
        <ul>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/work">Work</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
