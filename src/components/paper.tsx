interface IPaperProps {
  children?: React.ReactNode;
  title?: string;
}

const Paper = ({ children, title }: IPaperProps) => {
  return (
    <section className={`min-w-xs rounded-xl bg-white p-6 shadow-xl md:p-8`}>
      {!!title && (
        <>
          <h1 className="text-2xl md:text-5xl">{title}</h1>
          <hr className="my-4 border-gray-300" />
        </>
      )}
      {children}
    </section>
  );
};

export default Paper;
