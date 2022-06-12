import Head from "next/head";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";
import 'react-toastify/dist/ReactToastify.css';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-full pt-4 overflow-hidden px-3 min-h-[100vh]">
      <Head>
        <title>Movies Land</title>
        <meta name="description" content="Movies Land" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className="max-w-7xl flex flex-col items-center justify-center space-y-8 px-4 mt-9">
        {children}
      </main>
      <ToastContainer />
      <Footer className=""/>
  </div>
  );
};
export default Layout;
