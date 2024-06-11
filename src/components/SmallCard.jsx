import React from 'react'
import ps from"../images/ps.png"
import as from"../images/as.png"
function SmallCard() {
  const handleAppStoreClick = (e) => {
    e.preventDefault();
    const iosUrl = 'itms-apps://apps.apple.com/ug/app/tonda/id6502898505'; // Replace with your App Store link
    const webUrl = 'https://apps.apple.com/ug/app/tonda/id6502898505'; // Replace with your App Store link

    if (navigator.userAgent.match(/iPhone|iPad|iPod/)) {
      window.location.href = iosUrl;
    } else {
      window.open(webUrl, '_blank');
    }
  };
  const handlePlayStoreClick = (e) => {
    e.preventDefault();
    const androidUrl = 'market://details?id=com.tonda.mobile.app'; // Replace with your Play Store package name
    const webUrl = 'https://play.google.com/store/apps/details?id=com.tonda.mobile.app'; // Replace with your Play Store web link

    if (navigator.userAgent.match(/Android/)) {
      window.location.href = androidUrl;
    } else {
      window.open(webUrl, '_blank');
    }
  };
  return (

        <div className="bg-card  rounded-xl shadow-lg flex flex-col h-full items-center  w-auto md:flex-1">
            <h1 className='text-black text-3xl font-sans mt-5'>
                <b>Get your Tonda App</b>
            </h1>
            <p className='text-black m-2 text-center text-md font-sans p-1'>
                Get the latest events and fun activities happening in the kampala on Tonda.
            </p>
          <div className="flex flex-col justify-center items-center  ">
            <a href="https://apps.apple.com/ug/app/tonda/id6502898505"
            className=" text-white h-2/4 w-2/4 -m-3 rounded-lg"
            onClick={handleAppStoreClick}
            ><img  src={as} alt="" /></a>
            <a href="https://play.google.com/store/apps/details?id=com.tonda.mobile.app"
            onClick={handlePlayStoreClick}
            className=" text-white h-1/2 w-1/2 -m-3 rounded-lg mb-2"
            >
              <img src={ps} alt="" />
              </a> 
          </div>
        </div>
      
  )
}
//className="bg-[#494949]  text-white my-2  px-4 py-2 rounded-lg"
//className="bg-[#494949] text-white mt-2 px-4 mx-8 py-2 rounded-lg mb-5"
export default SmallCard