import Image from 'next/image';

const Photo = () => {
  return (
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
        className={`
          relative h-[26rem] w-fit rotate-3 rounded-md object-cover transition-all duration-300
          ease-in-out
          hover:scale-110 hover:rotate-0
        `}
      />
    </>
  );
};

export default Photo;
