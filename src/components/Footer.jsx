import React from 'react';
import { FaInstagram, FaLinkedin, FaFacebook, FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { FaArrowRightLong,FaXTwitter} from 'react-icons/fa6';
import tondalogo1 from '../images/tondalogo1.png';
import  { useRef } from 'react'
import emailjs from 'emailjs-com';
function Footer() {
  const form =useRef();
    const sendemail=(e)=>{
        e.preventDefault();
        emailjs.sendForm('service_77e93by', 'template_he0qu1y', e.target, '3CojdPVstX46taHuy')
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
          <a href="https://www.instagram.com/tonda_app/" className="flex  items-center space-x-2" target='_blank'>
            <FaInstagram size={24} /> <span>Instagram</span>
          </a>
          <a href="https://www.linkedin.com/company/tonda-ventures/" className="flex  items-center space-x-2" target='_blank'>
            <FaLinkedin size={24} /> <span>LinkedIn</span>
          </a>
          {/* <a href="#" className="flex  items-center space-x-2">
            <FaFacebook size={24} /> <span>Facebook</span>
          </a> */}
          <a href="https://x.com/TheTondaApp" className="flex  items-center space-x-2" target='_blank'>
            <FaXTwitter size={24} /> <span>X</span>
          </a>
        </div>
        
        {/* Contact information */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Get in touch</h2>
          <div className="flex items-center space-x-2">
            <FaPhoneAlt size={25} />
            <a href="tel:+256758212070">+256 758 212070</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaEnvelope size={25} />
            <a href="mailto:admin@tondaapp.com">admin@tondaapp.com</a>
          </div>
          <div className="flex items-center space-x-2">
            <FaWhatsapp size={25} />
            <a href="https://wa.me/+256758212070" target='_blank'>+256 758 212070</a>
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
        <p>&copy; 2024 Tonda Ventures. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
