import About from '@/sections/about';
import Contact from '@/sections/contact';
import Home from '@/sections/home';
import Resume from '@/sections/resume';

export default function Page() {
  return (
    <div className="flex w-fit flex-col divide-y-2 divide-black">
      <Home />
      <About />
      <Resume />
      {/* <Service />
      <Portfolio /> */}
      <Contact />
    </div>
  );
}
