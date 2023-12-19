interface ImageShapeComponentProps {
  ilustration: string;
  leftShape?: boolean;
  highImage?: boolean;
}

const ImageShapeComponent = ({
  ilustration,
  leftShape,
  highImage,
}: ImageShapeComponentProps) => {
  return (
    <div
      className={`${
        leftShape ? "image-shape__image--left" : "image-shape__image"
      }`}
    >
      <div
        className={
          leftShape ? "image-shape__shape--left" : "image-shape__shape"
        }
      >
        <img
          className={`${highImage && "image--high"}`}
          src={ilustration}
          alt="ilustration"
        />
      </div>
    </div>
  );
};

export default ImageShapeComponent;
