import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>AirBNB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />
      <main>
        <section>
          <h2 className>Explore Nearby</h2>
        </section>
      </main>
    </div>
  );
}
