import React from 'react';
import bg3 from '../assets/bg3.png';


const CovidResultForm = () => {
  return (
    <section style={{ backgroundImage: `url(${bg3})` }} className=" text-white py-8">
      <div className="container mx-auto px-4">
        <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-semibold mb-4 text-center bg-gradient-to-r from-gray-700 to-gray-800 text-white p-4 rounded-lg shadow-lg">
  Check your COVID-19 result on our Database
</h3>
          <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="text"
              placeholder="Okeowo"
              className="bg-gray-900 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#17C2EC] w-full md:w-auto"
            />
            <input
              type="text"
              placeholder="NIK Number"
              className="bg-gray-900 text-white placeholder-gray-400 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#17C2EC] w-full md:w-auto"
            />
            <button className="bg-transparent border-2 border-[#17C2EC] text-[#17C2EC] hover:bg-[#17C2EC] hover:text-white px-6 py-2 rounded-md w-full md:w-auto">
              Check
            </button>
          </form>
          <p className="text-center bg-gradient-to-r from-gray-800 to-gray-800 text-[#17C2EC] hover:underline mt-6">
            Need a certificate for your COVID-19 result? Please click <a href="#" className="text-[#17C2EC] hover:underline">here</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default CovidResultForm;