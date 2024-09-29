import React from 'react'
import { FaBars, FaTimes , FaSun, FaMoon} from 'react-icons/fa'; // Import icons from FontAwesome


function Navbar() {
    return (
        <div className='bg-slate-900 w-full h-[fit] py-3 pl-7 pr-5 fixed text-slate-50 text-lg font-semibold shadow-sm shadow-slate-400 '>
            <div className='flex  justify-between   '>
                <div className='md:flex justify-between xl:w-[35%] lg:w-[45%] md:w-[50%] hidden'>
                    <span>Home</span>
                    <span>About</span>
                    <span>Project</span>
                    <span>Skills</span>
                    <span>Contact</span>
                </div>
                <div className='md:hidden'>
                    <FaBars size={24} />
                </div>
                <div >
                <FaSun size={24} /> 
                </div>
            </div>
        </div>
    )
}

export default Navbar
