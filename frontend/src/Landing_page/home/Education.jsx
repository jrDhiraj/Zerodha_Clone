import React from 'react'

function Education() {
  return (
    <div className="container p-5 mt-5 mb-5">
    <div className="row">
      <div className="col-6 ">
        <img src="../assets/education.svg" alt="awards" />
      </div>
      <div className="col-6">
        <h1 className='mb-4'>Free and open market education</h1>
        <p className='fs-6'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>

        <a href="">Varsality <i class="fa-solid fa-arrow-right"></i> </a>

        <p className='mt-5 text-decoration-none '>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
        
        <a className='mt-5 '  href="">Trading Q&A <i class="fa-solid fa-arrow-right"></i> </a>
      </div>
    </div>
  </div>
  )
}

export default Education