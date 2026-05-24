import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const [darkMode, setDarkMode] = useState(
    JSON.parse(
      localStorage.getItem("darkMode")
    ) || false
  );

  useEffect(() => {
    fetch(
      "https://fakestoreapi.com/products"
    )
      .then((res) => res.json())
      .then((data) =>
        setProducts(data)
      );
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );
  }, [cart]);

  useEffect(() => {
    localStorage.setItem(
      "darkMode",
      JSON.stringify(darkMode)
    );
  }, [darkMode]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeItem = (id) => {
    setCart(
      cart.filter(
        (item) =>
          item.id !== id
      )
    );
  };

  return (
    <div
      className={
        darkMode
          ? "app dark"
          : "app"
      }
    >
      <Header
        darkMode={darkMode}
        setDarkMode={
          setDarkMode
        }
      />

      <div className="container">

        <ProductList
          products={
            products
          }
          addToCart={
            addToCart
          }
        />

        <Cart
          cart={cart}
          removeItem={
            removeItem
          }
        />

      </div>
    </div>
  );
}

export default App;