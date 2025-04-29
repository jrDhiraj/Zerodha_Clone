import React from 'react'

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <h1 className='fs-2 mx-4'>Charges for account opening</h1>
        <div className="p-5">
          <div className="row border border-dark p-1">
            <div className="col">
              <p>Type of account</p>
            </div>
            <div className="col-3">
              <p>Charges</p>
            </div>
          </div>
          <div className="row border border-dark p-1">
            <div className="col">
              <p>Online account</p>
              <p>Offline account</p>
              <p>NRI account (offline only)	</p>
              <p>Partnership, LLP, HUF, or Corporate accounts (offline only)</p>
            </div>
            <div className="col-3">
              <div style={{ backgroundColor: "rgb(80, 200, 120)", width: "3rem" }}>
                <p className='text-center '>Free</p>
              </div>
              <div style={{ backgroundColor: "rgb(80, 200, 120)", width: "3rem" }}>
                <p className='text-center '>Free</p>
              </div>
              <p>500</p>
              <p>500</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brokerage