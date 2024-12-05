import React from "react";
import FooterLogo from "../../assets/Images/Footerlogo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import NatureVid from "../../assets/video/Footervid.mp4";
import { Link } from "react-router-dom";

const FooterLinks = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Best Places",
    link: "/bestplaces",
  },
  {
    title: "Blogs",
    link: "/blogs",
  },
];

const Footer = () => {
  return (
    <div className="py-10 relative overflow-hidden">
      {/* Background Video */}
      <video autoPlay loop muted className="absolute right-0 top-0 h-full overflow-hidden w-full object-cover z-[-1]">
        <source src={NatureVid} type="video/mp4" />
      </video>

      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start bg-white/80 backdrop-blur-sm rounded-t-xl p-6">
          {/* Left Section: Logo and Address */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h1 className="flex items-center gap-3 text-xl sm:text-3xl font-bold">
              <img src={FooterLogo} alt="Footer Logo" className="max-h-[60px]" />
            </h1>
            <p className="text-sm mt-2">
              Discover the world with us! Explore travel blogs, guides, and tips to make every journey unforgettable. Start your adventure today! 🌍✈️
            </p>
            <div className="mt-4 flex items-center gap-3">
              <FaLocationArrow />
              <p>Jorhat, Assam</p>
            </div>
            <div className="flex items-center gap-3">
              <FaMobileAlt />
              <p>+123 456 789</p>
            </div>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-3xl hover:text-primary" />
              </a>
              <a href="#" aria-label="Facebook">
                <FaFacebook className="text-3xl hover:text-primary" />
              </a>
              <a href="#" aria-label="LinkedIn">
                <FaLinkedin className="text-3xl hover:text-primary" />
              </a>
            </div>
          </div>

          {/* Right Section: Footer Links */}
          <div className="flex flex-wrap md:flex-1 gap-6 justify-between">
            {Array(2)
              .fill(FooterLinks)
              .map((links, index) => (
                <div key={index} className="flex-1">
                  <h1 className="text-xl font-bold mb-3">Important Links</h1>
                  <ul className="flex flex-col gap-2">
                    {links.map(({ title, link }) => (
                      <li
                        key={title}
                        className="cursor-pointer hover:translate-x-1 duration-300 hover:text-primary text-gray-700"
                      >
                        <Link
                          to={link}
                          onClick={() => {
                            window.scrollTo(0, 0);
                          }}
                        >
                          {title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>

        {/* Footer Copyright Section */}
        <div className="text-center py-5 border-t-2 border-gray-300 bg-primary text-white">
          © 2024 All rights reserved || Made by Preety
        </div>
      </div>
    </div>
  );
};

export default Footer;



