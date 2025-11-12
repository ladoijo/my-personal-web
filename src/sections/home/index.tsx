'use client';

import Button from '@/components/Button';
import Paper from '@/components/Paper';
import { NavItems } from '@/constants/NavItemsConst';
import { Typewriter } from 'react-simple-typewriter';
import styles from './home.module.css';
import Photo from './Photo';

const jobOptions = [
  'Back End Developer',
  'Front End Developer',
  'Full Snack',
  'Full Stack Developer'
];

const Home = () => {
  const handleGetInTouchClick = () => {
    document.getElementById(NavItems[5].id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSeeMyWorksClick = () => {
    document.getElementById(NavItems[4].id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Paper id={NavItems[0].id} bgColor="#e3e3ff">
      <div
        className={`
          flex flex-col space-y-8
          md:flex-row md:space-x-8
        `}
      >
        <div
          className={`
            relative mx-auto w-full max-w-fit
            md:hidden
          `}
        >
          <Photo />
        </div>
        <div
          className={`
            flex-col
            md:flex-2/3
          `}
        >
          <h1
            className={`
              text-3xl text-black
              md:text-6xl
            `}
          >
            Hello There! <span className={styles.waveHand}>👋🏽</span>
          </h1>
          <h1
            className={`
              text-4xl text-black
              md:text-8xl
            `}
          >
            I'm Hady
          </h1>
          <h2
            className={`
              text-xl
              md:text-3xl
            `}
          >
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
            <Button bgColor="#7fcec6" className="h-10 w-30" onClick={handleGetInTouchClick}>
              Get in Touch
            </Button>
            <Button bgColor="#f9c9c9" className="h-10 w-36" onClick={handleSeeMyWorksClick}>
              See My Works
            </Button>
          </div>
        </div>
        <div
          className={`
            relative hidden w-full max-w-fit
            md:block
          `}
        >
          <Photo />
        </div>
      </div>
    </Paper>
  );
};

export default Home;
