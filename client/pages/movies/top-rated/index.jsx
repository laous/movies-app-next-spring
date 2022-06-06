import { HomeMoviesListItem } from "../../../components";

const index = () => {
  return (
    <section className=" flex flex-col items-center justify-center space-y-5 m-5">
      <header className="w-full max-w-4xl flex items-center justify-between">
        <h2 className="text-xl">Top Rated Movies</h2>
      </header>
      <div className="flex flex-wrap justify-center items-stretch gap-4">
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
        <HomeMoviesListItem />
      </div>
    </section>
  );
};
export default index;
