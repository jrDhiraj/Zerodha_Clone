import React from 'react'

function Universe() {
  return (
    <div className="container mt-5 p-5 mb-5">
      <div className="row text-center text-muted ">
        <h2 className='fs-5'>Want to know more about our technology stack? Check out the <a href="">Zerodha.tech</a> blog.</h2>
      </div>
      <div className="row mt-5 text-center text-muted ">
        <h1>The Zerodha Universe</h1>
        <p className='mt-3'>Extend your trading and investment experience even further with our partner platforms</p>
      </div>


      <div className="row">

        <img src="../assets/universe.png" alt="" />
       
      </div>

      <div className="row mt-5">
      <h1 className='text-center'>
      <button className='btn btn-primary p-2 fs-5' style={{width:"20%"}}>Sign Up free</button>
      </h1>
      </div>

    </div>
  )
}

export default Universe