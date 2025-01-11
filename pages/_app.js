import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Cart from "@/components/Cart";
import "@/styles/globals.css";
import { useEffect, useState } from "react";

// Fetch products from API

export default function App({ Component, pageProps, products }) {
  const [isOpen, toggleCart] = useState(false),
    [cart, setCart] = useState({}),
    [subTotal, setSubTotal] = useState(0);

  // Save Cart
  const saveCart = (newCart) => {
    localStorage.setItem("cart", JSON.stringify(newCart));
    // Calculate Sub Total
    let total = 0;
    for (const code in newCart) {
      let { price, quantity } = newCart[code];
      total += parseInt(price) * parseInt(quantity);
    }
    setSubTotal(total);
  }

  useEffect(() => {
    let cart = localStorage.getItem("cart");


    if (cart) {
      try {
        cart = JSON.parse(cart);
        setCart(cart);
        saveCart(cart)
      } catch (error) {
        localStorage.clear();
      }

    }

  }, []);


  // Add to Cart
  // Accepted Props: title,price,description,image,quantity,code,varients
  const addToCart = (product) => {
    let { quantity = 1, code } = product,
      newCart = cart;
    if (newCart[code])
      newCart[code].quantity += quantity;
    else
      newCart[code] = product;

    setCart(newCart);
    saveCart(newCart);
  }


  // Clear Cart
  const clearCart = () => {
    setCart({});
    localStorage.setItem("cart", JSON.stringify({}));
  }

  // Remove From Cart
  const removeFromCart = (code) => {
    let newCart = JSON.parse(JSON.stringify(cart));

    delete newCart[code];
    setCart(newCart);
  }


  return (
    <>
      <Navbar toggleCart={toggleCart} />
      <Cart setCart={setCart} removeFromCart={removeFromCart} saveCart={saveCart} subTotal={subTotal} cart={cart} clearCart={clearCart} toggleCart={toggleCart} isOpen={isOpen} />
      <Component toggleCart={toggleCart} addToCart={addToCart} {...pageProps} />
      <Footer />
    </>
  );
}