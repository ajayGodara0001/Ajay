import { useState } from 'react';
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa';

function Navbar({ changeTheme, theme }) {
  const [menuState, setMenuSetate] = useState('close');

  const showMenu = () => {
    setMenuSetate(menuState === 'close' ? 'open' : 'close');
  };
  const closeMenu = () => {
    setMenuSetate(menuState === 'close' ? 'open' : 'close');
  };

  return (
    <div className='bg-slate-900 dark:bg-gray-800 w-full h-fit py-3 pl-7 pr-5 fixed top-0 text-slate-50 z-50 dark:text-gray-100 text-lg font-semibold shadow-md shadow-slate-400 dark:shadow-gray-700'>
      <div className='flex justify-between'>
        {/* Desktop Menu */}
        <div className='md:flex justify-between xl:w-[35%] lg:w-[45%] md:w-[50%] hidden'>
          <a href="#home" className='hover:text-blue-500 dark:hover:text-blue-400'>Home</a>
          <a href="#about" className='hover:text-blue-500 dark:hover:text-blue-400'>About</a>
          <a href="#project" className='hover:text-blue-500 dark:hover:text-blue-400'>Projects</a>
          <a href="#skills" className='hover:text-blue-500 dark:hover:text-blue-400'>Skills</a>
          <a href="#contact" className='hover:text-blue-500 dark:hover:text-blue-400'>Contact</a>
        </div>

        {/* Mobile Menu */}
        <div className='md:hidden'>
          {menuState === 'close' ? (
            <FaBars onClick={showMenu} className='hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-400' size={24} />
          ) : (
            <div>
              <div className='flex flex-col gap-5'>
                <a href="#home" onClick={closeMenu} className='hover:text-blue-500 dark:hover:text-blue-400'>Home</a>
                <a href="#about" onClick={closeMenu} className='hover:text-blue-500 dark:hover:text-blue-400'>About</a>
                <a href="#project" onClick={closeMenu} className='hover:text-blue-500 dark:hover:text-blue-400'>Projects</a>
                <a href="#skills" onClick={closeMenu} className='hover:text-blue-500 dark:hover:text-blue-400'>Skills</a>
                <a href="#contact" onClick={closeMenu} className='hover:text-blue-500 dark:hover:text-blue-400'>Contact</a>
              </div>
              <div className='absolute right-14 top-3'>
                <FaTimes onClick={showMenu} className='hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-400' size={27} />
              </div>
            </div>
          )}
        </div>

        {/* Theme Toggle Button */}
        <div>
          {theme === 'black' ? (
            <FaSun className='hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-400' onClick={changeTheme} size={24} />
          ) : (
            <FaMoon className='hover:cursor-pointer hover:text-blue-500 dark:hover:text-blue-400' onClick={changeTheme} size={24} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;