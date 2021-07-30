import React from 'react';
import './Main.scss';
const Main = () => {
  return (
    <main>
      <div className="main-content">
        <div className="main-left">
          <h1>
          Making time a good time by making food the good food.
          </h1>
          <p>
          There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment,
          </p>
          <div className="main-btn-content">
            <button type="button" className="btn btn-main btn-order"><div className="layer">Order Now</div>Order Now</button>
            <button type="button" className="btn btn-main btn-food"><div className="layer">Food Details</div>Food Details</button>
          </div>
        </div>
        <div className="main-right">
          <img src="./images/burger.png" alt="burger" />
        </div>
      </div>
    </main>
  );
};

export default Main;