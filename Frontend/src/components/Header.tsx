import { Link } from 'react-router-dom'
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
            <li><Link to="/about">About</Link></li>
            <li><Link to="/membership">Membership</Link></li>
            <li><Link to="/programs" className="dropdown-item">Programs</Link></li>
            <li><Link to="/blogs" className="dropdown-item">Blogs</Link></li>
            <li><Link to="/gallery" className="dropdown-item">Gallery</Link></li>
        <Link to="/contact" className="header-contact">CONTACT</Link>
          
            
            

            {/* dropdown */}
            {/* <li className="dropdown">
              <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="apps-chat.html" role="button" aria-haspopup="false" aria-expanded="false">
                <span className="align-middle d-none d-lg-inline-block">Gym Benefits</span> <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
              </a>

              <div className="header-list dropdown-menu dropdown-menu-end dropdown-menu-animated">
                <Link to="/programs" className="dropdown-item">Programs
                </Link>

                <Link to="/blogs" className="dropdown-item">Blogs
                </Link>

                <Link to="/gallery" className="dropdown-item">Gallery
                </Link>
              </div>
            </li> */}
          </ul>
        </nav>

        {/* <Link to="/contact" className="header-contact">CONTACT</Link> */}
      </div>
    </header>
  );
};

export default Header;