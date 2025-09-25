import './../css/Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
      <h2>Humizone</h2>
      <ul>
       <li><Link to="/">Strona główna</Link></li>
       <li><Link to="/czat">Czat</Link></li>
       <li><Link to="/zadania">Zadania</Link></li>
       <li><Link to="/logowanie">Logowanie</Link></li>
      </ul>

    </nav>
  );
}

export default Navbar;
