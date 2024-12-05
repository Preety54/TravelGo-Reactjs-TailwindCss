import React from 'react';
import Hero from '../components/Hero';
import Places from '../components/Places/Places';
import BannerImg from '../components/BannerImg/BannerImg';
import Poster from "../assets/Images/BannerImg.webp";
import Blogs from './Blogs';
import Banner from '../components/Banner/Banner';
import Banner2 from "../assets/Images/Banner2.jpg";
import Testimonial from "../components/Testimonial/Testimonial";
import Footer from '../components/Footer/Footer';
import video from "../assets/video/video.mp4"

const Home = () => {
    return (
      <>
       <div>
         <div className=" h-[730px]">
            <video autoPlay loop muted className="absolute right-0 top-0 h-[730px] w-full object-cover z-[-1]">

                <source src={video}  type="video/mp4"/>
            </video>
            <Hero />
        </div>  
       </div> 
       <Places />
       <BannerImg img= {Poster}/>
       <Blogs />
       <Banner />
       <BannerImg img={Banner2}/>
       <Testimonial />
       <Footer />
      </>

    ) 
        
}

export default Home
