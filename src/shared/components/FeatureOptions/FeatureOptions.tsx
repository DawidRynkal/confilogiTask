import { useState } from "react";
import ImageShapeComponent from "../ImageShapeComponent/ImageShapeComponent";
import Ilustration from "../../../assets/images/illustration-features-tab-1.svg";
import Ilustration2 from "../../../assets/images/illustration-features-tab-2.svg";
import Ilustration3 from "../../../assets/images/illustration-features-tab-3.svg";
import TextComponent from "../TextComponent/TextComponent";

const FeatureOptions = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveIndex(index);
  };

  const renderContent = (index: number) => {
    switch (index) {
      case 0:
        return (
          <>
            <ImageShapeComponent ilustration={Ilustration} leftShape />
            <TextComponent
              title="Bookmark in one click"
              showButton
              paragraph="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
            />
          </>
        );
      case 1:
        return (
          <>
            <ImageShapeComponent
              ilustration={Ilustration2}
              leftShape
              highImage
            />
            <TextComponent
              title="Speedy Searching"
              showButton
              paragraph="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
            />
          </>
        );
      case 2:
        return (
          <>
            <ImageShapeComponent
              ilustration={Ilustration3}
              leftShape
              highImage
            />
            <TextComponent
              title="Easy Sharing"
              showButton
              paragraph="A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free."
            />
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="feature-options">
      <div className="feature-options__elements">
        {["Simple Bookmarking", "Speedy Searching", "Easy Sharing"].map(
          (item, index) => (
            <p
              key={index}
              className={`feature-options__item ${
                activeIndex === index ? "feature-options__item--active" : ""
              }`}
              onClick={() => handleItemClick(index)}
            >
              {item}
            </p>
          )
        )}
      </div>
      {renderContent(activeIndex)}
    </div>
  );
};

export default FeatureOptions;
