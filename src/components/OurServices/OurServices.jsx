import React from "react";

const services = [
  {
    title: "Personalized Travel Plans",
    description:
      "We create tailor-made itineraries to suit your preferences and budget, ensuring every moment of your trip is special.",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ42jztce1WvBJh76wYFURk34csoiHrIanvtSa1r9DNfFwj2HKIF3iW502PIaVauFmcx9U&usqp=CAU", // Example icon
  },
  {
    title: "Flight & Hotel Booking",
    description:
      "Book the best flights and accommodations at unbeatable prices with our expert assistance.",
    icon: "https://us.123rf.com/450wm/aiinue/aiinue2010/aiinue201000324/158083809-hands-holding-a-smartphone-and-touch-on-the-screen-while-use-online-booking-mobile-application-the.jpg?ver=6", // Example icon
  },
  {
    title: "Adventure Packages",
    description:
      "Explore thrilling activities like trekking, scuba diving, and safaris. Perfect for adrenaline seekers!",
    icon: "https://cdn-icons-png.flaticon.com/512/1195/1195150.png", // Example icon
  },
  {
    title: "Local Tours & Guides",
    description:
      "Enjoy immersive local experiences with our professional tour guides who know every hidden gem.",
    icon: "https://cdn-icons-png.flaticon.com/512/194/194727.png", // Example icon
  },
  {
    title: "Visa & Travel Assistance",
    description:
      "Our team helps you with visa applications and documentation, making international travel hassle-free.",
    icon: "https://cdn-icons-png.flaticon.com/512/1483/1483252.png", // Example icon
  },
  {
    title: "24/7 Customer Support",
    description:
      "We’re here to assist you at any time during your journey, ensuring a smooth travel experience.",
    icon: "https://cdn-icons-png.flaticon.com/512/4568/4568897.png", // Example icon
  },
];

const OurServices = () => {
  return (
    <div className="bg-gray-100 pt-8 px-6 h-screen">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Our Services
      </h2>
      <p className="text-lg text-center text-gray-600 max-w-2xl mx-auto mb-10">
        At our travel agency, we offer a wide range of services designed to make
        your travel experience unforgettable. From personalized plans to 24/7
        support, we’ve got you covered!
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center justify-center mb-4">
              <img
                src={service.icon}
                alt={service.title}
                className="w-16 h-16 object-cover"
              />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2 text-center">
              {service.title}
            </h3>
            <p className="text-gray-600 text-center">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurServices;

