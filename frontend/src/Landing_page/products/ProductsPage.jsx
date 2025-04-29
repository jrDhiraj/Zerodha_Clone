import React from 'react'
import Hero from './Hero.products'
import Leftisection from './Leftisection'
import Rightsections from './Rightsections'
import Universe from './Universe'

function ProductsPage() {
  return (
    <>
      <Hero />
      <Leftisection imgUrl="../assets/kite.png"
        title="Kite"
        description="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        tryDemo="/signup"
        learnMore="/about"
        playStoreLink="../assets/googlePlayBadge.svg"
        appStoreLink="../assets/appstoreBadge.svg" />


      <Rightsections   
      heading = "Console" 
      description = "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
      learnMore = "/about"
      imgUrl = "../assets/console.png"

      />
      <Leftisection imgUrl="../assets/coin.png"
        title="Coin"
        description="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        tryDemo="/coin"
 
        playStoreLink="../assets/googlePlayBadge.svg"
        appStoreLink="../assets/appstoreBadge.svg" />

            <Rightsections   
      heading = "Kite Connect API" 
      description = "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
      learnMore = "/kiteconnect"
      imgUrl = "../assets/kite.png"

      />

      <Leftisection imgUrl="../assets/varsity.png"
        title="Varsity mobile"
        description="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        playStoreLink="../assets/googlePlayBadge.svg"
        appStoreLink="../assets/appstoreBadge.svg" />
      <Universe  />
    </>
  )
}

export default ProductsPage