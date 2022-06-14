import type { NextPage } from "next";
import Head from "next/head";
import { ActionMenu } from "../components/ActionMenu";
import { BattleField } from "../components/BattleField";
import { Chat } from "../components/Chat";
import { MainGrid } from "../components/MainGrid";

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
        <MainGrid>
          <Chat />
          <BattleField />
          <ActionMenu />
        </MainGrid>
      </main>
    </>
  );
};

export default Home;
