import React from 'react';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { IoMdCloseCircleOutline } from "react-icons/io";

function MessgForm({ isVisible, onClose }) {
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    phone:'',
    message:''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.sendForm('service_77e93by', 'template_a4jszlw', e.target, '3CojdPVstX46taHuy')
      .then((result) => {
        onClose();
      }, (error) => {
        alert('Failed to send message, please try again.');
      });
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 h-full bg-gray-800 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative mx-4">
        <button className="absolute top-2 right-2 text-gray-700" onClick={onClose}>
          <IoMdCloseCircleOutline size={30}/>
        </button>
        <h2 className="text-3xl mb-6 text-gray-800 font-semibold">Send a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Name</label>
            <input 
              type="text" 
              name="name" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <input 
              type="email" 
              name="email" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea 
              name="message" 
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" 
              onChange={handleChange} 
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  )
}

export default MessgForm;
