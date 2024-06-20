import React from 'react';
import { useState } from 'react';
import s1 from "../images/s1.png";
import s2 from "../images/s2.png";
import s3 from "../images/s3.png";
import s4 from "../images/s4.png";
import s5 from "../images/s5.png";
import Carousel from "./Caraousel.jsx";
import { FaWhatsapp } from "react-icons/fa";
import { BiMessageDetail } from "react-icons/bi";
import MessgForm from "./MessgForm.jsx"

export const photos = [
  {
    src: s1,
    description: 'Join the Tonda “wave” and match to all your fave social events...'
  },
  {
    src: s2,
    description: 'Check out lined up and trending events...'
  },
  {
    src: s3,
    description: 'Search for your favorite events...'
  },
  {
    src: s4,
    description: 'Save your favorite events for later...'
  },
  {
    src: s5,
    description: 'Review events you’ve attended...'
  },
];

function Card() {
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
    <div className="bg-card  p-4 rounded-tl-3xl shadow-lg flex flex-col h-full items-center mt-8 md:mt-0 w-full md:w-auto md:flex-1">
      <div className="max-w-lg">
        <Carousel autoSlide={true} photos={photos} />
      </div>
      <div className="lg:hidden  flex flex-row  w-full sm:w-auto ">
          <button className="flex items-center justify-center bg-green-500  hover:bg-green-600 transition-colors text-white  w-1/6 h-16 px-3 py-3 rounded-lg shadow-md" onClick={openwhatsappp}>
            <FaWhatsapp size={30} />
          </button>
          <button className="flex items-center justify-center bg-blue-500 mx-1 hover:bg-blue-600 transition-colors text-white w-1/6 h-16 px-3 py-3 rounded-lg shadow-md" onClick={handleOpenForm}>
            <BiMessageDetail size={30} />
            
          </button>
          <MessgForm isVisible={isFormVisible} onClose={handleCloseForm} />
        </div>
      {/* <div className="flex flex-col justify-center items-center space-x-2 mt-4">
        <a href="https://play.google.com/store/apps/details?id=com.tonda.mobile.app"
        className="bg-gray-800  text-white my-2 px-4 py-2 rounded-lg"
        target='_blank'
        >Download for Android</a>
        <a href="https://play.google.com/store/apps/details?id=com.tonda.mobile.app"
        className="bg-gray-800  text-white my-2 px-4 py-2 rounded-lg"
        target='_blank'
        >Download for iOS</a>
      </div> */}
      
    </div>
  );
}

export default Card;
