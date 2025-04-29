import React, { useState } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContextForSell from "./GeneralContextForSell";

// import "./BuyActionWindow.css";

const SellActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const handleSellClick = () => {
    axios.post("http://localhost:3000/sellorder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "SELL", // Change mode from "BUY" to "SELL"
    });
  
    GeneralContextForSell.closeSellWindow();
  };
  

  const handleCancelClick = () => {
    GeneralContextForSell.closeSellWindow();
  };

  return (
    <div className="container" id="buy-window" draggable="true">
        <h3 className="Buy">Buy</h3>
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>
        <div>
          <Link className="btn btn-blue" onClick={handleSellClick}>
            sell
          </Link>
          <Link to="" className="btn btn-grey" onClick={handleCancelClick}>
            Cancel
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SellActionWindow;