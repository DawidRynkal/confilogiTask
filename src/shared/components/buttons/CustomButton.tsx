export enum ButtonTypes {
  BORDER = "border",
  RED = "red",
  GRAY = "gray",
  STANDARD = "standard",
}

interface CustomButtonProps {
  handleClick: () => void;
  text: string;
  type:
    | ButtonTypes.BORDER
    | ButtonTypes.GRAY
    | ButtonTypes.RED
    | ButtonTypes.STANDARD;
  full?: boolean;
}

const CustomButton = ({ handleClick, text, type, full }: CustomButtonProps) => {
  return (
    <button
      onClick={handleClick}
      className={`button button__${type} ${full && "button--full"}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;
