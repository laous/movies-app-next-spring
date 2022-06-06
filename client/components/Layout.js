import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full pt-4 overflow-hidden px-3">
      <Head>
        <title>Movies Land</title>
        <meta name="description" content="Movies Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-7xl flex flex-col items-center justify-center space-y-8 px-3">
        <Header /> {children} <Footer />
      </main>
    </div>
  );
};
export default Layout;
