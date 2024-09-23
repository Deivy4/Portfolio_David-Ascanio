// src/components/CardProject.js
import { useEffect, useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import '../styles/componentsStyles/CardProject.css';

export default function CardProject({ tittle, description, imageUrl, url = "" }) {

  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClick = () => {
    if (url === "") return;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className={`${isVisible ? 'scale-100' : 'scale-0'} duration-300 ease-in-out transition-transform transform bg-slate-700 text-white hover:bg-white hover:text-black`}>
      <div className='flex-1 min-w-[300px] max-w-[300px] p-4 border rounded h-full'>
        <img className="" src={imageUrl} alt={tittle} />
        <div className="">
          <h2 className="font-bold text-xl mb-2 ">{tittle}</h2>
          <p className=" text-[14px]">
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
    </div>
    
  );
}
