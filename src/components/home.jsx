import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function Home({ theme }) {
  return (
    <div
      className={`flex fixed top-0 -z-10 left-0 right-0 justify-center items-center flex-col h-screen ${theme === 'black' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'}`}
    >
      {/* Profile Image */}
      <div className='size-32 md:size-60 rounded-full bg-green-300 overflow-hidden border-4 border-blue-300'>
        <img
          className="w-full h-full rounded-full object-cover"
          src="ajay.jpg"
          alt="profile_image"
        />
      </div>

      {/* Name and Type Animation */}
      <div className='mt-4 text-4xl font-bold flex flex-col gap-1 items-center'>
        <p>
          Hi, I am <span className='text-blue-700 dark:text-blue-500'>Ajay Godara</span>
        </p>
        <TypeAnimation
          sequence={[
            'Frontend Developer',
            1000,
            'Backend Developer',
            1000,
            'React js Developer',
            1000,
          ]}
          speed={50}
          repeat={Infinity}
          style={{ color: theme === 'black' ? 'text-white' : 'text-black' }} // Dynamic text color
          />
      </div>

      {/* Resume Button */}
      <div className='mt-5'>
        <button
          className={`bg-blue-700 text-white text-lg py-2 px-4 rounded-lg ${theme === 'black' ? 'hover:bg-blue-600' : 'hover:bg-blue-800'}`}
        >
          View My Resume
        </button>
      </div>

   
    </div>
  );
}

export default Home;