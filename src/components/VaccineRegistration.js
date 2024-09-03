import React from 'react';
import vaccineImage from '../assets/register.png';
import bg4 from '../assets/bg4.png';


const VaccineRegistration = () => {
  return (
    <section style={{ backgroundImage: `url(${bg4})` }} className=" text-black py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center">
       <div className="lg:w-1/2 md:w-2/3 w-full p-8 bg-white rounded-lg shadow-lg">
  <h2 className="text-3xl font-bold mb-6">Get your vaccine registration today</h2>
  <form className="space-y-6">
    <div>
      <label className="block font-semibold mb-2" htmlFor="fullName">
        Patient’s Full Name
      </label>
      <input
        id="fullName"
        type="text"
        placeholder="Full name"
        className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
    <div>
      <label className="block font-semibold mb-2" htmlFor="phoneNumber">
        Mobile Number
      </label>
      <p className="text-gray-500 text-sm mb-2">
        Notifications for appointment and reminders will be sent to this provided number
      </p>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-grow flex items-center bg-gray-100 border border-gray-300 rounded-md">
          <span className="px-3 py-3 bg-gray-200 rounded-l-md">🇳🇬</span>
          <input
            id="phoneNumber"
            type="text"
            placeholder="Phone number"
            className="flex-grow p-3 rounded-r-md bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="bg-[#17C2EC] text-white px-6 py-3 rounded-md hover:bg-blue-600 w-full md:w-auto">
          Verify
        </button>
      </div>
    </div>
    <button className="w-full bg-[#17C2EC] text-white py-3 rounded-md hover:bg-blue-600">
      Submit
    </button>
  </form>
  <p className="text-center text-gray-500 mt-4">
    Already registered?{' '}
    <a href="#" className="text-[#17C2EC] hover:underline">
      Check your status
    </a>
  </p>
</div>

        <div className="lg:w-1/3 mt-8 lg:mt-0 lg:ml-8">
          <div className="relative">
            <img src={vaccineImage} alt="COVID-19 Vaccine" className="w-full rounded-lg shadow-lg" />
            <div className="absolute bottom-4 left-4 bg-blue-500 text-white px-4 py-2 rounded-md">
              Verify Status
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VaccineRegistration;
