import { NextPage } from "next";
import Head from "next/head";
import Awards from "../components/Awards";
import Flag from "../components/Flag";
import Header from "../components/Header";
import ListTemplate from "../components/ListTemplate";
import Recents from "../components/Recents";
import Streak from "../components/Streak";

const Profile: NextPage = () => {
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

          <div className="flex flex-row mx-20">
            <div className="w-2/5">
              <div className="grid justify-items-center">
                <div className=" rounded-full  bg-black  w-[19rem] h-[19rem] mt-8 mb-10"></div>
                <div className="w-[20rem] flex justify-center">
                  <ListTemplate
                    title="Awards"
                    component={<Awards />}
                    extraClass="max-h-72 overflow-y-scroll"
                  />
                </div>
              </div>
            </div>

            <div className="w-3/5">
              <div className=" mt-32 flex flex-col align-middle ">
                <div className="text-3xl font-normal flex">
                  Profile Name
                  <Flag prop="india" />
                </div>
                <p className="text-gray-600 mt-1">
                  tcssskiafsdddfdfn8192@gmail.com
                </p>
                <div className="text-blue-600 font-semibold cursor-pointer flex mt-3">
                  Edit
                  <svg
                    className="fill-blue-600 mt-1 ml-2.5 cursor-pointer"
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.6374 0.549911C11.3706 -0.183304 12.5613 -0.183304 13.2946 0.549911L14.4501 1.70643C15.1833 2.43941 15.1833 3.62908 14.4501 4.36235L13.0306 5.78197L9.21791 1.96953L10.6374 0.549911V0.549911ZM12.3678 6.44485L5.52839 13.2819C5.22338 13.5869 4.84504 13.8128 4.43151 13.933L0.902427 14.9714C0.655482 15.0447 0.3883 14.9772 0.206171 14.769C0.0240417 14.6135 -0.0440588 14.3466 0.028617 14.0973L1.06667 10.5688C1.18867 10.1552 1.41245 9.77684 1.71776 9.4718L8.55509 2.633L12.3678 6.44485V6.44485Z" />
                  </svg>
                </div>
              </div>
              <div className="mt-20">
                <ListTemplate title="Submission" component={<Streak />} />
              </div>

              <div className="my-10">
                <ListTemplate
                  title="Recents"
                  component={<Recents />}
                  extraClass=" max-h-[50rem] mb-10 overflow-y-scroll"
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Profile;
