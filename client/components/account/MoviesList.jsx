import MovieMiniCard from "../app/MovieMiniCard";

const MoviesList = ({ movies, title }) => {
  return (
    <div className=" flex flex-col justify-center items-stretch">
      <header className="w-full max-w-4xl flex items-center justify-between">
        <h2 className="text-lg">{title}</h2>
      </header>{" "}
      <div className="flex flex-wrap justify-start items-start gap-2 px-2">
        {movies.list.map((movie, index) => (
          <MovieMiniCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
};
export default MoviesList;
