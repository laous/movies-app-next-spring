import Head from "next/head";
import { DiscordBanner, Footer, Header, HomeMoviesList, JoinUs } from "../components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-4 overflow-hidden">
      <Head>
        <title>Movies Land</title>
        <meta name="description" content="Movies Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl flex flex-col items-center justify-center space-y-8 ">
        <Header />
        <section className="flex flex-col items-center justify-center gap-12">
          <HomeMoviesList title={"Popular Movies"} />
          <HomeMoviesList title={"Top Ranked Movies"} />
          <DiscordBanner/>
          <HomeMoviesList title={"From your Watchlist"} />
        </section>
        <div className="flex flex-col items-center">
          <JoinUs />
          <Footer />
        </div>

      </main>
    </div>
  );
}
