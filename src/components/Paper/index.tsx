import clsx from 'clsx';
import React, { memo } from 'react';
import styles from './paper.module.css';

interface PaperProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  title?: string;
  bgColor?: string;
}

const Paper = memo(({ children, title, bgColor = 'white', className, ...props }: PaperProps) => {
  // Memoize the title element to prevent unnecessary re-renders
  const titleElement = title ? (
    <div className={styles.titleBadge}>
      <h1
        className={`
          relative z-10 text-lg text-white
          md:text-xl
          lg:text-2xl
        `}
      >
        {title}
      </h1>
    </div>
  ) : null;

  return (
    <section
      className={clsx(
        `
          min-w-xs space-y-5 p-6
          md:p-8
        `,
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
