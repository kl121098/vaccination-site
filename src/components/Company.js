import React from 'react'
import sec1 from '../assets/sec1.png';
import sec2 from '../assets/sec2.png';
import sec3 from '../assets/sec3.png';
import sec4 from '../assets/sec4.png';


const Company = () => {
  return (
    <div className='flex flex-wrap justify-center gap-6 md:gap-12 lg:gap-24'>
    <div className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center'>
      <img src={sec1} className='object-contain w-full h-full' alt="Image 1"/>
    </div>
    <div className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center'>
      <img src={sec2} className='object-contain w-full h-full' alt="Image 2"/>
    </div>
    <div className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center'>
      <img src={sec3} className='object-contain w-full h-full' alt="Image 3"/>
    </div>
    <div className='w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 flex items-center justify-center'>
      <img src={sec4} className='object-contain w-full h-full' alt="Image 4"/>
    </div>
  </div>
  
  )
}

export default Company