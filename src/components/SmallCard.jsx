import React from 'react'
import ps from"../images/ps.jpg"
function SmallCard() {
  return (
        <div className="bg-card  rounded-xl shadow-lg flex flex-col h-full items-center  w-auto md:flex-1">
            <h1 className='text-black text-3xl font-sans mt-5'>
                <b>Get your Tonda App</b>
            </h1>
            <p className='text-black m-2 text-center text-md font-sans p-1'>
                Get the latest events and fun activities happening in the kampala on Tonda.
            </p>
          <div className="flex flex-col justify-center items-center space-x-2 ">
            <a href="https://play.google.com/store/apps/details?id=com.tonda.mobile.app"
            className="bg-[#494949]  text-white my-2  px-4 py-2 rounded-lg"
            target='_blank'
            >Download for Android</a>
            <a href="https://play.google.com/store/apps/details?id=com.tonda.mobile.app"
            className="bg-[#494949] text-white mt-2 px-4 mx-8 py-2 rounded-lg mb-5"
            target='_blank'
            >Download for iOS
              {/* <img src={} alt="" /> */}
              </a> 
          </div>
        </div>
      
  )
}

export default SmallCard