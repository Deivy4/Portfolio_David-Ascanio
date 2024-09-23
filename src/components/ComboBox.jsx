import React, { useState } from 'react';
import { FiType } from "react-icons/fi";
import { FaArrowAltCircleDown } from "react-icons/fa";

const ComboBox = () => {
  const [inputValue, setInputValue] = useState('');
  const [options] = useState(['Opción 1', 'Opción 2', 'Opción 3', 'Opción 4']);
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option) => {
    setInputValue(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-1/4 min-w-72">
      <div className="flex items-center border border-gray-300 rounded-lg pl-2 w-full">
        <FiType className="text-gray-500 mr-2" />
        <input
            onClick={() => setIsOpen(!isOpen)}
            value={inputValue}
            className="border border-gray-300  p-2 w-full outline-none cursor-pointer h-8 text-black rounded-r"
            placeholder="Tecnología..."
            onChange={(()=>{})}
        />
        <FaArrowAltCircleDown className="text-gray-500 mx-2 cursor-pointer" />
      </div>
      {isOpen && options.length > 0 && (
        <ul onMouseLeave={()=>setIsOpen(false)} className="absolute z-50 mt-1 border border-gray-300 bg-white rounded-lg shadow-lg max-h-48 overflow-auto w-full">
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleOptionClick(option)}
              className="p-2 hover:bg-blue-500 hover:text-white cursor-pointer text-black"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComboBox;
