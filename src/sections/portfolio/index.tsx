'use client';

import Button from '@/components/Button';
import Paper from '@/components/Paper';
import { NavItems } from '@/constants/NavItemsConst';
import { portfolioItems, projectCategories } from '@/constants/ResumeConst';
import { ProjectItem as PortfolioItemType } from '@/types/portfolio';
import { useMemo, useState } from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredItems = useMemo(() => {
    if (selectedCategory === 'all') {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === selectedCategory);
  }, [selectedCategory]);

  const handleItemClick = (item: PortfolioItemType) => {
    console.log('Portfolio item clicked:', item);
  };

  return (
    <Paper id={NavItems[4].id} title="Portfolio" bgColor="#e3e3ff">
      <div className="w-full">
        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap justify-center gap-4 md:justify-start">
          {projectCategories.map((category) => (
            <Button
              key={category.id}
              bgColor="#DDEB9D"
              pressed={selectedCategory === category.id}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label} ({category.count})
            </Button>
          ))}
        </div>

        {/* Portfolio Grid */}
        {filteredItems.length > 0 ? (
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredItems.map((item) => (
              <PortfolioItem key={item.id} item={item} onClick={handleItemClick} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center text-gray-600">
            <h3 className="mb-4 text-gray-800">No projects found</h3>
            <p>No projects match the selected category.</p>
          </div>
        )}
      </div>
    </Paper>
  );
};

export default Portfolio;
