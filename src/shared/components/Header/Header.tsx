import { Link } from "react-router-dom";
import Hamburger from "../../../assets/images/icon-hamburger.svg";
import routerPaths from "../../../router/router-paths";
import LogoIcon from "../icons/LogoIcon";

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <Link to={routerPaths.home}>
          <LogoIcon />
        </Link>
      </div>

      <div className="header__menu-icon">
        <img src={Hamburger} alt="hamburger menu" />
      </div>
    </div>
  );
};

export default Header;
