interface ChipProps {
  text: string;
  size?: 'xs' | 'sm' | 'md';
  bgColor?: string; // hex color code
  textColor?: string; // hex color code
}

const FontSize = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem'
};

const Chip = ({ size = 'sm', text, bgColor = '#00bba7', textColor = '#101828' }: ChipProps) => {
  return (
    <div style={{ backgroundColor: bgColor }} className={`flex h-fit w-fit rounded-sm px-1 py-0`}>
      <span style={{ color: textColor, fontSize: FontSize[size] }} className="whitespace-nowrap">
        {text}
      </span>
    </div>
  );
};

export default Chip;
