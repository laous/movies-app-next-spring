import Head from "next/head";
import { Header, HomeMoviesList } from "../components";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-4 px-3">
      <Head>
        <title>Movies Land</title>
        <meta name="description" content="Movies Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl flex flex-col items-center justify-center space-y-8 ">
        <Header />
        <section className="flex flex-col items-center justify-center gap-8">
          <HomeMoviesList title={"Popular Movies"} />
          <HomeMoviesList title={"Top Ranked Movies"} />
          <HomeMoviesList title={"Form your Watchlist"} />
        </section>
      </main>
    </div>
  );
}
