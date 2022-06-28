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
          <div>
            <br />
            <br />
            <h2> Best deals by1 get 1</h2>
            <section>
              {list.map((item) => (
                <Cards key={item.id} item={item} handleClick={handleClick} />
              ))}
            </section>

            <p>
              Address: Jl. H. Lebar Kav. 56 No. 22, Meruya Utara, Kembangan,
              RT.3/RW.10, Meruya Utara, Kec. Kembangan, Kota Jakarta Barat,
              Daerah Khusus Ibukota Jakarta 11620
            </p>
            <p>Contact information X@gmail.com</p>
            <p>Phone number 999999</p>
            <p>Instagram MRX Coffee</p>
            <button> instagram link</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
