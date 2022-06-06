import Head from "next/head";
import {
  DiscordBanner,
  Footer,
  Header,
  HeroSlider,
  HomeMoviesList,
  JoinUs,
} from "../components";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-12 w-full">
      <Head>
        <title>Movies Land</title>
        <meta name="description" content="Movies Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeroSlider title="Latest Movies" />
      <HomeMoviesList title={"Popular Movies"} />
      <HomeMoviesList title={"Top Ranked Movies"} />
      <DiscordBanner />
      <HomeMoviesList title={"From your Watchlist"} />
      <div className="flex flex-col items-center">
        <JoinUs />
      </div>
    </section>
  );
}
