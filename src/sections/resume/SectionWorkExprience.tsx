import Title from '@/components/Title';
import { WorkExperiences } from '@/constants/HistoriesConst';
import CardWorkSummary from './components/CardWorkSummary';
import DateRangeHistory from './components/DateRangeHistory';
import VerticalLineConnector from './components/VerticalLineConnector';

const SectionWorkExprience = () => {
  const workExpSorted = [...WorkExperiences].sort(
    (we1, we2) => new Date(we2.start).getTime() - new Date(we1.start).getTime()
  );
  return (
    <section>
      <div className="relative mb-8 flex w-full flex-col items-center justify-center gap-5">
        <div className="relative top-0 z-10 flex h-1 w-full justify-self-center bg-black" />
        <Title title="Work Experiences" size="2xl" />
      </div>
      <div className="flex w-full flex-col">
        {workExpSorted.map((we, index) => (
          <div key={we.id}>
            <div
              className={`
                hidden grid-cols-[1fr_auto_1fr] items-start gap-2
                lg:grid
              `}
            >
              {index % 2 === 0 ? (
                <DateRangeHistory start={we.start} end={we.end} even={false} />
              ) : (
                <CardWorkSummary
                  workExperience={we}
                  isLastItem={index === workExpSorted.length - 1}
                />
              )}
              <VerticalLineConnector type="work" />
              {index % 2 === 0 ? (
                <CardWorkSummary
                  workExperience={we}
                  isLastItem={index === workExpSorted.length - 1}
                />
              ) : (
                <DateRangeHistory start={we.start} end={we.end} even={false} />
              )}
            </div>
            <div
              className={`
                grid grid-cols-[auto_1fr] items-start gap-2
                lg:hidden
              `}
            >
              <VerticalLineConnector type="work" />
              <div className="flex flex-col">
                <DateRangeHistory start={we.start} end={we.end} even={true} />
                <CardWorkSummary
                  workExperience={we}
                  isLastItem={index === workExpSorted.length - 1}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionWorkExprience;
