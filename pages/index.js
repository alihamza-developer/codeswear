import Head from "next/head";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <>
      <Head>
        <title>CodesWear.com - Wear the code</title>
        <meta name="keywords" content="codingtshirt, coding shirts, codeswear" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>




      <Navbar />
      <Footer />
    </>
  );
}

