import React, { memo } from 'react';
import Link from 'next/link';
import styles from './contact.module.css';

interface ContactLinkProps {
  href: string;
  icon: React.ComponentType<{ name: string; className?: string }>;
  iconName: string;
  title: string;
  description?: string;
  iconBgColor: string;
  iconTextColor?: string;
}

const ContactLink = memo(
  ({
    href,
    icon: Icon,
    iconName,
    title,
    description,
    iconBgColor,
    iconTextColor = 'text-white'
  }: ContactLinkProps) => {
    // Map Tailwind colors to CSS custom properties
    const getHoverBgColor = (bgClass: string): string => {
      const colorMap: Record<string, string> = {
        'bg-[#f87171]': '#f87171',
        'bg-[#2dd4bf]': '#2dd4bf',
        'bg-[#3b82f6]': '#3b82f6',
        'bg-[#00bba7]': '#00bba7',
        'bg-[#26ab15]': '#26ab15',
        'bg-[#4b5563]': '#4b5563'
      };
      return colorMap[bgClass] || '#000000';
    };

    return (
      <Link
        href={href}
        className={styles.contactLink}
        style={
          {
            '--hover-bg-color': getHoverBgColor(iconBgColor)
          } as React.CSSProperties
        }
      >
        <Icon
          name={iconName}
          className={`
            h-16 w-16 p-2 transition-colors duration-300
            ${iconBgColor}
            ${iconTextColor}
          `}
        />
        <div className={`flex flex-col p-2`}>
          <h3 className="font-bold">{title}</h3>
          {description && <span className="text-gray-500">{description}</span>}
        </div>
      </Link>
    );
  }
);

ContactLink.displayName = 'ContactLink';

export default ContactLink;
