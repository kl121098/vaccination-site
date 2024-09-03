import React from 'react';
import feedback1 from '../assets/feedback1.png';
import human1 from '../assets/human1.png';
import human2 from '../assets/human2.png';
import human3 from '../assets/human3.png';


const PatientFeedback = () => {
  return (
    <section
      className="bg-gradient-to-r from-blue-100 to-white text-black py-16 mb-6"
      style={{ backgroundImage: `url(${feedback1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="container mx-auto px-4 text-center">
        <h3 className="text-sm uppercase text-[#17C2EC] font-bold mb-4">Feedback</h3>
        <h2 className="text-3xl font-bold mb-6">What our Patients Think</h2>
        <p className="text-gray-600 mb-12">
          Adipiscing nec etiam tortor elit quisque. Arcu aliquet convallis aenean eu velit. Mi vestibulum, ullamcorper venenatis imperdiet augue arcu donec neque.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
  <div className="p-6 bg-white bg-opacity-80 rounded-lg shadow-lg transition-all duration-300 group hover:bg-[#17C2EC]">
    <div className="flex items-center mb-4">
      <img src={human1} alt="Patient 1" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">Oyindamola Maja</h4>
        <p className="text-gray-500 group-hover:text-gray-200 transition-colors duration-300">Badagry, Lagos</p>
      </div>
    </div>
    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
      “Been stressing about a close centre to get the <span className="group-hover:text-white">covid-19</span> vaccine, until I tried Vaccination.ng.”
    </p>
  </div>

  <div className="p-6 bg-white bg-opacity-80 rounded-lg shadow-lg transition-all duration-300 group hover:bg-[#17C2EC]">
    <div className="flex items-center mb-4">
      <img src={human2} alt="Patient 2" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">Okeowo Lekan</h4>
        <p className="text-gray-500 group-hover:text-gray-200 transition-colors duration-300">Ikeja, Lagos</p>
      </div>
    </div>
    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
      “Got my vaccine very close to my house. Was very easy scheduling an appointment.”
    </p>
  </div>

  <div className="p-6 bg-white bg-opacity-80 rounded-lg shadow-lg transition-all duration-300 group hover:bg-[#17C2EC]">
    <div className="flex items-center mb-4">
      <img src={human3} alt="Patient 3" className="w-12 h-12 rounded-full mr-4" />
      <div>
        <h4 className="text-lg font-semibold group-hover:text-white transition-colors duration-300">Kafaru Temitope</h4>
        <p className="text-gray-500 group-hover:text-gray-200 transition-colors duration-300">Obanikoro, Lagos</p>
      </div>
    </div>
    <p className="text-gray-600 group-hover:text-white transition-colors duration-300">
      “Been stressing about a close centre to get the <span className="group-hover:text-white">covid-19</span> vaccine, until I tried Vaccination.ng.”
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default PatientFeedback;