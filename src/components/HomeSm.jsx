import React, { useState} from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import Card from './Card.jsx';
import MessgForm from './MessgForm.jsx';
import { ReactTyped } from 'react-typed';
import { TypeAnimation } from 'react-type-animation';
import SmallCard from"./SmallCard.jsx";

function HomeSm() {
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };
  const openwhatsappp=()=>{
    window.open('https://wa.me/+256758212070', '_blank');
  }

  return (
    <div className="flex flex-col md:flex-row  md:items-center md:justify-between bg-gray-50">
    <div className="md:w-1/2 mt-2 md:mt-0 flex justify-center">
        <Card />
      </div>
      <div className='md:w-1/2 relative felx items-center ml-auto  mt-10' >
           <SmallCard/>
           </div>
    <div className="md:w-1/2 mx-10 my-10 flex flex-col">
      {/* ... your button code ... */}
      <h1 className="text-3xl md:text-3xl font-bold " style={{ color: "#707070" }}>About Us</h1>
      <div className="flex flex-col">  
        <h1 className="text-5xl mfont-bold text-abouttext mt-6">
           
          {/* <ReactTyped
            strings={["Create", "Connect", "Experience!"]}
            typeSpeed={50}
            loop
            backSpeed={20}
            cursorChar=""
            showCursor={true}
          /> */}
          <TypeAnimation
              sequence={['Create', 500, 'Connect', 500, 'Experience!', 500]}
              style={{ fontSize: '3rem' }}
              repeat={Infinity}
              
/>
        </h1>
        
        <p className="mt-6 text-gray-600 text-justify text-lg mr-8">
          Tonda is a platform at the intersection of technology and marketing, connecting users and vendors of physical entertainment, creativity and recreation.
        </p>
        
      </div>
    
      
     

        {/* <div className="lg:hidden mt-10 -ml-3 flex flex-col space-y-4 w-full sm:w-auto">
          <button className="flex items-center justify-center bg-green-500 hover:bg-green-600 transition-colors text-white w-full sm:w-1/2 lg:w-1/3 px-6 py-3 rounded-lg shadow-md" onClick={openwhatsappp}>
            <FaWhatsapp size={24} />
            <span className="ml-2 text-lg">WhatsApp</span>
          </button>
          <button className="flex items-center justify-center bg-blue-500 hover:bg-blue-600 transition-colors text-white w-full sm:w-1/2 lg:w-1/3 px-6 py-3 rounded-lg shadow-md" onClick={handleOpenForm}>
            <BiMessageDetail size={24} />
            <span className="ml-2 text-lg">Message</span>
          </button>
        </div> */}
      </div>
     
      
      <MessgForm isVisible={isFormVisible} onClose={handleCloseForm} />
    </div>
  );
}

export default HomeSm;




