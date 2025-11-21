import GraduationCapIcon from '@/assets/icons/graduation_cap.svg';
import BriefcaseIcon from '@/assets/icons/portfolio.svg';

const VerticalLineConnector = ({ type }: { type: 'work' | 'education' }) => (
  <div className="relative flex h-full flex-col items-center">
    <div
      className={`
        z-11 flex h-7 w-7 items-center justify-center rounded-full border-2 bg-[var(--color-6)]
      `}
    >
      {type === 'work' ? (
        <BriefcaseIcon className="h-4 w-4 items-center justify-center text-black" />
      ) : (
        <GraduationCapIcon className="h-4 items-center justify-center text-black" />
      )}
    </div>
    <div className="absolute top-0 z-10 h-full w-0.5 flex-1 justify-self-center bg-black" />
  </div>
);

export default VerticalLineConnector;
