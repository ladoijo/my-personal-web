import { tv } from 'tailwind-variants';

const tvTitle = tv({
  variants: {
    size: {
      sm: 'text-sm md:text-base lg:text-lg', // 👈 responsive chain
      md: 'text-base md:text-lg lg:text-xl',
      lg: 'text-lg md:text-xl lg:text-2xl',
      xl: 'text-xl md:text-2xl lg:text-3xl'
    }
  },
  defaultVariants: {
    size: 'lg'
  }
});

interface TitleProps {
  title: string;
  size: 'sm' | 'md' | 'lg' | 'xl';
  hasBorder?: boolean;
}

const Title = ({ title, size, hasBorder = false }: TitleProps) => {
  return (
    <>
      <div className="relative inline-block">
        <h1 className={`relative z-10 ${tvTitle({ size })}`}>{title}</h1>
        {/* <div
          aria-hidden
          className="pointer-events-none absolute right-0 bottom-0 z-0 h-8 w-12 translate-x-8 translate-y-2 bg-[radial-gradient(currentColor_2px,transparent_1px)] bg-[length:10px_10px] text-emerald-500"
        ></div> */}
      </div>
      {hasBorder && <hr className="my-4 border-[1px] border-black" />}
    </>
  );
};

export default Title;
