import FeatureOptions from "../FeatureOptions/FeatureOptions";
import TextComponent from "../TextComponent/TextComponent";

const FeaturesSection = () => {
  return (
    <div className="features">
      <TextComponent
        title="Features"
        centerText
        paragraph="Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go."
      />
      <div className="features__options">
        <FeatureOptions />
      </div>
    </div>
  );
};

export default FeaturesSection;
