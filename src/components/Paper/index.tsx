'use client';

import { useInView } from '@/hooks/useInView';
import clsx from 'clsx';
import React, { memo } from 'react';
import styles from './paper.module.css';

interface PaperProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  title?: string;
  bgColor?: string;
}

const Paper = memo(({ children, title, bgColor = 'white', className, ...props }: PaperProps) => {
  const { ref, isVisible } = useInView();
  const titleElement = title ? (
    <div className={styles.titleBadge}>
      <h1
        className={`
          relative z-10 text-lg text-white
          md:text-3xl
          lg:text-5xl
        `}
      >
        {title}
      </h1>
    </div>
  ) : null;

  return (
    <section
      ref={ref}
      className={clsx(
        `
          min-w-xs transform space-y-5 p-6 transition duration-1000 ease-in
          md:p-8
        `,
        {
          'translate-y-0 opacity-100': isVisible,
          'translate-y-6 opacity-0': !isVisible
        },
        className
      )}
      style={{ backgroundColor: bgColor }}
      {...props}
    >
      {titleElement}
      {children}
    </section>
  );
});

Paper.displayName = 'Paper';

export default Paper;
