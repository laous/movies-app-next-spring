import ReactPlayer from "react-player";

const TrailerSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center space-y-5 m-5">
      <header className="w-full max-w-4xl flex items-center justify-between">
        <h2 className="text-xl">Trailer</h2>
      </header>
      <div className="flex flex-wrap justify-center items-stretch gap-4 w-full max-w-[80%] md:max-w-5xl h-64 md:h-[500px]">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=xU47nhruN-Q"
          className="w-full h-auto"
          width="100%"
          height="100%"
        />
      </div>
    </section>
  );
};
export default TrailerSection;
