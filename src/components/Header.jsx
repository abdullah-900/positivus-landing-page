import { useState } from 'react';
import logo from "../assets/logo.svg?url";
import menuBurger from "../assets/menu-burger.svg?url";
const Header = () => {
    const [menuVisible,setMenuVisible]=useState(false);
  

function toggleMenu() {
    setMenuVisible(!menuVisible);
}

  return (
    <> 
     <header className="flex items-center   p-8 xl:p-12 xl:px-25 lg:text-[1.25rem] lg:leading-[1.75rem] mb-8  lg:mb-[4.375rem] ">
        <nav className=" flex items-center justify-between w-full ">
                <img className="w-[9.625rem] h-[1.5625rem] lg:w-[13.75rem] lg:h-[2.25rem]" src={logo} alt="Logo"/> 
             <div className="flex xl:w-full justify-end gap-10 items-center">
            <ul className="text-alltext text-base hidden lg:flex gap-10 ">
                <li className="cursor-pointer"><a href="#About us">About us</a></li>
                <li className="cursor-pointer"><a href="#Services">Services</a></li>
                <li className="cursor-pointer"><a href="#Use Cases">Use Cases</a></li>
                <li className="cursor-pointer"><a href="#Pricing">Pricing</a></li>
                <li className="cursor-pointer"><a href="#Blog">Blog</a></li>
            </ul>
    
        <button className="hidden pt-5 pb-5 pl-9 pr-9 lg:block cursor-pointer text-base  border rounded-[.875rem] text-buttons border-buttons" type="button">Request a quote</button>
     </div>
      <button type='button' className='cursor-pointer'>
        <img onClick={toggleMenu} className="block lg:hidden w-[2.1875rem] h-[2.1875rem]" src={menuBurger} alt="menu-burger"/> 
      </button>
        </nav>
    </header>



       {menuVisible &&  <div  className="flex flex-col gap-10 justify-center items-center p-10 lg:hidden">
            <ul className="text-alltext text-base flex flex-col justify-center items-center gap-10 ">
                <li onClick={toggleMenu} className="cursor-pointer"><a href="#About us">About us</a></li>
                <li  onClick={toggleMenu} className="cursor-pointer"><a href="#Services">Services</a></li>
                <li onClick={toggleMenu}  className="cursor-pointer"><a href="#Use Cases">Use Cases</a></li>
                <li onClick={toggleMenu} className="cursor-pointer"><a href="#Pricing">Pricing</a></li>
                <li onClick={toggleMenu} className="cursor-pointer"><a href="#Blog">Blog</a></li>
            </ul>
        <button className="cursor-pointer pt-5 pb-5 pl-9 pr-9 text-base  border rounded-[.875rem] text-buttons border-buttons" type="button">Request a quote</button>
        </div>}
    </>
  



  )
}

export default Header
       
       
