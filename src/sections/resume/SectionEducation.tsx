import EducationIcon from '@/assets/icons/education.svg';
import Title from '@/components/Title';
import { Educations } from '@/constants/HistoriesConst';
import CardEducationSummary from './components/CardEducationSummary';
import DateRangeHistory from './components/DateRangeHistory';
import VerticalLineConnector from './components/VerticalLineConnector';

const SectionEducation = () => {
  const educationsSorted = [...Educations].sort(
    (e1, e2) => new Date(e2.start).getTime() - new Date(e1.start).getTime()
  );
  return (
    <section>
      <div className="mb-8 flex w-full items-center justify-center">
        <Title title="Educations" size="2xl" />
      </div>
      <div className="my-3 flex h-full flex-row items-stretch gap-5">
        <div
          className={`
            hidden items-center justify-center
            lg:flex lg:flex-1/3
          `}
        >
          <div className="h-full">
            <EducationIcon className="h-full" />
          </div>
        </div>
        <div
          className={`
            flex flex-1 flex-col
            lg:flex-2/3
          `}
        >
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
    </section>
  );
};

export default SectionEducation;
