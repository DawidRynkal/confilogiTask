import CustomButton, { ButtonTypes } from "../buttons/CustomButton";
import Ilustration from "../../../assets/images/illustration-hero.svg";
import TextComponent from "../TextComponent/TextComponent";
import ImageShapeComponent from "../ImageShapeComponent/ImageShapeComponent";

const TopSection = () => {
  return (
    <div className="top-section">
      <ImageShapeComponent ilustration={Ilustration} />
      <div className="top-section__text">
        <TextComponent
          title="A Simple Bookmark Manager"
          bigTitle
          paragraph="A clean and simple interface to organize your fgavourite websites.
          Open a new browser tab and see your sites load instantly. Try it for
          free."
        />
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
    </div>
  );
};

export default TopSection;
