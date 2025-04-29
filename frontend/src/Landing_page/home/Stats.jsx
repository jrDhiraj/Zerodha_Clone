import React from 'react'

function Stats() {
  return (
    <div className="container p-5 mt-5 mb-5">
      <div className="row">
        <div className="col-6">
          <h1 className='mt-5'>Trust with confidence</h1>
          <h2 className='mb-3 mt-4 fs-4'>Customer-first always</h2>
          <p className='mb-3 mt-2 fs-6'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India</p>


          <h2 className='mb-2 mt-4 fs-4'>No spam or gimmicks</h2>
          <p className='mb-3 mt-2 fs-6'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

          <h2 className='mb-2 mt-4 fs-4'>The Zerodha universe
          </h2>
          <p className='mb-3 mt-2 fs-6'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
          
          <h2 className='mb-2 mt-4 fs-4'>Do better with money</h2>
          <p className='mb-3 mt-2 fs-6'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>        </div>
        <div className="col-6 ml-5 p-5">
          <img src="../assets/ecosystem.png" alt="" style={{ width: "90%" , margin:"auto"}} />
          <div className="text-center">
          <a className='mx-4' href="">Explore our products <i class="fa-solid fa-arrow-right-long"></i> </a>
          <a href="">Try Kite demo <i class="fa-solid fa-arrow-right-long"></i> </a>
          </div>
        </div>
        <div>
       
        </div>
        <div className="col-12 mt-1 text-center">
        <img src="../assets/pressLogos.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Stats