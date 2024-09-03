import React from 'react';
import sym1 from '../assets/sym1.png'; 
import sym2 from '../assets/sym2.png';
import sym3 from '../assets/sym3.png';

const CovidSymptoms = () => {
  return (
    <section style={{ backgroundImage: `url(${sym3})` }} className=" text-white py-16">
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-lg uppercase mb-4">Covid-19 Prevention</h3>
        <h2 className="text-3xl font-bold mb-6"><span className='text-[#17C2EC]'>COVID-19</span> Symptoms</h2>
        <p className="text-gray-300 mb-12">
          Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.
        </p>
        <div className="relative flex flex-col lg:flex-row items-center justify-center">
          <div className="absolute inset-0 flex justify-between items-center pointer-events-none">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <img src={sym2} alt="High Fever" className="w-16 h-16" />
                <span className="bg-gray-700 p-3 text-[#17C2EC] rounded-lg">High Fever</span>
              </div>
              <div className="flex items-center space-x-4">
                <img src={sym2} alt="Loss sense of smell" className="w-16 h-16" />
                <span className="bg-gray-700 p-3 text-[#17C2EC] rounded-lg">Loss sense of smell</span>
              </div>
              <div className="flex items-center space-x-4">
                <img src={sym2} alt="Dry cough" className="w-16 h-16" />
                <span className="bg-gray-700 p-3 text-[#17C2EC] rounded-lg">Dry cough</span>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
              <img src={sym2} alt="Loss of sense of taste" className="w-16 h-16" />
                <span className="bg-gray-700  p-3 text-[#17C2EC] rounded-lg">Loss of sense of taste</span>
              </div>
              <div className="flex items-center space-x-4">
              <img src={sym2} alt="Difficulty Breathing" className="w-16 h-16" />
                <span className="bg-gray-700 p-3 text-[#17C2EC] rounded-lg">Difficulty Breathing</span>
              </div>
              <div className="flex items-center space-x-4">
              <img src={sym2} alt="Sore Throat" className="w-16 h-16" />
                <span className="bg-gray-700 p-3 text-[#17C2EC] rounded-lg">Sore Throat</span>
              </div>
            </div>
          </div>
          <div className="relative z-10 mt-12 lg:mt-0">
            <img src={sym1} alt="Person with symptoms" className="w-72 lg:w-96 mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CovidSymptoms;