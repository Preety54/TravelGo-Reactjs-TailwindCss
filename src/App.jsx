import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Blogs from './pages/Blogs'
import BlogsDetails from './pages/BlogsDetails'
import PlaceRoute from './pages/PlaceRoute'
import NoPage from './pages/NoPage'
import AOS from 'aos';
import 'aos/dist/aos.css';
import OurServices from './components/OurServices/OurServices'
import TopBrands from './components/TopBrands/TopBrands'



const App = () => {

  React.useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration in ms
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<Layout />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blogs/:id" element={<BlogsDetails />} />
            <Route path="/places" element={<PlaceRoute />} />
            <Route path="/services" element={<OurServices />} />
            <Route path="/brands" element={<TopBrands />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

