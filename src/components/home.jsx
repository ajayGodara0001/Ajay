import React from 'react'

function Home({ theme , id}) {
    return (
        <div className='flex justify-center items-center flex-col h-screen' id={id}>
            <div className='size-32 md:size-44 rounded-full bg-green-300 overflow-hidden  border-4 border-blue-300  '>
                <img className="w-full h-full rounded-full object-cover " src="https://media.istockphoto.com/id/1303206644/photo/portrait-of-smiling-caucasian-man-pose-in-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=akRiOpll6XSlduMj09n9Zm11SsRpAjtdr85GbGJ99uM=" alt="profile_image" />
            </div>
            <div className={`mt-4 text-3xl font-bold flex flex-col gap-1 items-center ${theme === "black" ? "text-white" : "text-black"}`}>
                <p>Hi, I am <span className='text-blue-700'>Ajay</span></p>
                <p>Full Stack Developer</p>
            </div>
            <div className='text-white mt-5 '>
                <button className='bg-blue-700 text-lg py-2 px-4 rounded-lg hover:bg-blue-950'>View My Resume</button>
            </div>
        </div>
    )
}

export default Home
