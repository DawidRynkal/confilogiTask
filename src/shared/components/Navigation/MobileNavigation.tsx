import LogoIcon from "../icons/LogoIcon";
import CloseIcon from "../../../assets/images/icon-close.svg";
import { Link } from "react-router-dom";
import FacebookIcon from "../icons/FacebookIcon";
import TwitterIcon from "../icons/TwitterIcon";
import CustomButton, { ButtonTypes } from "../buttons/CustomButton";

interface MobileNavigationProps {
  handleClose: (param: boolean) => void;
}
const MobileNavigation = ({ handleClose }: MobileNavigationProps) => {
  return (
    <div className="mobile-navigation">
      <div className="mobile-navigation__top">
        <LogoIcon whiteSymbol whiteText />
        <div onClick={() => handleClose(false)}>
          <img src={CloseIcon} alt="close icon" />
        </div>
      </div>
      <div className="mobile-navigation__menu-wrapper">
        <nav className="mobile-navigation__menu">
          <ul className="mobile-navigation__list">
            <Link to="/features" className="mobile-navigation__item">
              Features
            </Link>
            <Link to="/pricing" className="mobile-navigation__item">
              Pricing
            </Link>
            <Link to="/contact" className="mobile-navigation__item">
              Contact
            </Link>
            <CustomButton
              text="Login"
              handleClick={() => console.log("Login!")}
              type={ButtonTypes.BORDER}
              full
            />
          </ul>
        </nav>
      </div>

      <div className="mobile-navigation__social">
        <Link to="/facebook">
          <FacebookIcon />
        </Link>
        <Link to="/x">
          <TwitterIcon />
        </Link>
      </div>
    </div>
  );
};

export default MobileNavigation;
