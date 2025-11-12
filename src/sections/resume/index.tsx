'use client';

import EducationIcon from '@/assets/icons/education.svg';
import MedalIcon from '@/assets/icons/medal.svg';
import NewWindowIcon from '@/assets/icons/new_window.svg';
import Paper from '@/components/Paper';
import Title from '@/components/Title';
import { Certificates, Educations, WorkExperiences } from '@/constants/HistoriesConst';
import { NavItems } from '@/constants/NavItemsConst';
import { Skills } from '@/constants/ResumeConst';
import Image from 'next/image';
import CardEducationSummary from './CardEducationSummary';
import CardWorkSummary from './CardWorkSummary';
import VerticalLineConnector from './VerticalLineConnector';

const DateRangeHistory = ({
  start,
  end,
  even
}: {
  start: string;
  end?: string;
  even?: boolean;
}) => <b className={even ? 'text-left' : 'text-right'}>{`${start} - ${end}`}</b>;

const Resume = () => {
  const educationsSorted = [...Educations].sort(
    (e1, e2) => new Date(e2.start).getTime() - new Date(e1.start).getTime()
  );

  const workExpSorted = [...WorkExperiences].sort(
    (we1, we2) => new Date(we2.start).getTime() - new Date(we1.start).getTime()
  );

  return (
    <Paper id={NavItems[2].id} title="Resume" bgColor="#e3e3ff">
      <div className="flex flex-col gap-10">
        <div>
          <div className="mb-8 flex w-full items-center justify-center">
            <Title title="Educations" size="2xl" />
          </div>
          <div className="my-3 flex h-full flex-row items-stretch gap-5">
            <div className="hidden items-center justify-center lg:flex lg:flex-1/3">
              <div className="h-full">
                <EducationIcon className="h-full" />
              </div>
            </div>
            <div className="flex flex-1 flex-col lg:flex-2/3">
              <div className="flex w-full flex-col">
                {educationsSorted.map((ed, index) => (
                  <div key={ed.id} className="grid grid-cols-[auto_auto_1fr] items-start gap-2">
                    <DateRangeHistory start={ed.start} end={ed.end} />
                    <VerticalLineConnector type="education" />
                    <CardEducationSummary
                      education={ed}
                      isLastItem={index === educationsSorted.length - 1}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="relative mb-8 flex w-full flex-col items-center justify-center gap-5">
            <div className="relative top-0 z-10 flex h-1 w-full justify-self-center bg-black" />
            <Title title="Work Experiences" size="2xl" />
          </div>
          <div className="flex w-full flex-col">
            {workExpSorted.map((we, index) => (
              <div key={we.id} className="grid grid-cols-[1fr_auto_1fr] items-start gap-2">
                {index % 2 === 0 ? (
                  <>
                    <DateRangeHistory start={we.start} end={we.end} even={false} />
                    <VerticalLineConnector type="work" />
                    <CardWorkSummary
                      workExperience={we}
                      isLastItem={index === workExpSorted.length - 1}
                    />
                  </>
                ) : (
                  <>
                    <CardWorkSummary
                      workExperience={we}
                      isLastItem={index === workExpSorted.length - 1}
                    />
                    <VerticalLineConnector type="work" />
                    <DateRangeHistory start={we.start} end={we.end} even={true} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="relative mb-8 flex w-full flex-col items-center justify-center gap-5">
            <div className="relative top-0 z-10 flex h-1 w-full justify-self-center bg-black" />
            <Title title="Certifications" size="2xl" />
          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
            {Certificates.map((cert, index) => (
              <button
                key={cert.id}
                style={cert.color ? { backgroundColor: cert.color } : undefined}
                className="group relative flex flex-row items-start gap-4 overflow-hidden rounded-2xl border-2 border-solid border-black p-4 text-left transition-all duration-300 hover:-translate-y-1"
                onClick={() => window.open(cert.url, '_blank', 'noopener,noreferrer')}
              >
                <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-solid bg-white p-2">
                  <MedalIcon />
                </div>
                <div className="flex h-full flex-3/5 flex-col justify-between">
                  <div className="flex flex-col">
                    <b className="line-clamp-2 font-bold">{cert.name}</b>
                    <i>{cert.institution}</i>
                  </div>
                  <div className="mt-auto">
                    <small className="text-gray-400">{cert.publishedDate}</small>
                  </div>
                </div>
                <div className="pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-70" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <NewWindowIcon className="h-6 w-6 text-white" />
                </div>
              </button>
            ))}
          </div>
        </div>
        <div>
          <div className="relative mb-8 flex w-full flex-col justify-center gap-5">
            <div className="relative top-0 z-10 flex h-1 w-full justify-self-center bg-black" />
            <Title title="My Skills" size="2xl" />
          </div>
          <div className="flex flex-col items-start justify-start gap-6 lg:flex-row">
            <div className="flex flex-1 flex-col items-center justify-between gap-4 lg:flex-2/6">
              <p className="flex rounded-xl bg-white p-4">
                I bring expertise across backend development, frontend technologies, and DevOps
                tools to deliver end-to-end software solutions. Let's work together to build a
                robust, scalable, and user-centric application that makes an impact.
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
            <div className="flex flex-1 overflow-scroll lg:flex-4/6">
              <div className="overflow-hidden rounded-xl border-2 border-black">
                {Object.entries(Skills).map(([key, value], index) => {
                  const Icon = value.Icon;
                  // const repeatedItems = [...value.items, ...value.items];
                  return (
                    <div key={key} className="grid grid-cols-[auto_auto_1fr]">
                      <div className="flex flex-col">
                        <div
                          style={{ backgroundColor: value.color }}
                          className="flex h-28 w-28 flex-col items-center gap-y-2 p-3"
                        >
                          <Icon className="aspect-square w-full" />
                          <span>{value.name}</span>
                        </div>
                        {index < Object.entries(Skills).length - 1 && (
                          <span className="h-0.5 w-full bg-black" />
                        )}
                      </div>
                      <span className="h-full w-0.5 bg-black" />
                      <div className="relative w-full overflow-hidden bg-white">
                        <div className="animate-marquee flex w-max flex-row">
                          {value.items.map((item, itemIndex) => {
                            const Icon = item.Icon;
                            const name = item.name;
                            return (
                              <div
                                key={`${item.name}-${itemIndex}`}
                                className="flex h-28 w-28 flex-shrink-0 flex-col items-center gap-y-2 p-3"
                              >
                                <Icon className="aspect-square w-full" />
                                <small>{name}</small>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Resume;
