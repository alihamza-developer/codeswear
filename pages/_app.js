import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const [cart, toggleCart] = useState(false);

  return (
    <>
      <Navbar toggleCart={toggleCart} />
      <Cart toggleCart={toggleCart} status={cart} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
