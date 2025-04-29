import axios from "axios";
import React, { useEffect, useState } from "react";
import { totalCurrentValue, totalInvestment, profitLoss, profitLossPercentage } from "./totalValue";

const Summary = () => {
  const [allholdings, setAllholdings] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/allholding") // ✅ Ensure correct API endpoint
      .then((res) => {
        console.log("Data fetched:", res.data); // Debugging
        setAllholdings(res.data.holdings); // ✅ Set holdings correctly
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const currentValue = totalCurrentValue(allholdings);
  const investment = totalInvestment(allholdings);
  const profit = profitLoss(allholdings);
  const profitPercent = profitLossPercentage(allholdings);

  return (
    <div className="section">
      <span>
        <p>Hii! User</p>
      </span>

      <div className="data">
        <div className="first">
          <h3 className={profit >= 0 ? "profit" : "loss"}>
            ₹ {profit.toFixed(2)} ({profitPercent}%)
          </h3>
          <p>P&L</p>
        </div>
        <hr />

        <div className="second">
          <p>Current Value: <span>₹ {currentValue.toFixed(2)}</span></p>
          <p>Investment: <span>₹ {investment.toFixed(2)}</span></p>
        </div>
      </div>
      <hr className="divider" />
    </div>
  );
};

export default Summary;
