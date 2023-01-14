import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Matias Arias - Portfolio</title>
        <meta name="description" content="My portfolio by Matias Arias" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1 className="text-green-700 font-bold text-4xl">
          Matias Arias - Portfolio
        </h1>
      </main>
    </>
  );
}
