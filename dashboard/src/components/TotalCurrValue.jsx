import React from "react";
function TotalCurrValue({allHoldings}) {

  if (!allHoldings || allHoldings.length === 0) {
    return <p>No holdings available in TotalCurrValue</p>;
  }
  // Calculate total current value
  const totalCurrentValue = allHoldings.reduce(
    (acc, stock) => acc + stock.price * stock.qty,
    0
  );

  const totalInvestment = allHoldings.reduce(
    (acc, stock) => acc + stock.avg * stock.qty,
    0
  );

  // Calculate P&L (Profit/Loss)
  const profitLoss = totalCurrentValue - totalInvestment;

  // Calculate P&L Percentage
  const profitLossPercentage = totalInvestment
    ? ((profitLoss / totalInvestment) * 100).toFixed(2)
    : "0.00";

  return (
    <div>
      <div className="row mt-5">
        <div className="col">
          <h5>{totalInvestment.toFixed(2)}</h5>
          <p>Total investment</p>
        </div>
        <div className="col">
          <h5>{totalCurrentValue.toFixed(2)}</h5>
          <p>Current value</p>
        </div>
        <div className="col">
          <h5>{profitLoss.toFixed(2)}</h5>
          <p>P&L</p>
        </div>
        <div className="col">
            <h5>{profitLossPercentage}</h5>
            <p>P&L %</p>
        </div>
      </div>

    
    </div>
  );
}

export default TotalCurrValue;
