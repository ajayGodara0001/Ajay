import React from 'react'
import Navbar from './navbar'

function Fotter() {
  return (
    <div className='flex mt-28 flex-col md:flex-row justify-around gap-7 text-center  text-lg bg-slate-900 px-1  py-5 text-white'>
        <div>
        <div className='flex flex-row justify-center gap-4 '>
          <a href="#home" className=''>Home</a>
            <a href="#about" className=''>About</a>
            <a href="#project" className=''>Projects</a>
           <a href="#skills" className=''>Skills</a>
           <a href="#contact" className=''>Contant</a>     
        </div>
        </div>
        <div className='flex gap-3 justify-center'>
            <span>hello</span> 
            <span>hello</span> 
            <span>hello</span> 
        </div>
        <div>
            <p>@2024 AJAY. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Fotter
