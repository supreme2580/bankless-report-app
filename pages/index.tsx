import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Quality from "../components/Quality";
import Rapidly from "../components/Rapidly";
import Research from "../components/Research";
import Strategy from "../components/Strategy";
import UpDate from "../components/UpDate";

export default function Home() {
  return(
    <div>
      <Head>
        <title>Bankless report</title>
      </Head>
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Rapidly />
        <Quality />
        <UpDate />
        <Research />
        <Strategy />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}