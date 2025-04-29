import React from 'react'

function Hero() {
  return (
    <section className='container-fluid mb-5' id='supports'>
      <div className="container mb-5">
        <div className="row p-5">
          <div className="col">
            <h2 className='text-white'>Support poratal</h2>
          </div>
          <div className="col-3"><a href="" className='text-end text-decoration-none'>Tracks tickets</a></div>
        </div>

        <div className="row mx-4">
          <div className="col-6">
            <p className='fs-4 text-white'>Search for an answer or browse help topics to create a ticket</p>
            <input class="form-control mr-sm-2" type="search" placeholder="how can i help you?" aria-label="Search"></input>
           
          </div>
            <div className="col-3"></div>
          <div className="col-3">
            <h1 className='text-white'>Featured</h1>
            <p className='text-white mt-5'>Rights Entitlements listing in March 2025</p>

            <p className='text-white'>Surveillance measure on scrips - March 2025</p>
          </div>
        </div>
        <div className="d-flex justify-content-start mb-5 mx-4">
            <a href="" className='text-white'>Track account opening  </a>
            <a href="" className='text-white mx-1' >Track segment  </a>
            <a href="" className='text-white mx-1'>Intraday margins </a>
            <a href="" className='text-white mx-1'>Kite user manual </a>
          </div>
      </div>
    </section>
  )
}

export default Hero