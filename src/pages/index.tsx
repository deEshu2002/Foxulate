import type { NextPage } from "next";
import Head from "next/head";
import Writing from "../components/Writing";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Foxulate</title>
        <meta name="description" content="Practice writing daily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <Header />
          <div className="absolute bg-white w-full">
            <Writing />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
