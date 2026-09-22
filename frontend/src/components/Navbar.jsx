import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Campus<span>AI</span>
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/discover">Opportunities</Link>
        <Link to="/recommendations">Recommendations</Link>
        <Link to="/login">Login</Link>

        <Link to="/register" className="nav-btn">
          Get Started
        </Link>
      </div>

    </nav>
  );
}

export default Navbar;