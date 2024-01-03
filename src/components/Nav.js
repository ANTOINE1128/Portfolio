import React from 'react';
// import Icons
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBreiefcase, BsChatSquare} from 'react-icons/bs'
// import links
import {Link} from 'react-scroll'

const Nav = () => {
  return (
  <nav className="fixed bottom-2 lg:bottom w-full overflow-hidden z-50">
     {/* nav inner */}
    <div className="container mx-auto">
      <div className="w-full bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50">
        {/* <link> */}
        <BiHomeAlt />
        {/* </link> */}
      </div>
    </div>
  </nav>
  );
};

export default Nav;
