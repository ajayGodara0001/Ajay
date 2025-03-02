import React from 'react';

function Skill({ theme, sName, elements = [] }) {
  return (
    <div
    data-aos="flip-left"
      className={`rounded-xl lg:max-w-[400px] w-[350px] shadow-lg ${
        theme === 'black' ? 'bg-gray-800 text-white' : 'bg-white text-black shadow-gray-400'
      } flex flex-col text-center  gap-5 p-6 transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_0_rgba(59,130,246,0.5)] hover:-rotate-2 hover:translate-y-2 hover:border-2 hover:border-blue-500`} // Removed fixed height
    >
      {/* Skill Name */}
      <div className={`font-bold text-2xl ${theme === 'black' ? 'text-blue-500' : 'text-blue-800'}`}>
        {sName}
      </div>

      {/* Skill Elements */}
      <div className='flex flex-col gap-5'>
        {elements.map((element, index) => (
          <div
            key={index}
            className={`${
              theme === 'black' ? 'bg-gray-700 text-white' : 'bg-gray-200 text-black'
            } text-xl font-semibold rounded-lg mx-5 py-3`} // Added py-3 for padding inside skill elements
          >
            {element}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skill;