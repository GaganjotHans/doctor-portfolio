import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";
import Banner from "../components/Banner";
import ContentB from "../components/ContentB";
import ContentA from "../components/ContentA";
import ContentC from "../components/ContentC";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Banner />
      <ContentA />
      <ContentB />
      <ContentC />
      <Component {...pageProps} />;
    </>
  );
}
