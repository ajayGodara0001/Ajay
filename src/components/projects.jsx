import React from 'react'
import Project from './project'


function Projects({theme}) {
  return (
    <div className='w-full pt-28  flex flex-col items-center' id="project">

      <div className='text-4xl font-bold mb-16 text-blue-800 '>Projects</div>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>

      
       <Project pName="Portfolio" pInfo="This is my Portfolio Project, It includes About me, My Projects and My Skills" tech="Tailwind, React, JavaScript" imgUrl={"p1.png"} theme={theme} 
       liveLink={"https://ajaygodaraportfolio.vercel.app/"} gitLink={"https://github.com/ajayGodara0001/Ajay"}/>
      
       <Project pName="Project Name" pInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga. Reiciendis ullam explicabo molestias amenda dolore! " tech="Tailwind, React, JavaScript" imgUrl={"p1.png"}  theme={theme}
       liveLink={"https://ajaygodaraportfolio.vercel.app/"} gitLink={"https://github.com/ajayGodara0001/Ajay"}/>
      
      
      
       <Project pName="Project Name" pInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga. Reiciendis ullam explicabo molestias amenda dolore! " tech="Tailwind, React, JavaScript"imgUrl={"p1.png"} theme={theme}
       liveLink={"https://ajaygodaraportfolio.vercel.app/"} gitLink={"https://github.com/ajayGodara0001/Ajay"}/>
      
       <Project pName="Project Name" pInfo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, fuga. Reiciendis ullam explicabo molestias amenda dolore! " tech="Tailwind, React, JavaScript" imgUrl={"p1.png"}  theme={theme}
       liveLink={"https://ajaygodaraportfolio.vercel.app/"} gitLink={"https://github.com/ajayGodara0001/Ajay"}/>
     
      

      </div>
    </div>
  )
}

export default Projects
