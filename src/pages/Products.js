import React, { useState, useEffect } from "react";
import list from "../data";
import Cards from "./card";
import "./Products.css";
import Cart from "./Cart";

export let cart = [];

const Products = ({ props }) => {
  const [search, setSearch] = useState([]);
  const [drinks, setdrinks] = useState([]);
  const [drinksCopy, setdrinksCopy] = useState([]);
  const [cart, setCart] = useState([]);

  const drinks_data = list;

  const handleChange = (e) => {
    e.preventDefault();
    setSearch(e.target.value);
    if (e.target.value === "") {
      setdrinks(drinksCopy);
    } else {
      let filtered = [];
      drinksCopy.forEach((drinks) => {
        if (
          drinks.name.toLowerCase().includes(e.target.value.toLowerCase()) ===
            true ||
          String(drinks.price).includes(e.target.value.toLowerCase()) === true
        ) {
          filtered.push(drinks);
        }
        setdrinks(filtered);
      });
    }
  };

  const handleRemove = (e) => {
    e.preventDefault();
  };

  const handleAdd = (e) => {
    e.preventDefault();
  };

  const handleClick = (item) => {
    console.log("button clicked");
    let items_in_cart = [];
    cart.forEach((product) => {
      items_in_cart.push(product);
    });
    items_in_cart.push(item);
    setCart(items_in_cart);
  };

  useEffect(() => {
    console.log(cart);
  }, [cart]);

  // const Setsearch = () => {};

  return (
    <div>
      <br />
      <h1>Anyfeedbacks?</h1>
      <input
        className="border p-7 mx-10"
        type="text"
        placeholder="Any feedback is well come!"
        onChange={handleChange}
      />
      <br />
      <h2> Our Products:</h2>
      <section>
        {drinks_data.length === 0
          ? "No data available in the server"
          : drinks_data.map((item) => (
              <Cards key={item.id} item={item} handleClick={handleClick} />
            ))}
      </section>
      <Cart
        cart={cart}
        setCart={setCart}
        handleRemove={handleRemove}
        handleAdd={handleAdd}
      ></Cart>
    </div>
  );
};

export default Products;
