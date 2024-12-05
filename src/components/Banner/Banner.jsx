import React from 'react';
import TravelImg from "../../assets/Images/Travelboox1.png";
import {MdFlight, MdOutlineLocalHotel } from "react-icons/md";
import {IoIosWifi } from "react-icons/io";
import { IoFastFoodSharp} from "react-icons/io5";

const Banner = () => {
  return (
    <div className='min-h-[550px] bg-gray-100'>
        <div className='min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0'>
         <div className='container'>
            < div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>

                {/* image section */}
                <div data className='mx-auto max-h-[600px] max-w-[550px]'>

                <img  data-aos ="flip-up" src={TravelImg} alt="" className='drop-shadow-[5px_5px_12px_rgba(0,0,0,7)] object-cover' />
                </div>

                {/* Text content Section */}
                <div>
                    <h1 data-aos ="fade-up" className='text-3xl font-bold sm:text-4xl'>Explore all Corners of India with us!</h1>
                    <p className='text-sm text-gray-500 tracking-wide leading-8'>
                         Embark on an extraordinary journey through the diverse landscapes of India, a land where every corner holds a unique story. From the serene boat rides in Varanasi to the majestic grandeur of the Taj Mahal and the thrilling adventures of a desert safari, we bring you the best experiences India has to offer. Our platform is designed to guide you through breathtaking destinations, rich cultures, and timeless traditions.{" "}
                         </p>
                <div data-aos="zoom-in" className='grid grid-cols-2 gap-6'>
                 <div className='space-y-6'>
                    <div className='flex items-center gap-4'>
                   < MdFlight className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400'/>
                     <p>Flight</p>
                    </div>

                    <div className='flex items-center gap-4'>
                   < MdOutlineLocalHotel className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400'/>
                     <p>Hotel</p>
                    </div>
                    </div>

                    <div className='space-y-6'>
                    <div className='flex items-center gap-4'>
                   < IoIosWifi className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400'/>
                     <p>Wifi</p>
                    </div>

                    <div className='flex items-center gap-4'>
                   < IoFastFoodSharp className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400'/>
                     <p>Food</p>
                    </div>
                    </div>
                    
                </div>
                 </div>
                
            </div>
         </div>
        </div>
    </div>
  )
}

export default Banner
