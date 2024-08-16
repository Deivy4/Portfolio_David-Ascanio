// src/components/CardProject.js
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/componentsStyles/CardProject.css';

export default function CardProject({ tittle, description, imageUrl, url = "" }) {

  const handleClick = () => {
    if (url === "") return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className='mx-auto wrapper-project rounded flex flex-col justify-between sm:flex-row pb-4'>
      <img className="w-full img-project h-64 rounded-3xl" src={imageUrl} alt={tittle} />
      <div className="w-full ml-4">
        <div className="font-bold text-xl mb-2 text-white">{tittle}</div>
        <p className="text-white text-base">
          {description}
        </p>
        <button
          onClick={handleClick}
          className='bg-black text-white font-bold py-2 my-2 px-2 rounded hover:bg-gray-800 transition duration-300 ease-in-out'
        >
          <FaGithub className="text-xl" />
        </button>
      </div>
    </div>
  );
}
