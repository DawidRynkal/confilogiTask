import TextComponent from "../TextComponent/TextComponent";
import DownloadTile from "./DownloadTile";
import ChromeIcon from "../../../assets/images/logo-chrome.svg";
import FirefoxIcon from "../../../assets/images/logo-firefox.svg";
import OperaIcon from "../../../assets/images/logo-opera.svg";
import CustomButton, { ButtonTypes } from "../buttons/CustomButton";
import Dots from "../../../assets/images/bg-dots.svg";

const DownloadExtension = () => {
  return (
    <div className="download-extension">
      <TextComponent
        title="Dwonload the extension"
        centerText
        paragraph="A clean and simple interface to organize your fgavourite websites.
        Open a new browser tab and see your sites load instantly. Try it for
        free."
      />
      <div className="download-extension__tiles">
        <div className="download-extension__tile">
          <DownloadTile
            image={ChromeIcon}
            title="Add to Chrome"
            subTitle="Minimum version 62"
          />
          <img className="download-extension__dots" src={Dots} alt="dots" />
          <CustomButton
            handleClick={() => console.log("add extension clicked!")}
            text="Add & Install Extension"
            type={ButtonTypes.STANDARD}
          />
        </div>
        <div className="download-extension__tile">
          <DownloadTile
            image={FirefoxIcon}
            title="Add to Firefox"
            subTitle="Minimum version 55"
          />
          <img className="download-extension__dots" src={Dots} alt="dots" />
          <CustomButton
            handleClick={() => console.log("add extension clicked!")}
            text="Add & Install Extension"
            type={ButtonTypes.STANDARD}
          />
        </div>
        <div className="download-extension__tile">
          <DownloadTile
            image={OperaIcon}
            title="Add to Opera"
            subTitle="Minimum version 46"
          />
          <img className="download-extension__dots" src={Dots} alt="dots" />
          <CustomButton
            handleClick={() => console.log("add extension clicked!")}
            text="Add & Install Extension"
            type={ButtonTypes.STANDARD}
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadExtension;
