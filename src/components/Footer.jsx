import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import { FaArrowRightLong,FaXTwitter} from 'react-icons/fa6';
import tondalogo1 from '../images/tondalogo1.png';
import  { useRef } from 'react'
import emailjs from 'emailjs-com';
function Footer() {
  const form =useRef();
    const sendemail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_tpd37j3', 'template_2uvz4cf', e.target, 'Ca1ZBq_0F_4nEh7w4')
        .then(
            () => {
              console.log('SUCCESS!');
              form.current.reset();
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
    } 
  return (
    <footer className="bg-black md:max-w-screen-2xl  min-w-full relative   xl:relative md:absolute md:bottom-0 mt-auto text-white py-8 px-4 md:px-16">
      <div className=" ml-4 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* Social buttons */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Socials</h2>
          <a href="#" className="flex  items-center space-x-2">
            <FaInstagram size={24} /> <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/company/tonda-ventures/" className="flex  items-center space-x-2" target='_blank'>
            <FaLinkedin size={24} /> <span>LinkedIn</span>
          </a>
          {/* <a href="#" className="flex  items-center space-x-2">
            <FaFacebook size={24} /> <span>Facebook</span>
          </a> */}
          <a href="#" className="flex  items-center space-x-2">
            <FaXTwitter size={24} /> <span>X</span>
          </a>
        </div>
        
        {/* Contact information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Get in touch</h2>
          <div className="flex items-center space-x-2">
            <FaPhone size={20} />
            <a href="#">+256 776920408</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={20} />
            <a href="#">admin@tondaapp.com</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaWhatsapp size={20} />
            <a href="#">+256 776920408</a>
          </div>
        </div>

        {/* Subscribe section */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Subscribe to our <span className='text-abouttext'>Newsletter</span></h2>
          <form ref={form} onSubmit={sendemail}>
          <div className="flex items-center max-w-xs">
          
            <input
              type="email"
              placeholder="Email address"
              className="p-4 rounded-l-lg text-black w-full focus:outline-none"
            />
            <button type='submit' className="bg-abouttext text-white p-4 rounded-r-lg">
              <FaArrowRightLong size={24} />
            </button>
         
          </div>
          </form>
          <p className="text-sm">
            At Tonda, we market social events happening within Kampala. Subscribe
            to our weekly blog for a roundup of what's happening.
          </p>
        </div>
      </div>
      <div className="text-center mt-8">
        <img src={tondalogo1} alt="Tonda Logo" className="mx-auto w-24 mb-3" />
        <p>&copy; 2024 Tonda. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
