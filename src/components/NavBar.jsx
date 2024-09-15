// Image
import logoChafik from '../img/logoPokemon.svg'

// font icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

// effect in react
import {Link} from 'react-scroll';
import { useState,useEffect } from 'react'

const NavBar = () =>{

    // Get size Screen
    const [width, setWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => setWidth(window.innerWidth);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Toggle button menu
    const [statusMenu,setStatusMenu] = useState(false)
    const toggleMenu = () =>{
        setStatusMenu(!statusMenu)
    }
    
    return(
        <div>
            <div className='fixed flex items-center bg-[#c70a0a] py-2 w-full z-50' >
                <div className='basis-1/2 md:basis-1/6 ms-5 lg:ms-10'>
                    <Link to= 'home' smooth={true} duration={500}>
                        <img src={logoChafik} className="h-[50px] cursor-pointer"/>
                    </Link>
                </div>
                {/* Button menu mobile screen*/}
                {/* <div className='flex md:hidden me-10 basis-1/2 justify-end' onClick={toggleMenu}>
                    <div className='relative flex items-center text-[#fbe9d0] cursor-pointer'>
                           
                        <button className={`absolute right-0 hover:border-2 hover:border-white ${!statusMenu ? "focus:rotate-180 scale-100" : "focus:rotate-180 scale-0"} transition-transform ease-in-out duration-200`}>
                            <svg className='w-8 h-8 fill-none stroke-current stroke-2'>
                                <path d="M6 8h20M6 16h20M6 24h20" />
                            </svg> 
                        </button>
                          
                        <button className={`absolute right-0 hover:border-2 hover:border-white ${statusMenu ? "focus:rotate-180 scale-100" : "focus:rotate-180 scale-0" } transition-transform ease-in-out duration-200`}>
                            <FontAwesomeIcon icon={faXmark} className='text-2xl w-8 h-8'/>
                        </button>
                        
                    </div>
                    
                </div> */}
                {/* Menu full screen */}
                {/* <div className={`block md:inline mx-0 md:mx-5 lg:mx-auto basis-5/6 lg:basis-4/6 bg-[#c70a0a] ${width<769 ? statusMenu ?  "absolute top-16 right-0 w-80 md:static translate-x-0 transition-transform ease duration-700" : "absolute top-16 right-0 w-80 md:static translate-x-[200%] transition-transform ease duration-700 ":" "} `}>
                    <ul className='block md:flex justify-around text-base lg:text-xl text-white'>
                        <li className={`${width<768 ? "my-5 mx-10" : " "} cursor-pointer relative before:bg-[#FFCB05] before:absolute before:bottom-[-6px] before:left-0 before:h-[3px] before:w-0 before:transition-[0.5s] hover:before:w-[100%] hover:scale-95`}><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li className={`${width<768 ? "my-5 mx-10" : " "} cursor-pointer relative before:bg-[#FFCB05] before:absolute before:bottom-[-6px] before:left-0 before:h-[3px] before:w-0 before:transition-[0.5s] hover:before:w-[100%] hover:scale-95`}><Link to="about" smooth={true} duration={500}>About</Link></li>
                        <li className={`${width<768 ? "my-5 mx-10" : " "} cursor-pointer relative before:bg-[#FFCB05] before:absolute before:bottom-[-6px] before:left-0 before:h-[3px] before:w-0 before:transition-[0.5s] hover:before:w-[100%] hover:scale-95`}><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
                        <li className={`${width<768 ? "my-5 mx-10" : " "} cursor-pointer relative before:bg-[#FFCB05] before:absolute before:bottom-[-6px] before:left-0 before:h-[3px] before:w-0 before:transition-[0.5s] hover:before:w-[100%] hover:scale-95`}><Link to= 'education' smooth={true} duration={500}>Education</Link></li>
                        <li className={`${width<768 ? "my-5 mx-10" : " "} cursor-pointer relative before:bg-[#FFCB05] before:absolute before:bottom-[-6px] before:left-0 before:h-[3px] before:w-0 before:transition-[0.5s] hover:before:w-[100%] hover:scale-95`}><Link to= 'work' smooth={true} duration={500}>Work</Link></li>
                        <li className={`${width<768 ? "my-5 mx-10" : " "} cursor-pointer relative before:bg-[#FFCB05] before:absolute before:bottom-[-6px] before:left-0 before:h-[3px] before:w-0 before:transition-[0.5s] hover:before:w-[100%] hover:scale-95`}><Link to= 'experience' smooth={true} duration={500}>Experience</Link></li>
                        <li className={`${width<768 ? "my-5 mx-10" : " "} cursor-pointer relative before:bg-[#2C68FA] before:absolute before:bottom-[-6px] before:left-0 before:h-[3px] before:w-0 before:transition-[0.5s] hover:before:w-[100%] hover:scale-95`}><Link to= 'contact' smooth={true} duration={500}>Contact</Link></li>
                    </ul>
                </div> */}
            </div>
        </div>
    )
}

export default NavBar
