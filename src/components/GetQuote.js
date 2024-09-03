import React from 'react';

const GetQuote = () => {
  return (
    <div className="flex justify-center transform translate-y-1/2 w-full">
      <div className="bg-[#17C2EC] text-white rounded-xl p-8 shadow-lg w-full max-w-lg">
        <h2 className="text-2xl font-bold text-center mb-4">Get a quote</h2>
        <p className="text-center mb-6">Please do enter your email address below</p>
        <div className="flex items-center bg-white rounded-full overflow-hidden shadow-md">
          <input
            type="email"
            placeholder="lenux.ng@gmail.com"
            className="flex-grow px-4 py-2 text-gray-700 rounded-l-full focus:outline-none"
          />
          <button className="bg-blue-900 px-6 py-2 text-white flex items-center justify-center rounded-r-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-4 9 4z"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;
