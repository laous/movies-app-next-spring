import Head from "next/head";
import { useState } from "react";
import {
  DiscordBanner,
  Footer,
  Header,
  HeroSlider,
  HomeMoviesList,
  JoinUs,
  TrailerModal,
} from "../components";

export default function Home() {
  const [showModal, setShowModal] = useState(false)
  const [movieLink, setMovieLink] = useState("https://www.youtube.com/watch?v=xU47nhruN-Q")
  return (
    <section className="flex flex-col items-center justify-center gap-12 w-full">
      <Head>
        <title>Movies Land</title>
        <meta name="description" content="Movies Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TrailerModal state={showModal} setShowModal={setShowModal} movieLink={movieLink}/>
      <HeroSlider title="Latest Movies" setShowModal={setShowModal} setMovieLink={setMovieLink} movieLink={movieLink} />
      <HomeMoviesList title={"Popular Movies"} to={"/movies/popular"} />
      <HomeMoviesList title={"Top Ranked Movies"} to={"/movies/top-rated"} />
      <DiscordBanner />
      <HomeMoviesList title={"From your Watchlist"} to={"/movies/watchlist"} />
      <div className="flex flex-col items-center">
        <JoinUs />
      </div>
    </section>
  );
}
