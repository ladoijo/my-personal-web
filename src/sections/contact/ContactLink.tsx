import Link from 'next/link';
import React, { memo } from 'react';
import styles from './contact.module.css';

interface ContactLinkProps {
  href: string;
  icon: React.ComponentType<{ name: string; className?: string; style?: React.CSSProperties }>;
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
    iconBgColor = '#000000',
    iconTextColor = 'var(--color-6)'
  }: ContactLinkProps) => (
    <Link
      href={href}
      className={styles.contactLink}
      style={
        {
          '--hover-bg-color': iconBgColor
        } as React.CSSProperties
      }
    >
      <Icon
        name={iconName}
        style={{
          backgroundColor: iconBgColor,
          color: iconTextColor
        }}
        className="h-16 w-16 p-2 transition-colors duration-300"
      />
      <div className="flex flex-col p-2">
        <h3 className="font-bold">{title}</h3>
        {description && <span className="text-gray-500">{description}</span>}
      </div>
    </Link>
  )
);

ContactLink.displayName = 'ContactLink';

export default ContactLink;
