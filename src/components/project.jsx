import React from 'react';

function Project({ pName, pInfo, tech, imgUrl, theme, liveLink, gitLink }) {
  return (
    <div
    className={`z-0 rounded-xl lg:w-[500px] lg:min-h-[404px] md:max-w-[400px] md:max-h-[500px] w-[350px] max-h-[500px] shadow-lg ${
      theme === 'black' ? 'bg-gray-800 text-white' : 'bg-white text-black shadow-gray-400'
    } transform transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_0_rgba(59,130,246,0.5)] hover:-rotate-2 hover:translate-y-2 hover:border-2 hover:border-blue-500`}
    >
      <div>
        {/* Project Name */}
        <div className={`pl-5 pt-2 text-xl font-bold ${theme === 'black' ? 'text-blue-500' : 'text-blue-800'}`}>
          {pName}
        </div>

        {/* Project Info */}
        <div className='pl-5 pt-2 pr-2 font-medium'>{pInfo}</div>

        {/* Tech Stack */}
        <div className='pl-5 pt-2 pr-2 font-normal'>Tech Stack: {tech}</div>

        {/* Project Image */}
        <div className='w-full pt-2'>
          <img className='h-32 w-full object-cover' src={imgUrl} alt="project" />
        </div>

        {/* Live and GitHub Links */}
        <div>
          <a target='_blank' href={liveLink} rel="noopener noreferrer">
            <div className='text-white text-lg bg-blue-500 m-4 text-center py-1 rounded-xl hover:bg-blue-600 hover:cursor-pointer'>
              Live Link
            </div>
          </a>
          <a target='_blank' href={gitLink} rel="noopener noreferrer">
            <div className='text-white text-lg bg-blue-500 m-4 text-center py-1 rounded-xl hover:bg-blue-600 hover:cursor-pointer'>
              Github Link
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;