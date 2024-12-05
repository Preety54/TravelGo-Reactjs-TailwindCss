import React from 'react';
import Img1 from "../../assets/Images/varanasiboattour.webp";
import Img2 from "../../assets/Images/Amerfort.jpg";
import Img3 from "../../assets/Images/Taj.jpg";
import Img4 from "../../assets/Images/kerelacruise.jpg";
import Img5 from "../../assets/Images/DesertSafari.avif";
import Img6 from "../../assets/Images/Rishikeshjpg.jpg";
import Img7 from "../../assets/Images/Goa Beach.jpeg";
import Img8 from "../../assets/Images/Dal Lake.webp";
import Img9 from "../../assets/Images/Solang valley.jpg";
import PlacesCard from "./PlacesCard";

const PlacesData = [
    {
        img: Img1,
        title: "Boat Tour",
        location: "Varanasi,Uttarpradesh",
        description: "A boat tour in Varanasi is a serene journey along the sacred Ganges, offering breathtaking views of over 80 ghats. ",
        price: 700,
        type: "Spiritual Connection",

    },

    {
        img: Img2,
        title: "Amber Fort Tour",
        location: "Jaipur,Rajasthan",
        description: "Discover the grandeur of Rajasthan with a visit to the Amber Fort, a majestic blend of Mughal and Rajput architecture, offering panoramic views of the Aravalli hills.",
        price: 1200,
        type: "Historical Exploration",
    },

    {
        img: Img3,
        title: "Taj Mahal Visit",
        location: "Agra,Uttarpradesh",
        description: "Witness the epitome of love at the Taj Mahal, a UNESCO World Heritage Site and one of the Seven Wonders of the World.",
        price: 1000,
        type: "Romantic Landmark"
    },


    {
        img: Img4,
        title: "Backwater Cruise",
        location: "Alleppey, Kerala",
        description: "Drift through the tranquil backwaters of Kerala in a traditional houseboat, surrounded by lush greenery and serene waterways.",
        price: 1500,
        type: "Nature Retreat"
    },

    {
        img: Img5,
        title: "Desert Safari",
        location: "Jaisalmer,Rajasthan",
        description: "Explore the golden sands of the Thar Desert on a camel safari, ending with a cultural night under the stars.",
        price: 2500,
        type: "Cultural Adventure"
    },

    {
        img: Img6,
        title: "Ganga Aarti",
        location: "Rishikesh,Uttrakhand",
        description: "Immerse yourself in spirituality at the Ganga Aarti, a soul-stirring evening ritual on the banks of the holy river.",
        price: 100,
        type: "Spiritual Experience"
    },

    {
        img: Img7,
        title: "Beach Escape",
        location: "Goa",
        description: "Unwind on the pristine beaches of Goa, indulging in water sports, vibrant nightlife, and stunning sunsets.",
        price: 1500,
        type: "Relaxation"
    },

    {
        img: Img8,
        title: "Shikara Ride",
        location: "Srinagar, Kashmir",
        description: "Glide over the tranquil waters of Dal Lake in a beautifully decorated Shikara, surrounded by the snow-capped Himalayas.",
        price: 800,
        type: "Serene Escape"
    },

    {
        img: Img9,
        title: "Solang Valley Adventure",
        location: "Manali, Himachal Pradesh",
        description: "Enjoy thrilling activities like paragliding, zorbing, and skiing amid the scenic beauty of Solang Valley.",
        price: 2000,
        type: "Adventure Sports"
    }


]



const Places = () => {
  console.log('PlacesData:', PlacesData);
    return (
        <div className='bg-gray-50 py-10'>
            <div className='container mx-auto px-4'>
                <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-bold'>
                    Best Places To Visit
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" >
                    {PlacesData.map((item, index) => (
                            <PlacesCard key={index} {...item} />
                        ))
                    }
                </div>

            </div>
        </div>
    )
}

export default Places;

