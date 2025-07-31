'use client';

import Paper from '@/components/Paper';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';
import styles from './Home.module.css';

const jobOptions = [
  'Back End Developer',
  'Front End Developer',
  'Full Snack',
  'Full Stack Developer'
];

const Home = () => {
  return (
    <Paper>
      <div className="flex flex-row space-y-8 space-x-8">
        <div className="flex-2/3 flex-col">
          <h1 className="text-6xl text-black">
            😯, Hello There! <span className={styles.waveHand}>👋🏽</span>
          </h1>
          <h1 className="text-8xl text-black">I'm Hady</h1>
          <h2 className="text-3xl">
            <span>
              I'm a{' '}
              <span className="text-green-600">
                <Typewriter
                  words={jobOptions}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={50}
                  deleteSpeed={100}
                  delaySpeed={1000}
                />
              </span>
            </span>
          </h2>
          <p className="mt-4 text-gray-600">
            I am a Indonesian Full Stack Developer. I'm passionate about building applications or
            software that are not only functional but also user friendly, visually appealing, and to
            be useful to the community around me.
          </p>
          <div className="mt-8 flex flex-row items-center gap-4">
            <button className="rounded-full bg-emerald-500 px-6 py-2 text-white hover:bg-emerald-600">
              Get in Touch
            </button>
            <button className="rounded-full border border-gray-300 px-6 py-2 text-gray-600 hover:bg-gray-100">
              Contact Me
            </button>
          </div>
        </div>
        <div className="flex flex-1/3 justify-end">
          <Image
            height={1284}
            width={1024}
            src="/assets/images/me2.webp"
            alt="Profile"
            className="h-[28rem] w-[24rem] rounded-xl object-cover"
          />
        </div>
      </div>
    </Paper>
  );
};

export default Home;
