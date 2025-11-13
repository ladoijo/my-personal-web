interface ChipProps {
  text: string;
  bgColor?: string; // hex color code
  textColor?: string; // hex color code
}

const Chip = ({ text, bgColor = '#00bba7', textColor = '#101828' }: ChipProps) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={`flex h-fit items-center justify-center rounded-sm px-1 py-0 opacity-60`}
    >
      <small style={{ color: textColor }} className="whitespace-nowrap">
        {text}
      </small>
    </div>
  );
};

export default Chip;
