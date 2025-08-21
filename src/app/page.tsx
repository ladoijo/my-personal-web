import Home from '@/sections/home';
import About from '@/sections/about';
import Resume from '@/sections/resume';
import Contact from '@/sections/contact';
import Portfolio from '@/sections/portfolio';

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
