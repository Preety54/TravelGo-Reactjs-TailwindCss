import React, { useState } from 'react'
import { Link, NavLink } from "react-router-dom";
import LogoImg from "../../assets/Images/logo2.png";
import { FaCaretDown } from "react-icons/fa";
import {HiMenuAlt3,HiMenuAlt1} from "react-icons/hi";
import ReponsiveMenu from "./ResponsiveMenu"


const dropdownLinks = [
  {
    name:"Our Services",
    link:"/services",
  },
  {
    name:"Top Brands",
    link:"/brands",
  },
  {
    name:"Location",
    link:"/location",
  }
]

const Navbar = () => {
  const [showMenu,setShowMenu] = useState(false);

  const toggleMenu =() => {
    setShowMenu(!showMenu);
  }
  return <>
    <div className='fixed top-0 right-0 w-full bg-white text-black shadow-md z-[9999]'>
      <div className='bg-gradient-to-r from-primary to-secondary text-white'>
        <div className="container py-[2px] sm:block hidden ">
          <div className="flex justify-between">
            <p>20% off on next booking!</p>
            <p>Mobile No. +91 123456789</p>
          </div>
        </div>
      </div>
      <div className='container py-3 sm:py-0'>
        <div className='flex justify-between items-center'>
          {/* //logo section */}
          <div>
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src={LogoImg} alt="" className='h-16' />
            </Link>
          </div>
          {/* NAVLINKS SECTION */}
          <div className="hidden md:block">
            <ul className='flex items-center gap-6'>
              <li className='py-4'>
                <Link to="/" activeclassName="active" onClick={() => window.scrollTo(0, 0)}>
                  Home
                </Link>
              </li>
              <li className='py-4'>
                <Link activeclassName="active" to="/blogs" onClick={() => window.scrollTo(0, 0)}>
                  Blogs
                </Link>
              </li>
              <li className='py-4'>
                <Link activeclassName="active" to="/places" onClick={() => window.scrollTo(0, 0)}>
                  BestPlaces
                </Link>
              </li>
              <li className='py-4'>
                <Link className="active" to="/about" onClick={() => window.scrollTo(0, 0)}>
                  About
                </Link>
              </li>
              {/* //dropdown section */}
              <li className="py-4 relative group cursor-pointer">
                <div className='dropdown flex items-center'>
                  <span>Quick Links</span>
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>

                </div>
                <div className='absolute -left-9 top-[50px] z-[9999] hidden group-hover:block shadow-md text-black w-[150px] bg-white'>
                  <ul>
                    {
                      dropdownLinks.map((data) => {
                        return (
                        <li key={data.name} className='pt-2 px-1'>
                          <Link className="inline-block w-full rounded-sm hover:bg-primary/20 pb-1" to={data.link}>
                          {data.name}
                          </Link>
                        </li>
                        )

                      })
                    }
                  </ul>
                </div>
               </li>
            </ul>
          </div>

          {/* Book now button */}
          <div className='flex items-center gap-4'>
            <button onClick={()=>console.log("hello")} className='bg-gradient-to-r from-primary to-secondary hover:bg-gradient-to-r hover:from-secondary hover:bg-primary transition-all duration-600 text-white  px-3 py-1 rounded-full'>
              Book Now</button>
              <div onClick={()=>console.log("hello")} className='md:hidden block'>
                {showMenu? (
                  <HiMenuAlt1 onClick={toggleMenu } className="cursor-pointer transition-all" size={30} />
                ) : (
                 <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                )}
              </div>
          </div>
        </div>
      </div>
      <ReponsiveMenu setShowMenu ={setShowMenu} showMenu={showMenu} />
    </div>

  </>

}

export default Navbar

