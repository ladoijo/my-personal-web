import clsx from 'clsx';
import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  bgColor?: string;
  pressed?: boolean;
};

const Button = ({
  title,
  className,
  bgColor = '#fdebc3',
  children,
  disabled = false,
  pressed = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      style={{ ['--btn-bg' as string]: bgColor }}
      className={clsx(
        'group relative rounded-md border-2 border-black px-2 py-1 font-bold text-black',
        'bg-[var(--btn-bg)] shadow-[4px_4px_black] transition-all duration-300',
        {
          'hover:cursor-pointer hover:bg-black hover:text-white hover:shadow-[4px_4px_var(--btn-bg)] active:transform-[translate(3px,3px)] active:shadow-none':
            !disabled && !pressed,
          'cursor-not-allowed opacity-60': disabled,
          'transform-[translate(3px,3px)] cursor-default bg-black text-white shadow-none': pressed
        },
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
      {title && (
        <span
          className={`
            absolute bottom-full left-1/2 mb-2 -translate-x-1/2 rounded-md bg-black px-2 py-1
            text-xs text-white opacity-0 transition-opacity duration-200
            group-hover:opacity-100
          `}
        >
          {title}
        </span>
      )}
    </button>
  );
};

export default Button;
