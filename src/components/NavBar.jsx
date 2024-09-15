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
            </div>
        </div>
    )
}

export default NavBar
