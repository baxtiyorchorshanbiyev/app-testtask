import React,{useState, useEffect} from 'react';
import {FaTimes, FaBars} from 'react-icons/fa';
import {Link} from 'react-router-dom';
import './Navbar.scss';
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () =>{
    setClick(!click);
  };
  const closeMobileMenu = () => setClick(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-brand"><img src="./images/logo.svg"  alt="Logo"/></Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click? 'nav-menu active' : 'nav-menu'}>
          <div>
          <li className="nav-item"><Link to="/" onClick={closeMobileMenu} className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" onClick={closeMobileMenu} className="nav-link">About us</Link></li>
          <li className="nav-item"><Link to="/menu" onClick={closeMobileMenu} className="nav-link">Menu</Link></li>
          <li className="nav-item"><Link to="/features" onClick={closeMobileMenu} className="nav-link">Features</Link></li>
          <li className="nav-item"><Link to="/contact" onClick={closeMobileMenu} className="nav-link">Contact us</Link></li>
          </div>
          <button type="button" className="btn booking"><div className="layer">Booking Now</div>Booking Now</button>
        </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;