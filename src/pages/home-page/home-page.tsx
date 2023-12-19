import DownloadExtension from "../../shared/components/DownloadExtension/DownloadExtension";
import DropdownSection from "../../shared/components/DropdownSection/DropdownSection";
import FeaturesSection from "../../shared/components/FeaturesSection/FeaturesSection";
import TopSection from "../../shared/components/TopSection/TopSection";

const HomePage = () => {
  return (
    <>
      <TopSection />
      <FeaturesSection />
      <DownloadExtension />
      <DropdownSection />
    </>
  );
};

export default HomePage;
