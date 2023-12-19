import CustomButton, { ButtonTypes } from "../buttons/CustomButton";

interface TextComponentProps {
  title: string;
  paragraph: string;
  showButton?: boolean;
  bigTitle?: boolean;
  centerText?: boolean;
}

const TextComponent = ({
  title,
  paragraph,
  showButton,
  bigTitle,
  centerText,
}: TextComponentProps) => {
  return (
    <div
      className={`text-component ${centerText && "text-component--centered"}`}
    >
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
