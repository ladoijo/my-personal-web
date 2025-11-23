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
    <Paper id={NavItems[1].id} title="About Me" className="bg-dots">
      <div
        className={`
          flex flex-col space-y-5
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
