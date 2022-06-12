import axios from "axios";
import Head from "next/head";
import { HomeMoviesListItem } from "../../../components";

const TopRatedMovies = ({ movies }) => {
  return (
    <>
      <Head>
        <title>Top Rated Movies</title>
      </Head>
      <section className=" flex flex-col items-center justify-center space-y-5 m-5">
        <header className="w-full max-w-4xl flex items-center justify-between">
          <h2 className="text-xl">Top Rated Movies</h2>
        </header>
        <div className="flex flex-wrap justify-center items-stretch gap-4">
          {movies.map((movie, index) => (
            <HomeMoviesListItem movie={movie} key={index} />
          ))}
        </div>
      </section>
    </>
  );
};
export default TopRatedMovies;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await axios.get(
    process.env.NEXT_PUBLIC_API_LINK + "/tmdb/topRated"
  );

  // const  topRatedMovies = await fetch(process.env.NEXT_PUBLIC_API_LINK + "/tmdb/topRated")
  // const data = await topRatedMovies.json()

  // Pass data to the page via props
  return {
    props: { movies: res.data },
  };
}
