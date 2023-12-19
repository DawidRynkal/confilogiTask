import CustomButton, { ButtonTypes } from "../buttons/CustomButton";
import Ilustration from "../../../assets/images/illustration-hero.svg";

const TopSection = () => {
  return (
    <div className="top-section">
      <div className="top-section__image">
        <div className="top-section__shape">
          <img src={Ilustration} alt="ilustration" />
        </div>
      </div>
      <div className="top-section__text-container">
        <h1>A Simple Bookmark Manager</h1>
        <p>
          A clean and simple interface to organize your fgavourite websites.
          Open a new browser tab and see your sites load instantly. Try it for
          free.
        </p>
      </div>
      <div className="top-section__buttons-container">
        <CustomButton
          text="Get it on Chrome"
          handleClick={() => console.log("get it chrome")}
          type={ButtonTypes.STANDARD}
        />
        <CustomButton
          text="Get it on Firefox"
          handleClick={() => console.log("get it chrome")}
          type={ButtonTypes.GRAY}
        />
      </div>
    </div>
  );
};

export default TopSection;
