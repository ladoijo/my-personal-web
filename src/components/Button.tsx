import React from 'react';
import clsx from 'clsx';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  bgColor?: string;
};

const Button = ({
  title,
  className,
  onClick,
  bgColor = '#f0b21a',
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      style={{ ['--btn-bg' as any]: bgColor }}
      className={clsx(
        'group relative rounded-md border-2 border-black px-2 py-1 font-bold text-black',
        'bg-[var(--btn-bg)] shadow-[4px_4px_black] transition-all duration-300',
        'hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-[4px_4px_var(--btn-bg)]',
        'active:transform-[translate(3px,3px)] active:shadow-none',
        className
      )}
      {...props}
    >
      {children}
      {title && (
        <span className="absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-black px-2 py-1 text-xs text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          {title}
        </span>
      )}
    </button>
  );
};

export default Button;
