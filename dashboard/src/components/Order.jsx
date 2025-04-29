import React, { useEffect, useState } from "react";
import axios from "axios";

const Orders = () => {

  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/oderlist").then((res) => {
      console.log(res)
      setOrderList(res.data);
    })
  }, [])

  return (
    <div className="orders">


      {!orderList ? (
        <p>You haven't placed any orders</p>
      ) : (
        <div className="order-table">
          <table>
            <tr>
              <th className="mx-5">Product Name</th>
              <th className="mx-5">Qty.</th>
              <th className="mx-5">price</th>
            </tr>
            {orderList.map((stock, index) => {
              return (
                <tr key={index}>
                  <td>{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.price}</td>
                </tr>
              );
            })}
          </table>
        </div>
      )}



    </div>

  );
};

export default Orders;