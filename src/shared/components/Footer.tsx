import { Link } from "react-router-dom";
import FacebookIcon from "../../assets/images/icon-facebook.svg";
import XIcon from "../../assets/images/icon-twitter.svg";
import routerPaths from "../../router/router-paths";
import FooterNavigation from "./FooterNavigation";
import LogoIcon from "./icons/LogoIcon";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__logo">
        <Link to={routerPaths.home}>
          <LogoIcon whiteVersion />
        </Link>
      </div>
      <div className="footer__navigation-container">
        <FooterNavigation />
      </div>
      <div className="footer__social-icons-container">
        <Link to="/facebook">
          <img src={FacebookIcon} alt="facebook logo" />
        </Link>
        <Link to="/x">
          <img src={XIcon} alt="x logo" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
