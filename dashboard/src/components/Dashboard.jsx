import React from "react";
import { Routes, Route } from "react-router-dom";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Order from "./Order";
import Holding from "./Holding";
import Positions from "./Positions";
import Funds from "./Fund";
import Apps from "./Apps";
import { GeneralContextProvider } from "./GeneralContext";
import { GeneralContextForSellProvider } from "./GeneralContextForSell";



function Dashboard() {


  return (
    <div className="dashboard-container">
      <GeneralContextProvider>
      <GeneralContextForSellProvider>
        {/* Your other components */}
        <WatchList />
      </GeneralContextForSellProvider>
      </GeneralContextProvider>
      <div className="content">
        <Routes>
          <Route path="/" element={<Summary />} />
          <Route path="/order" element={<Order />} />
          <Route path="/holding" element={<Holding />} />
          <Route path="/position" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
