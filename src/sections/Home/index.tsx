'use client';

import Paper from '@/components/Paper';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import styles from './home.module.css';
import Button from '@/components/Button';
import { NavItems } from '@/constants/NavItemsConst';

const jobOptions = [
  'Back End Developer',
  'Front End Developer',
  'Full Snack',
  'Full Stack Developer'
];

const Home = () => {
  const photoElement = (
    <>
      <div className="absolute -top-6 -left-2 h-24 w-24 rotate-6 rounded-2xl bg-[#c5e6fd]" />
      <div className="absolute top-10 -right-3 h-28 w-28 -rotate-6 rounded-2xl bg-[#fcd2d2]" />
      <svg
        className="absolute top-[12%] right-[12%] h-16 w-24 opacity-50"
        viewBox="0 0 120 40"
        fill="none"
      >
        <path
          d="M2 20c10-18 18 18 28 0s18 18 28 0 18 18 28 0 18 18 30 0"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <svg
        className="absolute right-[70%] bottom-[30%] h-28 w-28 rotate-[-8deg] opacity-30"
        viewBox="0 0 120 120"
        fill="none"
      >
        <circle cx="60" cy="60" r="50" stroke="#0EA5A4" strokeDasharray="6 8" strokeWidth="2" />
      </svg>
      <Image
        height={1028}
        width={988}
        src="/assets/images/me3.webp"
        alt="Profile"
        className={`relative h-[26rem] w-fit rotate-3 rounded-md object-cover transition-all duration-300 ease-in-out hover:scale-110 hover:rotate-0`}
      />
    </>
  );
  return (
    <Paper id={NavItems[0].id} bgColor="#e3e3ff">
      <div className={`flex flex-col space-y-8 md:flex-row md:space-x-8`}>
        <div className="relative mx-auto w-full max-w-fit md:hidden">{photoElement}</div>
        <div className="flex-col md:flex-2/3">
          <h1 className="text-3xl text-black md:text-6xl">
            Hello There! <span className={styles.waveHand}>👋🏽</span>
          </h1>
          <h1 className="text-4xl text-black md:text-8xl">I'm Hady</h1>
          <h2 className="text-xl md:text-3xl">
            <span>
              I'm a{' '}
              <span className="text-teal-600">
                <Typewriter
                  words={jobOptions}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={100}
                  deleteSpeed={30}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </h2>
          <p className="mt-4 text-justify">
            I am a Indonesian Full Stack Developer. I'm passionate about building applications or
            software that are not only functional but also user friendly, visually appealing, and to
            be useful to the community around me.
          </p>
          <div className={`mt-8 flex flex-row items-center gap-4`}>
            <Button bgColor="#00d5be" className="h-10 w-30">
              Get in Touch
            </Button>
            <Button bgColor="#ffa0ad" className="h-10 w-30">
              Contact Me
            </Button>
          </div>
        </div>
        <div className="relative hidden w-full max-w-fit md:block">{photoElement}</div>
      </div>
    </Paper>
  );
};

export default Home;
