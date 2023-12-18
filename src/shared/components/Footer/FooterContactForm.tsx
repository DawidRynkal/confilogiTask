import { useState } from "react";
import CustomButton, { ButtonTypes } from "../buttons/CustomButton";
import ErrorIcon from "../../../assets/images/icon-error.svg";

const FooterContactForm = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isValidEmail, setIsValidEmail] = useState<boolean>(true);

  const handleContactUs = () => {
    if (validateEmail(inputValue)) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };

  return (
    <div className="footer__contact-form">
      <div className="footer__title-one">
        <p>35,000+ already joined</p>
      </div>
      <div className="footer__title-two">
        <p>Stay up-to-date with what we're doing</p>
      </div>
      <div className="footer__form">
        <input
          className={`footer__input ${isValidEmail ? "" : "invalid"}`}
          type="email"
          value={inputValue}
          placeholder="Enter your email address"
          onChange={handleInputChange}
        />

        {!isValidEmail && (
          <>
            <img
              className="footer__error-icon"
              src={ErrorIcon}
              alt="invalid icon"
            />
            <p className="error-message">Whoops, make sure it's an email</p>
          </>
        )}
        <CustomButton
          handleClick={handleContactUs}
          text="Contact Us"
          type={ButtonTypes.STANDARD}
          full
        />
      </div>
    </div>
  );
};

export default FooterContactForm;
