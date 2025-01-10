import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import "@/styles/globals.css";
import { useEffect, useState } from "react";


export default function App({ Component, pageProps }) {
  const [isOpen, toggleCart] = useState(false),
    [cart, setCart] = useState({});

  // Load cart from local storage
  useEffect(() => {
    let cart = localStorage.getItem('cart');
    if (cart) setCart(JSON.parse(cart));
  }, []);




  const addToCart = (product) => {
    let { quantity, code } = product,
      newCart = cart;

    if (newCart[code])
      newCart[code].quantity += quantity;
    else
      newCart[code] = product;

    setCart(newCart, () => saveCart());
  }

  // Save cart to local storage
  const saveCart = () => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  return (
    <>
      <Navbar toggleCart={toggleCart} />
      <Cart cart={cart} toggleCart={toggleCart} isOpen={isOpen} />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

