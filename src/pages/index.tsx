import type { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";
import HeaderRest from "../components/HeaderRest";
import Menu from "../components/Menu";
import Writing from "../components/Writing";

const Home: NextPage = () => {
  const [menu, setmenu] = useState(false);

  const toggleMenu = () => {
    setmenu((e) => !e);
  };

  return (
    <>
      <Head>
        <title>Foxulate</title>
        <meta name="description" content="Practice writing daily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className=" relative">
          <div className="w-fit bg-white absolute ">
            {/** Menu Button */}
            <button
              className="z-10 w-[1.75rem] h-6 mt-7 ml-10 outline-none relative focus:outline-none hover:scale-105 duration-200"
              onClick={toggleMenu}
            >
              <div className="block ml-3 mt-6 w-full h-full transform  -translate-x-1/2 -translate-y-1/2">
                <span
                  aria-hidden="true"
                  className={`block absolute rounded h-[0.18rem] w-full transform transition duration-500 ease-in-out ${
                    menu
                      ? " rotate-45 bg-slate-200"
                      : " -translate-y-1.5 bg-gray-800"
                  }`}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute rounded h-[0.18rem] w-full   transform transition  ease-in-out ${
                    menu ? " opacity-0 bg-slate-200" : "bg-gray-800"
                  } `}
                ></span>
                <span
                  aria-hidden="true"
                  className={`block absolute rounded h-[0.18rem] w-full transform  transition duration-500 ease-in-out ${
                    menu
                      ? " -rotate-45 bg-slate-200"
                      : " translate-y-1.5 bg-gray-800"
                  }`}
                ></span>
              </div>
            </button>
          </div>
          <div className=" absolute bg-white w-full h-screen">
            <HeaderRest />

            <Writing />
          </div>
          <div
            className={`bg-neutral-800 absolute w-screen h-screen transform transition   ease-in-out duration-500 ${
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
