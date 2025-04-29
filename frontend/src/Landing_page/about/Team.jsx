import React from 'react'

function Team() {
  return (
    <div className="container mt-5 mb-5 p-5">
      <div className="row">
        <h1 className='text-center'>People</h1>
      </div>
    <div className="row p-5">   
      <div className="col-4 p-5 text-center">
       <img src="../assets/nithin-kamath.jpg" style={{width:"95%"}} className='rounded-circle "mx-auto d-block' alt="" />
       <h2 className='text-center'>Nithin Kamath</h2>
       <p className='text-center'>Founder</p>
      </div>
      <div className="col p-5">
        <p className='mb-4 fs-6'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
        <p className='mb-4  fs-6'>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
        <p className='mb-4 fs-6'>Playing basketball is his zen.</p>
        <p className='mb-4 fs-6'>Connect on <a className='text-decoration-none' href=""> Homepage</a> <a className='text-decoration-none' href="">/ TradingQnA</a> <a className='text-decoration-none' href="">/ Twitter</a> </p>
      </div>
    </div>
  </div>
  )
}

export default Team