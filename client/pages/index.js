import Head from "next/head";
import { useState } from "react";
import axios from "axios";
import {
  DiscordBanner,
  HeroSlider,
  HomeMoviesList,
  JoinUs,
  TrailerModal,
} from "../components";
import { useSelector } from "react-redux";

export default function Home({
  topRatedMovies,
  popularMovies,
  upcomingMovies,
}) {
  const [showModal, setShowModal] = useState(false);
  const [movieLink, setMovieLink] = useState("");
  const { user, status, message } = useSelector((state) => state.auth);

  return (
    <section className="flex flex-col items-center justify-center gap-12 w-full">
      <Head>
        <title>Movies Land</title>
        <meta name="description" content="Movies Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TrailerModal
        state={showModal}
        setShowModal={setShowModal}
        movieLink={"https://www.youtube.com/watch?v=" + movieLink}
      />
      <HeroSlider
        title="Upcoming Movies"
        setShowModal={setShowModal}
        setMovieLink={setMovieLink}
        movieLink={movieLink}
        upcomingMovies={upcomingMovies}
      />

      <HomeMoviesList
        title={"Top Ranked Movies"}
        to={"/movies/top-rated"}
        movies={topRatedMovies}
      />
      <DiscordBanner />
      <HomeMoviesList
        title={"Latest Movies"}
        to={"/movies/popular"}
        movies={popularMovies}
      />

      {/* {watchlist.length>0 && <HomeMoviesList title={"From your Watchlist"}  movies={watchlist} />} */}
      {!user && (
        <div className="flex flex-col items-center">
          <JoinUs />
        </div>
      )}
    </section>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  // const [topRatedMovies, popularMovies, upcomingMovies] = await Promise.all([
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/top_rated?api_key=" +
  //         process.env.TMDB_API_KEY +
  //         "&language=en-US&page=1"
  //     )
  //     .then((res) => res.data.results),
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/popular?api_key=" +
  //         process.env.TMDB_API_KEY +
  //         "&language=en-US&page=1"
  //     )
  //     .then((res) => res.data.results),
  //   axios
  //     .get(
  //       "https://api.themoviedb.org/3/movie/upcoming?api_key=" +
  //         process.env.TMDB_API_KEY +
  //         "&language=en-US&page=1"
  //     )
  //     .then((res) => {
  //       return res.data.results;
  //     }),
  // ]);

  const [topRatedMovies, popularMovies, upcomingMovies] = await Promise.all([
    axios
      .get(process.env.NEXT_PUBLIC_API_LINK + "/tmdb/topRated")
      .then((res) => res.data),
    axios
      .get(process.env.NEXT_PUBLIC_API_LINK + "/tmdb/popular")
      .then((res) => res.data),
    axios
      .get(process.env.NEXT_PUBLIC_API_LINK + "/tmdb/upcoming")
      .then((res) => res.data),
  ]);

  // Pass data to the page via props
  return {
    props: {
      topRatedMovies: topRatedMovies,
      popularMovies: popularMovies,
      upcomingMovies,
    },
  };
}
