import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="navbar">
      <div className="navbar-brand">
        <span className="brand-icon">◈</span>
        <Link to="/" className="brand-name">TaskFlow</Link>
      </div>
      <nav className="navbar-links">
        <Link to="/" className={`nav-link ${pathname === "/" ? "active" : ""}`}>
          Tableau de bord
        </Link>
      </nav>
    </header>
  );
}

export default Navbar;
