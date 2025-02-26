import React from 'react'
import Project from './project'


function Projects({theme}) {
  return (
    <div className='w-full pt-28  flex flex-col items-center' id="project">

      <div className='text-4xl font-bold mb-16 text-blue-800 '>Projects</div>

      <div className='grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>

      
       <Project pName="Portfolio" pInfo="This is my Portfolio Project, It includes About me, My Projects and My Skills" tech="Tailwind, React, JavaScript" imgUrl={"p1.png"} theme={theme} 
       liveLink={"https://ajaygodaraportfolio.vercel.app/"} gitLink={"https://github.com/ajayGodara0001/Ajay"}/>
      
       <Project pName="Shoping Website" pInfo="This is a shopping website, here authentication system available and payment getway or my order section also " tech="Tailwind, React, JavaScript mongoose express node, " imgUrl={"image.png"}  theme={theme}
       liveLink={"https://suds.vercel.app/"}
       gitLink={"https://github.com/ajayGodara0001/suds"}/>
      
      
      
       <Project pName="All Country Info" pInfo="This website give you information about all nation of world like their Capital, Population, currency, border country Here i use an api for all information " tech="HTML CSS, JavaScript, fetch api"imgUrl={"country.png"} theme={theme}
       liveLink={"https://ajaycountry.vercel.app/"} gitLink={"https://github.com/ajayGodara0001/country"}/>
      
       <Project pName="Booking Website" pInfo="Here we book a room for night saty and add review for this and list our own hotel " tech="Javascript Mongoose, express, ejs templat,  tailwind" imgUrl={"home.png"}  theme={theme}
       liveLink={"https://home-site-xpta.onrender.com/"} gitLink={"https://github.com/ajayGodara0001/Home-Site"}/>
     
      

      </div>
    </div>
  )
}

export default Projects
