import React from 'react'


function Hero() {
  return (
    <div className='container p-5 mb-5'>
      <div className='row mb-5'>
        <img src="../assets/homeHero.png" alt="" />
        <h1 className='mt-5 text-center'>Invest in your future</h1>
        <p className='mt-3 text-center'>Join the world's leading social trading network</p>
        <button type="button" class="btn btn-primary p-2 fs-5 mb-5" style={{width:"15%", margin:"0 auto", }} >Signup for free</button>
      </div>

    </div>
  )
}

export default Hero