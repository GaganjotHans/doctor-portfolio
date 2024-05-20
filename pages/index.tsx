import { Inter } from "next/font/google";
import Head from "next/head";
import Banner from "../components/Banner";
import ContentB from "../components/ContentB";
import ContentA from "../components/ContentA";
import ContentC from "../components/ContentC";
import Services from "../components/Services";
import Slider from "../components/Slider";
import Footer from "../components/Footer";
import Testimonial from "../components/Testimonial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Personal Portfolio</title>
        <meta name="description" content="Ecommerce Website - Shop online" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Banner />
        <ContentA />
        <ContentB />
        <ContentC />
        <Services />
        <Slider />
        <Testimonial />
        <Footer />
      </div>
    </div>
  );
}
