import CompanyIcon from '@/assets/icons/badge.svg';
import ExperienceIcon from '@/assets/icons/calendar.svg';
import Chip from '@/components/Chip';
import Paper from '@/components/Paper';
import { WorkExperiences } from '@/constants/HistoriesConst';
import { NavItems } from '@/constants/NavItemsConst';
import { useMemo } from 'react';

const About = () => {
  const totalYearsExp = useMemo(
    () =>
      WorkExperiences.reduce((total, experience) => {
        const startYear = new Date(experience.start).getFullYear();
        const endYear =
          experience.end && experience.end != 'Now'
            ? new Date(experience.end).getFullYear()
            : new Date().getFullYear();
        return total + (endYear - startYear);
      }, 0),
    []
  );

  const totalCompanies = useMemo(
    () => new Set(WorkExperiences.filter((experience) => experience.company !== 'Freelance')).size,
    []
  );

  return (
    <Paper id={NavItems[1].id} title="About Me" className="bg-dots relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className={`
            absolute -top-2 -left-6 h-32 w-32 rotate-6 text-orange-200 opacity-70
            sm:top-2 sm:left-4
          `}
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M46 18c-18 24-18 80 0 104M94 18c18 24 18 80 0 104"
            stroke="black"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <path
            d="M46 18c-18 24-18 80 0 104M94 18c18 24 18 80 0 104"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute bottom-8 left-1/2 h-28 w-40 -translate-x-1/2 text-cyan-200 opacity-70"
          viewBox="0 0 180 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14 70c24-30 60-30 84 0s60 30 84 0"
            stroke="black"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="10 10"
          />
          <path
            d="M14 70c24-30 60-30 84 0s60 30 84 0"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray="10 10"
          />
          <circle cx="52" cy="34" r="8" fill="currentColor" stroke="black" strokeWidth="4" />
          <circle cx="124" cy="34" r="8" fill="currentColor" stroke="black" strokeWidth="4" />
        </svg>
        <svg
          className={`
            absolute top-6 -right-4 h-28 w-28 -rotate-12 text-fuchsia-200 opacity-70
            sm:right-4
          `}
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M60 8 72 40l32 12-32 12-12 32-12-32-32-12 32-12z"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M60 22v20m0 36v20m-20-36h20m20 0H60"
            stroke="black"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M60 22v20m0 36v20m-20-36h20m20 0H60"
            stroke="white"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div
        className={`
          relative z-10 flex flex-col space-y-5
          lg:flex-row lg:space-y-0 lg:space-x-5
        `}
      >
        <div
          className={`
            flex flex-col space-y-3
            lg:flex-2/3
          `}
        >
          <p className="text-justify">
            I’m a Software Developer with over 10 years of experience designing and developing
            scalable backend systems and robust frontend interfaces. I’ve worked in industries
            ranging from fintech, e-commerce, banking, to enterprise software, with solid expertise
            in Java, Spring Boot, React, React Native, Redis, PostgreSQL, and cloud based CI/CD
            pipelines.
          </p>
          <p className="text-justify">
            What drives me is not just writing clean code but solving real problems, creating value
            for users and teams, and staying resilient no matter how tough the road gets.
          </p>
          <p className="text-justify">
            I’m currently open to remote opportunities where I can contribute meaningful impact,
            grow alongside global teams, and continue building a better future for my family and
            myself.
          </p>
          <p>Let’s build something impactful together, from anywhere in the world 🚀.</p>
          <div
            className={`
              mt-4 grid grid-cols-[6rem_1fr] grid-rows-4 gap-3
              sm:grid-cols-[6rem_1fr_6rem_1fr] sm:grid-rows-2
            `}
          >
            <Chip text="Name" size="md" textColor="white" />
            <p className={`border-b-1 border-dotted`}>Hadyan Putra Yasrizal</p>
            <Chip text="Freelance" size="md" textColor="white" />
            <p className={`border-b-1 border-dotted text-green-600`}>Available</p>
            <Chip text="Nationality" size="md" textColor="white" />
            <p className={`border-b-1 border-dotted`}>Indonesia</p>
            <Chip text="Location" size="md" textColor="white" />
            <p className={`border-b-1 border-dotted`}>Bandung Regency, Indonesia</p>
          </div>
        </div>
        <div
          className={`
            flex h-auto w-full flex-1/3 flex-col space-y-5
            sm:flex-row sm:space-x-5
            lg:h-full lg:flex-col lg:space-y-5 lg:space-x-0
          `}
        >
          <div
            className={`
              group relative flex w-full flex-1
              lg:h-full
            `}
          >
            <div
              className={`
                h-48 w-full rotate-6 rounded-md border-2 border-black bg-[#f6f9fc]
                transition-transform duration-300 ease-in-out
                group-hover:scale-105 group-hover:rotate-12
              `}
            ></div>
            <div
              className={`
                absolute z-1 flex h-48 w-full items-center justify-center rounded-md border-2
                border-black bg-[var(--color-2)] p-4 transition-transform duration-300 ease-in-out
                group-hover:scale-105
              `}
            >
              <div className="flex h-full w-full flex-row space-x-2">
                <div className="flex flex-1 flex-col items-center justify-center">
                  <h1 className="text-8xl font-semibold">{totalYearsExp}</h1>
                  <p className="text-base text-black">Years</p>
                </div>
                <ExperienceIcon
                  className={`flex h-full w-full flex-1 items-center justify-center text-black`}
                />
              </div>
            </div>
          </div>
          <div
            className={`
              group relative flex w-full flex-1
              lg:h-full
            `}
          >
            <div
              className={`
                h-48 w-full rotate-6 rounded-md border-2 border-black bg-[#fcfef9]
                transition-transform duration-300 ease-in-out
                group-hover:scale-105 group-hover:rotate-12
              `}
            ></div>
            <div
              className={`
                absolute z-1 flex h-48 w-full items-center justify-center rounded-md border-2
                border-black bg-[var(--color-3)] p-4 transition-transform duration-300 ease-in-out
                group-hover:scale-105
              `}
            >
              <div className="flex h-full w-full flex-row space-x-2">
                <div className="flex flex-1 flex-col items-center justify-center">
                  <h1 className="text-8xl font-semibold">{totalCompanies}</h1>
                  <p className="text-base text-black">Companies</p>
                </div>
                <CompanyIcon
                  className={`flex h-full w-full flex-1 items-center justify-center text-black`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default About;
