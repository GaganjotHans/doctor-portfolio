import { Inter } from "next/font/google";
import Head from "next/head";
// import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal Portfolio</title>
        <meta name="description" content="Ecommerce Website - Shop online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
}