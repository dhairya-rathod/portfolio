import type { AppProps } from "next/app";
import { ToastContainer } from "react-toastify";

import ErrorBoundary from "@/components/ErrorBoundary";
import { GoogleAnalytics } from "@/components/Scripts";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics />
      <ErrorBoundary>
        <Component {...pageProps} />
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
