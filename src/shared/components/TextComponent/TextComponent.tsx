import CustomButton, { ButtonTypes } from "../buttons/CustomButton";

interface TextComponentProps {
  title: string;
  paragraph: string;
  showButton?: boolean;
  bigTitle?: boolean;
  centerText?: boolean;
  leftVersion?: boolean;
}

const TextComponent = ({
  title,
  paragraph,
  showButton,
  bigTitle,
  centerText,
  leftVersion
}: TextComponentProps) => {
  return (
    <div
      className={`text-component ${centerText && "text-component--centered"} ${leftVersion && "text-component--left"}`}
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
