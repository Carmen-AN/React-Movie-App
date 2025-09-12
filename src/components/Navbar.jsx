import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/"><img src="/Images/logo.jpg" alt="logo" /></Link>
          </div>

          <div>
            <ul className="nav-links" id="nav-links">
              <li><Link to="/add">Add Movies</Link></li>
              <li><Link to="/movies">My Movies</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}