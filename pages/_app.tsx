import "@/styles/globals.css";
import Navbar from "../components/Navbar";
import NavbarTop from "../components/NavbarTop";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavbarTop />
      <Navbar />
      <Component {...pageProps} />;
    </>
  );
}
