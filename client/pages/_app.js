import { Layout } from "../components";
import "../styles/globals.css";
import { store } from "../store";
import { Provider, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { useEffect } from "react";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        {Component.auth ? (
          <Auth>
            <NextNProgress />
            <Component {...pageProps} />
          </Auth>
        ) : (
          <>
            {" "}
            <NextNProgress />
            <Component {...pageProps} />
          </>
        )}
      </Layout>
    </Provider>
  );
}

export default MyApp;

function Auth({ children }) {
  const { user, status, message } = useSelector((state) => state.auth);
  const router = useRouter();
  useEffect(() => {
    if (status === "loading") return;
    if (!user) router.push("/account");
  }, [user, status,router]);

  if (user) {
    return children;
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>;
}
