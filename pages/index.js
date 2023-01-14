import Head from "next/head";

import { useEffect, useState } from "react";

import Loading from "../components/Loading/Loading";

export default function Home() {
  const [loadingPage, setLoadingPage] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoadingPage(false);
    }, 6000);
  }, []);

  return (
    <>
      <Head>
        <title>Matias Arias - Portfolio</title>
        <meta name="description" content="My portfolio by Matias Arias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loadingPage ? (
        <Loading />
      ) : (
        <main>
          <h1 className="text-green-700 font-bold text-4xl">
            Matias Arias - Portfolio
          </h1>
        </main>
      )}
    </>
  );
}
