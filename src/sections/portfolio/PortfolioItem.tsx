import Chip from '@/components/Chip';
import { ProjectItem as PortfolioItemType } from '@/types/portfolio';
import Image from 'next/image';
import React from 'react';

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
      className={`
        group cursor-pointer overflow-hidden rounded-xl border-2 border-black bg-white p-3
        transition-all duration-300
        hover:-translate-y-1
      `}
      onTouchStart={handleClick}
    >
      <div className="h-full w-full rounded-xl border-2 border-black p-3">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={item.image}
            alt={item.title}
            className={`
              h-full w-full object-cover transition-transform duration-300
              group-hover:scale-105
            `}
            fill
            priority={item.featured}
          />
          <div
            className={`
              absolute inset-0 flex items-center justify-center bg-black opacity-0
              transition-opacity duration-300
              group-hover:opacity-100
            `}
          >
            <div
              className={`
                flex flex-col gap-2
                md:flex-row md:gap-4
              `}
            >
              {item.liveUrl && (
                <a
                  href={item.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`
                    rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors
                    duration-300
                    hover:bg-blue-700
                  `}
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
                  className={`
                    rounded-md bg-blue-600 px-4 py-2 font-medium text-white transition-colors
                    duration-300
                    hover:bg-blue-700
                  `}
                  onClick={(e) => e.stopPropagation()}
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
          {item.featured && (
            <div
              className={`
                absolute top-4 right-4 rounded-full bg-red-500 px-3 py-1 text-xs font-semibold
                tracking-wider text-white uppercase
              `}
            >
              Featured
            </div>
          )}
        </div>

        <div className="p-6">
          <h3 className="mb-2 text-xl font-semibold text-gray-800">{item.title}</h3>
          <p className="mb-4 leading-relaxed text-gray-600">{item.description}</p>
          <div className="flex flex-wrap gap-2">
            {item.technologies.map((tech) => (
              <Chip key={tech} text={tech} bgColor="#37353E" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
