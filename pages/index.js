import Head from "next/head";

import HomePage from "./homepage";



export default function Home() {
  return (
    <>
      <Head>
        <title>Rishabh Tripathy</title>
        <meta name="description" content="Rishabh Tripathy is a musician." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className="">
        <HomePage />
      </div>
    </>
  );
}
