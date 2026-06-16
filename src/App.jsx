import React from 'react'
import Home from './pages/home.jsx'
import Navbar from './components/navbar.jsx'
import { Route,Routes } from 'react-router-dom'
import Login from './components/register-login/login.jsx'
import Register from './components/register-login/register.jsx'
import Donateblood from './pages/donateblood.jsx'
import About from './pages/about.jsx'
import Howitworks from './pages/howitworks.jsx'
import Features from './pages/features.jsx'
import Footer from './components/footer.jsx'
import Profile from './components/profile/base.jsx'
import Requests from './components/requests.jsx'
import HospitalRegister from './components/register-login/hospitalregistration.jsx'
import HospitalLogin from './components/register-login/hospitallogin.jsx'

const App = () => {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>

        <Route path = "/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path= '#donateblood' element={<Donateblood />} /> */}
        <Route path = '#about' element={<About />} />
        <Route path = '#howitworks' element = {<Howitworks />} />
        <Route path = '#howitworks' element = {<Features />} />
        <Route path = '/contact' element = {<Footer />} />
        <Route path = '/profile' element = {<Profile />} />
        <Route path = '/requests' element = {<Requests />} />
        <Route path = '/hospitalregistration' element = {<HospitalRegister />} />
        <Route path = '/hospitallogin' element = {<HospitalLogin />} />
      </Routes>

    </>
  )
}

export default App