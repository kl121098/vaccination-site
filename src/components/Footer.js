import React from 'react';
import logo from '../assets/header.png';
import logo1 from '../assets/facebook.png';
import logo2 from '../assets/twitter.png';
import logo3 from '../assets/youtube.png';
import logo4 from '../assets/instagram.png';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-8">
      <div className="container mx-auto px-4 pt-36">
        <div className="flex flex-col items-center space-y-4 md:space-y-0 md:space-x-24 md:flex-row md:justify-between">
          <img src={logo} alt="Vaccination.ng" className="h-8 mt-4" />
          
          <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 mt-4">
            <a href="#" className="text-white hover:text-white hover:font-extrabold transition-colors duration-300">
              Home
            </a>
            <a href="#" className="text-white hover:text-white hover:font-extrabold transition-colors duration-300">
              Services
            </a>
            <a href="#" className="text-white hover:text-white hover:font-extrabold transition-colors duration-300">
              Schedule
            </a>
            <a href="#" className="text-white hover:text-white hover:font-extrabold transition-colors duration-300">
              Contact us
            </a>
          </div>

          <div className="flex flex-wrap justify-center space-x-4 mt-4">
            <a href="#" className="hover:underline">
              <img src={logo3} alt="YouTube" className="h-8" />
            </a>
            <a href="#" className="hover:underline">
              <img src={logo4} alt="Instagram" className="h-8" />
            </a>
            <a href="#" className="hover:underline">
              <img src={logo2} alt="Twitter" className="h-8" />
            </a>
            <a href="#" className="hover:underline">
              <img src={logo1} alt="Facebook" className="h-8" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
