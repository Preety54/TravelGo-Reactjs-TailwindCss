
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    id: 1,
    name: "Sanjana Bhatt",
    text: "An incredible experience! Everything was perfectly planned, making the trip seamless and unforgettable. Highly recommend for stress-free travel!",
    img: "https://static.spotboye.com/uploads/alia_bhatt_(2)_2023-8-25-11-4-14_thumbnail_2023-9-1-8-28-9_thumbnail.jpg",
  },
  {
    id: 2,
    name: "Anupam Kothari",
    text: "An incredible experience! Everything was perfectly planned, making the trip seamless and unforgettable. Highly recommend for stress-free travel!",
    img: "https://wallpapers.com/images/hd/sidharth-shukla-in-stripe-shirt-0hzkmdc8yiebkzvb.jpg",
  },
  {
    id: 3,
    name: "Kait Johnson",
    text: "An incredible experience! Everything was perfectly planned, making the trip seamless and unforgettable. Highly recommend for stress-free travel!",
    img: "https://www.hindustantimes.com/ht-img/img/2024/10/30/1600x900/samantha_1_1729671311583_1730283922255.jpeg",
  },
];

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="bg-blue-100 py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex flex-col items-center justify-center text-center p-8 bg-white shadow-lg rounded-lg"
            >
              <div className="flex flex-col items-center justify-center">
                <div className="w-40 h-40 rounded-full flex items-center justify-center overflow-hidden mb-6 bg-gray-200">
                  <img
                    src={testimonial.img}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className=" h-7" >
                  <h4 className="text-xl font-bold text-gray-900">{testimonial.name}</h4>
                </div>


              </div>
              <p className="text-lg italic text-gray-700 mb-4">
                "{testimonial.text}"
              </p>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonial;





