import Home from '@/sections/home';
import About from '@/sections/about';
import Resume from '@/sections/resume';
import Contact from '@/sections/contact';
import Portfolio from '@/sections/portfolio';
import Service from '@/sections/service';

export default function Page() {
  return (
    <div className="flex w-fit flex-col divide-y-2 divide-black">
      <Home />
      <About />
      <Resume />
      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
}
