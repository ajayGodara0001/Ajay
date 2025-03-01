import React from 'react';
import Project from './project';

function Projects({ theme }) {
  return (
    <div className={`w-full pt-28 flex flex-col items-center ${theme === 'black' ? 'bg-gray-900' : 'bg-gray-100'}`} id="project">
      {/* Projects Heading */}
      <div className={`text-4xl font-bold mb-16 ${theme === 'black' ? 'text-blue-500' : 'text-blue-800'}`}>
        Projects
      </div>

      {/* Projects Grid */}
      <div className='grid md:grid-cols-2 grid-cols-1 gap-10 items-center'>
        <Project
          pName="Portfolio"
          pInfo="This is my Portfolio Project, It includes About me, My Projects and My Skills"
          tech="Tailwind, React, JavaScript"
          imgUrl="p1.png"
          theme={theme}
          liveLink="https://ajaygodaraportfolio.vercel.app/"
          gitLink="https://github.com/ajayGodara0001/Ajay"
        />
        <Project
          pName="Shoping Website"
          pInfo="This is a shopping website, here authentication system available and payment gateway or my order section also"
          tech="Tailwind, React, JavaScript, Mongoose, Express, Node"
          imgUrl="image.png"
          theme={theme}
          liveLink="https://suds.vercel.app/"
          gitLink="https://github.com/ajayGodara0001/suds"
        />
        <Project
          pName="All Country Info"
          pInfo="This website gives you information about all nations of the world like their Capital, Population, currency, border country. Here I use an API for all information."
          tech="HTML, CSS, JavaScript, Fetch API"
          imgUrl="country.png"
          theme={theme}
          liveLink="https://ajaycountry.vercel.app/"
          gitLink="https://github.com/ajayGodara0001/country"
        />
        <Project
          pName="Booking Website"
          pInfo="Here we book a room for a night stay and add a review for it and list our own hotel."
          tech="JavaScript, Mongoose, Express, EJS Template, Tailwind"
          imgUrl="home.png"
          theme={theme}
          liveLink="https://home-site-xpta.onrender.com/"
          gitLink="https://github.com/ajayGodara0001/Home-Site"
        />
      </div>
    </div>
  );
}

export default Projects;