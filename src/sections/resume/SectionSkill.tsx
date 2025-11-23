import Title from '@/components/Title';
import { Skills } from '@/constants/ResumeConst';
import Image from 'next/image';
import { useEffect, useMemo, useRef, useState } from 'react';

type SkillItem = (typeof Skills)[keyof typeof Skills]['items'][number];

const SkillItemTile = ({ Icon, name }: SkillItem) => (
  <div
    className={`
      flex h-20 w-20 flex-shrink-0 flex-col items-center gap-y-2 p-3
      lg:h-28 lg:w-28
    `}
  >
    <Icon className="aspect-square w-full" />
    <small>{name}</small>
  </div>
);

const SkillItemsMarquee = ({ items }: { items: SkillItem[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const measurementRef = useRef<HTMLDivElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const measurement = measurementRef.current;

    if (!container || !measurement) {
      return;
    }

    const updateShouldAnimate = () => {
      const needsAnimation = measurement.scrollWidth > container.clientWidth;
      setShouldAnimate(needsAnimation);
    };

    updateShouldAnimate();

    if (typeof ResizeObserver === 'undefined') {
      return;
    }

    const observer = new ResizeObserver(updateShouldAnimate);
    observer.observe(container);
    observer.observe(measurement);

    return () => observer.disconnect();
  }, [items]);

  const marqueeItems = useMemo(
    () => (shouldAnimate ? [...items, ...items] : items),
    [items, shouldAnimate]
  );

  return (
    <div ref={containerRef} className="relative w-full overflow-hidden bg-white">
      <div
        className={`
          flex w-max flex-row
          ${shouldAnimate ? 'animate-marquee' : ''}
        `}
      >
        {marqueeItems.map((item, index) => (
          <SkillItemTile key={`${item.name}-${index}`} {...item} />
        ))}
      </div>
      <div
        ref={measurementRef}
        className="pointer-events-none absolute top-0 left-0 flex w-max opacity-0"
        aria-hidden
      >
        {items.map((item, index) => (
          <SkillItemTile key={`measure-${item.name}-${index}`} {...item} />
        ))}
      </div>
    </div>
  );
};

const SectionSkill = () => {
  return (
    <section>
      <div className="relative mb-8 flex w-full flex-col justify-center gap-5">
        <div className="relative top-0 z-10 flex h-1 w-full justify-self-center bg-black" />
        <Title title="My Skills" size="2xl" />
      </div>
      <div
        className={`
          flex flex-col items-start justify-start gap-6
          lg:flex-row
        `}
      >
        <div
          className={`
            flex flex-1 flex-col items-center justify-between gap-4
            lg:flex-2/6
          `}
        >
          <p className="flex rounded-xl bg-white p-4">
            I bring expertise across backend development, frontend technologies, and DevOps tools to
            deliver end-to-end software solutions. Let's work together to build a robust, scalable,
            and user-centric application that makes an impact.
          </p>
          <Image
            height={1028}
            width={988}
            src="/assets/images/me3.webp"
            alt="Profile"
            className={`
              relative h-[26rem] w-fit rotate-3 rounded-md object-cover transition-all duration-300
              ease-in-out
              hover:scale-120 hover:rotate-0
            `}
          />
        </div>
        <div
          className={`
            flex flex-1 self-center
            overflow-scroll
            lg:flex-4/6
          `}
        >
          <div className="overflow-hidden rounded-xl border-2 border-black">
            {Object.entries(Skills).map(([key, value], index) => {
              const Icon = value.Icon;
              return (
                <div key={key} className="flex flex-col">
                  <div className="grid grid-cols-[auto_auto_1fr]">
                    <div
                      style={{ backgroundColor: value.color }}
                      className={`
                        flex h-20 w-20 flex-col items-center gap-y-2 p-3
                        lg:h-28 lg:w-28
                      `}
                    >
                      <Icon className="aspect-square w-full" />
                      <span>{value.name}</span>
                    </div>
                    <span className="h-full w-0.5 bg-black" />
                    <SkillItemsMarquee items={value.items} />
                  </div>
                  {index < Object.entries(Skills).length - 1 && (
                    <span className="h-0.5 w-full bg-black" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionSkill;
