import React from 'react'
import HomeLg from './Homelg.jsx'
import HomeSm from './HomeSm.jsx'
function Home() {
  return (
    
    <div>
      <div className='hidden md:block'>
        <HomeLg/>
      </div>
      <div className='block md:hidden'>
        <HomeSm/>
      </div>
    </div>
  )
}

export default Home