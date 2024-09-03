import React, { useState } from 'react';
import logo from '../assets/header.png';
import bg1 from '../assets/bg1.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="relative bg-no-repeat bg-cover bg-center text-white">
      <div style={{ backgroundImage: `url(${bg1})` }} className=" mx-auto flex justify-around items-center py-4 px-6">
        <div className="flex items-center space-x-40">
          <img src={logo} alt="Vaccination.ng" className="h-8" />
          <nav className="hidden md:flex space-x-16">
  <a href="/" className="relative text-white hover:text-[#17C2EC] hover:font-bold font-bold ">
    Home
    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#17C2EC] rounded-full"></span>
  </a>
  <a href="/services" className="relative text-white hover:text-[#17C2EC] hover:font-bold">
    Services
    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#17C2EC] rounded-full opacity-0 hover:opacity-100"></span>
  </a>
  <a href="/schedule" className="relative text-white hover:text-[#17C2EC] hover:font-bold">
    Schedule
    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#17C2EC] rounded-full opacity-0 hover:opacity-100"></span>
  </a>
  <a href="/contact" className="relative text-white hover:text-[#17C2EC] hover:font-bold">
    Contact us
    <span className="absolute inset-x-0 bottom-0 h-1 bg-[#17C2EC] rounded-full opacity-0 hover:opacity-100"></span>
  </a>
</nav>

        </div>
        <div className="hidden md:block">
          <button className="bg-gray-600 hover:text-[#17C2EC] hover:border border-[#17C2EC] text-[#17C2EC] py-2 px-4 rounded">
            Check Status
          </button>
        </div>
        <div className="md:hidden">
          <button className="text-white focus:outline-none" onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-blue-900 text-white py-4">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="hover:text-[#17C2EC]">Home</a>
            <a href="#" className="hover:text-[#17C2EC]">Services</a>
            <a href="#" className="hover:text-[#17C2EC]">Schedule</a>
            <a href="#" className="hover:text-[#17C2EC]">Contact us</a>
            <button className="bg-[#] hover:bg-[#17C2EC] text-white py-2 px-4 rounded">
              Check Status
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;