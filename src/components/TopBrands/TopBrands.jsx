import React from 'react';

const brands = [
  {
    name: "Taj Hotels",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmZBnKa2jpwNR8pYrGSJMHPekkYssO8d_HHA&s",
    description:
      "Experience luxury and heritage with Taj Hotels, a symbol of Indian hospitality and grandeur.",
    link: "#",
  },
  {
    name: "MakeMyTrip",
    logo: "https://upload.wikimedia.org/wikipedia/commons/6/61/Makemytrip_logo.svg",
    description:
      "Book your flights, hotels, and holiday packages with ease on India's largest travel platform.",
    link: "#",
  },
  {
    name: "Club Mahindra",
    logo: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2020/01/club-mahindra-logo-95D973A6C9-seeklogo.com_.png",
    description:
      "Explore the best family vacation resorts with Club Mahindra’s extensive network.",
    link: "#",
  },
  {
    name: "OYO Rooms",
    logo: "https://seeklogo.com/images/O/oyo-rooms-logo-ADDE1C74DB-seeklogo.com.png",
    description:
      "Affordable stays with exceptional comfort and quality, perfect for every traveler.",
    link: "#",
  },
  {
    name: "Airbnb",
    logo: "https://banner2.cleanpng.com/20180605/ukq/aa9749ew2.webp",
    description:
      "Discover unique stays and experiences worldwide with Airbnb, where travel feels like home.",
  },
  {
    name: "Yatra",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9Dg_bNGyf_wsU_RJCBdH53FTw7SDvXJe9A&s",
    description:
      "Plan your perfect getaway with Yatra's comprehensive travel solutions for flights, hotels, and tours.",
  },
];

const TopBrands = () => {
  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-6">Top Brands</h1>
        <p className="text-lg text-gray-600 text-center mb-10">
          Explore the most trusted and celebrated brands in travel, hospitality, and adventure.
        </p>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-lg overflow-hidden"
            >
              <div className="flex justify-center items-center p-6 bg-gray-100">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-20 object-contain"
                />
              </div>
              <div className="p-2 text-center">
                <h2 className="text-xl font-bold mb-4">{brand.name}</h2>
                <p className="text-gray-600 mb-4">{brand.description}</p>
                <a
                  href={brand.link}
                  className="bg-primary text-white py-2 px-6 rounded-full inline-block hover:bg-secondary transition-colors duration-300"
                >
                  Learn More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopBrands;

