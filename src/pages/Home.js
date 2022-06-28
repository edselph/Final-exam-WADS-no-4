import "./Home.css";
import React, { useState } from "react";
import list from "../data";
import Cards from "./card";

const Home = (handleClick) => {
  return (
    <div className="cofee-pic">
      <img
        src="https://assets.dmagstatic.com/wp-content/uploads/2015/08/MSP_8444.jpg"
        width="900px"
        height="400px"
      />
      <div className="empty-space">
        <br />
        <br />

        <div className="Cofee-intro">
          Wellcome to MR.X coffee shop
          <br />
          This is where you can endaulge your body with many drinks such as
          coffee, coffee, coffee drinks in this store are the best.
          <br />
          <h2>Contact information X@gmail.com</h2>
          <h2>Phone number 999999</h2>
          <div>
            <br />
            <br />
            <h2> Best Sellers:</h2>
            <section>
              {list.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
