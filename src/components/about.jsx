import React from 'react'
import { DiBlackberry } from 'react-icons/di'

function About({theme}) {
  return (
    <div className={`${theme === "black" ? "text-white" : "text-black"} w-full h-fit px-4 flex flex-col items-center pt-20 `} id="about">
        <div className='text-4xl font-bold mb-10 text-blue-800'><h2>About Me</h2></div>
        <div className=' text-center  md:px-24 text-xl font-medium'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur asperiores autem iste velit ipsam, fuga voluptate repudiandae debitis corrupti lestiae non exercitationem alias, illum sed quasi voluptatum ea reiciendis quod modi voluptatem stempore laborum exercitationem distinctio repellendus amet autem est aperiam. 
        </div>
    </div>
  )
}

export default About
