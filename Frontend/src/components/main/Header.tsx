import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react';


const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTrigger = window.innerHeight * 0.2
      setIsScrolled(window.scrollY > scrollTrigger)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header scrolled`}>
      <h1><Link to='/'>FitNest</Link></h1>

      <div className="header-inner">
        <nav>
          <ul>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/membership">Membership</NavLink></li>
            <li><NavLink to="/programs" className="dropdown-item">Programs</NavLink></li>
            <li><NavLink to="/blogs" className="dropdown-item">Blogs</NavLink></li>
            <li><NavLink to="/gallery" className="dropdown-item">Gallery</NavLink></li>

            <Link to="/contact" className="header-contact">CONTACT</Link>

          </ul>
        </nav>

      </div>
    </header>
  );
};

export default Header;