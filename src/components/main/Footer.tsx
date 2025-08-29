import { Link } from "react-router";

interface FooterProps {

}

const Footer = ({ }: FooterProps) => {
  return (
    <footer>
      <div className="f-top">
        {/* header */}
        <div className="top">
          <h1>join our tribe</h1>

          <div>
            <p>Subscribe to our mailing list</p>

            <div>
              <input
                placeholder="Email address" />
              <button>SIGN UP</button>
            </div>
          </div>

        </div>

        {/* content */}
        <div className="main">
          <div className="imgs flex">
            <img src="../../../assets/images/boxing1.jpg" />
            <img src="../../../assets/images/ropes2.jpg" />
            <img src="../../../assets/images/skipping.jpg" />
          </div>

          <div className="inner">
            <ul>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/membership'>Membership</Link></li>
              <li><Link to='/programs'>Programs</Link></li>
              <li><Link to='/blogs'>Blogs</Link></li>
              <li><Link to='/gallery'>Gallery</Link></li>
            </ul>

            <div className="follow">
              <h4>Follow Us</h4>

              <div>
                <img src="../../../assets/icons/twitter.svg" />
                <img src="../../../assets/icons/facebook.svg" />
                <img src="../../../assets/icons/instagram.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="copyright">
        <p>All Rights Reserved | <a href="#">Esi Twi Tawiah</a></p>
      </div>
    </footer>
  );
};

export default Footer;