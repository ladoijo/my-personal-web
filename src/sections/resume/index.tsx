'use client';

import Paper from '@/components/Paper';
import { NavItems } from '@/constants/NavItemsConst';
import SectionCertificates from './SectionCertificate';
import SectionEducation from './SectionEducation';
import SectionSkill from './SectionSkill';
import SectionWorkExprience from './SectionWorkExprience';

const Resume = () => {
  return (
    <Paper
      id={NavItems[2].id}
      title="Resume"
      bgColor="#e3e3ff"
      className="relative overflow-hidden"
    >
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className={`
            absolute top-4 -left-8 h-28 w-32 rotate-6 text-amber-200 opacity-70
            sm:left-2
          `}
          viewBox="0 0 210 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="26"
            y="24"
            width="120"
            height="96"
            rx="12"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path d="M52 54h72M52 74h46" stroke="black" strokeWidth="6" strokeLinecap="round" />
          <path
            d="m38 36 10-14 10 10 10-10 10 14"
            stroke="#22d3ee"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className={`
            absolute top-6 right-0 h-24 w-24 -rotate-6 text-pink-200 opacity-70
            sm:right-10
          `}
          viewBox="0 0 150 150"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M74 20c22 0 40 18 40 40 0 30-32 64-40 68-8-4-40-38-40-68 0-22 18-40 40-40Z"
            fill="currentColor"
            stroke="black"
            strokeWidth="5"
          />
          <circle cx="74" cy="60" r="18" fill="white" stroke="black" strokeWidth="5" />
          <path
            d="M74 90v24m-14-6 14 6 14-6"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg
          className={`
            absolute bottom-10 left-2 h-24 w-28 rotate-3 text-sky-200 opacity-70
            sm:left-8
          `}
          viewBox="0 0 180 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28 50c0-10 8-18 18-18h64c10 0 18 8 18 18v12c0 10-8 18-18 18H70l-10 14-4-14H46c-10 0-18-8-18-18z"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path d="M56 60h52M56 78h34" stroke="black" strokeWidth="6" strokeLinecap="round" />
          <circle cx="70" cy="48" r="6" fill="#f97316" stroke="black" strokeWidth="3" />
          <circle cx="90" cy="48" r="6" fill="#22d3ee" stroke="black" strokeWidth="3" />
        </svg>
        <svg
          className={`
            absolute bottom-4 left-1/2 h-24 w-44 -translate-x-1/2 rotate-2 text-lime-200 opacity-70
          `}
          viewBox="0 0 240 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26 102c20-36 48-48 80-36s60 8 82-20"
            stroke="black"
            strokeWidth="6"
            strokeDasharray="12 10"
            strokeLinecap="round"
          />
          <path
            d="m168 36 18-10-4 20"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26 102c20-36 48-48 80-36s60 8 82-20"
            stroke="currentColor"
            strokeWidth="5"
            strokeDasharray="12 10"
            strokeLinecap="round"
          />
        </svg>
        <svg
          className="absolute right-4 bottom-8 h-24 w-32 -rotate-4 text-purple-200 opacity-70"
          viewBox="0 0 200 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="24"
            y="28"
            width="124"
            height="84"
            rx="12"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
          <rect
            x="36"
            y="18"
            width="124"
            height="84"
            rx="12"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path d="M56 50h76M56 72h50" stroke="black" strokeWidth="6" strokeLinecap="round" />
          <circle cx="70" cy="40" r="6" fill="#facc15" stroke="black" strokeWidth="3" />
          <circle cx="90" cy="40" r="6" fill="#22d3ee" stroke="black" strokeWidth="3" />
          <circle cx="110" cy="40" r="6" fill="#a855f7" stroke="black" strokeWidth="3" />
        </svg>
        <svg
          className="absolute top-8 left-1/2 h-24 w-36 -translate-x-1/2 text-rose-200 opacity-70"
          viewBox="0 0 210 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="40"
            y="30"
            width="130"
            height="80"
            rx="12"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
          <rect
            x="28"
            y="22"
            width="130"
            height="80"
            rx="12"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M52 62h38m10 0h40M52 80h52"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path d="M150 42 162 54l-20 24-16-14z" fill="#22d3ee" stroke="black" strokeWidth="4" />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col gap-10">
        <SectionEducation />
        <SectionWorkExprience />
        <SectionCertificates />
        <SectionSkill />
      </div>
    </Paper>
  );
};

export default Resume;
