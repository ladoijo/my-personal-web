import About from '@/sections/about';
import Contact from '@/sections/contact';
import Home from '@/sections/home';
import Portfolio from '@/sections/portfolio';
import Resume from '@/sections/resume';
import Service from '@/sections/service';

export default function Page() {
  return (
    <div className="mx-auto flex w-full flex-col divide-y-2 divide-black">
      <Home />
      <About />
      <Resume />
      <Service />
      <Portfolio />
      <Contact />
    </div>
  );
}
