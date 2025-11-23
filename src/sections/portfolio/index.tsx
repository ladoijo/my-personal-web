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
    <Paper
      id={NavItems[4].id}
      title="Portfolio"
      bgColor="#e3e3ff"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -left-8 top-8 h-28 w-36 rotate-6 text-amber-200 opacity-70 sm:left-2"
          viewBox="0 0 220 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="20"
            y="26"
            width="112"
            height="80"
            rx="12"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M40 52h64M40 70h44"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M28 18 40 10l10 14 12-10 10 14"
            stroke="#22d3ee"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className="absolute right-2 top-2 h-28 w-28 -rotate-6 text-pink-200 opacity-70 sm:right-12"
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M78 18 126 66 98 78l-8 28-28 8 12-28-48-48z"
            fill="currentColor"
            stroke="black"
            strokeWidth="5"
          />
          <path
            d="M56 60 88 92"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="62" cy="54" r="6" fill="#f97316" stroke="black" strokeWidth="3" />
          <path
            d="M32 118h36l-8-14"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute bottom-4 left-1/2 h-28 w-44 -translate-x-1/2 rotate-2 text-sky-200 opacity-70"
          viewBox="0 0 240 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24"
            y="28"
            width="192"
            height="88"
            rx="12"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
          <rect
            x="32"
            y="20"
            width="192"
            height="88"
            rx="12"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M52 54h64m12 0h44M52 78h44m12 0h32"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="58" cy="40" r="6" fill="#facc15" stroke="black" strokeWidth="3" />
          <circle cx="78" cy="40" r="6" fill="#22d3ee" stroke="black" strokeWidth="3" />
          <circle cx="98" cy="40" r="6" fill="#a855f7" stroke="black" strokeWidth="3" />
        </svg>
      </div>
      <div className="relative z-10 flex w-full flex-col gap-8">
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
