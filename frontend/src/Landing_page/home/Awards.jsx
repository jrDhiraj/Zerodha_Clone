import React from 'react'

function Awards() {
  return (
    <div className="container p-5 mt-5">
      <div className="row">
        <div className="col-6 ">
          <img src="../assets/largestBroker.svg" alt="awards" />
        </div>
        <div className="col-6">
          <h1 className='mb-4'>Best Broker in the Industry</h1>
          <p className='fs-6'>Join the world's leading social trading network and discover a new way to trade and invest in the financial markets.</p>
          <div className="row mt-4">
            <div className="col-6">
            <ul className='p-3 '>
            <li className='mb-3'> Best Broker in the Industry</li>
            <li className='mb-3'> Best Trading Platform</li>
            <li className='mb-3'> Best Customer Service</li>
          </ul>
            </div>
            <div className="col-6">
            <ul className='p-3'>
              <li className='mb-3'> Best Mobile App</li>
              <li className='mb-3'> Best Education</li>
              <li className='mb-3'> Best Research</li>
              </ul>
            </div>
            <img src="../assets/pressLogos.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Awards