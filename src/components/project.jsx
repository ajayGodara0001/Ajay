import React from 'react';

function Project({ pName, pInfo, tech, imgUrl, theme, liveLink, gitLink }) {
  return (
    <div
  // data-aos="zoom-in-up"
      className={`z-0 rounded-xl w-[300px] h-[500px] shadow-lg flex flex-col justify-between overflow-hidden transition-transform duration-500 transform-gpu ${
        theme === 'black' ? 'bg-gray-800 text-white' : 'bg-white text-black shadow-gray-400'
      } hover:scale-105  hover:shadow-[0_20px_30px_rgba(0,0,0,0.2)] hover:-translate-y-4 hover:border-2 hover:border-blue-500`}
    >
      {/* Project Image */}
      <div className='p-2'>
        <img className='h-44 w-full object-cover rounded-lg border-2 border-gray-300' src={imgUrl} alt="project" />
      </div>

      <div className='p-5 flex flex-col justify-between flex-grow'>
        {/* Project Name */}
        <h3 className={`text-2xl font-bold ${theme === 'black' ? 'text-blue-500' : 'text-blue-800'}`}>{pName}</h3>
        
        {/* Project Info */}
        <p className='pt-1 text-sm font-medium flex-grow'>{pInfo}</p>

        {/* Tech Stack */}
        <div className='pt-1 text-sm text-gray-500 flex flex-wrap'>
          {tech.split(',').map((item, index) => (
            <span key={index} className='mr-2 mb-1 px-2 py-1 bg-gray-200 rounded-xl text-gray-700 text-xs'>{item.trim()}</span>
          ))}
        </div>

        {/* Live and GitHub Links */}
        <div className='mt-4 flex justify-between'>
          <a target='_blank' href={liveLink} rel="noopener noreferrer" className='flex-1 mr-2'>
            <button className='w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition-colors'>Live Link</button>
          </a>
          <a target='_blank' href={gitLink} rel="noopener noreferrer" className='flex-1 ml-2'>
            <button className='w-full bg-gray-700 text-white py-2 rounded-xl hover:bg-gray-800 transition-colors'>Github Link</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
