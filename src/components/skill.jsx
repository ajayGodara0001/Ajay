import React from 'react'

function Skill({theme, sName, elements=[] }) {
  return (
    <div className={` rounded-xl lg:max-w-[400px] lg:h-fit lg:pb-8 md:w-[300px] md:h-[350px] w-[350px] h-[350px] shadow-lg  ${theme === "black" ? "text-white" : "text-black"}   ${theme === "black" ? "bg-slate-900" : "shadow-gray-400"} flex flex-col text-center gap-5`}>
                       
    <div className='text-blue-800 font-bold  text-2xl mt-5'>{sName}</div>
    <div className='flex flex-col gap-5 '>
            <div className='flex flex-col gap-5 '>
                {elements.map((element, index) => (
                    <div className={`${theme === "black" ? "bg-slate-600" : "bg-slate-300"}  ${theme === "black" ? "text-white" : "text-black"} text-xl font-semibold rounded-lg mx-5`} key={index}>{element}</div>
        ))}
</div>

    </div>
 </div>
  )
}

export default Skill
