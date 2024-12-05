import React from 'react';
import Location from "../components/Location/Location.jsx"

const About = () => {
  return  (
   <div className='container  bg-blue-200'>
    <div className='py-10'>
      <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
      About Us
      </h1>
      <p>Welcome to [Your Website Name], your trusted partner in creating unforgettable travel experiences! At the heart of our journey is a passion for exploration and a commitment to connecting people with the wonders of the world. Whether you're seeking the tranquil beauty of nature, the thrill of adventure, or the rich tapestry of cultural heritage, we bring you curated experiences that inspire and delight.

Our team of travel enthusiasts and experts is dedicated to ensuring your journey is seamless and memorable. From mesmerizing boat tours in spiritual Varanasi to exhilarating desert safaris in breathtaking landscapes, we strive to craft itineraries that blend comfort, excitement, and authenticity. Each destination is thoughtfully designed to immerse you in local traditions, vibrant cultures, and awe-inspiring sights.

With a focus on personalized service, we aim to turn your travel dreams into reality. Our commitment to quality, safety, and sustainability ensures that every journey not only meets your expectations but also contributes positively to the communities and environments we visit. Let us guide you on adventures that leave you enriched, connected, and longing for more.

Your adventure starts here—explore, dream, and discover with  <span className='font-bold'>MakeTrip.</span></p>
    </div>
    <Location/>
   </div>
  ) 
}

export default About
