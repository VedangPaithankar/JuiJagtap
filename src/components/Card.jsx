import React from 'react';

const Card = ({ imageSrc, name, link }) => {
  return (
    <a href={link}>
      <div className="m-4 relative overflow-hidden bg-gray-600 sm:w-[350] sm:h-[200] md:w-[550px] md:h-[350px]">
        <img
          className="object-cover w-full h-full transition-transform duration-300 ease-in-out transform scale-100 hover:scale-150"
          src={imageSrc}
          alt="Card Image"
          />
        <div className="absolute inset-0 bg-black opacity-0 transition-opacity duration-1000 ease-in-out hover:opacity-70 flex justify-center items-center">
          <div className="text-2xl text-white">
            <p>{name}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;