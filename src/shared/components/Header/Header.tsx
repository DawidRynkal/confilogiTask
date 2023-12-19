import { Link } from "react-router-dom";
import Hamburger from "../../../assets/images/icon-hamburger.svg";
import routerPaths from "../../../router/router-paths";
import LogoIcon from "../icons/LogoIcon";
import MobileNavigation from "../Navigation/MobileNavigation";
import { useState } from "react";

const Header = () => {
  const [showMobileNav, setShowMobileNav] = useState<boolean>(false);

  return (
    <>
      <div
        className={`mobile-nav__container ${
          showMobileNav && "mobile-nav__container--show"
        }`}
      >
        <MobileNavigation handleClose={setShowMobileNav} />
      </div>

      <div className="header">
        <div className="header__logo">
          <Link to={routerPaths.home}>
            <LogoIcon />
          </Link>
        </div>

        <div
          onClick={() => setShowMobileNav(true)}
          className="header__menu-icon"
        >
          <img src={Hamburger} alt="hamburger menu" />
        </div>
      </div>
    </>
  );
};

export default Header;
