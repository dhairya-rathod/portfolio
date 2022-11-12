import { Poppins } from "@next/font/google";
import type { AppProps } from "next/app";
import "../styles/globals.css";

const poppins = Poppins({ weight: "400" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
