import React from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import logo from '../../public/Images/logo.jpeg';
import '../../public/Css/home.css';

function Header() {
  const userId = localStorage.getItem('userId');
  const navigate =useNavigate();  
  // Function to clear userId from localStorage
  const clearUserIdFromLocalStorage = () => {
    localStorage.removeItem('userId');
    navigate('/')
  };

  // Call the function to clear userId from localStorage when user logs out or session expires
  const handleLogout = () => {
    clearUserIdFromLocalStorage();
  };

  return (
    <div className='header'>
      <div className='header-inner'>
        <div className='logo'>
          <Link to='/'><img src={logo} alt="Logo" className="logo-image" /></Link>
        </div>
        <nav className="navbar">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to='/' className='nav-link'>HOME</Link>
            </li>
            <li className="nav-item">
              <Link to='/blog' className='nav-link'>BLOG</Link>
            </li>
            {/* <li className="nav-item">
              <Link to='/pricing' className='nav-link'>PRICING</Link>
            </li> */}
            { <li className="nav-item">
              <Link to='/try' className='nav-link'>TRY IT NOW</Link>
            </li> }
            <li className="nav-item">
              <Link to='/signin' className='nav-link'>SIGN IN</Link>
            </li>
            {/* <li className="nav-item ">
            {userId!==null?<Link to='' onClick={handleLogout} className="nav-link">LOGOUT</Link>:<Link to='/login' className="nav-link">LOGIN</Link>}
            </li> */}

          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Header;
