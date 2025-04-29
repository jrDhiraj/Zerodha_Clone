import React from 'react'
import { Link } from 'react-router-dom'

function Leftisection({imgUrl, title, description, tryDemo, learnMore, playStoreLink, appStoreLink}) {
  return (
    <div className="container mt-5 p-5 mb-5 border-top">
      <div className="row">
        <div className="col ">
          <img src={imgUrl} alt="" />
        </div>
        <div className="col-1"></div>
        <div className="col p-5 ">

          <h1>{title}</h1>
          <p className='fs-5 mt-3 mb-3'>{description}</p>
          <Link className="me-3 text-center" to={"/signup"}>{tryDemo}</Link>
          <Link className="me-3 mx-5" to={"/about"}>{learnMore}</Link>
          <div className="mt-3">
            <a href={playStoreLink} className="me-3">
              <img src={playStoreLink} alt="" />
            </a>
            <a href={appStoreLink}>
              <img src={appStoreLink} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Leftisection