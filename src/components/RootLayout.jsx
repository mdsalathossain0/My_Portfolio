import React from 'react'
import Navber from '../layouts/Navber'
import Footer from '../layouts/Footer'
import { Outlet } from 'react-router'

const RootLayout = () => {
  return (
    <div>
        <Navber/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayout