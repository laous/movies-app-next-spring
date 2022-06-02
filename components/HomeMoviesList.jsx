import Link from "next/link";
import HomeMoviesListItem from "./HomeMoviesListItem";

const HomeMoviesList = () => {
  return (
    <section className=" flex flex-col items-center justify-center space-y-5 m-5">
      <header className="w-full max-w-4xl flex items-center justify-between">
        <h2 className="text-xl">Top Movies</h2>
        <div className="text-xs text-transparent bg-clip-text bg-gradient-to-r from-[#FF6969] to-[#E752FF]">
          <Link href="/">See more</Link>
        </div>
      </header>
      <div className="flex flex-wrap justify-center items-stretch gap-4">
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
      </div>
    </section>
  );
};
export default HomeMoviesList;
