import React, { useState } from "react";

import SellActionWindow from "./sellActionWindow";

const GeneralContextForSell = React.createContext({
  openSellWindow: (uid) => {},
  closeSellWindow: () => {},
});

export const GeneralContextForSellProvider  = (props) => {
  const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const handleOpenSellWindow = (uid) => {
    setIsSellWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const handleCloseSellWindow = () => {
    setIsSellWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContextForSell.Provider
      value={{
        openSellWindow: handleOpenSellWindow,
        closeSellWindow: handleCloseSellWindow,
      }}
    >
      {props.children}
      {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
    </GeneralContextForSell.Provider>
  );
}
export default GeneralContextForSell;