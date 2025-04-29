import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import HomePage from './Landing_page/home/HomePage'
import Signup from './Landing_page/signup/Signup.signup'
import Aboutpage from './Landing_page/about/Aboutpage'
import ProductsPage from './Landing_page/products/ProductsPage'
import SupportPage from './Landing_page/supports/SupportPage'

import Princingpage from './Landing_page/pricing/Princingpage'
import Navbar from './Landing_page/Navbar'
import Footer from './Landing_page/Footer'
import NotFound from './Landing_page/NotFound'
import Login from './Landing_page/Login/Login'



createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<Aboutpage />} />
      <Route path="/products" element={< ProductsPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="/pricing" element={<Princingpage />} />
      <Route path="/*" element={<NotFound/>} />
    </Routes>
    <Footer />
  </BrowserRouter>,
)