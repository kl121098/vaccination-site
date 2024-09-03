import React from 'react';
import sec5 from '../assets/sec5.png';
import sec3a from '../assets/sec3a.png';
import sec3b from '../assets/sec3b.png';
import bg2 from '../assets/bg2.png';


const WhyVaccinate = () => {
  return (
    <section  style={{ backgroundImage: `url(${bg2})` }} className="relative bg-no-repeat bg-cover bg-center text-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-bold">Why get vaccinated today?</h2>
          <p className="text-gray-400 mt-4">
            Magna adipiscing at elit at ornare lectus nibh lorem. Ac, sed ac lorem pellentesque vestibulum risus matti.
            In molestie condimentum malesuada non.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 rounded-lg p-6 relative shadow-lg">
            <div className="mb-4">
              <img src={sec5} alt="Protects your immune system" className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4 text-[#17C2EC]">Protects your immune system against viruses</h3>
            <p className="text-gray-400 mb-6">
              Velit ut consectetur mauris, orci amet, faucibus. Sit turpis fringilla ipsum pretium, dictum. Dolor eget vel nulla lorem ac.
            </p>
            <a href="#" className="text-[#17C2EC] hover:text-[#17C2EC] flex items-center space-x-1">
              <span className='text-[#17C2EC]'>Read More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="bg-transparent border border-gray-700 rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <img src={sec3a} alt="Minimize the spread" className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Minimize the spread of the Virus</h3>
            <p className="text-gray-400 mb-6">
              Velit ut consectetur mauris, orci amet, faucibus.
            </p>
            <a href="#" className="text-[#17C2EC] hover:text-[#17C2EC] flex items-center space-x-1">
              <span>Read More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
          <div className="bg-transparent border border-gray-700 rounded-lg p-6 shadow-lg">
            <div className="mb-4">
              <img src={sec3b} alt="Protect yourself" className="h-12 w-12" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Protect yourself</h3>
            <p className="text-gray-400 mb-6">
              Velit ut consectetur mauris, orci amet, faucibus.
            </p>
            <a href="#" className="text-[#17C2EC] hover:text-[#17C2EC] flex items-center space-x-1">
              <span>Read More</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyVaccinate;