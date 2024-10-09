import React from 'react'

function Project({pName, pInfo, tech , imgUrl, theme, liveLink, gitLink}) {
  return (
     
    <div className={` rounded-xl lg:w-[500px] lg:max-h-[500px] md:max-w-[400px] md:max-h-[500px] w-[350px] max-h-[500px] shadow-lg  ${theme === "black" ? "text-white" : "text-black"}  ${theme === "black" ? "bg-slate-900" : "shadow-gray-400"} `}>
    <div>
      <div className='text-blue-800 pl-5 pt-2 text-xl font-bold'>{pName}</div>
      <div className=' pl-5 pt-2 pr-2 font-medium'>{pInfo}</div>
      <div className=' pl-5 pt-2 pr-2 font-normal'> Tech Stack :{tech}</div>
      <div className='w-full pt-2'>
        <img className='h-32 w-full object-cover' src={imgUrl} alt="image" />
      </div>
      <div>
        
          <a target='_blank' href={liveLink}><div className='text-white text-lg bg-blue-800 m-4 text-center py-1 rounded-xl hover:bg-blue-950 hover:cursor-pointer'>Live Link</div></a>

        
        <a target='_blank' href={gitLink}><div className='text-white text-lg bg-blue-800 m-4 text-center py-1 rounded-xl hover:bg-blue-950 hover:cursor-pointer'>Github Link</div></a>
      </div>
    </div>

  </div>
  )
}
export default Project

