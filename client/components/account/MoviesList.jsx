import MovieMiniCard from "../app/MovieMiniCard";

const MoviesList = ({ movies, title }) => {
  return (
    <div className=" flex flex-col justify-center items-stretch">
      <header className="w-full max-w-4xl flex items-center justify-between">
        <h2 className="text-lg">{title}</h2>
      </header>{" "}
      <div className="flex flex-wrap justify-start items-start gap-2 px-2">
        {movies?.list.length < 1 ? (
          <p className="text-sm self-center justify-self-center mx-auto mt-10">
            The list is empty!
          </p>
        ) : (
          movies.list.map((movie, index) => (
            <MovieMiniCard movie={movie} key={index} />
          ))
        )}
      </div>
    </div>
  );
};
export default MoviesList;
