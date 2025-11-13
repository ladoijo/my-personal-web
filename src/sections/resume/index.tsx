'use client';

import Paper from '@/components/Paper';
import { NavItems } from '@/constants/NavItemsConst';
import SectionCertificates from './SectionCertificate';
import SectionEducation from './SectionEducation';
import SectionSkill from './SectionSkill';
import SectionWorkExprience from './SectionWorkExprience';

const Resume = () => {
  return (
    <Paper id={NavItems[2].id} title="Resume" bgColor="#e3e3ff">
      <div className="flex flex-col gap-10">
        <SectionEducation />
        <SectionWorkExprience />
        <SectionCertificates />
        <SectionSkill />
      </div>
    </Paper>
  );
};

export default Resume;
