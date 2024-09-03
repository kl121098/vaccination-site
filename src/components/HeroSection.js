import React from 'react';
import bg1 from '../assets/bg1.png';
import sec9 from '../assets/sec9.png';
import sec7 from '../assets/sec7.png';
import sec6 from '../assets/sec6.png';
import sec5 from '../assets/sec5.png';
import sec8 from '../assets/sec8.png';

// Import other images as needed


const Hero = () => {
  return (
    <>
     <div
            className="relative bg-no-repeat bg-cover bg-center text-white"
            style={{ backgroundImage: `url(${bg1})` }}
        >
    <section className="flex flex-col md:flex-row items-center justify-around p-8 text-white">
      <div className="max-w-lg text-center md:text-left">
        <h4 className='text-[#17C2EC] text-base'>Get Vaccinated. Boost your Immune System</h4>
        <h1 className="text-4xl font-bold mt-4 mb-4">COVID-19 Vaccination Got Easier With,<span className='text-[#17C2EC]'>Vaccination.ng</span></h1>
        <p className="mb-6">Vaccination.ng will help you find the nearest centre for vaccination, in all 36 states in Nigeria.</p>
        <div className="flex justify-center md:justify-start space-x-4">
          <button className="bg-[#17C2EC] px-4 py-2 rounded hover:bg-teal-400 transition">Get Vaccine</button>
          <button className="bg-[#0B153C] border border-[#17C2EC] px-4 py-2 rounded hover:bg-gray-600 transition">Help Centre</button>
        </div>
      </div>
      <div className="mt-6 md:mt-0">
        <img src={sec9} alt="Vaccine" className="max-w-xs md:max-w-md" />
      </div>
    </section>

    <div className="bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 p-6 rounded-lg shadow-lg max-w-[1500px] mx-auto mt-8">
  <div className='flex space-x-4'>
    <img src={sec8} className='h-6 w-6'/>
  <h2 className="text-white text-lg font-semibold mb-4">Schedule your Vaccination</h2>
  </div>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
 
    <div className="flex items-center space-x-2">
     <img src={sec7} />
     <div>
      <h2 className='text-gray-500'>Location</h2>
      <p className="text-white">Ikeja Lagos, Nigeria</p>
      </div>
    </div>
 
    <div className="flex items-center space-x-2">
    <img src={sec6} />
    <div>
    <h2 className='text-gray-500'>Date</h2>
      <p className="text-white">29 February, 2022</p>
      </div>
    </div>

    <div className="flex items-center space-x-2">
    <img src={sec5} />
    <div>
    <h2 className='text-gray-500'>Vaccine Type</h2>
      <p className="text-white">Mordena</p>
      </div>
    </div>

    <button className=" bg-cyan-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-cyan-500">
      Submit
    </button>
  </div>
</div>

    </div>


    </>
  );
};

export default Hero;