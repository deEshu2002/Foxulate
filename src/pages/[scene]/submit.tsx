import { NextPage } from "next";
import Head from "next/head";
import HeaderRest from "../../components/HeaderRest";
import Related from "../../components/Related";
import Scenario from "../../components/Scenario";
import Submissions from "../../components/Submissions";

const Submit: NextPage = () => {
  return (
    <>
      <Head>
        <title>Foxulate</title>
        <meta name="description" content="Practice writing daily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="">
          <div className=" bg-white fixed ">
            {/** Menu Button */}
            <button className=" z-10 mt-2 ml-10 outline-none relative focus:outline-none hover:scale-105 duration-200">
              <svg
                width="26"
                height="21"
                viewBox="0 0 31 26"
                fill="#191919"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M31.0001 11.3333H6.69006L15.5117 2.51166L13.1551 0.154999L0.310059 13L13.1551 25.845L15.5117 23.4883L6.69006 14.6667H31.0001V11.3333Z" />
              </svg>
            </button>
          </div>

          <HeaderRest />

          <div className="flex flex-row mx-20">
            <div className="w-2/5">
              <div className="mt-8">
                <div className="shadow-md bg-white mb-1 rounded-t-xl w-11/12 border">
                  <p className="text-xl py-1 ml-2">Related</p>
                </div>
                <Related />
              </div>
            </div>
            <div className=" w-3/5">
              <div className="">
                <div className="">
                  <div className="mt-8">
                    <div className="shadow-md bg-white mb-1 rounded-t-xl w-11/12 border">
                      <p className="text-xl py-1 ml-2">Scenario</p>
                    </div>
                    <Scenario />
                  </div>
                </div>
                <div className="">
                  <div className="mt-8">
                    <div className="shadow-md bg-white mb-1 rounded-t-xl w-11/12 border">
                      <p className="text-xl py-1 ml-2">Submissions</p>
                    </div>
                    <Submissions />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Submit;
