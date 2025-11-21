'use client';

import Button from '@/components/Button';
import Paper from '@/components/Paper';
import { NavItems } from '@/constants/NavItemsConst';
import { IPortfolioProject, PortfolioProjects } from '@/constants/ResumeConst';
import { useMemo, useRef, useState } from 'react';
import PortfolioItem from './PortfolioItem';

const categoryColors: Record<string, string> = {
  backend: 'var(--color-5)',
  web: 'var(--color-3)',
  mobile: 'var(--color-4)'
};

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const portfolioRef = useRef<HTMLDivElement>(null);
  const hasProjects = Object.keys(PortfolioProjects).length;
  const totalProject = useMemo(() => {
    if (!hasProjects) return 0;
    let count = 0;
    for (const value of Object.values(PortfolioProjects)) {
      count += value.items.length;
    }
    return count;
  }, [hasProjects]);

  const filteredItems = useMemo(() => {
    const items: IPortfolioProject['items'] = [];
    if (selectedCategory === 'all') {
      for (const value of Object.values(PortfolioProjects)) {
        items.push(...value.items);
      }
    } else {
      items.push(...PortfolioProjects[selectedCategory].items);
    }
    return items;
  }, [selectedCategory]);

  return (
    <Paper id={NavItems[4].id} title="Portfolio" bgColor="#e3e3ff">
      <div className="flex w-full flex-col gap-8">
        <div
          className={`
            flex flex-wrap justify-center gap-4
            md:justify-start
          `}
        >
          <Button pressed={selectedCategory === 'all'} onClick={() => setSelectedCategory('all')}>
            All ({totalProject})
          </Button>
          {Object.entries(PortfolioProjects).map(([key, value]) => (
            <Button
              key={key}
              pressed={selectedCategory === key}
              onClick={() => {
                setSelectedCategory(key);
              }}
            >
              {value.label} ({value.items.length})
            </Button>
          ))}
        </div>
        <div ref={portfolioRef} className="relative flex flex-col items-start overflow-hidden pt-1">
          {filteredItems.length > 0 ? (
            <div
              className={`
                columns-1 gap-x-8
                md:columns-2
                lg:columns-3
              `}
            >
              {filteredItems.map((item) => {
                const category =
                  Object.entries(PortfolioProjects).find(([_, project]) =>
                    project.items.some((i) => i.slug === item.slug)
                  )?.[0] || 'all';

                return (
                  <PortfolioItem
                    key={item.slug}
                    item={item}
                    bgColor={categoryColors[category] || categoryColors['all']}
                  />
                );
              })}
            </div>
          ) : (
            <div className="py-12 text-center text-gray-600">
              <h3 className="mb-4 text-gray-800">No projects found</h3>
              <p>No projects match the selected category.</p>
            </div>
          )}
        </div>
      </div>
    </Paper>
  );
};

export default Portfolio;
