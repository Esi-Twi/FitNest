import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <header className="header">
      <h1>FitNest</h1>

      <div className="header-inner">
        <nav>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/membership">Membership</Link></li>

            {/* dropdown */}
            <li><a href="">Gym Benefits</a></li>

            <li className="dropdown">
              <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="apps-chat.html#" role="button" aria-haspopup="false" aria-expanded="false">
                <span className="align-middle d-none d-lg-inline-block">English</span> <i className="mdi mdi-chevron-down d-none d-sm-inline-block align-middle"></i>
              </a>

              <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated">
                <a href="#" className="dropdown-item">
                </a>

                <a href="#" className="dropdown-item">
                </a>

                <a href="#" className="dropdown-item">
                </a>

                <a href="" className="dropdown-item">
                </a>
              </div>
            </li>
          </ul>
        </nav>

        <Link to="/contact" className="header-contact">CONTACT</Link>
      </div>
    </header>
  );
};

export default Header;