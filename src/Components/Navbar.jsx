function Navbar() {
  return (
    <header className="nav">
      <input type="checkbox" id="menu-toggle" className="menu-toggle" />
      <label htmlFor="menu-toggle" className="menu-icon">
        &#9776;
      </label>

      <h1>Katie Hardy</h1>

      <nav className="nav-links">
        <ul>
          <li>
            <a href="#about">About</a>
          </li>

          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Navbar;
