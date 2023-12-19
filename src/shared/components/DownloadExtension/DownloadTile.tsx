interface DownloadTileProps {
  image: string;
  title: string;
  subTitle: string;
}

const DownloadTile = ({ image, title, subTitle }: DownloadTileProps) => {
  return (
    <div className="download-tile">
      <img src={image} alt="extension icon" />
      <h2 className="download-tile__title">{title}</h2>
      <p className="download-tile__subtitle">{subTitle}</p>
    </div>
  );
};

export default DownloadTile;
