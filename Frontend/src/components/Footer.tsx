import { Link } from "react-router";

interface FooterProps {

}

const Footer = ({ }: FooterProps) => {
  return (
    <footer>
      <div></div>

      <div>
        <div className="imgs">
            <img src="../../../assets/images/boxing1.jpg" />
            <img src="../../../assets/images/woman1.jpg" />
        </div>

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
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;