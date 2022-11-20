import type { AppProps } from "next/app";

import ErrorBoundary from "@/components/ErrorBoundary";
import "../styles/globals.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Component {...pageProps} />
    </ErrorBoundary>
  );
}
