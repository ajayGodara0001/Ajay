import { useState } from 'react'
import { FaBars, FaTimes, FaSun, FaMoon } from 'react-icons/fa'

function Navbar({ changeTheme, theme }) {
    const [menuState, setMenuSetate] = useState("close")

    const showMenu = () => {
        if (menuState == "close") {
            setMenuSetate("open")
        }
        else {
            setMenuSetate("close")
        }
    }
    return (
        <div className='bg-slate-900 w-full h-[fit] py-3 pl-7 pr-5 fixed text-slate-50 text-lg font-semibold shadow-sm shadow-slate-400 '>
            <div className='flex  justify-between'>
                <div className='md:flex justify-between xl:w-[35%] lg:w-[45%] md:w-[50%] hidden'>
                    <span>Home</span>
                    <span>About</span>
                    <span>Project</span>
                    <span>Skills</span>
                    <span>Contact</span>
                </div>
                <div className='md:hidden'>
                    {
                        menuState == "close" ? <FaBars onClick={showMenu} className='hover:cursor-pointer' size={24} /> :
                            <div>
                                <div className='flex flex-col gap-5'>
                                    <span>Home</span>
                                    <span>About</span>
                                    <span>Project</span>
                                    <span>Skills</span>
                                    <span>Contact</span>
                                </div>
                                <div className='absolute  right-14 top-3'>
                                    <FaTimes onClick={showMenu} className='hover:cursor-pointer' size={27} />
                                </div>
                            </div>
                    }
                </div>
                <div >
                    {theme == "black" ? <FaSun className='hover:cursor-pointer' onClick={changeTheme} size={24} /> : <FaMoon className='hover:cursor-pointer' onClick={changeTheme} size={24} />}
                </div>
            </div>
        </div>
    )
}

export default Navbar
