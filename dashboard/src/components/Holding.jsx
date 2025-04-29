import React, { useEffect, useState } from "react";
import axios from "axios";
import VerticalGraph from "./VerticalGraph";
import TotalCurrValue from "./TotalCurrValue";

function Holding() {
  const [allHoldings, setAllHoldings] = useState([]);
  const [allOrder, setAllOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/allholding")
      .then((res) => {
        console.log(res.data);
        setAllHoldings(res.data.holdings);
        setAllOrder(res.data.orders);
      })
      .catch((err) => console.error("Error fetching holdings and orders:", err));
  }, []);

  const labels = allHoldings.map((stock) => stock.name);

  const data = {
    labels,
    datasets: [
      {
        label: "Stock Price",
        data: allHoldings.map((stock) => stock.price),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(11, 222, 67)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h3 className="title">Holding ({allHoldings.length})</h3>

      {/* Holdings Table */}
      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {allHoldings.map((stock, index) => {
              const currVal = stock.price * stock.qty;
              const isProfit = currVal - stock.avg * stock.qty >= 0.0;
              const profClass = isProfit ? "profit" : "loss";
              const dayClass = stock.isLoss ? "loss" : "profit";
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg?.toFixed(2) || "N/A"}</td>
                  <td>{stock.price?.toFixed(2) || "N/A"}</td>
                  <td>{currVal.toFixed(2)}</td>
                  <td className={profClass}>{(currVal - stock.avg * stock.qty).toFixed(2)}</td>
                  <td className={profClass}>{stock.net || "N/A"}</td>
                  <td className={dayClass}>{stock.day || "N/A"}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Orders Table */}
      <div className="order-table">
        <h2>Recent Holdings</h2>
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Qty.</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {allOrder.map((stock, index) => (
              <tr key={index}>
                <td>{stock.name}</td>
                <td>{stock.qty}</td>
                <td>{stock.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
            <TotalCurrValue allHoldings ={allHoldings} />
      {/* Chart */}
      <VerticalGraph data={data} />
    </>
  );
}

export default Holding;
