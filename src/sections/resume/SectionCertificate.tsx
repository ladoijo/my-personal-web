import MedalIcon from '@/assets/icons/medal.svg';
import NewWindowIcon from '@/assets/icons/new_window.svg';
import Title from '@/components/Title';
import { Certificates } from '@/constants/HistoriesConst';

const SectionCertificates = () => {
  return (
    <section>
      <div className="relative mb-8 flex w-full flex-col items-center justify-center gap-5">
        <div className="relative top-0 z-10 flex h-1 w-full justify-self-center bg-black" />
        <Title title="Certifications" size="2xl" />
      </div>
      <div
        className={`
          grid grid-cols-1 gap-4
          lg:grid-cols-3
        `}
      >
        {Certificates.map((cert) => (
          <button
            key={cert.id}
            style={cert.color ? { backgroundColor: cert.color } : undefined}
            className={`
              group relative flex flex-row items-start gap-4 overflow-hidden rounded-2xl border-2
              border-solid border-black p-4 text-left transition-all duration-300
              hover:-translate-y-1
            `}
            onClick={() => window.open(cert.url, '_blank', 'noopener,noreferrer')}
          >
            <div
              className={`
                flex h-16 w-16 items-center justify-center rounded-full border-2 border-solid
                bg-white p-2
              `}
            >
              <MedalIcon />
            </div>
            <div className="flex h-full flex-3/5 flex-col justify-between">
              <div className="flex flex-col">
                <b className="line-clamp-2 font-bold">{cert.name}</b>
                <i>{cert.institution}</i>
              </div>
              <div className="mt-auto">
                <small className="text-gray-400">{cert.publishedDate}</small>
              </div>
            </div>
            <div
              className={`
                pointer-events-none absolute inset-0 bg-black/60 opacity-0 transition-opacity
                duration-300
                group-hover:opacity-70
              `}
            />
            <div
              className={`
                pointer-events-none absolute inset-0 flex items-center justify-center opacity-0
                transition-opacity duration-300
                group-hover:opacity-100
              `}
            >
              <NewWindowIcon className="h-6 w-6 text-white" />
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default SectionCertificates;
