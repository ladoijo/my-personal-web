import Button from '@/components/Button';
import Chip from '@/components/Chip';
import ImageSafe from '@/components/ImageSafe';
import { IPortfolioProject } from '@/constants/ResumeConst';
import React, { useEffect, useRef, useState } from 'react';

interface PortfolioItemProps {
  bgColor?: string;
  item: IPortfolioProject['items'][0];
}

const PortfolioItem: React.FC<PortfolioItemProps> = ({ bgColor = 'var(--color-1)', item }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [descriptionHeight, setDescriptionHeight] = useState(0);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const hasExternalLink = Boolean(item.urlLive || item.urlGitHub);
  const collapsedHeight = 60;

  const handleOpenLink = (url?: string) => {
    if (!url) return;
    window.open(url, '_blank');
  };

  useEffect(() => {
    const paragraphEl = descriptionRef.current;
    if (!paragraphEl) return;

    const updateHeight = () => setDescriptionHeight(paragraphEl.scrollHeight);
    updateHeight();

    const resizeObserver = new ResizeObserver(updateHeight);
    resizeObserver.observe(paragraphEl);
    return () => resizeObserver.disconnect();
  }, [item.description]);

  return (
    <div
      className={`
        group mb-8 cursor-pointer break-inside-avoid-column overflow-hidden rounded-xl border-2
        border-black p-2 transition-all duration-300
        hover:-translate-y-1
      `}
      style={{ backgroundColor: bgColor }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div
        className={`
          flex h-full w-full flex-col overflow-hidden rounded-md border-2 border-black bg-black
        `}
      >
        <div className="relative flex min-h-48 w-full overflow-hidden">
          <ImageSafe
            src={item.urlImage}
            alt={item.title}
            className={`
              object-contain transition-transform duration-300
              group-hover:scale-120
            `}
            width={1024}
            height={768}
          />
        </div>

        <div className="flex h-full flex-col justify-between gap-2 border-t-2 bg-white p-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold text-gray-800">{item.title}</h1>
            <div
              className={`
                relative flex flex-col items-start overflow-hidden transition-[max-height]
                duration-500 ease-in-out
              `}
              ref={descriptionRef}
              style={{
                maxHeight: isExpanded
                  ? Math.max(descriptionHeight, collapsedHeight)
                  : collapsedHeight
              }}
            >
              <p className="leading-relaxed text-gray-600">{item.description}</p>
              <div className="mt-2 flex w-full flex-row flex-wrap gap-3 p-1.5">
                {hasExternalLink && item.urlLive && (
                  <Button
                    className="flex-1"
                    bgColor="#7fcec6"
                    onClick={() => handleOpenLink(item.urlLive)}
                  >
                    Live Demo
                  </Button>
                )}
                {hasExternalLink && item.urlGitHub && (
                  <Button
                    className="flex-1"
                    bgColor="var(--color-4)"
                    onClick={() => handleOpenLink(item.urlGitHub)}
                  >
                    GitHub
                  </Button>
                )}
              </div>
              {!isExpanded && (
                <div
                  className={`
                    pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-white
                  `}
                />
              )}
            </div>
          </div>
          <div className="mt-2 flex flex-row flex-wrap gap-2">
            {item.stacks.map((stack) => (
              <Chip key={stack} text={stack} textColor="#ffffff" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
