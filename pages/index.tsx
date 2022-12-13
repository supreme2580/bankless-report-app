import Head from "next/head";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Research from "../components/Research";
import Web3Native from "../components/Web3Native";
import CustomizedContent from "../components/CustomizedContent";
import Theoretical from "../components/Theoretical";
import Expertise from "../components/Expertise";

export default function Home() {
  return(
    <div>
      <Head>
        <title>Bankless report</title>
      </Head>
      <main className="w-full overflow-x-hidden bg-black">
        <Hero />
        <Web3Native />
        <CustomizedContent />
        <Theoretical />
        <Research />
        <Expertise />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
