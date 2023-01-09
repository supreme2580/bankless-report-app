import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Expertise from "../components/Expertise";
import Rapidly from "../components/Rapidly";
import How from "../components/How";
import Decisions from "../components/Decisions";
import Support from "../components/Support";

export default function Home() {
  return(
    <div>
      <Head>
        <title>Bankless report</title>
      </Head>
      <main className="w-full overflow-x-hidden bg-black">
        <Hero />
        <Rapidly />
        <How />
        <Decisions />
        <Support />
        <Expertise />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
