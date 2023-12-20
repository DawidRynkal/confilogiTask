import { Link } from "react-router-dom";
import routerPaths from "../../../router/router-paths";
import FooterNavigation from "./FooterNavigation";
import LogoIcon from "../icons/LogoIcon";
import FooterContactForm from "./FooterContactForm";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";

const Footer = () => {
  return (
    <>
      <div className="footer__top">
        <FooterContactForm />
      </div>
      <div className="footer__bottom">
        <div className="footer__logo-nav">
          <div className="footer__logo">
            <Link to={routerPaths.home}>
              <LogoIcon whiteText />
            </Link>
          </div>
          <div className="footer__navigation-container">
            <FooterNavigation />
          </div>
        </div>
        <div className="footer__social-container">
          <Link to="/facebook">
            <FacebookIcon />
          </Link>
          <Link to="/x">
            <TwitterIcon />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
