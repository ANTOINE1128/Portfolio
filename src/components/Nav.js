import React from 'react';
// import Icons
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquareText} from 'react-icons/bs'
// import links
import {Link} from 'react-scroll'

const Nav = () => {
  return (
  <nav className="fixed bottom-2 lg:bottom w-full overflow-hidden z-50">
     {/* nav inner */}
    <div className="container mx-auto">
      <div className="w-full bg-black/20 h-[80px] backdrop-blur-2xl rounded-full max-w-[560px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">

        <Link 
        to='home' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className= "cursor-poitner w-[60px] flex items-center justify-center">
        <BiHomeAlt />
        </Link>

        <Link 
        to='about'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-200}
        className= "cursor-poitner w-[50px] flex items-center justify-center ">
        <BiUser />
        </Link>

        <Link 
        to='services'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-100}
         className= "cursor-poitner w-[50px] flex items-center justify-center ">
        <BsClipboardData />
        </Link>

        <Link 
        to='work' 
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-100}
        className= "cursor-poitner w-[50px] flex items-center justify-center  ">
        <BsBriefcase />
        </Link>  
        <Link 
        to='contact'
        activeClass='active'
        smooth={true}
        spy={true}
        offset={-100}
        className= "cursor-poitner w-[50px] flex items-center justify-center ">
        <BsChatSquareText />
        </Link>
      </div>
    </div>
  </nav>
  );
};

export default Nav;
