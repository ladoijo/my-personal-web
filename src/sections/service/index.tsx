import Paper from '@/components/Paper';
import Title from '@/components/Title';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/Carousel';
import { Services, Workflows } from '@/constants/MyServiceConst';
import { NavItems } from '@/constants/NavItemsConst';

const Service = () => {
  return (
    <Paper id={NavItems[3].id} title="My Services" className="relative overflow-hidden bg-dots">
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <svg
          className="absolute -left-8 top-10 h-28 w-28 rotate-6 text-amber-300 opacity-60 sm:left-2"
          viewBox="0 0 140 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M70 16 82 30l18-4 4 18 16 8-8 16 8 16-16 8-4 18-18-4-12 14-12-14-18 4-4-18-16-8 8-16-8-16 16-8 4-18 18 4z"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <circle cx="70" cy="70" r="12" fill="white" stroke="black" strokeWidth="4" />
        </svg>
        <svg
          className="absolute right-6 top-4 h-24 w-32 -rotate-6 text-sky-300 opacity-60 sm:right-14"
          viewBox="0 0 200 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="14"
            y="16"
            width="172"
            height="104"
            rx="14"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M40 54h32m12 0h64M40 82h48m12 0h48"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M38 42 46 52 62 30"
            stroke="white"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M154 92c-4 10-14 14-24 10s-14-14-10-24 14-14 24-10 14 14 10 24Z"
            fill="#bef264"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
        <svg
          className="absolute bottom-6 left-1/2 h-24 w-40 -translate-x-1/2 rotate-3 text-pink-300 opacity-60"
          viewBox="0 0 220 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M32 84c30-28 60-28 90 0l18-24 48 52"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray="12 10"
          />
          <path
            d="M40 38c0-10 8-18 18-18h58c10 0 18 8 18 18v6c0 10-8 18-18 18H58c-10 0-18-8-18-18z"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <circle cx="78" cy="41" r="6" fill="black" />
          <circle cx="102" cy="41" r="6" fill="black" />
          <path d="M118 90h38l-10-12" stroke="black" strokeWidth="6" strokeLinecap="round" />
        </svg>
        <svg
          className="absolute bottom-10 left-6 h-24 w-28 rotate-6 text-lime-200 opacity-60 sm:left-14"
          viewBox="0 0 180 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            x="30"
            y="28"
            width="120"
            height="84"
            rx="10"
            fill="white"
            stroke="black"
            strokeWidth="4"
          />
          <rect
            x="40"
            y="18"
            width="120"
            height="84"
            rx="10"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path
            d="M60 50h68M60 70h42M60 90h26"
            stroke="black"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="78" cy="38" r="6" fill="#22d3ee" stroke="black" strokeWidth="3" />
          <circle cx="98" cy="38" r="6" fill="#f97316" stroke="black" strokeWidth="3" />
        </svg>
        <svg
          className="absolute right-12 bottom-4 h-24 w-28 -rotate-3 text-violet-200 opacity-60 sm:right-20"
          viewBox="0 0 180 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M52 38c0-8 6-14 14-14h48c8 0 14 6 14 14v12c0 8-6 14-14 14H66l-8 14-4-14h-4c-8 0-14-6-14-14z"
            fill="currentColor"
            stroke="black"
            strokeWidth="4"
          />
          <path d="M70 48h44M70 64h28" stroke="black" strokeWidth="6" strokeLinecap="round" />
          <circle cx="82" cy="38" r="6" fill="#facc15" stroke="black" strokeWidth="3" />
          <circle cx="100" cy="38" r="6" fill="#22d3ee" stroke="black" strokeWidth="3" />
          <path
            d="m132 86 14-8-4 16 12 10-16 2-6 14-6-14-16-2 12-10-4-16z"
            fill="#fff"
            stroke="black"
            strokeWidth="4"
          />
        </svg>
      </div>
      <div className="relative z-10 mt-10 flex w-full flex-col items-center justify-center gap-20">
        <div
          className={`
            flex w-full flex-col
            lg:w-6xl
          `}
        >
          <div className="mb-8 flex w-full flex-col gap-5 text-center">
            <Title
              title="The service I offer is specifically designed to meet your needs."
              size="3xl"
            />
          </div>
          <div
            className={`
              grid grid-cols-1 gap-4
              lg:grid-cols-2
            `}
          >
            {Services.map((service) => {
              const Icon = service.Icon;
              return (
                <div
                  key={service.id}
                  style={service.color ? { backgroundColor: service.color } : undefined}
                  className={`
                    group relative flex flex-col items-start gap-4 overflow-hidden rounded-2xl
                    border-2 border-solid border-black p-4 text-left shadow-[4px_4px_black]
                    transition-all duration-300
                    hover:-translate-y-1
                    lg:flex-row
                  `}
                >
                  <div
                    className={`
                      flex h-16 w-16 items-center justify-center self-center rounded-full border-2
                      border-solid border-black bg-white p-2
                      lg:self-start
                    `}
                  >
                    <Icon />
                  </div>
                  <div className="flex h-full flex-3/5 flex-col justify-between">
                    <div className="flex flex-col gap-2">
                      <b className="line-clamp-2 text-2xl font-bold">{service.name}</b>
                      <p>{service.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div
          className={`
            flex w-full flex-col
            lg:w-6xl
          `}
        >
          <div className="mb-8 flex w-full flex-col gap-5 text-center">
            <Title
              title="I follow a workflow that helps me get things done efficiently."
              size="3xl"
            />
          </div>
          <div className="w-full p-10">
            <Carousel className="w-full">
              <CarouselContent className="-ml-4">
                {Workflows.map((workflow) => {
                  const Icon = workflow.Icon;
                  return (
                    <CarouselItem
                      key={workflow.id}
                      className={`
                        flex w-fit basis-1/1 flex-row pl-4
                        sm:basis-1/2
                        lg:basis-1/3
                      `}
                    >
                      <div
                        style={{ backgroundColor: workflow.color }}
                        className="flex rounded-xl border-2 border-solid border-black p-2 text-left"
                      >
                        <div
                          className={`
                            group flex w-[14rem] flex-col items-start gap-4 overflow-hidden
                            rounded-md border-2 border-solid border-black bg-white p-2
                            lg:w-[20.5rem]
                          `}
                        >
                          <div
                            style={{ backgroundColor: workflow.color }}
                            className={`
                              m-2 flex h-16 w-16 items-center justify-center self-center
                              rounded-full border-2 border-solid border-black p-2
                            `}
                          >
                            <Icon />
                          </div>
                          <div className="flex h-full flex-3/5 flex-col justify-between">
                            <div className="flex flex-col gap-2">
                              <b className="line-clamp-2 text-2xl font-bold">{workflow.name}</b>
                              <p>{workflow.description}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              <CarouselPrevious variant="default" />
              <CarouselNext variant="default" />
            </Carousel>
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Service;
