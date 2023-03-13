import React from 'react'
import Header from '../../Header/Header'
import './Home.css'



export default function Home() {

  return (
    <>
    <div>
    <Header />
  <div className='posterGrid'>
    <div className='inside1'>
    <div className='poster1'>
      <div className='Caption'>
      <div className='topCaption'>Step into Golden Hour</div>
      <div className='bottomCaption'>TRAVEL | 7th March 2023</div>
      </div>
      </div>
    <div className='poster2'>
      <div className='Caption'>
    <div className='topCaption'>Escape the reality</div>
      <div className='bottomCaption'>READ | 7th March 2023</div>
      </div>
    </div>
    </div>
    <div className='inside2'>
    <div className='poster3'>
      <div className='Caption'>
    <div className='topCaption'>Treat your sight with green</div>
      <div className='bottomCaption'>PLANT | 7th March 2023</div>
      </div>
    </div>
    <div className='poster4'>
      <div className='Caption'>
    <div className='topCaption'>Paws of Love</div>
      <div className='bottomCaption'>PET | 7th March 2023</div>
      </div>
    </div>
    </div>
    </div>
    </div>
    

    </>
  )
}
