import React from "react";
import { Link } from "react-router-dom";
import LogoIcon from "../icons/LogoIcon";
import routerPaths from "../../../router/router-paths";
import CustomButton, { ButtonTypes } from "../buttons/CustomButton";

const DesktopNavigation = () => {
  return (
    <div className="desktop-navigation">
      <div className="header__logo">
        <Link to={routerPaths.home}>
          <LogoIcon />
        </Link>
      </div>

      <div className="desktop-navigation__nav-login">
        <nav className="desktop-navigation__container">
          <ul className="desktop-navigation__list">
            <Link to="/features" className="desktop-navigation__item">
              Features
            </Link>
            <Link to="/pricing" className="desktop-navigation__item">
              Pricing
            </Link>
            <Link to="/contact" className="desktop-navigation__item">
              Contact
            </Link>
          </ul>
        </nav>
        <CustomButton
          text="Login"
          handleClick={() => console.log("Login!")}
          type={ButtonTypes.RED}
        />
      </div>
    </div>
  );
};

export default DesktopNavigation;
