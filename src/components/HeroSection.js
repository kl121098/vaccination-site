import React from 'react';
import bg1 from '../assets/bg1.png';
import sec9 from '../assets/sec9.png';
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
  <h2 className="text-white text-lg font-semibold mb-4">Schedule your Vaccination</h2>
  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
 
    <div className="flex items-center space-x-2">
      <svg className="w-6 h-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10l1.5 1.5 2-2m.5 2h1l4 4m5-5l4 4m1-9v2m-1 3v1l-2 2m-3-3h-1l-4-4m0 0L5 9l-2-2M5 7H4a1 1 0 00-.8.4l-.6.8c-.1.2-.3.4-.4.7v1l.4.8.8.4H3v1a1 1 0 01-1 1H1m2-7h1" />
      </svg>
      <p className="text-white">Ikeja Lagos, Nigeria</p>
    </div>
 
    <div className="flex items-center space-x-2">
      <svg className="w-6 h-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7v3M8 13h.01M12 7v3m0 2h.01M16 7v3m0 2h.01M12 16a9 9 0 100-18 9 9 0 000 18z" />
      </svg>
      <p className="text-white">29 February, 2022</p>
    </div>

    <div className="flex items-center space-x-2">
      <svg className="w-6 h-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.333-1.333 4-2.667 4 1.333V13.5a2 2 0 01-1.5 1.96M10 12v-1.5c0-1.333 1.333-2.667 4-1.333V13.5a2 2 0 01-2 1.96M7 12v.333m4 7.75V21m0-6v5.75m0 0H9.25M12 19.5H8m8 1.5v1m-8-1h-.75M12 21h3.75" />
      </svg>
      <p className="text-white">Mordena</p>
    </div>

    <button className="bg-cyan-400 text-white px-4 py-2 rounded-md shadow-md hover:bg-cyan-500">
      Submit
    </button>
  </div>
</div>

    </div>


    </>
  );
};

export default Hero;