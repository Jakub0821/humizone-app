import "../css/Navbar.css";
import { Link } from "react-router-dom";
import logo from "../assets/HumiZone.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo Humizone" />
        <h2>Humizone</h2>
      </div>
      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/czat">Czat</Link></li>
        <li><Link to="/zadania">Zadania</Link></li>
        <li><Link to="/logowanie">Logowanie</Link></li>
        <li><Link to="/grupy">Grupy</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
