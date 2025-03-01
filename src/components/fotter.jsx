import React from 'react';

function Footer({ theme }) {
  return (
    <div
      className={`flex  flex-col md:flex-row justify-around gap-7 text-center text-lg ${
        theme === 'black' ? 'bg-gray-800' : 'bg-gray-100'
      } px-1 py-10  ${
        theme === 'black' ? 'text-white' : 'text-gray-900'
      }`}
    >
      {/* Navigation Links */}
      <div>
        <div className='flex flex-row justify-center gap-4'>
          <a href="#home" className={`hover:text-blue-500 ${theme === 'black' ? 'text-white' : 'text-gray-900'}`}>
            Home
          </a>
          <a href="#about" className={`hover:text-blue-500 ${theme === 'black' ? 'text-white' : 'text-gray-900'}`}>
            About
          </a>
          <a href="#project" className={`hover:text-blue-500 ${theme === 'black' ? 'text-white' : 'text-gray-900'}`}>
            Projects
          </a>
          <a href="#skills" className={`hover:text-blue-500 ${theme === 'black' ? 'text-white' : 'text-gray-900'}`}>
            Skills
          </a>
          <a href="#contact" className={`hover:text-blue-500 ${theme === 'black' ? 'text-white' : 'text-gray-900'}`}>
            Contact
          </a>
        </div>
      </div>

      {/* Social Links (Placeholder) */}
      <div className='flex gap-3 justify-center'>
        <span className={`hover:text-blue-500 ${theme === 'black' ? 'text-white' : 'text-gray-900'}`}>hello</span>
        <span className={`hover:text-blue-500 ${theme === 'black' ? 'text-white' : 'text-gray-900'}`}>hello</span>
        <span className={`hover:text-blue-500 ${theme === 'black' ? 'text-white' : 'text-gray-900'}`}>hello</span>
      </div>

      {/* Copyright Text */}
      <div>
        <p className={`${theme === 'black' ? 'text-white' : 'text-gray-900'}`}>
          @2024 AJAY. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;