import React, { useState, useEffect } from "react";
import "./Cart.css";
import Products from "./Products";

const Cart = ({ handleChange, cart, setCart, item }) => {
  const [price, setPrice] = useState(0);
  // const [cart, setCart] = useState([]);

  useEffect(() => {
    console.log(cart);
    console.log("cart changes");
  }, [cart]);

  const handleRemove = (id) => {
    const arr = cart.filter((item) => item.id !== id);
    setCart(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;
    cart.map((item) => (ans += item.amount * item.price));
    setPrice(ans);
  };

  useEffect(() => {
    handlePrice();
  });

  return (
    <article>
      {cart.length === 0
        ? "No items in cart yet"
        : cart.map((item) => (
            <div className="cart_box" key={item.id}>
              <div className="cart_img">
                <img src={item.imgUrl} alt="" />
                <p>{item.name}</p>
              </div>
              <div>
                <button onClick={() => handleChange(item, 1)}>+</button>
                <button>{item.amount}</button>
                <button onClick={() => handleChange(item, -1)}>-</button>
              </div>
              <div>
                <span>{item.price}</span>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </div>
            </div>
          ))}
      <div className="total">
        <span>Total Price of your Cart</span>
        <br />
        <span>${price}</span>
      </div>
    </article>
  );
};

export default Cart;
