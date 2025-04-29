import React from "react";
import { useState, useContext } from "react"

import { Tooltip, Grow } from "@mui/material";
import { BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz } from '@mui/icons-material';

import { watchlist } from "../data/data"

import GeneralContext from "./GeneralContext"
import GeneralContextForSell from "./GeneralContextForSell"

// import {Doughnut}  from "./DoughnutChart";
import DoughnutChart from "./DoughnutChart";



const labels = watchlist.map((subArray) => subArray["name"])

const WatchList = () => {

  const data = {
    labels,
    datasets: [
      {
        label: 'watch list',
        data: watchlist.map((stock) => stock.price),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  }

  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length}/ 50</span>
      </div>
      <ul className="list">
        {watchlist.map((stock, index) => {
          return (
            <WatchListItem stock={stock} key={index} />
          )
        })}

        <DoughnutChart data={data} />

      </ul>
    </div>
  );
};
export default WatchList;


const WatchListItem = ({ stock }) => {
  const [showWatchListActions, setShowWatchListActions] = useState(false);

  const handleMouseEnter = (e) => {
    setShowWatchListActions(true);
  }

  const handleMouseLeave = (e) => {
    setShowWatchListActions(false)
  };

  return (
    <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="item">
        <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{stock.percent}</span>
          {stock.isDown ? (<KeyboardArrowDown className="down" />) : (<KeyboardArrowUp className="up" />)}
          <span className="price">{stock.price}</span>
        </div>
      </div>
      {showWatchListActions && <WatchListActions uid={stock.name} />}
    </li>
  )
}

const WatchListActions = ({ uid }) => {

  const generalContext = useContext(GeneralContext);
  const generalContextForSell = useContext(GeneralContextForSell);

  const handleSellClick = () => {
    generalContextForSell.openSellWindow(uid);
  }
  const handleBuyClick = () => {
    generalContext.openBuyWindow(uid);
  };

  return (
    <span className="actions">
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow TransitionComponent={Grow}
          onClick={handleSellClick}
        >
          <button className="Sell" >Sell</button>
        </Tooltip>

        <Tooltip title="Analytics (A)" placement="top" arrow TransitionComponent={Grow}>
          <button><BarChartOutlined className="icon" /></button>
        </Tooltip>

        <Tooltip title="More (M)" placement="top" arrow TransitionComponent={Grow}>
          <button className="More"><MoreHoriz Icon className="icon" /></button>
        </Tooltip>
      </span>
    </span>
  )
}



const App = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <div>
      <button className="btn btn-success" onClick={() => setIsPopupOpen(true)}>
        Open Buy Window
      </button>
      <BuyActionWindow uid="AAPL" isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </div>
  );
};

