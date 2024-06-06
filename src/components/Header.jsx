import React from 'react';
import tondalogo1 from '../images/tondalogo1.png';
import sunset from '../images/sunset.jpg';

function Header() {
   return (
    <header className="flex justify-between items-center my-5 mx-10 rounded-3xl bg-gray-100 shadow-md">
    <div className="bg-black rounded-xl flex justify-center md:w-[10%] w-30 h-16 ">
        <img src={tondalogo1} alt="Tonda Logo" className="p-3 rounded-lg w-full h-full object-contain" />
    </div>



 <nav className="flex items-center p-2 mr-5 text-lg space-x-4 sm:space-x-6">
  <a href="#home" className="hover:underline">Home</a>
  <a href="#" className="hover:underline">Blog</a>
  
 </nav>
  </header>
  );
  }
  
  export default Header;
  
  