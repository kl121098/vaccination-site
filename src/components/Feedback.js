import React from 'react';

const Feedback = () => {
  return (
    <section className="p-8 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">What our Patients Think</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>"Been stressing about a close centre to get the covid-19 vaccine, until I tried Vaccination.ng!"</p>
            <p className="font-bold mt-2">Oyindamola Maja</p>
            <p>Lagos, Lagos</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>"Got my vaccine very close to my house, thanks to Vaccination.ng."</p>
            <p className="font-bold mt-2">Okeowo Lekan</p>
            <p>Ikeja, Lagos</p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <p>"Been stressing about a close centre to get the covid-19 vaccine, until I tried Vaccination.ng!"</p>
            <p className="font-bold mt-2">Kafaru Temitope</p>
            <p>Oshodi, Lagos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;