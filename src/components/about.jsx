import React from 'react';

function About({ theme }) {
  return (
    <div
   data-aos="zoom-in-up"
      className={`w-full h-fit mt-[100vh] px-4 flex flex-col items-center pt-20 ${
        theme === 'black' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      }`}
      id="about"
    >
      {/* About Me Heading */}
      <div className={`text-4xl font-bold mb-10 ${theme === 'black' ? 'text-blue-500' : 'text-blue-800'}`}>
        <h2>About Me</h2>
      </div>

      {/* About Me Content */}
      <div className='text-center md:px-24 text-xl font-medium'>
        <p>
          Hi, I'm <span className='font-bold'>Ajay Godara</span>, a passionate Full-Stack Developer with expertise in the MERN stack (MongoDB, Express.js, React, and Node.js). I specialize in building scalable, user-friendly web applications that deliver seamless experiences.
        </p>
        <p className='mt-4'>
          With a strong foundation in both frontend and backend development, I have worked on projects like e-commerce platforms, real-time chat applications, and portfolio websites. I enjoy solving complex problems and continuously learning new technologies to enhance my skill set.
        </p>
        <p className='mt-4'>
          When I'm not coding, I love contributing to open-source projects, exploring new tools, and sharing my knowledge with the developer community. Let's build something amazing together!
        </p>
      </div>
    </div>
  );
}

export default About;