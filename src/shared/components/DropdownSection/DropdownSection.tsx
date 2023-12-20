import { useState } from "react";
import TextComponent from "../TextComponent/TextComponent";
import CustomButton, { ButtonTypes } from "../buttons/CustomButton";
import ArrowIcon from "../icons/ArrowIcon";

const DropdownSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleOpenClick = (index: number) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="dropdown">
      <TextComponent
        title="Frequently Asked Questions"
        centerText
        paragraph="Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us."
      />
      <div className="dropdown__elements">
        <div
          className={`dropdown__element ${
            expandedIndex === 0 ? "expanded" : ""
          }`}
        >
          <div onClick={() => handleOpenClick(0)} className="dropdown__title">
            <p>What is Bookmark?</p>
            <ArrowIcon activeArrow={expandedIndex === 0} />
          </div>
          {expandedIndex === 0 && (
            <p className="dropdown__content">
              Here are some of our FAQs. If you have any other questions you'd
              like answered, please feel free to email us.
            </p>
          )}
        </div>
        <div
          className={`dropdown__element ${
            expandedIndex === 1 ? "expanded" : ""
          }`}
        >
          <div onClick={() => handleOpenClick(1)} className="dropdown__title">
            <p> How can i request a new browser?</p>
            <ArrowIcon activeArrow={expandedIndex === 1} />
          </div>
          {expandedIndex === 1 && (
            <p className="dropdown__content">
              Here are some of our FAQs. If you have any other questions you'd
              like answered, please feel free to email us.
            </p>
          )}
        </div>
        <div
          className={`dropdown__element ${
            expandedIndex === 2 ? "expanded" : ""
          }`}
        >
          <div onClick={() => handleOpenClick(2)} className="dropdown__title">
            <p>Is there a mobile app?</p>
            <ArrowIcon activeArrow={expandedIndex === 2} />
          </div>
          {expandedIndex === 2 && (
            <p className="dropdown__content">
              Here are some of our FAQs. If you have any other questions you'd
              like answered, please feel free to email us.
            </p>
          )}
        </div>
        <div
          className={`dropdown__element ${
            expandedIndex === 3 ? "expanded" : ""
          }`}
        >
          <div onClick={() => handleOpenClick(3)} className="dropdown__title">
            <p>What about other Chromium browsers?</p>
            <ArrowIcon activeArrow={expandedIndex === 3} />
          </div>
          {expandedIndex === 3 && (
            <p className="dropdown__content">
              Here are some of our FAQs. If you have any other questions you'd
              like answered, please feel free to email us.
            </p>
          )}
        </div>
      </div>
      <CustomButton
        text="More Info"
        type={ButtonTypes.STANDARD}
        handleClick={() => console.log("more info clicked!")}
      />
    </div>
  );
};

export default DropdownSection;
