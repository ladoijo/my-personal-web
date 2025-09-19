import React from 'react';
import Image from 'next/image';
import { PortfolioItem as PortfolioItemType } from '@/types/portfolio';
import styles from './portfolio.module.css';

interface PortfolioItemProps {
  item: PortfolioItemType;
  onClick?: (item: PortfolioItemType) => void;
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ item, onClick }) => {
  const handleClick = () => {
    onClick?.(item);
  };

  return (
    <div
      className={styles.portfolioItem}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
    >
      <div className={styles.imageContainer}>
        <Image
          src={item.image}
          alt={item.title}
          className={styles.projectImage}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={item.featured}
        />
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            {item.liveUrl && (
              <a
                href={item.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
            {item.githubUrl && (
              <a
                href={item.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
            )}
          </div>
        </div>
        {item.featured && <div className={styles.featuredBadge}>Featured</div>}
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{item.title}</h3>
        <p className={styles.description}>{item.description}</p>

        <div className={styles.technologies}>
          {item.technologies.map((tech, index) => (
            <span key={index} className={styles.techChip}>
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
