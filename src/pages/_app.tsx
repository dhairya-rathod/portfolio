import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import ErrorBoundary from "@/components/ErrorBoundary";
import apolloClient from "@/lib/apollo";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ErrorBoundary>
        <ApolloProvider client={apolloClient}>
          <Component {...pageProps} />
        </ApolloProvider>
      </ErrorBoundary>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
}
