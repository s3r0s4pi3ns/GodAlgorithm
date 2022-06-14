import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>God Algorithm - The programmers RPG</title>
        <meta
          name="description"
          content="The game that programmers were dream about"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="grid overflow-hidden grid-cols-[335px_minmax(900px,_1fr)_100px] grid-rows-1 auto-cols-fr h-screen">
          <div className="row-span-2 col-start-1 bg-blue-200">chat</div>
          <div className="col-start-2 col-span-2 bg-blue-500">
            <canvas className="w-full h-full"></canvas>
          </div>
          <div className="col-start-2 col-span-2 bg-blue-600">action menu</div>
        </div>
      </main>
    </>
  );
};

export default Home;
