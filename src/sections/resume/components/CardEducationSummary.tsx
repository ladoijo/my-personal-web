import { IEducation } from '@/constants/HistoriesConst';

const CardEducationSummary = ({
  education,
  isLastItem
}: {
  education: IEducation;
  isLastItem?: boolean;
}) => (
  <div
    className={`
      flex flex-col gap-2 self-start rounded-md border-2 border-dotted p-3 text-left
      ${isLastItem ? `mb-0` : `mb-4`}
      transition-all duration-300
      hover:scale-110
    `}
  >
    <div className="flex flex-col gap-2 rounded-sm border-2 border-dotted bg-white px-4 pt-1 pb-2.5">
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <b className="font-bold">{education.degree}</b>
          <i>{education.institution}</i>
        </div>
        <div className="flex h-0.5 w-full justify-self-center bg-black" />
        <div className="flex flex-col">
          <p>
            {education.major} - {education.fieldOfStudy}
          </p>
          <small className="text-gray-400">Grade: {education.grade}</small>
        </div>
      </div>
    </div>
  </div>
);

export default CardEducationSummary;
