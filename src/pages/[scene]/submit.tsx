import { NextPage } from "next";
import Head from "next/head";
import ListTemplate from "../../components/ListTemplate";
import Related from "../../components/Related";
import Scenario from "../../components/Scenario";
import Submissions from "../../components/PastSubmissions";
import Header from "../../components/Header";

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
          <Header />
          <div className="flex flex-row mx-20">
            <div className="w-2/5">
              <div className="mt-8">
                <ListTemplate
                  title="Related"
                  component={<Related />}
                  extraClass=" h-[70vh] mb-10 overflow-y-scroll"
                />
              </div>
            </div>
            <div className=" w-3/5">
              <div className="">
                <div className="mt-8">
                  <ListTemplate title="Scenario" component={<Scenario />} />
                </div>
                <div className="mt-8">
                  <ListTemplate
                    title="Submissions"
                    component={<Submissions />}
                    extraClass="max-h-[50rem] mb-10 overflow-y-scroll"
                  />
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
