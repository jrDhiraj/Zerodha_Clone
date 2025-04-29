import React from 'react'
import { Link } from 'react-router-dom'


function Rightsections({heading, description,learnMore, imgUrl}) {
  return (
    <div className="container border-top">
      <div className="row">
        <div className="col mt-5 p-5 ">
          <h1>{heading}</h1>
          <p className='fs-5 mt-3 mb-3'>{description}</p>
          <Link className="me-3 mx-5" to={"/about"}>{learnMore}</Link>
        </div>
        <div className="col-1"></div>
        <div className="col">
          <img src={imgUrl} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Rightsections