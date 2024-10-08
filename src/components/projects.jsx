import React from 'react'
import Project from './project'

function Projects({theme}) {
  return (
    <div className='w-full pt-28  flex flex-col items-center' id="project">

      <div className='text-4xl font-bold mb-16 text-blue-800 '>Projects</div>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>

      
       <Project pName="Project Name" pInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga. Reiciendis ullam explicabo molestias amenda dolore! " tech="Tailwind, React, JavaScript" imgUrl="https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8" theme={theme}/>
      
       <Project pName="Project Name" pInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga. Reiciendis ullam explicabo molestias amenda dolore! " tech="Tailwind, React, JavaScript" imgUrl="https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"  theme={theme}/>
      
       <Project pName="Project Name" pInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga. Reiciendis ullam explicabo molestias amenda dolore! " tech="Tailwind, React, JavaScript" imgUrl="https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"  theme={theme}/>
      
       <Project pName="Project Name" pInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga. Reiciendis ullam explicabo molestias amenda dolore! " tech="Tailwind, React, JavaScript" imgUrl="https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"  theme={theme}/>
      
       <Project pName="Project Name" pInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga. Reiciendis ullam explicabo molestias amenda dolore! " tech="Tailwind, React, JavaScript" imgUrl="https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"  theme={theme}/>
      
       <Project pName="Project Name" pInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga. Reiciendis ullam explicabo molestias amenda dolore! " tech="Tailwind, React, JavaScript" imgUrl="https://images.unsplash.com/photo-1726293993561-ae9901d8c6d0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8"  theme={theme}/>
     
      

      </div>
    </div>
  )
}

export default Projects
