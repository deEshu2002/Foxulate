import type { NextPage } from "next";
import Head from "next/head";
import { useSelector } from "react-redux";
import Menu from "../components/Menu";
import Writing from "../components/Writing";
import { RootState } from "../components/store";
import Header from "../components/Header";

const Home: NextPage = () => {
  const menu = useSelector((state: RootState) => state.menu.menuState);

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
          <div
            className={`bg-neutral-800 absolute inset-0 w-screen h-screen transform transition  ease-in-out duration-500 ${
              menu ? "translate-x-0" : "-translate-x-full "
            } shadow-xl `}
          >
            <Menu />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
