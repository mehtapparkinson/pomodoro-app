import { Link } from 'react-router-dom';
import logo from './pomodoro.png'; // Update the path as necessary
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link className="navbar-left" to="/">
          <img src={logo} alt="Logo" className="navbar-logo" />
          <h1 className="navbar-name">Pomi</h1>
        </Link>
      </div>
      <div className="navbar-right">
        <ul className="navbar-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/how-it-works">How It Works</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
