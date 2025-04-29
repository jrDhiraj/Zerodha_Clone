


export function totalCurrentValue(allHoldings) {
    if (!allHoldings || allHoldings.length === 0) {
        return 0;
    }
    return allHoldings.reduce((acc, stock) => acc + stock.price * stock.qty, 0);
}

export function totalInvestment(allHoldings) {
    if (!allHoldings || allHoldings.length === 0) {
        return 0;
    }
    return allHoldings.reduce((acc, stock) => acc + stock.avg * stock.qty, 0);
}

export function profitLoss(allHoldings) {
    const currentValue = totalCurrentValue(allHoldings);
    const investment = totalInvestment(allHoldings);
    return currentValue - investment;
}

export function profitLossPercentage(allHoldings) {
    const investment = totalInvestment(allHoldings);
    const profitOrLoss = profitLoss(allHoldings);
    return investment ? ((profitOrLoss / investment) * 100).toFixed(2) : "0.00";
}
