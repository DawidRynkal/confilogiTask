import CustomButton, { ButtonTypes } from "../buttons/CustomButton";

interface TextComponentProps {
  title: string;
  paragraph: string;
  showButton?: boolean;
}

const TextComponent = ({
  title,
  paragraph,
  showButton,
}: TextComponentProps) => {
  return (
    <div className="text-component">
      <h1>{title}</h1>
      <p>{paragraph}</p>
      {showButton && (
        <CustomButton
          handleClick={() => console.log("more info clicked")}
          text="More Info"
          type={ButtonTypes.STANDARD}
        />
      )}
    </div>
  );
};

export default TextComponent;
