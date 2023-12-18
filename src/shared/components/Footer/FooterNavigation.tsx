import { Link } from "react-router-dom";

const FooterNavigation = () => {
  return (
    <nav className="footer__navigation">
      <ul className="footer__list">
        <Link to="/features" className="footer__item">
          Features
        </Link>
        <Link to="/pricing" className="footer__item">
          Pricing
        </Link>
        <Link to="/contact" className="footer__item">
          Contact
        </Link>
      </ul>
    </nav>
  );
};

export default FooterNavigation;
