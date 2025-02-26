import React from 'react'
import Skill from './skill'

function SKills({ theme }) {
    const ftech = ["HTML", "CSS", "JAVASCRIPT", "REACT","TAILWIND"]
    const btech = ["EXPRESS", "MONGODB", "NODE JS"]
    const tool = ["GITHUB"]
    return (
        <div className='w-full pt-28   flex flex-col items-center' id="skills">

            <div className='text-4xl font-bold mb-16 text-blue-800 '>My Skills</div>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1  gap-10 items-center'>

                   
                <Skill theme={theme} sName={"Frontend"} elements={ftech} />
                <Skill theme={theme} sName={"Backend"} elements={btech} />
                <Skill theme={theme} sName={"Tools"} elements={tool} />


                  
            </div>
        </div>
    )
}

export default SKills
