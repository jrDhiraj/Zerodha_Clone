import React from 'react'

function Pricing() {
  return (
    <div className="container p-5 mt-5 mb-5">
      <div className="row">
        <div className="col-5">
          <h1 className='mt-3 mb-3'>Unbeatable Pricing</h1>
          <p>Our prices are competitive and affordable. We offer a variety of plans to suit your needs.</p>
          <a href="">see pricing<i class="fa-solid fa-arrow-right-long"></i> </a>
        </div>
        <div className="col-2"></div>
        <div className="col-5">
          <div className="row">
            <div className="col border p-4">
            <h1 className='text-center'><i class="fa-solid fa-indian-rupee-sign"></i>0</h1>
            <p>free equity delivery and direct <br /> mutul fund investment</p>
            </div>
            <div className="col border p-4">
            <h1 className='text-center'><i class="fa-solid fa-indian-rupee-sign"></i>20</h1>
            <p>Intraday and F&O trading</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing