import CustomButton, { ButtonTypes } from "../buttons/CustomButton";

interface TextComponentProps {
  title: string;
  paragraph: string;
  showButton?: boolean;
  bigTitle?: boolean;
}

const TextComponent = ({
  title,
  paragraph,
  showButton,
  bigTitle,
}: TextComponentProps) => {
  return (
    <div className="text-component">
      <h1 className={`${bigTitle && "text-component--big"}`}>{title}</h1>
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
