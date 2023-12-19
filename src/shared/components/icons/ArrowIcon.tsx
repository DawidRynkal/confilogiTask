interface ArrowIconProps {
  activeArrow: boolean;
}
const ArrowIcon = ({ activeArrow }: ArrowIconProps) => {
  return (
    <svg
      className={`${activeArrow && "arrow--reverse"}`}
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="12"
    >
      <path
        fill="none"
        stroke={`${activeArrow ? "hsl(0, 94%, 66%)" : "#5267DF"}`}
        stroke-width="3"
        d="M1 1l8 8 8-8"
      />
    </svg>
  );
};

export default ArrowIcon;
