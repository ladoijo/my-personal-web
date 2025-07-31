interface IPaperProps {
  children?: React.ReactNode;
  title?: string;
}

const Paper = ({ children, title }: IPaperProps) => {
  return (
    <div className="rounded-xl bg-white p-8 shadow-xl">
      {!!title && (
        <>
          <h1 className="text-5xl">{title}</h1>
          <hr className="my-4 border-gray-300" />
        </>
      )}
      {children}
    </div>
  );
};

export default Paper;
