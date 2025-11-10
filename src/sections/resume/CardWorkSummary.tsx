import Chip from '@/components/Chip';
import { IWorkExperience } from '@/constants/HistoriesConst';

const CardWorkSummary = ({
  workExperience,
  isLastItem
}: {
  workExperience: IWorkExperience;
  isLastItem?: boolean;
}) => (
  <div
    style={workExperience.color ? { backgroundColor: workExperience.color } : undefined}
    className={`group z-12 flex flex-col gap-2 self-start rounded-lg border-2 border-solid px-3 pt-1 text-left ${isLastItem ? 'mb-0' : 'mb-4'} transition-all duration-300 hover:scale-110 hover:pb-2.5`}
  >
    <div className="flex flex-col">
      <b className="font-bold">{workExperience.position}</b>
      <i>{workExperience.company}</i>
    </div>
    <div className="max-h-0 overflow-hidden transition-[max-height] duration-500 group-hover:max-h-[500px]">
      <div className="flex h-0.5 w-full justify-self-center bg-black" />
      <div className="mt-2 flex flex-col gap-2">
        <ul className="list-outside list-disc pl-5 text-xs">
          {workExperience.tasks ? (
            workExperience.tasks.map((task) => <li key={task}>{task}</li>)
          ) : (
            <li>{workExperience.description}</li>
          )}
        </ul>
        <div className="grid grid-cols-[max-content_1fr] gap-4">
          <small>Stack:</small>
          <div className="flex flex-wrap items-center gap-1">
            {workExperience.stacks?.map((stack) => (
              <Chip key={stack} text={stack} bgColor="#4300FF" textColor="#FFFFFF" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CardWorkSummary;
