import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';


const Header = () => {


  return (
    <header className='header'>
      <h1 className='font-bold'><Link to='/'>FitNest</Link></h1>

      <div className="header-inner">
        <nav>
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/membership">Membership</NavLink></li>
            <li><NavLink to="/programs" className="dropdown-item">Programs</NavLink></li>
            <li><NavLink to="/blogs" className="dropdown-item">Blogs</NavLink></li>
            <li><NavLink to="/facilities" className="dropdown-item">Facilities</NavLink></li>

            <Link to="/contact" className="header-contact">CONTACT</Link>

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;