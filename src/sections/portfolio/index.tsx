'use client';

import Paper from '@/components/Paper';
import { NavItems } from '@/constants/NavItemsConst';
import { portfolioCategories, portfolioItems } from '@/constants/PortfolioConst';
import { PortfolioItem as PortfolioItemType } from '@/types/portfolio';
import { useMemo, useState } from 'react';
import PortfolioItem from './PortfolioItem';
import styles from './portfolio.module.css';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleItemClick = (item: PortfolioItemType) => {
    // You can add modal or detailed view logic here
    console.log('Portfolio item clicked:', item);
  };

  return (
    <Paper id={NavItems[4].id} title="Portfolio" bgColor="#FFF5E9">
      <div className={styles.portfolioContainer}>
        {/* Category Filter */}
        <div className={styles.categoryFilter}>
          {portfolioCategories.map((category) => (
            <button
              key={category.id}
              className={`
                ${styles.categoryButton}
                ${selectedCategory === category.id ? styles.active : ''}
              `}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label} ({category.count})
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {filteredItems.length > 0 ? (
          <div className={styles.portfolioGrid}>
            {filteredItems.map((item) => (
              <PortfolioItem key={item.id} item={item} onClick={handleItemClick} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <h3>No projects found</h3>
            <p>No projects match the selected category.</p>
          </div>
        )}
      </div>
    </Paper>
  );
};

export default Portfolio;
