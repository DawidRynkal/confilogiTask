import FeatureOptions from "../FeatureOptions/FeatureOptions";
import TextComponent from "../TextComponent/TextComponent";

const FeaturesSection = () => {
  return (
    <div className="features">
      <TextComponent
        title="Features"
        centerText
        paragraph="A clean and simple interface to organize your fgavourite websites.
          Open a new browser tab and see your sites load instantly. Try it for
          free."
      />
      <div className="features__options">
        <FeatureOptions />
      </div>
    </div>
  );
};

export default FeaturesSection;
