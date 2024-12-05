import React from 'react'


const PlacesCard = ({ img, title, location, description, price, type }) => {
 
  return (
    <div className="shadow-lg rounded-md overflow-hidden bg-white m-4">
      {/* Image Section */}
      <img src={img} alt={title} className="w-full h-48 object-cover" />

      {/* Content Section */}
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-sm text-gray-600">{location}</p>
        <p className="mt-2 text-gray-800">{description}</p>
        <div className="mt-4 flex justify-between items-center">
          <span className="text-primary font-bold">${price}</span>
          <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
            {type}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PlacesCard
