import Paper from '@/components/Paper';
import Title from '@/components/Title';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Services, Workflows } from '@/constants/MyServiceConst';
import { NavItems } from '@/constants/NavItemsConst';

const Service = () => {
  return (
    <Paper id={NavItems[3].id} title="My Services" className="bg-dots">
      <div className="mt-10 flex w-full flex-col items-center justify-center gap-20">
        <div className="flex w-6xl flex-col">
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
                    group relative flex flex-row items-start gap-4 overflow-hidden rounded-2xl
                    border-2 border-solid border-black p-4 text-left shadow-[4px_4px_black]
                    transition-all duration-300
                    hover:-translate-y-1
                  `}
                >
                  <div
                    className={`
                      flex h-16 w-16 items-center justify-center rounded-full border-2 border-solid
                      bg-white p-2
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
        <div className="flex w-6xl flex-col">
          <div className="mb-8 flex w-full flex-col gap-5 text-center">
            <Title
              title="I follow a workflow that helps me get things done efficiently."
              size="3xl"
            />
          </div>
          {/* <div className="flex w-full flex-row"> */}
          <Carousel className="w-full">
            <CarouselContent className="-ml-4">
              {Workflows.map((workflow) => {
                const Icon = workflow.Icon;
                return (
                  <CarouselItem key={workflow.id} className="flex w-fit basis-1/3 flex-row pl-4">
                    <div
                      style={{ backgroundColor: workflow.color }}
                      className="flex rounded-xl border-2 border-solid border-black p-2 text-left"
                    >
                      <div
                        className={`
                          group flex w-[22rem] flex-col items-start gap-4 overflow-hidden rounded-md
                          border-2 border-solid border-black bg-white p-2
                        `}
                      >
                        <div
                          style={{ backgroundColor: workflow.color }}
                          className={`
                            m-2 flex h-16 w-16 items-center justify-center self-center rounded-full
                            border-2 border-solid border-black p-2
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
          {/* </div> */}
        </div>
      </div>
    </Paper>
  );
};

export default Service;
