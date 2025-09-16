import Accordion from '@/components/Accordion';
import Chip from '@/components/Chip';
import Paper from '@/components/Paper';
import Title from '@/components/Title';
import { Educations, WorkExperiences } from '@/constants/HistoriesConst';
import { NavItems } from '@/constants/NavItemsConst';

const Resume = () => {
  const educationsSorted = [...Educations].sort(
    (e1, e2) => new Date(e2.start).getTime() - new Date(e1.start).getTime()
  );

  const workExpSorted = [...WorkExperiences].sort(
    (we1, we2) => new Date(we2.start).getTime() - new Date(we1.start).getTime()
  );

  return (
    <Paper id={NavItems[2].id} title="Resume" bgColor="#e3e3ff">
      <div className="flex flex-col space-y-3">
        <Accordion title="Education">
          <div className="my-3 flex flex-row">
            <div className="flex flex-3/5 flex-col">
              {educationsSorted.map((ed) => (
                <div key={ed.id} className="grid grid-rows-[max-content_1fr] items-center gap-0">
                  <div className="grid grid-cols-[200px_20px_auto] items-center gap-2">
                    <b className="text-md text-right">{`${ed.start} - ${ed.end}`}</b>
                    <div className="flex items-center justify-center">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/30">
                        <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500/50">
                          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                      </span>
                    </div>
                    <b className="text-md text-left font-bold">{ed.institution}</b>
                  </div>
                  <div className="grid grid-cols-[200px_20px_auto] items-center gap-2">
                    <i className="self-start pb-2 text-right">{ed.degree}</i>
                    <div className="w-0.5 self-stretch justify-self-center bg-black"></div>

                    <div className="flex flex-col space-y-2 self-start pb-2 text-left">
                      <p>
                        {ed.major} - {ed.fieldOfStudy}
                      </p>
                      <small>Grade: {ed.grade}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Accordion>

        <Accordion title="Work Experiences">
          <div className="my-3 flex flex-row">
            <div className="flex flex-3/5 flex-col">
              {workExpSorted.map((we) => (
                <div key={we.id} className="grid grid-rows-[max-content_1fr] items-center gap-0">
                  <div className="grid grid-cols-[200px_20px_auto] items-center gap-2">
                    <b className="text-md text-right">{`${we.start} - ${we.end}`}</b>
                    <div className="flex items-center justify-center">
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500/30">
                        <span className="flex h-3 w-3 items-center justify-center rounded-full bg-emerald-500/50">
                          <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                        </span>
                      </span>
                    </div>
                    <b className="text-md text-left font-bold">{we.company}</b>
                  </div>
                  <div className="grid grid-cols-[200px_20px_auto] items-center gap-2">
                    <i className="self-start pb-2 text-right">{we.position}</i>
                    <div className="w-0.5 self-stretch justify-self-center bg-black"></div>

                    <div className="flex flex-col space-y-2 self-start pb-2 text-left">
                      <p>{we.description}</p>
                      <div className="grid grid-cols-[max-content_1fr] gap-4">
                        <small className="text-gray-500">Stack:</small>
                        <div className="flex flex-wrap items-center gap-1">
                          {we.stacks?.map((stack) => (
                            <Chip key={stack} text={stack} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-2/5 flex-col"></div>
          </div>
        </Accordion>
      </div>
    </Paper>
  );
};

export default Resume;
