interface ChipProps {
  text: string;
  color?: string; // hex color code
}

const Chip = ({ text, color = '#00bba7' }: ChipProps) => {
  return (
    <div
      style={{ backgroundColor: color }}
      className={`flex h-fit items-center justify-center rounded-sm px-1 py-0 opacity-60`}
    >
      <small className="whitespace-nowrap text-gray-900">{text}</small>
    </div>
  );
};

export default Chip;
