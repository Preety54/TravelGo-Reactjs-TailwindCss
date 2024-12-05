import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom';
import Footer from "../components/Footer/Footer";
import Home from './Home';





const Layout = () => {
  return (
   <>
   <Navbar />
   {/* <Outlet /> */}
   <Home/>
   {/* <Places/> */}
   
   </>
  )
}

export default Layout


