import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { BiMessageDetail } from 'react-icons/bi';
import MessgForm from "./MessgForm.jsx"
import { useState } from 'react';
const Socials = () => {

    const [isFormVisible, setIsFormVisible] = useState(false);

  const handleOpenForm = () => {
    setIsFormVisible(true);
  };

  const handleCloseForm = () => {
    setIsFormVisible(false);
  };
  const openwhatapp=()=>{
    window.open('https://api.whatsapp.com/send?phone=+256776920408', '_blank');
  }
  const buttons = [
    {
      id: 1,
      child: (
        <>
          WhatsApp <FaWhatsapp size={24} />
        </>
      ),
      onclick:openwhatapp,
      style: 'rounded-t-md bg-green-500 hover:bg-green-600 transition-colors',
    },
    {
      id: 2,
      child: (
        <>
          Message <BiMessageDetail size={24} />
        </>
      ),
      href: 'sms:+1234567890',
      onclick:handleOpenForm,
      style: 'rounded-b-md bg-abouttext hover:bg-hoverblue transition-colors',
    },
  ];
  

  return (
    <div className="hidden fixed left-0 top-[80%] lg:flex flex-col space-y-4 z-10">
      <ul>
        {buttons.map(({ id, child, onclick, style }) => (
          <li
            key={id}
            className={
              'flex justify-between items-center w-52 h-14 px-4 ml-[-150px] hover:ml-[-10px] hover:rounded-md duration-300' +
              ' ' +
              style
            }
          >
            <button
                onClick={onclick}
              className="flex justify-between items-center w-full text-white"
            >
              {child}
            </button>
          </li>
        ))}
        <MessgForm isVisible={isFormVisible} onClose={handleCloseForm} />
      </ul>
      
    </div>
  );
};

export default Socials;