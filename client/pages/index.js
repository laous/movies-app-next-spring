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

export default function Home({
  topRatedMovies,
  popularMovies,
  upcomingMovies,
}) {
  const [showModal, setShowModal] = useState(false);
  const [movieLink, setMovieLink] = useState("");
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
      <HomeMoviesList
        title={"Latest Movies"}
        to={"/movies/popular"}
        movies={popularMovies}
      />

      <DiscordBanner />
      {/* <HomeMoviesList title={"From your Watchlist"} to={"/movies/watchlist"} /> */}
      <div className="flex flex-col items-center">
        <JoinUs />
      </div>
    </section>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
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
  // const  topRatedMovies = await fetch(process.env.NEXT_PUBLIC_API_LINK + "/tmdb/topRated")
  // const data = await topRatedMovies.json()

  // Pass data to the page via props
  return {
    props: {
      topRatedMovies: topRatedMovies,
      popularMovies: popularMovies,
      upcomingMovies,
    },
  };
}
