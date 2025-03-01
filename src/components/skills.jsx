import React from 'react';
import Skill from './skill';

function SKills({ theme }) {
  const ftech = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT', 'TAILWIND'];
  const btech = ['EXPRESS', 'MONGODB', 'NODE JS'];
  const tool = ['GITHUB'];

  return (
    <div className={`w-full pt-28 flex flex-col items-center ${theme === 'black' ? 'bg-gray-900' : 'bg-gray-100'} pb-20`} id="skills">
      {/* Skills Heading */}
      <div className={`text-4xl font-bold mb-16 ${theme === 'black' ? 'text-blue-500' : 'text-blue-800'}`}>
        My Skills
      </div>

      {/* Skills Grid */}
      <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-10 px-6 w-full max-w-7xl mx-auto justify-items-center'>
        {/* Center skill boxes on small screens */}
        <Skill theme={theme} sName="Frontend" elements={ftech} />
        <Skill theme={theme} sName="Backend" elements={btech} />
        <Skill theme={theme} sName="Tools" elements={tool} />
      </div>
    </div>
  );
}

export default SKills;