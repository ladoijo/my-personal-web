'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import { IconComponent } from '@/types/icon';

type AccordionProps = React.ButtonHTMLAttributes<HTMLDivElement> & {
  leftIcon?: IconComponent;
  rightIcon?: IconComponent;
  title: string;
  children: React.ReactNode;
};

const Accordion = ({
  leftIcon,
  rightIcon,
  title,
  className,
  children,
  ...props
}: AccordionProps) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const handleClick = () => {
    setExpanded(!expanded);
  };
  const LeftIcon = leftIcon;
  const RightIcon = rightIcon;

  return (
    <div>
      <div
        onClick={handleClick}
        className={clsx(
          'h-full w-full rounded-md border-2 border-black px-2 py-2 font-bold text-black',
          'flex flex-row shadow-[4px_4px_black] transition-all duration-300',
          'hover:cursor-pointer hover:bg-black hover:text-white',
          className
        )}
        {...props}
      >
        {!!LeftIcon && (
          <LeftIcon className="flex h-full w-full flex-1 items-center justify-center text-black" />
        )}
        <b>{title}</b>
        {!!RightIcon && (
          <RightIcon className="flex h-full w-full flex-1 items-center justify-center text-black" />
        )}
      </div>
      {expanded && (
        <div className="rounded-b-md border-2 border-black shadow-[4px_4px_black]">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
