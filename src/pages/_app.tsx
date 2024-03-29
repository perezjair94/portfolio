import "@/styles/globals.css";
import type { AppProps } from "next/app";
import GlobalStyles from "@/utlis/GlobalStyles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <GlobalStyles />
      <Component {...pageProps} />
    </div>
  );
}
