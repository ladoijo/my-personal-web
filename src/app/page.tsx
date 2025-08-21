import Home from '@/sections/Home/Home';
import About from '@/sections/About';
import Resume from '@/sections/Resume';
import Contact from '@/sections/Contact';
import Portfolio from '@/sections/Portfolio';

export default function Page() {
  return (
    <>
      <div className={`my-6 flex w-fit flex-col space-y-6`}>
        <Home />
        <About />
        <Resume />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
