import React from 'react'


function Pricing() {
  return (
    <div className="container mt-5 p-5">
      <div className="row text-center text-muted ">
        <h1 className='fs-1'>Charges</h1>
        <p className='fs-4'>List of all charges and taxes</p>
      </div>
      <div className="row border-top mt-5 p-5">

        <div className="col-4 p-3 text-center">
          <img src="../assets/pricing0.svg" alt="" style={{width:"60%"}} />

          <div className="p-2 text-center">
            <h1 className='fs-3'>Free equity delivery</h1>
            <p className='text-muted'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="../assets/intradayTrades.svg" alt="" style={{width:"60%"}} />
          <div className="p-2 text-center">
            <h1 className='fs-3'>Intraday and F&O trades </h1>
            <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
          </div>
        </div>
        <div className="col-4 p-3 text-center">
          <img src="../assets/pricing0.svg" alt="" style={{width:"60%"}} />
          <div className="p-2 text-center">
            <h1 className='fs-3'>Free direct MF</h1>
            <p className='text-muted' >All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing