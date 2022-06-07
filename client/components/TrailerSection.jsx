import ReactPlayer from "react-player";

const TrailerSection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center space-y-5 m-5">
      <header className="w-full max-w-4xl flex items-center justify-between">
        <h2 className="text-xl">Trailer</h2>
      </header>
      <div className="flex flex-wrap justify-center items-stretch gap-4 w-full max-w-5xl">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
          className="w-full h-auto"
          width="100%"
          height="500px"
        />
      </div>
    </section>
  );
};
export default TrailerSection;
