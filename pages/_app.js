import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

// Fetch products from API
export async function getStaticProps() {
  let response = await fetch('http://localhost:3000/api/products');
  response = await res.json()
  // Pass data to the page via props
  return { props: { response } };
}


export default function App({ Component, pageProps, response }) {
  const [isOpen, toggleCart] = useState(false),
    [cart, setCart] = useState({});

  // Load cart from local storage
  useEffect(() => {
    let cart = localStorage.getItem('cart');
    if (cart) setCart(JSON.parse(cart));
  }, []);

  // Add product to cart
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

