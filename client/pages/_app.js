import Head from "next/head";
import { Layout } from "../components";
import "../styles/globals.css";
import { store } from "../store";
import { Provider , useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>    <Layout>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      {Component.auth ? (
          <Auth>
              <Component {...pageProps} />
          </Auth>
        ) : (
            <Component {...pageProps} />
        )}
    </Layout></Provider>

  );
}

export default MyApp;


function Auth({ children }) {
  const { user, status, message } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (status === "loading") return;
    if (!user) router.push('account')
  }, [user, status]);

  if (user) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}